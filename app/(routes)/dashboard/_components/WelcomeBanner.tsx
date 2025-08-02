import { Button } from '@/components/ui/button'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='p-5 bg-gradient-to-tr from-teal-500 to-indigo-500  rounded-xl shadow-lg'>
      <h2 className='font-bold text-2xl text-white'>AI-Powered Career Coach</h2>
        <p className='text-white'>Your smart companion for professional growth ensuring you're prepared to stand out in every application—saving time while maximizing impact.
        </p>
        <Button variant={'outline'} className='mt-3 font-bold text-slate-700'>Let's Get Started</Button>

      </div>
  )
}

export default WelcomeBanner