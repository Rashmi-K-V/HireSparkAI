"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoaderCircle, Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import EmptyState from '../_components/EmptyState'
import axios from 'axios'
import { useParams } from 'next/navigation'
import uuid4 from 'uuid4'
import { useRouter } from 'next/navigation';
type messages = {
  content:string,
  role:string,
  type:string
}

function AIChat() {
  const [userInput, setUserInput] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState<any[]>([]); 
  const router = useRouter();
  const {chatid}:any = useParams();
  console.log(chatid);

  useEffect(()=>{
    chatid && getMessageList();
  },[chatid])

  const getMessageList = async() =>{
    const result = await axios.get('/api/history?recordId='+chatid);
    console.log(result.data);

    setMessageList(result?.data?.content);  // ✅ set messages
    // setMessageList(result?.data?.content ? []);
    
  }

  const onSend = async() =>{
    setLoading(true);
    setMessageList(prev => [...prev,{
      content: userInput,
      role: 'user',
      type: 'text'
    }] )

    setUserInput('');

    const result = await axios.post('/api/ai-career-chat-agent', {
      userInput: userInput  
    });  
    console.log(result.data);

    setMessageList(prev => [...prev,result.data] )

    setLoading(false);
  }
  console.log(messageList);

  useEffect(() => {
    
      messageList.length > 0 && updateMessageList();
    
  }, [messageList]);


  const updateMessageList = async () => {
    const result = await axios.put('/api/history', {
      content: messageList,
      recordId: chatid
    });
    console.log(result);
  }

  const onNewChat = async () => {
      const id = uuid4(); // ✅ generate here, only when clicked
  
      // create new session id for the user
      const result = await axios.post('/api/history', {
        recordId: id,
        content: [],
      });
  
      console.log(result.data);
      // router.push(`${tool.path}/${id}`); // navigate after saving
      router.replace("/ai-tools/ai-chat/" + id)
    };
  

  return (
    <div className='px-10 md:px-24 lg:px-36 xl:px-48 overflow-auto h-[75vh] '>
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md gap-3">
        <div className="">
          <h2 className='font-bold text-2xl'>AI-Powered Career Guidance</h2>
          <p>Navigate Your Future with AI Precision</p>
        </div>
        <Button onClick={onNewChat} className='bg-cyan-800 font-bold'>New Chat</Button>
      </div>
      <div className="flex flex-col h-[70vh]">
        {messageList?.length<=0 && <div className="mt-5">
          <EmptyState selectedQuestion={(question:string)=>setUserInput(question)}/>
        </div>
    }
        <div className="flex-1">
          {/* message list */}
          {messageList?.map((message, index) => (
            <div key = {index}>
            <div className={`flex mb-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg gap-2 ${message.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'} my-4`}>
                  <ReactMarkdown>
                    {message.content}
                  </ReactMarkdown>
                  
                </div>
              </div>
                {loading && messageList?.length -1 == index && <div className='flex justify-start p-3 rou
                nded-lg gap-2 bg-slate-200 text-gray-800 mb-2'>
                   <LoaderCircle className='animate-spin '/>thinking...
                  </div>
                }
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-4 p-4 rounded-lg shadow-lg mt-4 bg-inherit absolute bottom-5 w-[53%]">
          {/* input list */}
          <Input placeholder='Type Here' value={userInput} onChange={(event)=>setUserInput(event.target.value)}/>
          <Button className='bg-cyan-800' onClick={onSend} disabled={loading} ><Send/></Button>
        </div>
      </div>
    </div>
  )
}

export default AIChat