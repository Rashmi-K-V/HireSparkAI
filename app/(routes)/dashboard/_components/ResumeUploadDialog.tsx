import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { File } from 'lucide-react';

function ResumeUploadDialog({openResumeUpload,setOpenResumeUpload}:any) {
  return (
  <Dialog open={openResumeUpload} onOpenChange={setOpenResumeUpload}>
  {/* <DialogTrigger>Open</DialogTrigger> */}
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upload Resume pdf file</DialogTitle>
      <DialogDescription>
        <div className='w-full h-48 flex items-center justify-center cursor-pointer'> 
          <label htmlFor='resumeUpload' className='flex items-center flex-col justify-center p-7 border border-dashed rounded-xl hover:bg-slate-100' />
            <File className='h-10 w-10'/>
            <h2 className='mt-3'>Click Here to Upload</h2>
          <label/>
          <input type="file" id = 'resumeUpload' accept=".pdf" className='opacity-0' />
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default ResumeUploadDialog