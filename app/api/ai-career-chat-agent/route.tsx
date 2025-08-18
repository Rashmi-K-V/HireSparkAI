import { inngest } from "@/inngest/client";
import axios from "axios";
import { headers } from "next/headers";

export async function POST(req:any){
  const {userInput} = await req.json();

  //trigger inngest function,returns an array of run ids
  const resultIds = await inngest.send({
    name: 'AICareerAgent',
    data:{
      userInput:userInput
    }
  });
  const runId = resultIds.ids[0];
}

async function getRuns(runId:string){
  const result = await axios.get(process.env.INNGEST_SERVER__HOST+'/v1/events/'+{runId}+'/runs',
    {
    headers:{
      Authorization:`Bearer ${process.env.INNGEST_SIGNING_KEY}`
    }
  })
  return result.data;
}