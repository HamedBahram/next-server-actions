'use client'

import { useFormState } from 'react-dom'
import { addEntry } from './_actions'

export default function Form() {
  const [state, formAction] = useFormState(addEntry, null)

  return (
    <section className='flex gap-6'>
      <form
        action={formAction}
        className='flex flex-1 flex-col gap-4 sm:w-1/2'
        key={Math.random()}
      >
        <input className='rounded-lg' name='name' placeholder='name' />
        <input className='rounded-lg' name='message' placeholder='message' />
        <button className='rounded-lg bg-black py-2 text-white'>Submit</button>
      </form>

      <div className='flex-1 rounded-lg bg-cyan-600 p-8 text-white'>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </section>
  )
}
