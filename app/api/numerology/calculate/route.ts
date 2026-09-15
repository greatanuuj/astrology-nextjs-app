import { NextRequest, NextResponse } from "next/server"
import { getAuth } from "@/lib/middleware"
import { calculateNumerology, generateNumerologyReport } from "@/lib/astrology/numerology"
import { prisma } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const auth = await getAuth(request)
    const body = await request.json()
    const { fullName, dateOfBirth } = body

    if (!fullName || !dateOfBirth) {
      return NextResponse.json({ error: "नाम और जन्म तारीख दोनों आवश्यक हैं।" }, { status: 400 })
    }

    const dob = new Date(dateOfBirth)
    const numResult = calculateNumerology(fullName, dob)
    const fullReport = generateNumerologyReport(fullName, dob)

    let savedId = "num_" + Date.now()
    if (auth) {
      try {
        const saved = await prisma.numerology.create({
          data: {
            userId: auth.userId,
            fullName,
            dateOfBirth: dob,
            lifePathNum: numResult.lifePathNum,
            destinyNum: numResult.destinyNum,
            soulUrgeNum: numResult.soulUrgeNum,
            personalityNum: numResult.personalityNum,
            expressionNum: numResult.expressionNum,
            lifePathDesc: numResult.lifePathDesc,
            destinyDesc: numResult.destinyDesc,
            soulUrgeDesc: numResult.soulUrgeDesc,
            personalityDesc: numResult.personalityDesc,
            expressionDesc: numResult.expressionDesc,
            luckyNumbers: numResult.luckyNumbers,
            luckyColors: numResult.luckyColors,
            luckyDays: numResult.luckyDays,
            fullReport,
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
        ...numResult,
        fullReport
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "अंकशास्त्र गणना विफल रही" }, { status: 500 })
  }
}
