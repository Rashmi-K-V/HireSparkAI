import { NextResponse } from "next/server";
import {db} from '../../../configs/db';
import {historyTable} from '../../../configs/schema';
import {currentUser} from '@clerk/nextjs/server';

export async function POST(req:any) {
  const user = await currentUser();

  const {content,recordId} = await req.json();
  try{
    //Insert the content into the database

    const result = await db.insert(historyTable).values({
      recordId:recordId,
      content:content,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      createdAt:(new Date()).toString()
    });
    return NextResponse.json(result)
  }catch(e){
    return NextResponse.json(e);
  }
}