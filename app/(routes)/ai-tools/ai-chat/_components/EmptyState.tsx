import React from 'react'

const questionList = [
  'What should I do next in my career?',
  'How can I improve my resume?',
  'What skills are in demand right now?',
  'Can you help me prepare for an interview?',
  'Can you suggest some online courses for career growth?'
]

function EmptyState({selectedQuestion}:any) {
  return (
    <div>
      <h2 className='font-bold text-xl text-center mt-3'>Ask Anything</h2>
      <div className="">{questionList.map((question,index)=>(
        <h2 className='text-slate-700 p-4 text-center border rounded-lg my-2 hover:border-primary cursor-pointer' key={index} onClick={() => selectedQuestion(question)}  >{question}</h2>
      ))}</div>
    </div>
  )
}

export default EmptyState