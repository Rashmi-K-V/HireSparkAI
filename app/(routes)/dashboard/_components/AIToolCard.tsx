import { Button } from '@/components/ui/button';
import Image from 'next/image';
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
    <div>
      <Image src = {tool.icon} alt={tool.name} width={50} height={50} />
      <h2>{tool.name}</h2>
      <p>{tool.description}</p>
      <Button>{tool.button}</Button>
    </div>
  )
}

export default AIToolCard