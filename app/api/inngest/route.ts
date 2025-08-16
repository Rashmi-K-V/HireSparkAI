import { serve } from "inngest/next";
// Update the import path below if the actual location is different
import { inngest } from "@/inngest/client";
import { helloWorld } from "@/inngest/function";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld, 
  ],
});