'use server'

import { FormDataSchema } from '@/lib/schema'

export async function addEntry(state: any, data: FormData) {
  const result = FormDataSchema.safeParse({
    name: data.get('name'),
    message: data.get('message')
  })

  await new Promise(resolve => setTimeout(resolve, 1000))

  if (result.success) {
    return { data: result.data }
  }

  // TODO: perform desired action / mutation

  if (result.error) {
    return { error: result.error.format() }
  }
}
