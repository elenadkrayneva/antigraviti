import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import cvData from '@/data/cv.json';
import projectsData from '@/data/projects.json';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You are Elena Krayneva's AI Career Strategist. You are direct, analytical, ROI-focused, and highly professional.
Your goal is to answer questions about Elena's professional background, her projects, and her skills using ONLY the provided knowledge.

CORE KNOWLEDGE (use these facts):
- ROLE: Elena is a Marketing Analytics & Consulting specialist.
- CURRENT: MSc Digital Marketing & Analytics student (TBS Education).
- KEY WORK: X5 Digital (People Analytics), TeDo (former PwC Russia, Operations Specialist), Qwell (Workforce Ops).
- PROJECTS: "Logistics Efficiency & Workforce Analysis" at X5 Digital (using Databricks, SQL, Excel) and "Startup Strategic Positioning" at Scanderm.
- SKILLS: SQL, Excel, GA4, Databricks, SEO, Google Ads, Tableau, Snowflake.
- LOCATION: Barcelona, Spain.

FALLBACK POLICY:
- If asked about something NOT in the data (personal life, hobbies, unrelated facts), say: "I don't have that specific detail in Elena's current records, but I can suggest contacting her directly on LinkedIn (${cvData.profile.linkedin}) or via Email (${cvData.profile.email}) for further details."
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
    project.tags.some(tag => query.includes(tag.toLowerCase()))
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

  if (query.includes('contact') || query.includes('связат') || query.includes('linkedin') || query.includes('email')) {
    return isRussian
      ? `Вы можете связаться с Еленой в **LinkedIn**: ${cvData.profile.linkedin} или по **Email**: ${cvData.profile.email}.`
      : `You can reach Elena on **LinkedIn**: ${cvData.profile.linkedin} or via **Email**: ${cvData.profile.email}.`;
  }

  return isRussian
    ? `Я ИИ-ассистент Елены. Я могу рассказать о её опыте в People Analytics в X5 Digital, проектах в TeDo или знаниях SQL и GA4. Что вас интересует? Если я чего-то не знаю, вы всегда можете написать ей: ${cvData.profile.email}`
    : `I'm Elena's AI Assistant. I can tell you about her People Analytics work at X5 Digital, consulting at TeDo, or her technical skills in SQL and GA4. What would you like to know? For direct inquiries: ${cvData.profile.email}`;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    // Check if we have an API key
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes('your-key-here')) {
      console.warn('Chat: OPENAI_API_KEY is missing, using deterministic fallback.');
      return NextResponse.json({ 
        role: 'assistant', 
        content: getDeterministicResponse(lastMessage) 
      });
    }

    // Try OpenAI
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
      });

      return NextResponse.json(response.choices[0].message);
    } catch (apiError: any) {
      console.error('OpenAI API Error:', apiError);
      return NextResponse.json({ 
        role: 'assistant', 
        content: getDeterministicResponse(lastMessage) 
      });
    }
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
