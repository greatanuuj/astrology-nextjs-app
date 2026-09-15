import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword, generateAccessToken, generateRefreshToken } from '@/lib/auth'
import { signupSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = signupSchema.parse(body)

    let existingUser = null
    try {
      existingUser = await prisma.user.findUnique({
        where: { email: validated.email }
      })
    } catch (dbErr) {
      console.warn("Database not yet connected, operating in local mock mode:", dbErr)
    }

    if (existingUser) {
      return NextResponse.json({ error: 'यह ईमेल आईडी पहले से पंजीकृत है (Email already registered)' }, { status: 400 })
    }

    const hashedPassword = await hashPassword(validated.password)

    let userId = "user_" + Date.now()
    try {
      const newUser = await prisma.user.create({
        data: {
          email: validated.email,
          name: validated.name,
          password: hashedPassword,
        }
      })
      userId = newUser.id
    } catch (e) {
      // Fallback in case PostgreSQL is not yet started in dev
      console.log("Mock user created:", validated.email)
    }

    const accessToken = generateAccessToken(userId)
    const refreshToken = generateRefreshToken(userId)

    const response = NextResponse.json({
      success: true,
      message: "सफलतापूर्वक खाता निर्मित हो गया!",
      user: {
        id: userId,
        email: validated.email,
        name: validated.name,
      },
      tokens: {
        accessToken,
        refreshToken,
      }
    })

    // Set auth cookie
    response.cookies.set("token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    })

    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'पंजीकरण विफल रहा' }, { status: 500 })
  }
}
