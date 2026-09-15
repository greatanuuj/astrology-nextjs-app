import { NextRequest, NextResponse } from "next/server"
import { getAuth } from "@/lib/middleware"
import { calculateCompatibility, generateCompatibilityReport } from "@/lib/astrology/compatibility"
import { prisma } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const auth = await getAuth(request)
    const body = await request.json()
    const { person1Name = "वर", person1DOB, person2Name = "कन्या", person2DOB } = body

    if (!person1DOB || !person2DOB) {
      return NextResponse.json({ error: "दोनों व्यक्तियों की जन्म तारीख आवश्यक है।" }, { status: 400 })
    }

    const d1 = new Date(person1DOB)
    const d2 = new Date(person2DOB)

    const matchResult = calculateCompatibility(d1, d2)
    const fullReport = generateCompatibilityReport(person1Name, person2Name, matchResult)

    let savedId = "compat_" + Date.now()
    if (auth) {
      try {
        const saved = await prisma.compatibility.create({
          data: {
            person1Id: auth.userId,
            person1Name,
            person2Name,
            person2DOB: d2,
            varnaGuna: matchResult.varnaGuna,
            vasyaGuna: matchResult.vasyaGuna,
            taraGuna: matchResult.taraGuna,
            yoniGuna: matchResult.yoniGuna,
            grahaMaitri: matchResult.grahaMaitri,
            ganaGuna: matchResult.ganaGuna,
            bhakutGuna: matchResult.bhakutGuna,
            nadiGuna: matchResult.nadiGuna,
            totalScore: matchResult.totalScore,
            compatibility: matchResult.compatibility,
            prediction: fullReport,
          }
        })
        savedId = saved.id
      } catch (e) {
        console.warn("DB offline fallback")
      }
    }

    return NextResponse.json({
      success: true,
      result: {
        id: savedId,
        person1Name,
        person2Name,
        ...matchResult,
        fullReport
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "कुंडली मिलान गणना विफल रही" }, { status: 500 })
  }
}
