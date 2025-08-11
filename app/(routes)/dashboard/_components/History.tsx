"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'

function History() {

  const [userHistory, setUserHistory] = useState([]);

  return (
    <div className='mt-5 p-5 border rounded-xl'>
      <h2 className='font-bold text-lg'>Previous History</h2>
      <p className='text-gray-700'>Find your previous work Here!</p>
      {userHistory?.length == 0 && 
      <div className='flex items-center justify-center flex-col mt-6 text-gray-900'>
        <Image src = {'/bulb.png'} alt = 'bulb' width={50} height={50}/>
        <h2>Previous work not found</h2>
        <Button className='mt-5'>Explore AI Tools</Button>

      </div>
      }
    </div>
  )
}

export default History