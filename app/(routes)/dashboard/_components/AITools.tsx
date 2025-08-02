import { desc } from 'drizzle-orm'
import React from 'react'
import AIToolCard from './AIToolCard'

const aiToolsList = [
  {
    name:'AI Career Guide',
    description: 'Chat with an AI Career Coach to get personalized advice',
    icon:'/chatbot.png',
    button:'Lets Chat ',
    path:'/ai-chat'
  },
  {
    name:'AI Resume Analyzer',
    description: 'Improve your resume with AI insights',
    icon:'/resume_analyzer.png',
    button:'Analyze Now',
    path:'/ai-resume-analyzer'
  },
  {
    name:'AI Roadmap Generator',
    description: 'Build a personalized career roadmap with AI',
    icon:'/roadmap.png',
    button:'Generate Now',
    path:'career-roadmap-generator'
  },
  {
    name:'Cover Letter Generator',
    description: 'Write a compelling cover letter with AI assistance',
    icon:'/cover_letter.png',
    button:'Create Now',
    path:'/cover-letter-generator'
  },
]

function AITools() {
  return (
    <div className='mt-7 p-5 bg-white rounded-lg shadow-md'>
      <h2 className='font-bold text-xl bg-gradient-to-tr from-orange-700 to-amber-800 bg-clip-text text-transparent'>Available AI Tools</h2>
      <p>From Resume to Roadmap—AI That Guides Your Career.</p>

      <div>
        {aiToolsList.map((tool:any,index)=>(
          <AIToolCard tool={tool} key = {index}/>
        ))}
      </div>

    </div>
  )
}

export default AITools