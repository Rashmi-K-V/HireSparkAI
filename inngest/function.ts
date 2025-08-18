import { gemini } from "inngest";
import { inngest } from "./client";
import { createAgent, openai} from '@inngest/agent-kit';


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

//ai agent function
export const AICareerChatAgent = createAgent({
  name : "AICareerChatAgent",
  description: "An agent that helps users with career-related queries using AI.",
  system : "You are a helpful ,professional AI assistant .Your role is to guide users with questions related to career, job search advice,interview prepartaion ,career transitions,industry trends and professional development. Provide clear, concise, and actionable advice.If the user ask something that is not related to career, job search advice,interview prepartaion ,career transitions,industry trends and professional development, politely inform them that you can only assist with career-related queries.",
  model: openai({
    model:"gemini-2.0-flash",
    apiKey : process.env.GEMINI_API_KEY
  }),
})

// inngest function

export const AICareerAgent = inngest.createFunction(
  {id:'AiCareerAgent'},
  {event:'AICareerAgent'},
  async({event,step}) => {
    const {userInput} = await event?.data;
    const result = await AICareerChatAgent.run(userInput);
    return result;
  }
)