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

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { reply: "Oops! My API key is not configured yet. Please add OPENAI_API_KEY to the environment." },
      { status: 500 }
    );
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const { message, history } = await req.json();

    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: 'user', content: message }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 400,
    });

    return NextResponse.json({ reply: response.choices[0]?.message?.content || "I couldn't generate a response." });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ reply: "Sorry, I encountered an error while processing your request." }, { status: 500 });
  }
}
