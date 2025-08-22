import { NextResponse } from "next/server";
import {db} from '../../../configs/db';
import {historyTable} from '../../../configs/schema';
import {currentUser} from '@clerk/nextjs/server';
import { eq } from "drizzle-orm";

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

export async function PUT(req:any) {
  const {content, recordId} = await req.json();
  try{
    //Update the content into the database

    const result = await db.update(historyTable).set({
      content:content,
      
    }).where(eq(historyTable.recordId,recordId));
    return NextResponse.json(result)
  }catch(e){
    return NextResponse.json(e);
  }
}