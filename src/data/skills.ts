import { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'LLMs & Agent Systems',
    skills: [
      'OpenAI GPT',
      'Claude API',
      'Google Gemini',
      'Ollama (local models)',
      'Multi agent orchestration',
      'RAG & knowledge retrieval',
      'Prompt engineering',
    ],
  },
  {
    category: 'Engineering',
    skills: [
      'Python',
      'TypeScript / JavaScript',
      'FastAPI',
      'React / Next.js',
      'REST APIs',
      'Git / CI/CD',
    ],
  },
  {
    category: 'Automation & Integration',
    skills: [
      'n8n',
      'Make.com',
      'Webhook orchestration',
      'Supabase',
      'Streamlit',
    ],
  },
  {
    category: 'Enterprise Platforms',
    skills: [
      'Salesforce (Sales, Service, Flow, Apex)',
      'JIRA / Confluence',
      'Adobe Experience Manager',
      'Sitetracker',
    ],
  },
];
