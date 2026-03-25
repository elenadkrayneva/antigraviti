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
      console.warn('Chat API: OPENAI_API_KEY is missing, using fallback response');
      return NextResponse.json({ 
        reply: "I'm currently in a limited 'offline' mode as my AI brain needs a key boost, but I can still tell you that Elena is a dedicated Marketing Analytics specialist with a strong background in data-driven growth and strategic consulting. Feel free to reach out to her directly via Email or LinkedIn!" 
      });
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

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: messages as any,
        temperature: 0.7,
        max_tokens: 500,
      });

      const reply = response.choices[0]?.message?.content || "I'm having a bit of a quiet moment, but I'd love to chat more about Elena's background if you try another question!";
      return NextResponse.json({ reply });
    } catch (apiError: any) {
      console.error('OpenAI API Error:', apiError);
      return NextResponse.json({ 
        reply: "I'm experiencing a brief connection hiccup with my AI provider, but you can explore Elena's projects and skills right here on the page! She's particularly experienced in Google Ads and HubSpot."
      });
    }

  } catch (error: any) {
    console.error('Chat API Runtime Error:', error);
    return NextResponse.json({ 
      reply: "I'm here to help! Please feel free to check out the Experience and Projects sections while I refresh my connection." 
    }, { status: 200 }); // Return 200 even on error to avoid "offline" message
  }
}
