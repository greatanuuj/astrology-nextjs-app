import { z } from 'zod'

export const signupSchema = z.object({
  email: z.string().email('मान्य ईमेल आईडी दर्ज करें (Invalid email)'),
  password: z.string().min(6, 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए'),
  name: z.string().min(2, 'कृपया अपना नाम दर्ज करें'),
})

export const loginSchema = z.object({
  email: z.string().email('मान्य ईमेल आईडी दर्ज करें'),
  password: z.string().min(1, 'पासवर्ड आवश्यक है'),
})

export const kundliSchema = z.object({
  name: z.string().optional(),
  dateOfBirth: z.string(),
  timeOfBirth: z.string(),
  placeOfBirth: z.string(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  timezoneOffsetHours: z.number().optional().default(5.5),
})

export const numerologySchema = z.object({
  fullName: z.string().min(2, 'कृपया पूरा नाम दर्ज करें'),
  dateOfBirth: z.string(),
})

export const vastuSchema = z.object({
  roomType: z.string().min(1, 'कृपया कमरे का प्रकार चुनें'),
  direction: z.string().min(1, 'कृपया दिशा चुनें'),
})

export const rashifalSchema = z.object({
  rashi: z.string().min(1, 'कृपया राशि चुनें'),
  type: z.string().optional().default('daily'),
})

export const compatibilitySchema = z.object({
  person1Name: z.string().optional().default('वर (Groom)'),
  person1DOB: z.string(),
  person2Name: z.string().min(1, 'कृपया दूसरे व्यक्ति का नाम दर्ज करें'),
  person2DOB: z.string(),
})
