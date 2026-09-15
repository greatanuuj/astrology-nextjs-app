import { NextRequest, NextResponse } from "next/server"
import { getAuth } from "@/lib/middleware"
import { generateRashifal, generateRashifalReport } from "@/lib/astrology/rashifal"
import { prisma } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const auth = await getAuth(request)
    const body = await request.json()
    const { rashi = "Aries", type = "daily" } = body

    const result = generateRashifal(rashi)
    const fullReport = generateRashifalReport(result)

    let savedId = "rashifal_" + Date.now()
    if (auth) {
      try {
        const saved = await prisma.rashifal.create({
          data: {
            userId: auth.userId,
            rashi: result.rashi,
            predictionDate: new Date(),
            predictionType: type,
            career: result.career,
            finance: result.finance,
            health: result.health,
            relationships: result.relationships,
            personal: result.personal,
            luckyColor: result.luckyColor,
            luckyNumber: result.luckyNumber,
            luckyDay: result.luckyDay,
            overallPred: result.overallPred,
          }
        })
        savedId = saved.id
      } catch (e) {
        console.warn("DB offline fallback")
      }
    }

    return NextResponse.json({
      success: true,
      rashifal: {
        id: savedId,
        ...result,
        fullReport
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "राशिफल निर्माण विफल रहा" }, { status: 500 })
  }
}
