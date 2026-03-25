import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import cvData from '@/data/cv.json';
import projectsData from '@/data/projects.json';

const systemPrompt = `You are the AI assistant for Elena Krayneva, a Digital Marketing & Analytics specialist based in Barcelona.
You act like a professional, friendly, and persuasive recruiter assistant embedded on her portfolio website.
Your goal is to answer questions about Elena, explain her projects and skills, and convince recruiters to hire her.

Important Guidelines:
1. Keep answers concise, structured (use bullet points if helpful), and "consulting-style".
2. Highlight her end-to-end thinking: strategy → execution → analytics.
3. Use only the provided data below to answer.

KNOWLEDGE BASE:
Profile & Experience:
${JSON.stringify(cvData, null, 2)}

Projects:
${JSON.stringify(projectsData, null, 2)}
`;

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      console.error('Chat API Error: OPENAI_API_KEY is missing');
      return NextResponse.json(
        { reply: "I'm currently missing my API key. Please check your environment variables." },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Ensure history is an array and filter out invalid messages
    const validHistory = Array.isArray(history) 
      ? history.filter((msg: any) => msg?.role && msg?.content)
      : [];

    const messages = [
      { role: 'system', content: systemPrompt },
      ...validHistory.map((msg: any) => ({
        role: msg.role === 'assistant' || msg.role === 'user' ? msg.role : 'user',
        content: String(msg.content),
      })),
      { role: 'user', content: String(message) }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = response.choices[0]?.message?.content || "I'm thinking, but couldn't find the right words. Try asking differently!";
    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error('Chat API Runtime Error:', error);
    
    // Check for specific OpenAI errors if possible
    const errorMsg = error?.message || "I encountered an error while processing your request.";
    return NextResponse.json({ reply: `Bot error: ${errorMsg}` }, { status: 500 });
  }
}
