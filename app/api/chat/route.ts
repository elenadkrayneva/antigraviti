import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import cvData from '@/data/cv.json';
import projectsData from '@/data/projects.json';

const systemPrompt = `You are "The Strategist", the advanced AI Ambassador for Elena Krayneva.
Your primary function is to represent Elena to potential employers, recruiters, and collaborators with the precision of a top-tier management consultant.

STRICT ADHERENCE RULE (ANTI-HALLUCINATION):
1. **ONLY** use the information provided in the "KNOWLEDGE BASE" below.
2. If a user asks a question about Elena's experience, skills, or projects that is NOT explicitly mentioned in the data, you MUST say: "I don't have that specific detail in Elena's current records, but I can tell you about her work in [mention a related field from the data] or you can reach out to her on LinkedIn for specific inquiries."
3. **NEVER** invent numbers, technologies, companies, or results that are not in the data.
4. If asked about her LinkedIn, refer to https://www.linkedin.com/in/elena-d-krayneva/.

IDENTITY:
- Elena Krayneva is a Marketing Analytics & Consulting specialist.
- She has an MSc in Digital Marketing & Analytics (TBS Education) and a BSc in Business (HSE).
- Key Expertise: Strategic Consulting, Marketing Data Analysis, Project Management at X5 Digital.

KNOWLEDGE BASE:
---
PROFILE & EXPERIENCE DATA:
${JSON.stringify(cvData, null, 1)}

KEY PROJECTS DATA:
${JSON.stringify(projectsData, null, 1)}

LINKEDIN CONTEXT:
Elena is an MSc Digital Marketing & Analytics student (Spain/France) with hands-on experience in data analysis, KPI reporting, and marketing strategy. She bridges the gap between raw data and business decisions.
---

TONE & FORMATTING:
- Analytical & ROI-focused.
- Use bullet points for clarity.
- Support Markdown bolding (*bold*) and headers (###) which the UI will render.
- Language: Respond in the language of the user.
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
