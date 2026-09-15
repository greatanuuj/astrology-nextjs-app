import { NextRequest, NextResponse } from "next/server"
import { getAuth } from "@/lib/middleware"
import { getRandomCards, generateTarotInterpretation } from "@/lib/astrology/tarot"
import { prisma } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const auth = await getAuth(request)
    const body = await request.json()
    const { spreadType = "THREE_CARD", question } = body

    const cardCount = spreadType === "SINGLE" ? 1 : spreadType === "THREE_CARD" ? 3 : 10
    const draws = getRandomCards(cardCount)
    const interpretation = generateTarotInterpretation(draws, spreadType, question)

    let savedId = "tarot_" + Date.now()
    if (auth) {
      try {
        const saved = await prisma.tarotReading.create({
          data: {
            userId: auth.userId,
            spreadType,
            question: question || "सामान्य प्रश्न",
            cards: draws.map(d => d.card.name),
            reversedCards: draws.map(d => d.isReversed),
            interpretation: interpretation.fullReport,
          }
        })
        savedId = saved.id
      } catch (e) {
        console.warn("DB offline fallback")
      }
    }

    return NextResponse.json({
      success: true,
      reading: {
        id: savedId,
        ...interpretation
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "टैरो रीडिंग विफल रही" }, { status: 500 })
  }
}
