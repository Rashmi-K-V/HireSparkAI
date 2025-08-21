"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState'
import axios from 'axios'

function AIChat() {
  const [userInput, setUserInput] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const onSend = async() =>{
    setLoading(true);
    const result = await axios.post('/api/ai-career-chat-agent', {
      userInput: userInput  
    });  
    console.log(result.data);
    setLoading(false);
  }

  return (
    <div className='px-10 md:px-24 lg:px-36 xl:px-48 '>
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md gap-3">
        <div className="">
          <h2 className='font-bold text-2xl'>AI-Powered Career Guidance</h2>
          <p>Navigate Your Future with AI Precision</p>
        </div>
        <Button className='bg-cyan-800 font-bold'>New Chat</Button>
      </div>
      <div className="flex flex-col h-[70vh]">
        <div className="mt-5">
          <EmptyState selectedQuestion={(question:string)=>setUserInput(question)}/>
          
        </div>
        <div className="flex-1">
          {/* message list */}
        </div>
        <div className="flex justify-between items-center gap-4 p-4 bg-white rounded-lg shadow-md mt-4">
          {/* input list */}
          <Input placeholder='Type Here' value={userInput} onChange={(event)=>setUserInput(event.target.value)}/>
          <Button className='bg-cyan-800' onClick={onSend} disabled={loading} ><Send/></Button>
        </div>
      </div>
    </div>
  )
}

export default AIChat