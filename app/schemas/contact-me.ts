import * as z from "zod"

export const contactMeSchema = z.object({
  name: z.string().min(2).max(128),
  email: z.string().email().max(320),
  message: z.string().min(1).max(1000),
})
