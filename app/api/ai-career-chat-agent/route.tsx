import { inngest } from "@/inngest/client";
import axios from "axios";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { resolve } from "path";

export async function POST(req:any){
  const {userInput} = await req.json();

  //trigger inngest function,returns an array of run ids
  const resultIds = await inngest.send({
    name: 'AICareerAgent',
    data:{
      userInput:userInput
    }
  });
  const runId = resultIds?.ids[0];

  //polling for the result
  let runStatus;
  while(true){
    runStatus = await getRuns(runId);
    if(runStatus?.data[0]?.status === 'Completed')
      break;
    
    await new Promise(resolve => setTimeout(resolve,500));
  }
  return NextResponse.json(runStatus.data?.[0].output?.output[0]);

}

export async function getRuns(runId:string){
  const result = await axios.get( `${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`,
    {
    headers:{
      Authorization:`Bearer ${process.env.INNGEST_SIGNING_KEY}`
    }
  })
  return result.data;
}