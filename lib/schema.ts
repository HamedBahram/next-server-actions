import { z } from 'zod'

export const FormDataSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  message: z.string().min(1, 'Message is required')
})
