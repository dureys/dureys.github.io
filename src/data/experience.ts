import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'andercore',
    role: 'AI Automation Architect & Salesforce Product Owner',
    company: 'Andercore GmbH',
    period: 'Aug 2024 to Present',
    location: 'Berlin, Germany',
    isCurrent: true,
    highlight:
      'Shipped the lead engine (+40% conversion) and the support AI (−60% triage time) — both in production.',
    summary:
      'Leading Generative AI and intelligent automation initiatives across sales, procurement, logistics, and support. Owning the full consulting cycle from process discovery and solution design through implementation, validation against KPIs, and production rollout.',
    achievements: [
      'Ran discovery workshops with sales leadership to identify pipeline bottlenecks, then scoped and built an AI powered lead qualification engine in Salesforce using LLMs and ML based scoring. Validated against agreed KPIs over a structured pilot, presented data driven results to the executive team, and secured sign off for full rollout. Outcome: 40% conversion uplift.',
      'Mapped the end to end support ticket lifecycle with the operations team, identified triage as the primary bottleneck, and designed a smart case management system using NLP classification. Piloted with a subset of ticket categories, iterated based on agent feedback in a continuous improvement cycle, and scaled company wide. Outcome: 60% reduction in triage time.',
      'Developed a Jira Slack alerting integration and Conversational AI support bot. Defined success criteria with the support manager, ran a 3 week POC tracking resolution times and agent satisfaction, then transitioned both tools into core operational infrastructure.',
      'Own end to end delivery of AI automation projects: process mapping, solution design, stakeholder alignment, technical build, user acceptance testing, technical documentation, training, and production handover.',
    ],
    technologies: [
      'OpenAI GPT',
      'Claude',
      'Salesforce',
      'n8n',
      'Make.com',
      'JIRA',
      'REST APIs',
    ],
  },
  {
    id: 'ubitricity',
    role: 'Salesforce Product Manager',
    company: 'Ubitricity GmbH',
    companyNote: 'Shell',
    period: 'Apr 2023 to Aug 2024',
    location: 'Berlin, Germany',
    highlight:
      'Migrated a Shell subsidiary’s entire Salesforce org — 5 departments, phased rollout, minimal disruption.',
    summary:
      'Led a full scale digital transformation of the Salesforce environment for a Shell subsidiary. Owned the product roadmap, gathered business requirements across departments, managed cross functional stakeholders, and drove adoption through structured change management.',
    achievements: [
      'Led complete Salesforce environment migration from legacy systems: gathered business requirements across 5 departments, defined the migration roadmap, coordinated data migration, and managed phased rollout with minimal business disruption',
      'Delivered Sales Cloud, Service Cloud, and Sitetracker implementations on time and within budget, managing dependencies across engineering, operations, and commercial teams',
      'Designed and facilitated end user training programs for new Salesforce workflows, driving adoption across field teams and back office operations',
      'Served as the primary bridge between engineering and business stakeholders, translating technical constraints into business language and vice versa to maintain executive alignment throughout the project',
    ],
    technologies: [
      'Salesforce',
      'Sales Cloud',
      'Service Cloud',
      'Sitetracker',
      'Apex',
      'Flow Builder',
    ],
  },
  {
    id: 'accenture',
    role: 'Digital Business Integration Analyst',
    company: 'Accenture GmbH',
    period: 'Jul 2021 to Apr 2023',
    location: 'Berlin, Germany',
    highlight:
      'Took 10+ international markets live for global enterprise clients, coordinating across time zones.',
    summary:
      'Delivered enterprise scale digital transformation and integration projects for global clients in client facing roles. Managed multi market implementations with structured delivery methodology, stakeholder coordination, and change management across time zones.',
    achievements: [
      'Managed rollout planning, market requirement specification, and Go Live execution for 10+ international markets, ensuring each market met readiness criteria before launch',
      'Set up and deployed 20+ forms using Adobe Experience Manager, coordinating acceptance testing with local market teams before each release',
      'Implemented software configuration management plans for enterprise clients, establishing governance processes for change control and release management',
      'Led cross functional stakeholder communication across multiple time zones, facilitating alignment between local teams and central program leadership',
    ],
    technologies: [
      'Adobe Experience Manager',
      'Salesforce',
      'JIRA',
      'Agile',
      'REST APIs',
    ],
  },
  {
    id: 'lemonone',
    role: 'Process Manager & Salesforce Product Manager',
    company: 'Lemon One GmbH',
    period: 'Jul 2019 to Jun 2021',
    location: 'Berlin, Germany',
    highlight:
      'Built the Salesforce processes a scale-up ran on daily — validation rules, approvals, automation flows.',
    summary:
      'Managed product backlogs and Salesforce process optimization. Designed validation rules, approval workflows, and automation flows while aligning commercial and technical requirements across teams.',
    achievements: [
      'Planned and developed Salesforce processes and flows supporting daily company operations, working directly with end users to validate each workflow before deployment',
      'Designed custom validation rules and approval processes ensuring data integrity and policy compliance across the organization',
      'Managed product backlogs, facilitating prioritization sessions between commercial and technical stakeholders to align business requirements with delivery objectives',
    ],
    technologies: [
      'Salesforce',
      'Flow Builder',
      'Apex',
      'Process Automation',
    ],
  },
];
