// Email Utility - Ready for SendGrid, Resend, or AWS SES in production
export async function sendVerificationEmail(email: string, token: string) {
  console.log(`[Email Service] Sending verification email to ${email} with token ${token}`)
  return true
}

export async function send2FAEmail(email: string, code: string) {
  console.log(`[Email Service] Sending 2FA code ${code} to ${email}`)
  return true
}

export async function sendResetEmail(email: string, token: string) {
  console.log(`[Email Service] Sending password reset link to ${email}`)
  return true
}
