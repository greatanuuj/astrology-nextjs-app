import { NextRequest, NextResponse } from 'next/server'
import { verifyAccessToken } from './auth'

export async function getAuth(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // Also check for optional cookie token
    const cookieToken = request.cookies.get('token')?.value
    if (cookieToken) {
      return verifyAccessToken(cookieToken)
    }
    return null
  }
  
  const token = authHeader.substring(7)
  const decoded = verifyAccessToken(token)
  
  return decoded
}

export function withAuth(handler: (request: NextRequest, auth: { userId: string }) => Promise<NextResponse>) {
  return async (request: NextRequest) => {
    const auth = await getAuth(request)
    
    if (!auth) {
      return NextResponse.json({ error: 'अनधिकृत: कृपया पहले लॉगिन करें (Unauthorized)' }, { status: 401 })
    }
    
    return handler(request, auth)
  }
}
