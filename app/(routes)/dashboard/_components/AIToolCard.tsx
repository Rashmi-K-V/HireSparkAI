// "use client";
// import { Button } from '@/components/ui/button';
// import axios from 'axios';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React from 'react'
// import uuid4 from "uuid4";

// interface TOOL {
//   name:string;
//   description:string;
//   icon:string;
//   button:string;
//   path:string;
// }
// type AIToolCardProps = {
//   tool:TOOL
// }

// function AIToolCard({tool}:AIToolCardProps) {
//   const router = useRouter();
//   const id = uuid4();
  
// //user click on any AI tool button, it will generate a unique id for the session
  
//   const onClickButton=async()=>{
//   //create new session id for the user

//   const resut = await axios.post('/api/history', {
//     recordId:id,
//     content:[]
//    });
//    console.log(resut.data);
//    router.push(tool.path+"/"+id);
//   //  router.push(`${tool.path}/${id}`); 
//   }
//   return (
//     <div className='p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300'>
//       <Image src = {tool.icon} alt={tool.name} width={50} height={50} onClick={onClickButton} />
//       <h2 className='font-bold mt-2'>{tool.name}</h2>
//       <p className='text-gray-600'>{tool.description}</p>
//       <Link href = {tool.path +"/"+id }>
//       <Button className='w-full mt-3'>{tool.button}</Button></Link>
//     </div>
//   )
// }

// export default AIToolCard

"use client";
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import uuid4 from "uuid4";

interface TOOL {
  name: string;
  description: string;
  icon: string;
  button: string;
  path: string;
}
type AIToolCardProps = {
  tool: TOOL;
};

function AIToolCard({ tool }: AIToolCardProps) {
  const router = useRouter();

  // user clicks on any AI tool button, it will generate a unique id for the session
  const onClickButton = async () => {
    const id = uuid4(); // ✅ generate here, only when clicked

    // create new session id for the user
    const result = await axios.post('/api/history', {
      recordId: id,
      content: [],
    });

    console.log(result.data);
    router.push(`${tool.path}/${id}`); // ✅ navigate after saving
  };

  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <Image
        src={tool.icon}
        alt={tool.name}
        width={50}
        height={50}
        onClick={onClickButton} // image click also starts session
        className="cursor-pointer"
      />
      <h2 className="font-bold mt-2">{tool.name}</h2>
      <p className="text-gray-600">{tool.description}</p>

      {/* ✅ No pre-rendered random id → only handle click */}
      <Button onClick={onClickButton} className="w-full mt-3">
        {tool.button}
      </Button>
    </div>
  );
}

export default AIToolCard;
