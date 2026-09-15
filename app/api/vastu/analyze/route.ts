import { NextRequest, NextResponse } from "next/server"
import { getAuth } from "@/lib/middleware"
import { analyzeVastu, generateVastuReport } from "@/lib/astrology/vastu"
import { prisma } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const auth = await getAuth(request)
    const body = await request.json()
    const { roomType, direction } = body

    if (!roomType || !direction) {
      return NextResponse.json({ error: "कमरे का प्रकार और दिशा दोनों आवश्यक हैं।" }, { status: 400 })
    }

    const vastuResult = analyzeVastu(roomType, direction)
    const fullReport = generateVastuReport(vastuResult)

    let savedId = "vastu_" + Date.now()
    if (auth) {
      try {
        const saved = await prisma.vastuAnalysis.create({
          data: {
            userId: auth.userId,
            roomType,
            direction,
            colors: [vastuResult.element],
            recommendations: vastuResult.recommendations,
            positiveAspects: vastuResult.positives,
            negativeAspects: vastuResult.negatives,
            overallScore: Math.round(vastuResult.score),
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
      analysis: {
        id: savedId,
        ...vastuResult,
        fullReport
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "वास्तु विश्लेषण विफल रहा" }, { status: 500 })
  }
}
