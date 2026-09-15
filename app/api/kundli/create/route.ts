import { NextRequest, NextResponse } from "next/server"
import { getAuth } from "@/lib/middleware"
import { generateFullKundli } from "@/lib/astrology/kundli"
import { prisma } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const auth = await getAuth(request)
    const body = await request.json()
    const { name, dateOfBirth, timeOfBirth, placeOfBirth, latitude, longitude, timezoneOffsetHours } = body

    if (!dateOfBirth || !timeOfBirth) {
      return NextResponse.json({ error: "जन्म तारीख और समय आवश्यक हैं।" }, { status: 400 })
    }

    const dob = new Date(dateOfBirth)
    const kundliResult = generateFullKundli({
      name: name || "जातक",
      dateOfBirth: dob,
      timeOfBirth,
      placeOfBirth: placeOfBirth || "नई दिल्ली",
      latitude: latitude ? parseFloat(latitude) : 28.6139,
      longitude: longitude ? parseFloat(longitude) : 77.2090,
      timezoneOffsetHours: timezoneOffsetHours ? parseFloat(timezoneOffsetHours) : 5.5
    })

    let savedId = "kundli_" + Date.now()
    if (auth) {
      try {
        const saved = await prisma.kundli.create({
          data: {
            userId: auth.userId,
            personName: name || "जातक",
            dateOfBirth: dob,
            timeOfBirth,
            placeOfBirth: placeOfBirth || "नई दिल्ली",
            latitude: latitude ? parseFloat(latitude) : 28.6139,
            longitude: longitude ? parseFloat(longitude) : 77.2090,
            rashi: kundliResult.rashi,
            nakshatra: kundliResult.nakshatra,
            nakshatra_pada: kundliResult.nakshatra_pada,
            ascendant: kundliResult.ascendant,
            sun: kundliResult.sun,
            moon: kundliResult.moon,
            mars: kundliResult.mars,
            mercury: kundliResult.mercury,
            jupiter: kundliResult.jupiter,
            venus: kundliResult.venus,
            saturn: kundliResult.saturn,
            rahu: kundliResult.rahu,
            ketu: kundliResult.ketu,
            currentDasha: kundliResult.currentDasha,
            dashaStartDate: kundliResult.dashaStartDate,
            dashaEndDate: kundliResult.dashaEndDate,
            mangalDosha: kundliResult.mangalDosha,
            summary: kundliResult.summary,
            fullReport: kundliResult.fullReport,
          }
        })
        savedId = saved.id
      } catch (e) {
        console.warn("Could not save to DB (offline mode)")
      }
    }

    return NextResponse.json({
      success: true,
      kundli: {
        id: savedId,
        ...kundliResult
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "कुंडली गणना विफल रही" }, { status: 500 })
  }
}
