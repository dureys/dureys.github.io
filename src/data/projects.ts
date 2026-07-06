import { Project } from '@/types';

export const enterpriseProjects: Project[] = [
  {
    id: 'lead-qualification',
    title: 'AI Powered Lead Qualification Engine',
    description:
      'A 15 person sales team stopped triaging leads by hand. Enrich, score, route, all inside Salesforce.',
    longDescription:
      'End to end Generative AI pipeline integrated into Salesforce that intercepts incoming leads, enriches them with external data sources (company size, funding stage, tech stack) via API calls, scores them using a custom ML classification model, and routes them to the optimal sales representative. The system eliminated manual lead triage for a 15 person sales team and fundamentally changed how the organization handles inbound pipeline.',
    impact: '40% conversion uplift',
    technologies: [
      'OpenAI GPT API',
      'Salesforce Flow Builder',
      'REST APIs',
      'Apex Triggers',
      'Custom Scoring Algorithms',
    ],
    isPrivate: true,
    category: 'ai',
  },
  {
    id: 'case-management',
    title: 'Smart Case Management System',
    description:
      'Support tickets classify and route themselves the moment they arrive. No human in the triage loop.',
    longDescription:
      'Intelligent ticket routing system that uses NLP classification to auto categorize support cases by topic and urgency at the moment of creation. Assigns priority scores based on historical resolution patterns and routes to specialized agent groups. Built with Salesforce Flows and rule based AI triggers that continuously learn from resolution outcomes, improving accuracy over time.',
    impact: '60% reduction in triage time',
    technologies: [
      'Salesforce Flows',
      'Apex',
      'NLP Classification',
      'Einstein Analytics',
      'AI Triggers',
      'Case Routing Rules',
    ],
    isPrivate: true,
    category: 'ai',
  },
  {
    id: 'support-bot',
    title: 'AI Support Bot & Knowledge Assistant',
    description:
      'GPT drafts the response before the agent even opens the ticket. Junior agents now close escalation tier work.',
    longDescription:
      'AI powered support assistant built to reduce resolution times for a growing support team. The system takes incoming tickets, uses GPT to classify issue type and urgency, then searches structured knowledge base entries to surface the most relevant past resolutions. It auto drafts response templates that agents can review and send, cutting the time from ticket open to first response significantly. The real impact was enabling junior agents to handle complex escalation tier tickets independently, reducing dependency on senior staff.',
    impact: 'Junior agents resolving 3x more complex tickets',
    technologies: [
      'OpenAI GPT',
      'REST APIs',
      'Streamlit',
      'Knowledge Base Integration',
      'NLP Classification',
    ],
    isPrivate: true,
    category: 'ai',
  },
  {
    id: 'multi-agent-crm',
    title: 'Multi Agent CRM System',
    description:
      'Three autonomous agents run the CRM: one enriches, one segments, one writes the outreach.',
    longDescription:
      'Built a system with three specialized AI agents that each own a distinct CRM workflow. The first agent enriches new customer records by pulling company data, funding stage, and tech stack from external APIs. The second agent runs audience segmentation using clustering on deal history and engagement patterns. The third generates personalized follow up email sequences based on segment and deal stage. Each agent operates independently, passes structured outputs to the next, and flags anomalies for human review. Designed as a POC for autonomous enterprise CRM operations.',
    technologies: [
      'Agentic AI',
      'OpenAI GPT',
      'Ollama (Local LLMs)',
      'Streamlit',
      'pandas',
    ],
    isPrivate: true,
    category: 'ai',
  },
  {
    id: 'jira-slack',
    title: 'Jira Slack Intelligent Alerting',
    description:
      'Teams were ignoring critical alerts. Smart batching and filtering made notifications trustworthy again.',
    longDescription:
      'Custom integration that monitors Jira ticket state changes in real time, applies intelligent filtering rules to prevent notification fatigue, and delivers context rich alerts to the right Slack channels. Includes smart batching (grouping related updates), actionable Slack buttons for quick ticket actions, and configurable escalation paths. Solved the "alert noise" problem that caused teams to ignore critical notifications.',
    impact: '35% faster ticket response',
    technologies: [
      'Jira REST API',
      'Slack Bot API',
      'n8n Workflows',
      'Webhook Orchestration',
      'Custom Filtering Engine',
    ],
    isPrivate: true,
    category: 'integration',
  },
  {
    id: 'salesforce-rebuild',
    title: 'Salesforce Enterprise Architecture Rebuild',
    description:
      'Rebuilt a Shell subsidiary’s entire Salesforce data model from scratch. Five departments, zero missed deadlines.',
    longDescription:
      'Led the complete Salesforce environment migration and modernization at Ubitricity, a Shell subsidiary. Redesigned the entire data model from scratch, migrated legacy configurations, deployed Sales Cloud, Service Cloud, and Sitetracker integrations, and trained cross functional teams on new workflows. The project transformed company wide operational efficiency and was delivered on schedule and within budget.',
    technologies: [
      'Salesforce',
      'Sales Cloud',
      'Service Cloud',
      'Sitetracker',
      'Data Migration',
      'Apex',
      'Flow Builder',
    ],
    isPrivate: true,
    category: 'salesforce',
  },
];

export const personalProjects: Project[] = [
  {
    id: 'polywhale',
    title: 'Polywhale: Real Time Signal Detection Engine',
    description:
      'Data intelligence platform that detects convergence patterns and high conviction signals from large participant pools.',
    longDescription:
      'A real time data intelligence platform that tracks high volume participant behavior and detects convergence signals. Features pattern detection (identifying when multiple high performing participants converge on the same outcome), hedge analysis to separate noise from genuine conviction, participant specialization scoring, and quality metrics. Includes a full admin panel, configurable alert thresholds, and real time notification system. Built as a full stack application with a FastAPI backend and React frontend.',
    technologies: [
      'FastAPI',
      'React',
      'Supabase',
      'REST APIs',
      'Data Analysis',
      'Real Time Processing',
    ],
    isPrivate: true,
    category: 'ai',
  },
  {
    id: 'polygod',
    title: 'PolyGod: Market Intelligence Platform',
    description:
      'Analytics engine with automated data pipelines for tracking market movements and generating insights.',
    longDescription:
      'An analytics and intelligence platform with end to end data pipelines for ingesting, processing, and analyzing market data at scale. Features automated data collection workflows, Supabase backed infrastructure for persistent storage, trend analysis across multiple categories, and structured output for actionable insights. Demonstrates data engineering patterns applicable to any domain requiring continuous market monitoring.',
    technologies: [
      'Supabase',
      'Workflow Automation',
      'Data Pipelines',
      'Market Analytics',
    ],
    isPrivate: true,
    category: 'data',
  },
  {
    id: 'canvas-pro',
    title: 'Canvas Pro: AI Art Generation Platform',
    description:
      'Multi provider AI art generation app with agent management.',
    longDescription:
      'An AI art generation platform that supports multiple AI providers for creating images. Features an agent manager for orchestrating different AI models, provider selection for choosing between generation services, context aware prompting, and a streamlined user interface for rapid creative iteration.',
    technologies: [
      'TypeScript',
      'React',
      'Supabase',
      'AI APIs',
      'Lovable',
      'Tailwind CSS',
    ],
    isPrivate: true,
    category: 'ai',
  },
  {
    id: 'draft-ai-ace',
    title: 'Draft AI Ace: Fantasy Sports Assistant',
    description:
      'AI powered fantasy sports draft tool with real time suggestions.',
    longDescription:
      'An AI powered fantasy sports draft assistant that provides real time player suggestions and analysis during snake drafts. Features an intelligent draft board, player autocomplete with performance data, AI driven suggestion panels, file upload for league data import, and PIN based authentication for secure access.',
    technologies: [
      'TypeScript',
      'React',
      'Supabase',
      'AI Assistant',
      'Lovable',
      'Real Time Data',
    ],
    isPrivate: true,
    category: 'ai',
  },
  {
    id: 'real-cost-finder',
    title: 'Real Cost Finder',
    description:
      'Travel cost transparency tool calculating true trip expenses.',
    longDescription:
      'A travel cost transparency tool that calculates real trip costs including hidden expenses like parking, tolls, and elevation based fuel consumption. Features a FastAPI backend, intelligent cost calculation engine, and data caching for frequently searched routes. Built to help travelers understand the actual cost of their journeys beyond just fuel estimates.',
    technologies: [
      'FastAPI',
      'Gemini API',
      'REST APIs',
      'Data Caching',
      'Cost Algorithms',
    ],
    isPrivate: true,
    category: 'data',
  },
  {
    id: 'football-analyzer',
    title: 'FootballAnalyzer',
    description:
      'Data analysis pipeline for football match statistics and performance.',
    longDescription:
      'Data engineering and analysis pipeline for football match statistics. Ingests large datasets, performs statistical analysis on player performance metrics, team formations, and match outcomes, and generates interactive visualizations. Demonstrates data engineering fundamentals and analytical rigor.',
    technologies: [
      'pandas',
      'NumPy',
      'Streamlit',
      'API Football',
      'Data Visualization',
    ],
    isPrivate: false,
    githubUrl: 'https://github.com/dureys/FootballAnalyzer',
    category: 'data',
  },
  {
    id: 'portfolio',
    title: 'AI Portfolio Hub',
    description:
      'This portfolio, built with Next.js, TypeScript, and deployed via CI/CD.',
    longDescription:
      'This portfolio website, built from scratch with a modern React stack. Demonstrates frontend engineering capabilities alongside AI expertise. Statically exported and deployed via GitHub Actions CI/CD pipeline to GitHub Pages. The portfolio itself is a project, showcasing attention to craft, full stack versatility, and the ability to ship polished products.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GitHub Actions',
    ],
    isPrivate: false,
    githubUrl: 'https://github.com/dureys/ai-portfolio-hub',
    liveUrl: 'https://dureys.github.io/ai-portfolio-hub',
    category: 'web',
  },
];
