import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import cvData from '@/data/cv.json';
import projectsData from '@/data/projects.json';

const systemPrompt = `You are "The Strategist", the advanced AI Ambassador for Elena Krayneva.
Your role is to represent Elena to potential employers, recruiters, and collaborators with the precision of a top-tier management consultant and the analytical depth of a marketing specialist.

SOURCE OF TRUTH:
1. **Primary Source**: Use the JSON data below (Elena's CV and Projects).
2. **Contextual Inference**: You are allowed to explain Elena's contribution to a project based on its context. For example, if a user asks about marketing optimization for the AI Startup, explain her role in market analysis and strategic positioning.
3. **Strict Adherence**: NEVER invent facts, metrics, or companies not mentioned in the data.

KNOWLEDGE BASE:
---
EXPERIENCE: ${JSON.stringify(cvData, null, 1)}
PROJECTS: ${JSON.stringify(projectsData, null, 1)}

LINKEDIN MISSION: Elena is focused on understanding the structural logic behind performance — connecting metrics like CTR, CPA, and conversion rates to broader strategic implications. She has experience at X5 Digital (People Analytics) and consulting for AI startups.
---

GUIDELINES:
- If asked about something NOT in the data, say: "I don't have that specific detail in Elena's current records, but I can suggest contacting her directly on LinkedIn (${cvData.profile.linkedin}) or via Email (${cvData.profile.email}) for further details."
- Language: Respond in the language used by the user.
- Tone: Analytical, ROI-focused, professional, and helpful.
- Formatting: Use bullet points, **bold text**, and ### headers.
`;

// Deterministic Fallback Logic (The "Smart" Offline Mode)
function getDeterministicResponse(message: string): string {
  const query = message.toLowerCase();
  const isRussian = /[а-яА-ЯёЁ]/.test(query);

  // Search Projects
  const foundProject = projectsData.find(project => 
    project.title.toLowerCase().includes(query) || 
    project.tags.some(tag => query.includes(tag.toLowerCase())) ||
    project.category.toLowerCase().includes(query)
  );

  if (foundProject) {
    if (isRussian) {
      return `О проекте **${foundProject.title}**: ${foundProject.context}\n\n**Результат:** ${foundProject.result}\n\n**Стек:** ${foundProject.tags.join(', ')}.`;
    }
    return `Regarding the **${foundProject.title}** project: ${foundProject.context}\n\n**Result:** ${foundProject.result}\n\n**Stack:** ${foundProject.tags.join(', ')}.`;
  }

  // Search Skills & Experience
  if (query.includes('sql') || query.includes('database') || query.includes('данн')) {
    return isRussian 
      ? "Елена профессионально владеет SQL для анализа данных. Например, в X5 DIGITAL она работала с наборами данных о персонале для KPI-отчетности."
      : "Elena is proficient in SQL for data analysis. For example, at X5 DIGITAL, she worked with workforce datasets to build KPI reports.";
  }

  if (query.includes('google') || query.includes('ads') || query.includes('analytics') || query.includes('аналити')) {
    return isRussian
      ? "Она сертифицированный специалист по Google Ads и Google Analytics 4. В проекте DIGIFY ACTIVE она успешно запускала кампании, отслеживая CTR и CPA."
      : "She is a certified Google Ads and GA4 specialist. In the DIGIFY ACTIVE project, she successfully launched campaigns while tracking CTR and CPA.";
  }

  if (query.includes('contact') || query.includes('email') || query.includes('linkedin') || query.includes('контакт') || query.includes('почт')) {
    const email = cvData.profile.email;
    const linkedin = cvData.profile.linkedin;
    return isRussian
      ? `Вы можете связаться с Еленой напрямую через Email: **${email}** или в **LinkedIn**: ${linkedin}.`
      : `You can reach Elena directly through Email: **${email}** or on **LinkedIn**: ${linkedin}.`;
  }

  // Default "Smart" response
  if (isRussian) {
    return "Я — AI-ассистент Елены. Сейчас я работаю в локальном режиме, но могу рассказать о её опыте в **Marketing Analytics**, работе в **X5 Digital** или проектах в **SaaS**. Что вас интересует?";
  }
  return "I'm Elena's AI Assistant. I'm currently in smart-local mode, but I can tell you about her **Marketing Analytics** expertise, her work at **X5 Digital**, or her **SaaS consulting** projects. What would you like to know?";
}

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    // Try OpenAI, but use Smart Fallback if Key is placeholder or missing
    const hasValidKey = process.env.OPENAI_API_KEY && 
                        process.env.OPENAI_API_KEY !== 'your_openai_api_key_here' && 
                        process.env.OPENAI_API_KEY.startsWith('sk-');

    if (!hasValidKey) {
      console.warn('Chat API: Using Smart Fallback');
      return NextResponse.json({ reply: getDeterministicResponse(message) });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const validHistory = Array.isArray(history) 
      ? history.filter((msg: any) => msg?.role && msg?.content)
      : [];

    const messages = [
      { role: 'system', content: systemPrompt },
      ...validHistory.slice(-10).map((msg: any) => ({ // Extended context for better conversation logic
        role: msg.role === 'assistant' || msg.role === 'user' ? msg.role : 'user',
        content: String(msg.content),
      })),
      { role: 'user', content: String(message) }
    ];

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: messages as any,
        temperature: 0.6,
        max_tokens: 400,
      });

      const reply = response.choices[0]?.message?.content || getDeterministicResponse(message);
      return NextResponse.json({ reply });
    } catch (apiError: any) {
      console.error('OpenAI API Error:', apiError);
      return NextResponse.json({ reply: getDeterministicResponse(message) });
    }

  } catch (error: any) {
    console.error('Chat API Runtime Error:', error);
    return NextResponse.json({ 
      reply: "I'm here to assist! Please explore the Experience and Projects sections below." 
    }, { status: 200 });
  }
}
