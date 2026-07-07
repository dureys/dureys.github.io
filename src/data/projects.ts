import { Project } from '@/types';

export const enterpriseProjects: Project[] = [
  {
    id: 'lead-qualification',
    title: 'AI Powered Lead Qualification Engine',
    description:
      'A sales team stopped triaging leads by hand. Enrich, score, route, inside the CRM they already worked in.',
    longDescription:
      'A generative AI pipeline that intercepts incoming leads, enriches them from external data via API calls, scores them, and routes each to the right sales rep, all inside the CRM the team already used. It removed manual lead triage and changed how inbound pipeline was handled. Covered by NDA, so it is described at the pattern level.',
    impact: '40% conversion uplift',
    technologies: [
      'LLM Enrichment',
      'Lead Scoring',
      'REST APIs',
      'Intelligent Routing',
      'Feedback Loop',
    ],
    isPrivate: true,
    category: 'ai',
    systemNo: 2,
    artifactId: 'lead',
    deepDive: {
      status: 'In production',
      timeframe: 'since 2024',
      nda: true,
      audience:
        'revenue operations and sales leaders whose reps burn inbound leads for lack of research and prioritization',
      flow: [
        'lead in',
        'enrichment agent',
        'score and route',
        'rep, research done',
        'outcomes feed back',
      ],
      problem:
        'Sales asked for more leads. That was the stated request, not the actual problem. Reps were burning good leads because every lead arrived as a bare name and email, with no research attached and no signal about which ones deserved attention first. Pushing more volume into that funnel would have made the burn rate worse, so I treated the request as a symptom and fixed the qualification gap instead.',
      solution:
        'When a lead lands, an enrichment agent pulls external data on the company. A second agent scores the enriched lead and routes it to the rep best positioned to close it, based on territory, load, and history with that segment. The rep opens the lead and sees the research already done, the score, and the reason it was routed to them. Outcomes flow back in a feedback loop: converts, disqualifications and corrections feed the scoring model, so the scorer learns from what actually closes. Everything lives inside the CRM the reps already work in.',
      tradeoffs: [
        {
          head: 'Lead quality over lead volume',
          because:
            'the constraint was reps burning good leads, not a shortage of leads. More volume would have amplified the failure mode.',
        },
        {
          head: 'Enrichment before routing over routing first',
          because:
            'a lead routed to the right rep still dies if the rep has no research and no reason to prioritize it.',
        },
        {
          head: 'A living feedback loop over a static scorer',
          because:
            'scoring rules go stale as the market shifts, and a stale scorer quietly misroutes your best leads.',
        },
        {
          head: 'Inside the existing CRM over a separate tool',
          because:
            'adoption dies at the second login. Reps will not maintain a parallel system, no matter how good it is.',
        },
      ],
      impactDetail:
        '40 percent uplift in lead conversion, the figure that has been on my public CV since, measured against the quarter before launch. Manual research per lead cut to near zero. The effect I did not plan for mattered most: once reps saw the quality of the enrichment, they started trusting the scores and feeding corrections back, and that adoption flywheel improved accuracy more than any tuning I did. Internal volumes and platform specifics stay inside the NDA.',
      watchNext: [
        'Scoring drift: conversion rate by score band, checked monthly. If high scores stop converting, the market moved before the model did.',
        'Feedback quality: whether rep corrections stay honest once reps learn corrections influence their own routing.',
        'Enrichment source stability: match rate on the most fragile external source, with a fallback kept warm.',
      ],
    },
  },
  {
    id: 'case-management',
    title: 'Smart Case Management System',
    description:
      'Support tickets classify and route themselves the moment they arrive. No human in the triage loop.',
    longDescription:
      'Intelligent ticket routing that classifies support cases by topic and urgency at the moment of creation, checks the classification before anything moves, and routes through the platform the team already runs on. Covered by NDA, so it is described at the pattern level.',
    impact: '60% reduction in triage time',
    technologies: [
      'NLP Classification',
      'Verification Agent',
      'Priority Scoring',
      'Workflow Automation',
      'Eval Loop',
    ],
    isPrivate: true,
    category: 'ai',
    systemNo: 1,
    artifactId: 'triage',
    deepDive: {
      status: 'In production',
      timeframe: 'since 2024',
      nda: true,
      audience:
        'support operations leads and CX managers whose team sorts a shared inbox by hand',
      flow: [
        'ticket in',
        'classifier',
        'verifier',
        'route or human queue',
        'weekly eval loop',
      ],
      problem:
        'A steady daily flood of tickets landed in one shared inbox, and a person sorted them by hand before anyone could start solving anything. First response times blew past SLA, and the reflex answer was to hire. The real question was whether the bottleneck was capacity or sorting. It was sorting.',
      solution:
        'Three moving parts. An NLP classifier reads each incoming ticket and tags it with a category and a priority. A verification agent checks that classification before anything moves: a misroute means an angry customer waiting in the wrong queue, so the downside is asymmetric and worth a second check. Native platform automation executes the routing, so the assignment logic lives where the admins who own the queues can see and change it. Around the pipeline runs a weekly eval loop: every misclassified ticket becomes a permanent test case, and the classifier has to pass the full suite before any change ships. Accuracy is a ratchet.',
      tradeoffs: [
        {
          head: 'A two agent design over a single model call',
          because:
            'the cost of a misroute exceeds the cost of a second check. Verification costs seconds and cents; a misroute costs an SLA breach and an escalation.',
        },
        {
          head: 'Fixing sorting over adding headcount',
          because:
            'the constraint was routing, not capacity. A new hire would have been absorbed by the same broken intake within a month.',
        },
        {
          head: 'A weekly eval loop over set and forget',
          because:
            'drift in ticket language erodes accuracy silently, long before anyone complains about routing.',
        },
        {
          head: 'Platform native automation over custom code',
          because:
            'the admins who own the queues can adjust routing without a developer in the loop.',
        },
      ],
      impactDetail:
        'Triage time cut 60 percent, measured against the manual sorting baseline, the same figure that has been on my public CV since. Roughly one full person freed for actual support work, and first response SLAs recovered to target. Finer grained internal metrics stay inside the NDA.',
      watchNext: [
        'Queue age, because it moves days before SLA breach rate does. SLA is the lagging scoreboard, not the alarm.',
        'Misroute rate week over week, as the earliest signal of classifier drift.',
        'The size of the human review queue, because a growing reject pile means verification is catching a shift the eval suite has not learned yet.',
      ],
    },
  },
  {
    id: 'support-bot',
    title: 'AI Support Bot & Knowledge Assistant',
    description:
      'The assistant drafts the response before the agent opens the ticket. Junior agents handle harder work on their own.',
    longDescription:
      'A support assistant that classifies each incoming ticket, searches a structured knowledge base for the most relevant past resolutions, and drafts a reply the agent reviews and sends. It cut time to first response and let junior agents handle harder tickets without leaning on senior staff. Built at an employer under NDA, so it is described at the pattern level.',
    impact: 'Junior agents handling harder tickets solo',
    technologies: [
      'LLM Classification',
      'Knowledge Base Retrieval',
      'Draft Generation',
      'Human in the Loop',
    ],
    isPrivate: true,
    category: 'ai',
    deepDive: {
      status: 'Built',
      nda: true,
      audience:
        'support leads at B2B companies whose hardest tickets bottleneck on a few senior agents',
      flow: [
        'ticket in',
        'classify',
        'KB retrieval',
        'drafted reply',
        'human reviews + sends',
      ],
      problem:
        'Support volume was growing faster than the team. Routine tickets moved fine, but every complex escalation tier ticket landed on the same handful of senior agents, because the junior agents could not resolve those alone. So the hard tickets queued, resolution times crept up, and the seniors spent their days firefighting instead of doing the work only they can do. It felt like adding headcount without adding capacity.',
      solution:
        'Every incoming ticket runs through a classification step that tags issue type and urgency. The system then searches a structured knowledge base of past resolutions and pulls the entries most relevant to that ticket. From those entries it drafts a response template with the concrete resolution steps already filled in, citing which past cases it drew from. That draft lands in the queue of a human agent, who reviews it, edits what is wrong, and sends it. Nothing reaches a customer without a person signing off. The agent stays the owner of the ticket; the system removes the searching and drafting work that used to require senior memory.',
      tradeoffs: [
        {
          head: 'Drafts for human review over auto sending',
          because:
            'a wrong answer sent to a customer costs more trust than a slower right one, so the human stays the final step by design, not as a temporary safeguard.',
        },
        {
          head: 'Retrieving past resolutions over generating answers from scratch',
          because:
            'grounded drafts fail loudly when retrieval finds nothing, while generated answers fail quietly and read confident, and quiet failures are the ones that reach customers.',
        },
        {
          head: 'Measuring junior independence over ticket deflection',
          because:
            'deflection metrics reward closing tickets rather than solving them, and the actual bottleneck was who could handle the hard ones.',
        },
        {
          head: 'Structured knowledge base entries over a raw ticket dump',
          because:
            'retrieval quality is the ceiling on draft quality, so I paid the curation cost up front instead of debugging noisy retrieval forever.',
        },
      ],
      impactDetail:
        'Time from ticket open to first response dropped after rollout. The effect I care about more: junior agents started resolving escalation tier tickets on their own, which broke the dependency on the few senior agents and gave them their time back for the problems that genuinely need them. I am keeping the specific multipliers and internal figures inside the NDA and describing the shape of the win instead.',
      watchNext: [
        'Edit distance between drafts and sent replies, because rising edits mean retrieval is drifting.',
        'The share of hard tickets still escalated to senior agents.',
        'Staleness of knowledge base entries as the product changes.',
      ],
    },
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
    deepDive: {
      status: 'Built',
      audience:
        'RevOps leads and founders running a CRM with too few hands',
      flow: [
        'new record',
        'enrich agent',
        'segment agent',
        'outreach agent',
        'human review',
      ],
      problem:
        'CRM upkeep is really three different jobs squeezed into one overloaded team: researching accounts, analyzing the customer base, and writing outreach. Nobody has the hours to do all three well, so records go stale within weeks of entry. Segmentation turns into guesswork built on outdated fields, and follow ups default to generic templates because personalizing at volume is not realistic by hand.',
      solution:
        'I built three specialized AI agents, each owning exactly one workflow. Agent one enriches new customer records by pulling company data, funding stage and tech stack from external APIs. Agent two runs audience segmentation using clustering on deal history and engagement patterns. Agent three generates personalized follow up email sequences based on segment and deal stage. Each agent operates independently and passes structured outputs to the next, so the pipeline works like a relay rather than a group chat. Anything that looks off gets flagged for human review instead of flowing downstream. That means each stage can be tested, swapped or fixed without touching the other two.',
      tradeoffs: [
        {
          head: 'Three scoped agents over one general assistant',
          because:
            'enrichment, segmentation and writing use different tools, fail in different ways and need different review; one agent doing all three would be mediocre at each and impossible to debug.',
        },
        {
          head: 'Structured handoffs over shared free text context',
          because:
            'structure makes every hop testable; when agent two produces a bad segment I can inspect the exact input it received instead of doing archaeology on a conversation log.',
        },
        {
          head: 'Anomaly flags to a human over full autonomy',
          because:
            'outbound email to real customers is not the place to discover edge cases; a human checkpoint costs minutes and blocks the one failure mode that damages trust.',
        },
        {
          head: 'Proving the pattern over hardening for production',
          because:
            'the open question was whether agents could hand off cleanly, not whether the infrastructure could scale.',
        },
      ],
      impactDetail:
        'This was a proof of concept, and I say that plainly: it never ran against a live customer base. What it proved is the part I was actually unsure about, that three narrow agents can pass structured work to each other without a human gluing the stages together. Enrichment output fed segmentation cleanly, segments drove visibly distinct email sequences, and the anomaly flags caught the odd cases I planted to test them. The pattern holds; production hardening is a known quantity from here.',
      watchNext: [
        'A live pilot on a real CRM.',
        'A reply rate feedback loop into segmentation.',
        'Cost and latency budget per agent.',
      ],
    },
  },
  {
    id: 'jira-slack',
    title: 'Jira Slack Intelligent Alerting',
    description:
      'Teams were ignoring critical alerts. Smart batching and filtering made notifications trustworthy again.',
    longDescription:
      'An integration that monitors issue tracker state changes in real time, filters to prevent notification fatigue, and delivers context rich alerts to the right chat channels with batching, action buttons and configurable escalation. It solved the alert noise problem that had teams ignoring critical notifications. Built at an employer under NDA, so it is described at the pattern level.',
    impact: 'Alert channels trusted again',
    technologies: [
      'Jira',
      'Slack',
      'n8n Workflows',
      'Webhook Orchestration',
      'Relevance Filtering',
    ],
    isPrivate: true,
    category: 'integration',
    deepDive: {
      status: 'In production',
      timeframe: 'since 2024',
      nda: true,
      audience:
        'engineering leads and ops teams at B2B companies fighting alert fatigue',
      flow: [
        'issue tracker webhook',
        'relevance filter',
        'batch related updates',
        'chat + action buttons',
        'escalation path',
      ],
      problem:
        'The teams were drowning in issue tracker notification noise. Every ticket change fired an alert into chat, and every alert looked the same, so people did the rational thing and muted the channels. Once the channels were muted, the critical alerts vanished along with the trivial ones. The loud failure was an urgent ticket sitting untouched for hours because its alert was visually identical to the dozens of updates nobody needed.',
      solution:
        'The integration watches ticket state changes in real time through webhooks. A filtering layer sits between the tracker and chat and decides what actually deserves human attention. Related updates get batched into one message instead of ten, so a busy ticket produces a single digest rather than a stream of pings. Alerts land in the right channel with full context and action buttons, so common ticket actions happen without leaving chat. Configurable escalation paths make sure an unacknowledged critical alert climbs to the next person instead of dying quietly. It runs on n8n and webhook orchestration, which keeps it inspectable and cheap to change.',
      tradeoffs: [
        {
          head: 'Fewer, better alerts over completeness',
          because:
            'an ignored channel is worse than a missed minor update; once people mute the channel you have lost everything, not just the noise.',
        },
        {
          head: 'Batching related updates over instant delivery of every event',
          because:
            'attention is the scarce resource, not information; one digest that gets read beats ten pings that get swiped away.',
        },
        {
          head: 'Action buttons in the alert over links back to Jira',
          because:
            'every context switch loses a percentage of responders; the fewer hops between seeing and acting, the more tickets actually get handled.',
        },
        {
          head: 'Configurable escalation paths over one global policy',
          because:
            'urgency means different things to different teams; a policy that fits nobody gets worked around until it might as well not exist.',
        },
      ],
      impactDetail:
        'Ticket response got faster after rollout, and the result I care about more is that people unmuted the alert channels and started trusting them again, because trust in the channel is what keeps the whole system working. The specific response time figures are internal and stay inside the NDA.',
      watchNext: [
        'Per team priority scoring learned from acknowledgment data.',
        'The same pattern applied to CI and deployment alerts.',
        'A weekly audit digest of everything the filter suppressed, so suppression stays honest.',
      ],
    },
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
    deepDive: {
      status: 'In production',
      timeframe: '2023 to 2024',
      audience:
        'teams whose Salesforce org grew faster than its data model',
      flow: [
        'five departments',
        'new data model',
        'Sales + Service Cloud · Sitetracker',
        'Flows for approvals + routing',
        'training + handover',
      ],
      problem:
        'Ubitricity, a Shell subsidiary in Berlin, was running on a Salesforce environment that had grown by accretion for years. The workflows fought the data model instead of following it, so every process leaned on manual workarounds to close the gap. Five departments, operations, finance, product, sales and service, had each built their own layer of duct tape on top. Nobody trusted the reports, and every new requirement made the tangle worse. Patching it further would have just raised the price of the rebuild everyone knew was coming.',
      solution:
        'I led the rebuild end to end. The first move was the one most teams avoid: I redesigned the entire data model from scratch instead of patching the legacy one, because the model was the actual problem. I sat with all five departments, translated their business needs into user stories and technical specs, and made the model answer to how the business actually works. From there I migrated the legacy configurations onto the new foundation and deployed Sales Cloud, Service Cloud and the Sitetracker integration. Approvals, lead routing and customer onboarding became advanced Flows on standard platform capabilities, replacing the manual workarounds they had been compensating for. Then I trained the cross functional teams until the system ran without me. It shipped on schedule and within budget.',
      tradeoffs: [
        {
          head: 'Rebuilding the data model over patching the legacy one',
          because:
            'configuration debt compounds, and every patch raises the cost of the eventual rebuild.',
        },
        {
          head: 'Data model first, features second',
          because:
            'features built on a wrong model become the next legacy system.',
        },
        {
          head: 'Standard platform capabilities over custom code',
          because:
            'custom code is a maintenance contract the team signs without reading.',
        },
        {
          head: 'Training and clean handover over being the permanent hero',
          because: 'a system that needs its builder in the room is not done.',
        },
      ],
      impactDetail:
        'Five departments now run on one data model instead of five layers of workarounds, and the system operates in production without its architect. It was delivered on schedule and within budget, which for a full environment rebuild is the metric I care about most. I will not claim revenue numbers that were never isolated to this project. What I can say is that this is the production systems credential behind my AI work: model first, adoption, handover is the same discipline that makes AI systems stick instead of rot.',
      watchNext: [
        'Whether the data model survives the next reorg without new workarounds appearing.',
        'Flow performance and limits as record volume grows.',
        'Configuration drift once new admins start shipping changes.',
      ],
    },
  },
];

export const personalProjects: Project[] = [
  {
    id: 'agent-operating-system',
    title: 'Agent Operating System',
    description:
      'How I run my own work as a team of AI agents: two specialized agents, one shared knowledge base, me as the reviewer on everything that ships.',
    longDescription:
      'A structured markdown knowledge vault as the single source of truth, shared by every agent. Claude handles reasoning, synthesis and building; a second autonomous agent runs around the clock on a VPS handling messaging and scheduled tasks. Agents share state through files, not chat history, and knowledge is compiled so token cost stays flat as sources grow.',
    impact: '3 day deliverables now ship in 1',
    technologies: [
      'Claude',
      'Obsidian',
      'n8n',
      'VPS',
      'Telegram Bot API',
      'Files as Shared State',
    ],
    isPrivate: true,
    category: 'ai',
    systemNo: 5,
    artifactId: 'agentos',
    deepDive: {
      status: 'Running daily',
      timeframe: 'since early 2026',
      audience:
        'engineering and operations leads whose teams use AI heavily but watch the output evaporate in chat logs',
      flow: [
        'capture',
        'shared vault state',
        'Claude builds · Hermes 24/7',
        'my review',
        'knowledge compounds',
      ],
      problem:
        'Most AI usage is a chat window, and chat windows forget. Every session starts from zero context, every answer worth keeping dies when the tab closes, and the same questions get asked and paid for again next month. A single general assistant also cannot do two jobs at once: available around the clock for quick interactions while running long, deep reasoning work. The result is AI that generates fast but compounds nothing.',
      solution:
        'The single source of truth is a structured markdown knowledge vault, shared by every agent in the system. Claude is the reasoning and building agent. A second autonomous agent runs around the clock on a VPS handling Telegram interactions and scheduled tasks. A capture pipeline feeds the vault from my phone. The two agents work like a small company: defined roles, plus handoff folders where one agent writes a task file and the other picks it up. Agents share state through files rather than chat history, so any agent can resume exactly where another stopped. Knowledge is compiled: raw sources are archived once, then distilled into a curated layer that agents read instead of rereading originals. Every question answered gets written back, so the system gets smarter with use.',
      tradeoffs: [
        {
          head: 'Files as shared state over chat memory',
          because:
            'chat history is unsearchable, unauditable, and dies with the session.',
        },
        {
          head: 'Compiled knowledge over rereading raw sources',
          because:
            'token cost has to stay flat while the source pile grows.',
        },
        {
          head: 'Two specialized agents with defined roles over one general assistant',
          because:
            'availability and depth are different jobs with different infrastructure.',
        },
        {
          head: 'Human as reviewer over full autonomy',
          because:
            'the binding constraint on AI output is trust in what ships, not speed of generation.',
        },
      ],
      impactDetail:
        'My own working infrastructure, in production daily. Deliverables that used to take three days now ship in one, and the vault holds the audit trail of what was decided and why. The deep dives on this page were drafted by ten agents running in parallel and reviewed by me in a single working session. The pattern transfers to any team: a shared context store, specialized agents, a human in the review loop, and knowledge that compounds instead of dying in chat logs.',
      watchNext: [
        'Retrieval cost at ten times the current source volume, since the compiled layer only stays cheap if compilation discipline holds.',
        'How much autonomy the always on agent can safely absorb before my review capacity becomes the new bottleneck.',
        'Whether handoff folders scale past two agents, or a real task queue with ownership and status becomes necessary.',
      ],
    },
  },
  {
    id: 'field-capture-pipeline',
    title: 'Field Capture to Knowledge Base Pipeline',
    description:
      'A note sent from my phone becomes a correctly filed, fully structured record in my knowledge base within seconds.',
    longDescription:
      'A Telegram bot as the capture surface, a self hosted n8n instance as the routing layer, an LLM step for classification, and structure applied at write time. The same pattern maps to field sales voice notes to CRM records, support observations to a knowledge base, warehouse issues to ticket queues.',
    impact: 'zero manual filing since launch',
    technologies: [
      'n8n',
      'Docker',
      'Telegram Bot API',
      'LLM Classification',
      'Webhook Orchestration',
    ],
    isPrivate: true,
    category: 'integration',
    systemNo: 4,
    artifactId: 'capture',
    deepDive: {
      status: 'Running daily',
      timeframe: 'since early 2026',
      audience:
        'operations, sales, and service leaders whose teams learn things in the field that never reach the system of record',
      flow: [
        'telegram message',
        'n8n webhook',
        'LLM classify',
        'filed note',
        'compiled knowledge',
      ],
      problem:
        'Knowledge dies in transit. People notice things on the move, in chats, on the road, between meetings, and almost none of it reaches the system of record. Filing a note properly means opening the right tool, choosing the right folder, and adding the right metadata, and nobody does that from a parking lot. Asking people to file manually fails within a week, every time.',
      solution:
        'The capture surface is a Telegram bot, because the chat app is already in everyone’s pocket. A message from my phone hits a webhook on a self hosted n8n instance running in Docker. n8n formats it as a structured markdown note, an LLM step classifies it into a type and an area and writes the correct metadata, and the finished note lands in the right folder of my knowledge vault, which syncs across devices. Later, an AI agent compiles captures into the permanent knowledge layer, so raw notes never pile up unprocessed. Structure is applied at write time, not promised for later.',
      tradeoffs: [
        {
          head: 'Capture friction over storage design as the thing to optimize',
          because: 'a system nobody feeds is a well organized empty box.',
        },
        {
          head: 'Self hosted n8n over a SaaS automation tool',
          because:
            'the pipeline touches personal and business data and runs at zero marginal cost.',
        },
        {
          head: 'The chat app already in my pocket over a dedicated capture app',
          because: 'every extra app is a place notes go to die.',
        },
        {
          head: 'Structure at write time over sort it out later',
          because: 'unfiled captures compound into a backlog nobody clears.',
        },
      ],
      impactDetail:
        'Running daily in my own infrastructure. I have not manually filed a capture since it went live. Capture happens at the moment of noticing rather than at the end of the day, which is the difference between a knowledge base that compounds and one that quietly decays. The architecture is deliberately boring, which is why it has needed no maintenance.',
      watchNext: [
        'Classification drift: the LLM tagging step needs periodic spot checks as the vault taxonomy grows.',
        'Silent failures: a webhook that dies quietly means captures vanish, so the next hardening step is a heartbeat check and a dead letter path.',
        'Multiuser scaling: many senders to many destinations with permissions is where the real routing design starts.',
      ],
    },
  },
  {
    id: 'knowledge-assistant',
    title: 'Knowledge Assistant with Eval Gates',
    description:
      'Retrieval augmented generation done like a production system, not a demo: cites every answer, refuses when unsure, cannot regress without an eval suite catching it.',
    longDescription:
      'Hybrid retrieval over a curated knowledge layer, cited answers, an abstention path when confidence is low, and a golden eval set run on every change to prompts, retrieval or data. Retrieved documents are treated as data, never as instructions.',
    impact: 'cited answers or honest abstention',
    technologies: [
      'RAG',
      'Hybrid Retrieval',
      'Eval Harness',
      'Claude',
      'Prompt Injection Defense',
    ],
    isPrivate: true,
    category: 'ai',
    systemNo: 7,
    artifactId: 'knowledge',
    deepDive: {
      status: 'Running daily',
      timeframe: 'since early 2026',
      audience:
        'engineering, IT, and platform leads who own internal knowledge and have already watched a chatbot pilot fail',
      flow: [
        'question',
        'hybrid retrieval',
        'cited answer or abstain',
        'eval suite on every change',
      ],
      problem:
        'Every company carries the same graveyard: a wiki nobody trusts, documents nobody finds, and by now usually a failed chatbot pilot. The pilot fails the same way each time. Someone embeds the documents, wires up retrieval, lets the model answer, and it demos beautifully. Then in production it answers confidently and wrongly, someone senior gets burned by it, and trust is gone for a year. The failure is not the model. It is that nobody built the trust layer around it.',
      solution:
        'Retrieval is hybrid: keyword and semantic search run together over a curated, compiled knowledge layer rather than a raw document dump. Every answer cites its sources. When retrieval confidence is low, the assistant says it does not know and names where it looked, instead of guessing. The trust layer is a golden eval set of real questions with verified answers, scored on groundedness, correctness, and correct abstention, run on every change, so an improvement is provable and a regression is caught before users see it. Retrieved documents are treated strictly as data, never as instructions, which closes the prompt injection path. Every wrong answer found in real use becomes a permanent eval case.',
      tradeoffs: [
        {
          head: 'A curated, compiled knowledge layer over embedding every raw document',
          because:
            'garbage retrieval is the top cause of wrong answers, and curation is cheaper than hallucination cleanup.',
        },
        {
          head: 'Correct abstention as a scored, first class outcome over always answering',
          because:
            'in internal knowledge a confident wrong answer costs more than a refusal.',
        },
        {
          head: 'The eval harness before the features over shipping the demo',
          because:
            'without evals you cannot tell an improvement from a regression, and the harness is the actual product.',
        },
        {
          head: 'Hybrid retrieval over pure semantic search',
          because:
            'exact terms like product names, error codes, and people are exactly where pure embeddings quietly fail.',
        },
      ],
      impactDetail:
        'I use this daily over my own knowledge base. Every question either returns a grounded, cited answer or a precise statement of what is missing, so I stopped rereading source documents. The eval suite is the real asset: each change is a measured decision, not a guess. For a company, the pattern is the deliverable. The same architecture drops onto an internal wiki, a support corpus, or a policy base without redesign.',
      watchNext: [
        'Groundedness drift as the corpus grows: score evals per content area, not just globally.',
        'Abstention rate over time: rising refusals mean stale or thin content, which turns the assistant into a live map of documentation debt.',
        'Retrieval cost and latency at scale: curation keeps the index small, but that discipline needs an owner once many teams contribute.',
      ],
    },
  },
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
    deepDive: {
      status: 'Built',
      audience:
        'engineers and technical hiring managers evaluating real time data and signal work',
      flow: [
        'live feeds',
        'convergence detection',
        'hedge filter',
        'specialization scores',
        'quality gated alerts',
      ],
      problem:
        'In a market with thousands of participants, the interesting information is almost never a single action. It is convergence: several consistently strong participants independently moving toward the same outcome. Raw feeds are noise, and no human can watch thousands of streams at once. Worse, naive signals are polluted by hedging, where a participant takes offsetting positions and looks committed while actually sitting neutral. If you cannot tell conviction from hedging, you are alerting on theater.',
      solution:
        'Polywhale tracks high volume participant behavior in real time on a FastAPI backend, with a React frontend and Supabase underneath. A pattern detection layer watches for convergence, the moment multiple high performing participants align on the same outcome. Hedge analysis then separates genuine conviction from offsetting noise, so a participant who is long and short the same event never registers as a signal. Each participant carries specialization scores, meaning a strong record in one category does not inflate credibility in another. Configurable alert thresholds and a real time notification system push only the signals that clear quality bars. A full admin panel handles threshold management and review, because a signal system you cannot tune is a signal system you eventually ignore.',
      tradeoffs: [
        {
          head: 'Conviction quality over signal volume',
          because:
            'a feed that cries wolf gets muted, and hedge analysis is what keeps the wolf calls real.',
        },
        {
          head: 'Following proven participants over predicting outcomes directly',
          because:
            'tracking who is reliably right is a tractable engineering problem, and predicting the world is not.',
        },
        {
          head: 'Configurable thresholds over fixed ones',
          because:
            'the right sensitivity depends on how much attention the user actually has to spend.',
        },
        {
          head: 'Specialization scoring over one global reputation',
          because:
            'being right about one domain says very little about another, and a single score hides that.',
        },
      ],
      impactDetail:
        'This is a personal project, built end to end by me alone, and I present it as exactly that. What it demonstrates is real time data engineering across the full stack, deliberate signal design, and the discipline of separating noise from conviction. That shape of problem shows up everywhere: fraud detection and market surveillance are the same architecture with different feeds.',
      watchNext: [
        'A backtesting harness to score historical signal precision.',
        'Per category leaderboards surfaced in the UI.',
        'Webhook delivery so alerts can feed other systems.',
      ],
    },
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
    deepDive: {
      status: 'Built',
      audience:
        'operators and analysts who need markets watched continuously without doing the watching themselves',
      flow: [
        'scheduled ingestion',
        'persistent store',
        'trend analysis',
        'structured outputs',
      ],
      problem:
        'Continuous market monitoring dies in practice because collection is manual. Someone pulls data when they remember, analysis happens in a stale spreadsheet, and by the time a trend is visible it is already priced in or past. The failure is rarely the analysis itself. It is that the raw material never arrives on time, or arrives with gaps nobody notices until the conclusions are quietly wrong.',
      solution:
        'PolyGod is an end to end automated pipeline for ingesting, processing and analyzing market data at scale. Collection workflows run on a schedule with no human trigger, so data lands whether or not anyone remembers to pull it. Everything persists in Supabase backed storage, which gives the system a memory, and memory is what turns isolated observations into trends. On top of that store, trend analysis runs across multiple categories. Outputs are structured to feed decisions rather than decorate a dashboard. Every run answers the same question: what changed, and does it matter.',
      tradeoffs: [
        {
          head: 'Boring reliable pipelines over clever models',
          because:
            'analysis on top of gappy data is confident nonsense, and pipeline reliability is where the value actually lives.',
        },
        {
          head: 'Structured outputs that feed decisions over dashboards',
          because: 'dashboards get admired and outputs get used.',
        },
        {
          head: 'Scheduled collection with quality checks over manual pulls',
          because:
            'the failure mode of manual is not bad data, it is no data.',
        },
      ],
      impactDetail:
        'Personal build, no clients attached. It shows data engineering fundamentals and the discipline of making the pipeline reliable before making the analysis clever. The pattern transfers directly to any domain that needs continuous monitoring: pricing, competitors, inventory. If a business depends on noticing change before it is obvious, this is the shape of the system that notices.',
      watchNext: [
        'Alerting on threshold breaks.',
        'More source connectors.',
        'Anomaly detection on top of trends.',
      ],
    },
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
    deepDive: {
      status: 'Built',
      audience:
        'creators and teams who generate AI images across multiple model providers',
      flow: [
        'prompt + carried context',
        'agent manager',
        'provider routing',
        'generate · compare · refine',
      ],
      problem:
        'Every image model has its own personality, its own pricing and its own failure modes. Creators end up bouncing between provider tabs, losing their prompts and settings with every switch, with no way to compare outputs side by side. Worse, committing to one provider means the whole workflow breaks the moment that service degrades or reprices. The real problem is not generation quality, it is fragmentation and lock in.',
      solution:
        'Canvas Pro puts one platform over several AI image providers. An agent manager orchestrates the different models behind a single interface, so the user never touches provider specific plumbing. Provider selection happens per generation, which lets you route a prompt to whichever model fits the style and the budget at that moment. Context aware prompting carries style context across generations, so each iteration builds on the last instead of restarting from a blank prompt box. The whole interface is tuned for rapid creative iteration: generate, compare, refine, repeat. Built with TypeScript, React and Supabase.',
      tradeoffs: [
        {
          head: 'Several providers behind one interface over committing to the best single model',
          because:
            'the best model changes monthly, so the switching cost should be a dropdown, not a migration.',
        },
        {
          head: 'An agent manager abstraction over hardcoded provider calls',
          because:
            'adding the next provider should be configuration, not a rewrite.',
        },
        {
          head: 'Iteration speed over feature breadth',
          because:
            'creative tools live or die on the tightness of the generate and compare loop.',
        },
        {
          head: 'Carrying context across generations over stateless prompting',
          because:
            'refinement is the actual workflow, and first outputs are never the keeper.',
        },
      ],
      impactDetail:
        'No revenue claims here; the point is what it proves. I can orchestrate multiple AI providers behind one clean abstraction, design the seams so the next integration is cheap, and make product decisions grounded in how creative work actually happens. That pattern, one manager over interchangeable model backends, is exactly what I build for anyone who does not want their stack welded to a single vendor.',
      watchNext: [
        'Cost aware automatic provider routing.',
        'Shared workspaces for team iteration.',
        'Prompt history with visual diffs.',
      ],
    },
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
    systemNo: 9,
    artifactId: 'draft',
    deepDive: {
      status: 'In development',
      timeframe: 'for the Aug 2026 draft',
      audience:
        'a consumer side proof piece: decision support under a hard clock, the same shape as inventory buying, pricing windows and incident response',
      flow: [
        'pick event',
        'live draft state',
        'decision brief',
        'ranked shortlist',
        'human picks',
      ],
      problem:
        'Fantasy Premier League Draft is a 12 man snake draft where every pick runs on a 30 second timer. When your turn comes, you weigh hundreds of available players against roster needs, positional scarcity, what the other 11 drafters just did, and who survives until your next pick. No human does that well under a hard clock; under pressure, drafters default to name recognition and burn value.',
      solution:
        'A hybrid of a local application and an AI reasoning layer. The local app polls the official FPL Draft API for live draft state, so it always knows exactly who is still on the board. All heavy analysis is precomputed before draft night: projections, value over replacement by position, scarcity curves. At pick time the app assembles a compact decision brief: my roster, available players, opponents rosters, picks until my next turn. Claude returns a ranked shortlist with one line of reasoning per name. I make the final call. The tool narrows the field; it does not draft for me.',
      tradeoffs: [
        {
          head: 'Precomputation over live reasoning',
          because:
            'the clock is a hard latency budget, and anything that can be computed before draft night must be computed before draft night.',
        },
        {
          head: 'A ranked shortlist with reasons over a single recommended pick',
          because:
            'the human holds context the model does not, and the tool has to support the decision rather than own it.',
        },
        {
          head: 'The official API as the single source of truth over screen scraping',
          because:
            'draft state must be exact; a stale board means recommending a player someone already took.',
        },
        {
          head: 'A compact assembled brief over dumping full data at the model',
          because: 'both latency and reasoning quality degrade as context grows.',
        },
      ],
      impactDetail:
        'A personal project, in active development for my August 2026 draft. What it demonstrates professionally: a human with 30 seconds and real stakes, and a system that compresses everything known into the few options that matter.',
      watchNext: [
        'Hit rate: how often the shortlist contains the pick I actually make, my proxy for trust.',
        'End to end latency from pick event to rendered shortlist, measured against the 30 second budget.',
        'Drift between precomputed projections and late news like injuries, and how much of that belongs in the live brief.',
      ],
    },
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
    deepDive: {
      status: 'Built',
      audience:
        'anyone comparing a car trip against a train ticket, and engineers curious how I keep LLMs away from arithmetic',
      flow: [
        'trip input',
        'Gemini parses',
        'deterministic cost engine',
        'route cache',
        'true cost out',
      ],
      problem:
        'Trip cost estimates lie by omission. The headline number is fuel, but the real cost of a drive includes parking at the destination, tolls along the way, and the extra fuel that climbs burn. So people compare a train ticket against a fuel estimate and pick the car for the wrong reason. Once the hidden half of the cost shows up, the decision often flips.',
      solution:
        'Real Cost Finder is a FastAPI backend with a cost calculation engine at its core. It computes the true cost of a trip: fuel adjusted for the elevation profile of the route, plus tolls and parking. The number you see is the number the trip will actually cost you, not the flattering one. A Gemini layer sits at the edges and handles unstructured input, so you can describe a trip in plain language and the engine still receives clean parameters. All arithmetic stays in deterministic code, and the model never computes a number. Frequently searched routes are cached, so repeat queries return instantly and cost almost nothing to serve.',
      tradeoffs: [
        {
          head: 'True cost over headline fuel estimate',
          because:
            'the hidden half of the cost is where decisions actually flip, and parking plus tolls routinely dwarf the fuel number people compare against.',
        },
        {
          head: 'A deterministic core with the LLM at the edges over letting the model compute',
          because:
            'a cost tool that hallucinates a toll is worse than no tool, so the model only parses input and never touches the math.',
        },
        {
          head: 'Caching frequent routes over computing everything live',
          because:
            'popular routes get asked daily, and serving them from cache drops both latency and API cost to near zero.',
        },
      ],
      impactDetail:
        'This is a personal project, so I will not dress it up with usage numbers it does not have. What it demonstrates is API design, deterministic computation with an LLM assisting only at the boundaries, and cost conscious engineering through the caching layer. The architecture is the point: the model makes the tool usable, the engine makes it trustworthy.',
      watchNext: [
        'Live toll data feeds for more countries.',
        'EV consumption models with charging costs.',
        'Side by side comparison against rail prices.',
      ],
    },
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
    deepDive: {
      status: 'Built',
      audience:
        'hiring managers and engineers who want to read real code before they talk to me',
      flow: [
        'API Football ingest',
        'transform',
        'statistical analysis',
        'Streamlit visuals',
      ],
      problem:
        'Football produces a flood of data every matchday and most of it goes to waste. Raw statistics answer nothing by themselves; a shot count or a possession figure means little until something connects it to formations, players and outcomes. Most hobby analysis lives in one off notebooks that cannot be rerun when the next matchday lands, so every new round of fixtures means starting over. I wanted analysis that survives contact with new data instead of dying in a notebook.',
      solution:
        'FootballAnalyzer is a reproducible data analysis pipeline built on pandas and NumPy, with API Football as the single data source. It ingests large datasets covering player performance metrics, team formations and match outcomes. The analysis layer runs statistical work aimed at specific questions rather than dumping every number the source offers. Findings render as interactive Streamlit visualizations, so exploring a result takes a click rather than a code change. When new data arrives the pipeline reruns end to end; nothing is rebuilt by hand. The whole thing is open source on GitHub, so the claims above are checkable in about ten minutes of reading.',
      tradeoffs: [
        {
          head: 'A reproducible pipeline over one off notebooks',
          because:
            'analysis you cannot rerun next week is a screenshot, not a system.',
        },
        {
          head: 'Visualizations that answer specific questions over dashboards that show everything',
          because: 'a chart without a question behind it is decoration.',
        },
        {
          head: 'The public API as the single source over scraping',
          because:
            'schema stability is what keeps a pipeline alive past its first month.',
        },
        {
          head: 'Open source over private',
          because: 'public code is the only unfakeable code sample.',
        },
      ],
      impactDetail:
        'This is an open source personal project, not a client engagement, and I present it as exactly that. What it demonstrates is data engineering fundamentals: ingestion, transformation, statistical analysis and visualization joined into one reproducible chain. It also shows the discipline that separates a system from a script, because the pipeline reruns without me. Anyone can read the code on GitHub before an interview, which says more than anything I could write here.',
      watchNext: [
        'Schema changes upstream in the API Football source, the main breakage risk.',
        'Coverage of new leagues and seasons without pipeline edits.',
        'Automating matchday reruns on a schedule.',
      ],
    },
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
    githubUrl: 'https://github.com/dureys/dureys.github.io',
    liveUrl: 'https://dureys.github.io/',
    category: 'web',
    deepDive: {
      status: 'In production',
      timeframe: 'since March 2026',
      audience:
        'hiring managers and technical leads deciding whether my claims survive inspection',
      flow: [
        'typed data',
        'Next.js static export',
        'GitHub Actions',
        'GitHub Pages',
      ],
      problem:
        'A portfolio for an AI systems builder has to prove two things a PDF cannot. First, that I ship polished product, not just scripts and notebooks. Second, that my claims hold up when someone pushes on them. Most candidate portfolios are template sites with screenshots, and those prove neither. I needed the site itself to be evidence.',
      solution:
        'Built from scratch on Next.js with TypeScript, Tailwind CSS and Framer Motion. Styling comes from a token based design system covering color, type and spacing, not ad hoc classes scattered through the markup. The landing page carries an interactive command console that visitors can actually operate. Every system on the site gets a structured deep dive covering problem, solution, tradeoffs, impact and what to watch, all rendered from typed data. The whole thing is statically exported, and a GitHub Actions pipeline deploys it to GitHub Pages on every push to main. The deep dive content itself was drafted by my own multi agent system and reviewed by me, which is the exact working method the site describes, demonstrated in place.',
      tradeoffs: [
        {
          head: 'Static export over server rendering',
          because:
            'a portfolio needs zero operations and a global CDN more than it needs dynamic anything.',
        },
        {
          head: 'Typed data driving the UI over content pasted into markup',
          because: 'adding system eleven should be a data entry, not a redesign.',
        },
        {
          head: 'One design system over per section styling',
          because: 'consistency is what reads as craft.',
        },
        {
          head: 'Deep dives with named tradeoffs over highlight reels',
          because:
            'a hiring manager who can push on the reasoning trusts the result more.',
        },
      ],
      impactDetail:
        'The site is live in production and redeploys automatically on every push to main. I will be honest about the numbers: there is no revenue figure or user metric to point at here. Its value is structural. It is simultaneously the container of the proof and part of the proof, since the pipeline, the design system and the agent drafted content are all open to inspection.',
      watchNext: [
        'Load and Lighthouse numbers as the exhibit count grows.',
        'Whether adding a new system stays pure data entry.',
        'Which console commands visitors actually run.',
      ],
    },
  },
];

export const referenceDesigns: Project[] = [
  {
    id: 'spend-intelligence-engine',
    title: 'Proactive Spend Intelligence Engine, Not a Chatbot',
    description:
      'Finance teams do not want to chat with their spend tool; they want it to interrupt them correctly. One verified financial engine under four scoped agents.',
    longDescription:
      'One trusted financial engine at the bottom, four specialized agents on top, triggered by ledger events instead of chat, delivering findings inside the approval queue, Slack and email, and exposed as an MCP server so a customer owned assistant can query it as a trusted data source.',
    technologies: [
      'Multi Agent Orchestration',
      'Semantic Layer',
      'MCP Server',
      'Evals',
      'Human in the Loop',
    ],
    isPrivate: true,
    category: 'ai',
    systemNo: 3,
    artifactId: 'spend',
    deepDive: {
      status: 'Reference design',
      timeframe: '2026',
      audience:
        'product and engineering leaders at B2B spend management platforms who own the AI roadmap',
      flow: [
        'ledger event',
        'supervisor',
        'domain agent',
        'verified engine',
        'approval queue · Slack · MCP',
      ],
      problem:
        'Every spend platform is bolting a chat assistant onto its ledger, and most will go unused. Finance people do not open a chat window to interrogate their spend; they live in approval queues, close checklists and Slack. Meanwhile a model that computes numbers itself will eventually state a wrong figure with full confidence, and one wrong number costs more trust than a hundred right ones earn. The opportunity is not conversation but correct interruption.',
      solution:
        'The bottom layer is one trusted financial engine: a governed semantic layer over the ledger where every number is computed and verified, enrichment like merchant resolution and currency normalization, document retrieval over policies and contracts, and a verifier that rechecks every output. On top run four specialized agents for finance, accounting, approvals and policy, each a plan, act, verify loop scoped to one domain, all querying the same engine, so many agents never means many sources of truth. The trigger layer is the ledger itself: a crossed budget threshold, a duplicate vendor, a policy breach wakes the relevant agent; nobody opens a chat. Findings land where people already work, with a human approving anything that moves money. The second exit: the engine is exposed as an MCP server, so a customer owned AI assistant queries it as a trusted data source; the product becomes the financial engine, not necessarily the interface.',
      tradeoffs: [
        {
          head: 'The model narrates numbers over computing them',
          because:
            'every figure comes from the engine and passes the verifier, and a confidently wrong number in finance is worse than no answer.',
        },
        {
          head: 'Four scoped agents over one mega assistant, and no further splitting',
          because:
            'I only separate domains with different tools, data and approval rules, and orchestration cost grows faster than value.',
        },
        {
          head: 'Significance gated interruptions over alerting on every event',
          because:
            'proactive done wrong is notification spam, the same "nobody uses it" failure relocated from chat to alerts.',
        },
        {
          head: 'Tenant isolation from day one over retrofitting',
          because:
            'retrofitting isolation into a live financial product is a rebuild, not a patch.',
        },
      ],
      impactDetail:
        'Design stage work, stated as such. It neutralizes the two default failures of AI in fintech: the unused chat assistant and the hallucinated number. A pilot would prove that the verifier holds on a golden set of real spend questions scored on correctness, groundedness and correct abstention; that significance gated alerts get acted on instead of muted; and that finance users accept findings inside their existing approval flow.',
      watchNext: [
        'Alert action rate: the share of interruptions ending in an approval, correction or reasoned dismissal; drift toward mute means the significance threshold is wrong.',
        'Abstention quality on the golden set: saying "I cannot verify this" at the right moment is the trust signal, not answer volume.',
        'MCP query share: if customers own assistants start pulling from the engine, the interface strategy should follow that usage, not fight it.',
      ],
    },
  },
  {
    id: 'ap-automation',
    title: 'Accounts Payable Automation with Judgment Gates',
    description:
      'Automation that earns trust by knowing when to stop: clean invoices post themselves, everything else reaches a human already diagnosed.',
    longDescription:
      'Intake from email and upload, LLM extraction with confidence scores, two way and three way matching, straight through processing only within tolerance, diagnosed exceptions with a recommended action, and abstention below the confidence threshold.',
    technologies: [
      'LLM Extraction',
      'Two and Three Way Matching',
      'Confidence Thresholds',
      'ERP Integration',
      'Eval Set from Corrections',
    ],
    isPrivate: true,
    category: 'integration',
    systemNo: 6,
    artifactId: 'ap',
    deepDive: {
      status: 'Reference design',
      timeframe: '2026',
      audience:
        'finance operations and AP leads who own invoice processing cost and payment accuracy',
      flow: [
        'invoice in',
        'extract + confidence',
        '2 and 3 way match',
        'approval gates',
        'ERP · diagnosed exceptions',
      ],
      problem:
        'AP teams burn hours on intake alone: invoices arrive as email attachments, PDFs, and portal downloads, and someone has to key them in. Then comes matching against purchase orders and goods receipts, chasing approvers, and posting to the ERP. The loud failure is a duplicate or wrong payment. The quiet failures cost more over time: early payment discounts expire in queues, and vendors learn that getting paid by you is a fight. In payments, one confident mistake erases the savings of a thousand correct runs.',
      solution:
        'An intake layer captures invoices from email and upload into a single pipeline. An extraction step pulls structured fields using an LLM with a template fallback for known vendor formats, and every field carries a confidence score. A matching engine runs two way and three way matching against purchase orders and goods receipts. Anything that matches within tolerance flows straight through to approval gates set by amount threshold; posting to the ERP happens only after gates pass. Exceptions route to a human queue with the discrepancy already diagnosed and a recommended action attached. Below the confidence threshold the system abstains entirely rather than guessing. Every human correction becomes a permanent test case.',
      tradeoffs: [
        {
          head: 'Straight through processing only within tolerance over maximizing the automation rate',
          because: 'one wrong payment costs more than ten manual reviews.',
        },
        {
          head: 'Diagnosed exceptions over a plain exception queue',
          because:
            'the expensive human time is spent figuring out why something failed, not clicking approve.',
        },
        {
          head: 'Abstention below the confidence threshold over always producing an answer',
          because:
            'in payments a confident wrong extraction is the worst possible output.',
        },
        {
          head: 'An eval set built from real corrected invoices over synthetic test data',
          because:
            'production failures are the only distribution that actually matters.',
        },
      ],
      impactDetail:
        'A reference design, so the honest claim is what a pilot would prove: a touchless rate above 60 percent on clean invoices within the first quarter, while holding wrong payment incidents at zero. Zero wrong payments is the constraint; touchless rate is the score.',
      watchNext: [
        'Touchless rate trend as the eval set grows, since corrections should compound into fewer exceptions.',
        'Exception aging in the human queue, to confirm the diagnosis actually shortens handle time rather than just decorating it.',
        'Extraction drift when new vendors or changed templates arrive, caught by confidence scores dropping before errors appear.',
      ],
    },
  },
  {
    id: 'adoption-playbook',
    title: 'AI Adoption From Zero: A 90 Day Playbook',
    description:
      'AI adoption is a trust problem, not a technology problem. The tools already work; the failure is always in how they are introduced.',
    longDescription:
      'Prerequisites checked before day one: an executive sponsor, committed budget, and a concrete trigger for why now. Then one department deep, read only insight first, a human gated action second, and a champion who demos to their own team before anything replicates.',
    technologies: [
      'Change Management',
      'Champion Model',
      '30 60 90 Sequencing',
      'Contribution Metrics',
    ],
    isPrivate: true,
    category: 'ai',
    systemNo: 8,
    deepDive: {
      status: 'Built',
      timeframe: 'distilled 2024 to 2026',
      audience:
        'heads of operations, department leads, and executives who bought AI licenses that nobody actually uses',
      flow: [
        'sponsor check',
        'one dept, read only',
        'human gated action',
        'champion demos',
        'replicate',
      ],
      problem:
        'Most companies starting with AI buy licenses, run a demo, and announce a rollout. Six months later usage is near zero and the tool is quietly resented. The teams were told the technology would transform their work, which they correctly heard as either a threat or noise. Nobody picked a specific process, nobody owned the result, and nothing visibly improved for the people doing the work.',
      solution:
        'A method, not a software system, run on a strict sequence. Before day one I check three prerequisites: an executive sponsor, committed budget, and a concrete trigger for why now; if any is missing, the engagement fails and I say so. First 30 days: one department with a willing champion, one painful measurable process, one read only insight the team checks every week. The goal of the first month is trust, not impact. Days 30 to 60: the first action with a human gate; the champion learns to demo to their own team, because peers convince peers. Days 60 to 90: extend to a second department using the first as the reference case, template what worked so it replicates without me in the room, and establish the eval habit.',
      tradeoffs: [
        {
          head: 'One department deep over all departments shallow',
          because: 'a working reference beats ten pilots.',
        },
        {
          head: 'Read only insight first over impressive automation first',
          because: 'trust is earned on things that cannot break anything.',
        },
        {
          head: 'Champions over mandates',
          because:
            'peer proof spreads while top down usage orders create malicious compliance.',
        },
        {
          head: 'Measuring contribution over measuring usage',
          because:
            'login counts reward theater; the honest question is whether the tool changed a decision or saved an hour this week.',
        },
      ],
      impactDetail:
        'Built the slow way, leading internal AI and automation across sales, procurement, logistics and support. Every rollout that framed the tool as enhancing the team stuck; every one that smelled like replacement died quietly. A company running this playbook should expect one department genuinely using AI on a real process within 90 days, a second department asking for it, and an honest measurement habit that outlives the pilot.',
      watchNext: [
        'Whether the champion keeps demoing after I leave; if adoption still needs me in the room, it has not taken.',
        'Whether the weekly eval habit survives month four, because trust decays the first time the tool is wrong and nobody catches it.',
        'Whether the second department copied the template or reinvented it, which tells me if the playbook actually transferred.',
      ],
    },
  },
  {
    id: 'sales-ops-starter-pack',
    title: 'Sales Ops Automation Starter Pack',
    description:
      'Five n8n workflow templates that give a small B2B team a working revenue operations backbone in a day, without hiring anyone.',
    longDescription:
      'Lead capture, enrichment and scoring, CRM hygiene, real time alerting, and a Monday morning digest, each documented with setup steps and named customization points, all running on self hosted n8n at near zero operating cost.',
    technologies: [
      'n8n Templates',
      'LLM Scoring',
      'CRM Integration',
      'Slack and Telegram Alerts',
    ],
    isPrivate: true,
    category: 'integration',
    systemNo: 10,
    deepDive: {
      status: 'Reference design',
      timeframe: '2026',
      audience:
        'founders and sales leads at small B2B teams who run revenue operations out of an inbox and a spreadsheet',
      flow: [
        'capture',
        'enrich + score',
        'CRM hygiene',
        'real time alerts',
        'Monday digest',
      ],
      problem:
        'Small teams know automation would save them hours every week, but they cannot justify a consultant or a full time RevOps hire. Off the shelf SaaS tools each solve one slice of the problem and add another subscription. Meanwhile leads leak between inbox, spreadsheet and CRM, follow ups slip, and nobody trusts the pipeline numbers. The real cost is the deals that quietly die because no system was watching them.',
      solution:
        'Five n8n workflow templates, each documented with setup steps, a credentials guide and named customization points. Lead capture turns every form fill and inbound email into a structured CRM record. Lead enrichment pulls company data automatically, then an LLM step scores fit against the profile of the customers the team actually closes. CRM hygiene flags duplicates, surfaces stale deals weekly and normalizes fields. Alerting posts deal movements and hot lead signals to Slack or Telegram in real time. The weekly digest sends one Monday morning summary of pipeline movement and the three actions that matter most. The flows compose: a team can adopt one, prove it, then add the next.',
      tradeoffs: [
        {
          head: 'Templates over custom builds',
          because:
            'the sales process of a small team is 80 percent identical to the next one, and the remaining 20 percent is configuration, not engineering.',
        },
        {
          head: 'Self hosted n8n over SaaS automation subscriptions',
          because:
            'the whole point for a small team is cost that stays near zero as volume grows.',
        },
        {
          head: 'Five flows that compose over one monolithic mega flow',
          because:
            'teams adopt one piece at a time and a monolith fails as one unit.',
        },
        {
          head: 'Opinionated defaults with named customization points over infinite configurability',
          because:
            'a template that needs a workshop to configure defeats its own purpose.',
        },
      ],
      impactDetail:
        'A reference design packaged as a product, so I will not claim customer numbers it does not have. The underlying flows mirror systems I have run in production, including a lead enrichment engine that lifted conversion 40 percent at a B2B company.',
      watchNext: [
        'Setup completion rate: how many buyers get all five flows live within a week without asking for help.',
        'Which template gets adopted first, because that reveals the real entry point pain and what the pack should lead with.',
        'LLM scoring drift: whether fit scores stay aligned with the deals the team actually closes, or need a feedback loop.',
      ],
    },
  },
];
