import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface TOOL {
  name:string;
  description:string;
  icon:string;
  button:string;
  path:string;
}
type AIToolCardProps = {
  tool:TOOL
}

function AIToolCard({tool}:AIToolCardProps) {
  return (
    <div className='p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300'>
      <Image src = {tool.icon} alt={tool.name} width={50} height={50} />
      <h2 className='font-bold mt-2'>{tool.name}</h2>
      <p className='text-gray-600'>{tool.description}</p>
      <Link href = {tool.path}>
      <Button className='w-full mt-3'>{tool.button}</Button></Link>
    </div>
  )
}

export default AIToolCard