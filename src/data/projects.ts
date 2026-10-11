import { Project } from '@/types';

export const enterpriseProjects: Project[] = [
  {
    "id": "lead-qualification",
    "title": "AI lead enrichment & sales preparation",
    "description": "Account research brought into the Salesforce workflow, with user feedback guiding rollout.",
    "longDescription": "Shadowed sales representatives to identify the research bottleneck, then connected LLM enrichment with Make and Salesforce. Localised the workflow and embedded a feedback widget so users could inform subsequent changes. Owned requirements, acceptance testing and adoption.",
    "technologies": [
      "Salesforce",
      "Make",
      "LLM enrichment",
      "User discovery",
      "UAT"
    ],
    "isPrivate": true,
    "category": "ai",
    "deepDive": {
      "status": "Enterprise delivery",
      "timeframe": "Andercore · 2024 to 2025",
      "audience": "Sales and revenue operations teams",
      "flow": [
        "Account record",
        "LLM enrichment via Make",
        "Salesforce context",
        "Representative review",
        "User feedback"
      ],
      "problem": "Sales representatives needed account context to prioritise and prepare their next interaction. Repetitive research interrupted the sales workflow.",
      "solution": "Shadowed sales representatives to identify the research bottleneck, then connected LLM enrichment with Make and Salesforce. Localised the workflow and embedded a feedback widget so users could inform subsequent changes. Owned requirements, acceptance testing and adoption.",
      "tradeoffs": [
        {
          "head": "Research inside the existing CRM",
          "because": "representatives could use the result in their normal workflow."
        },
        {
          "head": "Iteration with sales users",
          "because": "local terminology and account context matter as much as the initial model output."
        }
      ],
      "impactDetail": "40% higher lead conversion at Andercore, with account research integrated into the sales workflow.",
      "watchNext": [
        "Enrichment completeness and incorrect account matches",
        "Conversion by segment and use of enriched records",
        "Feedback from sales representatives"
      ]
    },
    "systemNo": 1,
    "impact": "40% higher lead conversion"
  },
  {
    "id": "case-management",
    "title": "AI support classification & routing",
    "description": "Incoming email classified by category and subcategory, then routed to the responsible department.",
    "longDescription": "Connected incoming email, Make and OpenAI to classify requests and route them to the responsible department. Piloted selected categories before expanding. Owned stakeholder alignment, testing, documentation and training.",
    "technologies": [
      "Make",
      "OpenAI",
      "Email integration",
      "Workflow routing"
    ],
    "isPrivate": true,
    "category": "ai",
    "deepDive": {
      "status": "Enterprise delivery",
      "timeframe": "Andercore · 2024 to 2025",
      "audience": "Customer service and operations teams",
      "flow": [
        "Incoming email",
        "Make",
        "OpenAI classification",
        "Category and subcategory",
        "Department routing"
      ],
      "problem": "Requests required manual sorting before the responsible team could start resolving them.",
      "solution": "Connected incoming email, Make and OpenAI to classify requests and route them to the responsible department. Piloted selected categories before expanding. Owned stakeholder alignment, testing, documentation and training.",
      "tradeoffs": [
        {
          "head": "A limited category pilot",
          "because": "routing errors are easier to inspect before the scope expands."
        },
        {
          "head": "Department ownership in the workflow",
          "because": "a useful classification must lead to a responsible team and a next action."
        }
      ],
      "impactDetail": "60% less support triage time at Andercore, following a pilot and expansion into additional routing categories.",
      "watchNext": [
        "Incorrect department assignments",
        "Time waiting for the first responsible owner",
        "New request types outside the initial categories"
      ]
    },
    "systemNo": 2,
    "impact": "60% less triage time"
  },
  {
    "id": "salesforce-rebuild",
    "title": "Five department platform rebuild",
    "description": "A common Salesforce roadmap across engineering, operations and commercial teams.",
    "longDescription": "Owned the product roadmap, user stories and technical specifications. Coordinated migration and a phased rollout of Sales Cloud, Service Cloud and Sitetracker, with approvals, lead routing, onboarding and training for field and office teams.",
    "technologies": [
      "Sales Cloud",
      "Service Cloud",
      "Sitetracker",
      "Salesforce Flow",
      "Data migration"
    ],
    "isPrivate": true,
    "category": "salesforce",
    "deepDive": {
      "status": "Enterprise delivery",
      "timeframe": "ubitricity · 2023 to 2024",
      "audience": "Organisations reconciling processes across departments",
      "flow": [
        "Department requirements",
        "Prioritised roadmap",
        "Migration",
        "Phased rollout",
        "Training"
      ],
      "problem": "Five departments had different process and data requirements that needed to work together in one operational platform.",
      "solution": "Owned the product roadmap, user stories and technical specifications. Coordinated migration and a phased rollout of Sales Cloud, Service Cloud and Sitetracker, with approvals, lead routing, onboarding and training for field and office teams.",
      "tradeoffs": [
        {
          "head": "A phased rollout",
          "because": "migration dependencies and user readiness needed to be coordinated."
        },
        {
          "head": "Shared requirements with explicit priorities",
          "because": "local process requests still had to fit a coherent data and operating model."
        }
      ],
      "impactDetail": "Delivered on time and within budget across five departments.",
      "watchNext": [
        "Migration exceptions",
        "Adoption across field and office teams",
        "Ownership of process changes after rollout"
      ]
    },
    "impact": "Five departments · on time and within budget"
  }
];

export const personalProjects: Project[] = [
  {
    "id": "task-calendar",
    "title": "AI task intake & calendar integration",
    "description": "Natural language requests become validated task and calendar actions, with recovery when an external write fails.",
    "longDescription": "Built and deployed an independent service using OpenAI structured plans and Pydantic validation. PostgreSQL stores plans and operations. Queries cannot carry write actions, ambiguous dates trigger clarification, and retries reconcile earlier writes. Authenticated intake, health checks, backups and a verified restore support operation. I own workflow rules and acceptance, with coding agents supporting implementation.",
    "technologies": [
      "Python",
      "OpenAI",
      "Pydantic",
      "PostgreSQL",
      "Telegram",
      "Trello",
      "Google Calendar",
      "Docker",
      "Hetzner"
    ],
    "isPrivate": false,
    "category": "integration",
    "deepDive": {
      "status": "Deployed project",
      "timeframe": "Independent project",
      "audience": "Teams coordinating tasks across chat and planning tools",
      "flow": [
        "Telegram request",
        "Structured AI plan",
        "Validation",
        "Stored operations",
        "Trello and Calendar"
      ],
      "problem": "Natural language requests need to become consistent actions across multiple tools, including when dates are unclear or a downstream service fails.",
      "solution": "Built and deployed an independent service using OpenAI structured plans and Pydantic validation. PostgreSQL stores plans and operations. Queries cannot carry write actions, ambiguous dates trigger clarification, and retries reconcile earlier writes. Authenticated intake, health checks, backups and a verified restore support operation. I own workflow rules and acceptance, with coding agents supporting implementation.",
      "tradeoffs": [
        {
          "head": "Deterministic calendar routines",
          "because": "mirroring and date sorting have explicit rules and need no model call."
        },
        {
          "head": "Persisted operations and reconciliation",
          "because": "a retry must account for an external write that may already have succeeded."
        }
      ],
      "impactDetail": "Deployed for personal task coordination, with validated actions and tested recovery after failed operations.",
      "watchNext": [
        "Duplicate actions after a retry",
        "Requests that require clarification",
        "Backup restoration and failed operation recovery"
      ]
    },
    "systemNo": 3
  },
  {
    "id": "fantasy-magazine",
    "title": "AI publishing product | Fantasy football",
    "description": "Official league data becomes a designed publication, with score validation and editorial review before release.",
    "longDescription": "Building a publishing workflow that combines official league results and player data with analysis and a designed magazine. Numerical validation comes before editorial generation. Forecasts are fixed before matches and assessed against outcomes. I own scope, data quality, editorial review and preparation for reader launch, using AI coding agents for implementation.",
    "technologies": [
      "Python",
      "REST APIs",
      "SQLite",
      "AI assisted editorial",
      "HTML",
      "PDF"
    ],
    "isPrivate": false,
    "category": "data",
    "deepDive": {
      "status": "Prototype in testing",
      "timeframe": "Preparing for reader launch",
      "audience": "Participants who want useful analysis and a readable story from their league data",
      "flow": [
        "Official league data",
        "Score validation",
        "Forecast comparison",
        "AI assisted editorial",
        "Designed magazine"
      ],
      "problem": "Raw scores tell readers what happened, but a useful recurring publication needs reliable numbers, context and an editorial structure.",
      "solution": "Building a publishing workflow that combines official league results and player data with analysis and a designed magazine. Numerical validation comes before editorial generation. Forecasts are fixed before matches and assessed against outcomes. I own scope, data quality, editorial review and preparation for reader launch, using AI coding agents for implementation.",
      "tradeoffs": [
        {
          "head": "Verified numbers before generated prose",
          "because": "a persuasive narrative cannot compensate for an incorrect score."
        },
        {
          "head": "Forecasts fixed before results",
          "because": "evaluation is meaningful only when predictions cannot change after the event."
        }
      ],
      "impactDetail": "The prototype reconciled 60 historical scores and passed 19 regression tests. Current focus: reader testing, editorial usefulness and a repeatable publication workflow.",
      "watchNext": [
        "Score agreement with official results",
        "Editorial usefulness in reader testing",
        "Publication preparation time"
      ]
    },
    "systemNo": 4
  },
  {
    "id": "knowledge-tools",
    "title": "MCP knowledge tools for AI delivery",
    "description": "Source retrieval and capture keep research, project decisions and working context available across AI sessions.",
    "longDescription": "Built a knowledge environment with custom MCP tools for keyword search, full note retrieval, new captures and recent activity. Inputs are validated, article paths are restricted and earlier captures are preserved. Source material stays separate from operating instructions. I use the environment for ongoing research and delivery.",
    "technologies": [
      "Obsidian",
      "Python",
      "FastMCP",
      "Pydantic",
      "MCP"
    ],
    "isPrivate": false,
    "category": "ai",
    "deepDive": {
      "status": "In use",
      "timeframe": "Independent project",
      "audience": "Builders and operators coordinating work across AI sessions",
      "flow": [
        "Capture",
        "Reviewed knowledge",
        "MCP search",
        "Full source retrieval",
        "Project work"
      ],
      "problem": "Research and decisions are easily lost across separate AI conversations, leading to repeated work and inconsistent assumptions.",
      "solution": "Built a knowledge environment with custom MCP tools for keyword search, full note retrieval, new captures and recent activity. Inputs are validated, article paths are restricted and earlier captures are preserved. Source material stays separate from operating instructions. I use the environment for ongoing research and delivery.",
      "tradeoffs": [
        {
          "head": "Small tools with explicit file boundaries",
          "because": "each operation can be understood and checked."
        },
        {
          "head": "Keyword search and full source reads",
          "because": "this implementation needs inspectable retrieval without claiming a vector search platform."
        }
      ],
      "impactDetail": "Used in ongoing research, planning and project delivery. Fixture checks cover retrieval, capture preservation and file access boundaries.",
      "watchNext": [
        "Whether retrieved sources answer the working question",
        "Stale or conflicting decisions",
        "Captures that have not yet been reviewed"
      ]
    },
    "systemNo": 5
  },
  {
    "id": "multi-agent-crm",
    "title": "Account research to reviewable outreach",
    "description": "Three AI stages connect account enrichment, segmentation and outreach preparation.",
    "longDescription": "Built a CRM prototype where enrichment, segmentation and drafting agents exchange structured outputs. Segmentation uses deal history and engagement; stage outputs and anomaly flags remain inspectable. I own the business rules, integration choices and acceptance. External outreach remains subject to human approval.",
    "technologies": [
      "OpenAI",
      "Ollama",
      "pandas",
      "Streamlit",
      "REST APIs"
    ],
    "isPrivate": false,
    "category": "ai",
    "deepDive": {
      "status": "Working prototype",
      "timeframe": "Independent project",
      "audience": "Sales teams handling repetitive account preparation",
      "flow": [
        "Account",
        "API enrichment",
        "Segmentation",
        "Outreach draft",
        "Human review"
      ],
      "problem": "Account research, segmentation and outreach drafting are often separate tasks with inconsistent handoffs.",
      "solution": "Built a CRM prototype where enrichment, segmentation and drafting agents exchange structured outputs. Segmentation uses deal history and engagement; stage outputs and anomaly flags remain inspectable. I own the business rules, integration choices and acceptance. External outreach remains subject to human approval.",
      "tradeoffs": [
        {
          "head": "Separate stages",
          "because": "a failed step can be investigated without rerunning the whole workflow."
        },
        {
          "head": "Human approval before outreach",
          "because": "a draft needs a commercial owner before it reaches another person."
        }
      ],
      "impactDetail": "Working prototype with reviewable stages. No production customer adoption or conversion result is attributed to this independent project.",
      "watchNext": [
        "Incorrect account matches",
        "Draft quality and required edits",
        "Errors at handoff between stages"
      ]
    },
    "systemNo": 6
  },
  {
    "id": "routing-evaluation",
    "title": "Support routing evaluation",
    "description": "Compare rules and semantic classification before deciding which requests should be automated.",
    "longDescription": "Built a harness comparing keyword rules with semantic classification on 20 authored support cases. Expected and actual routes and review thresholds remain visible. Failures can be retained as regression cases.",
    "technologies": [
      "Rules",
      "Semantic classification",
      "Evaluation",
      "Review thresholds"
    ],
    "isPrivate": false,
    "category": "ai",
    "deepDive": {
      "status": "Working prototype",
      "timeframe": "Evaluation harness",
      "audience": "Teams deciding where automated routing is appropriate",
      "flow": [
        "Authored support cases",
        "Rules and semantic routes",
        "Expected versus actual",
        "Error inspection",
        "Review threshold"
      ],
      "problem": "A routing workflow needs a way to expose incorrect automatic decisions and the requests it sends for review.",
      "solution": "Built a harness comparing keyword rules with semantic classification on 20 authored support cases. Expected and actual routes and review thresholds remain visible. Failures can be retained as regression cases.",
      "tradeoffs": [
        {
          "head": "Errors alongside automation coverage",
          "because": "a higher routing rate is not useful if it hides more incorrect assignments."
        }
      ],
      "impactDetail": "Working evaluation demonstration. Authored test cases do not establish production accuracy.",
      "watchNext": [
        "Wrong automatic decisions",
        "Review workload",
        "Coverage of new request categories"
      ]
    },
    "systemNo": 7
  },
  {
    "id": "polywhale",
    "title": "Polywhale | Signal analysis prototype",
    "description": "A data analysis prototype exploring convergence patterns across participant activity.",
    "longDescription": "A data analysis prototype exploring convergence patterns across participant activity. Built with AI implementation support.",
    "technologies": [
      "FastAPI",
      "React",
      "Supabase",
      "REST APIs"
    ],
    "isPrivate": false,
    "category": "data"
  },
  {
    "id": "polygod",
    "title": "PolyGod | Market analytics prototype",
    "description": "A prototype exploring scheduled data collection and structured market analysis.",
    "longDescription": "A prototype exploring scheduled data collection and structured market analysis. Built with AI implementation support.",
    "technologies": [
      "Supabase",
      "Data pipelines",
      "Workflow automation"
    ],
    "isPrivate": false,
    "category": "data"
  },
  {
    "id": "canvas-pro",
    "title": "Canvas Pro | AI image tools",
    "description": "A prototype for working with image generation across model providers.",
    "longDescription": "A prototype for working with image generation across model providers. Built with AI implementation support.",
    "technologies": [
      "TypeScript",
      "React",
      "Supabase",
      "AI APIs"
    ],
    "isPrivate": false,
    "category": "web"
  },
  {
    "id": "draft-ai-ace",
    "title": "Draft AI Ace | Draft decision support",
    "description": "A fantasy sports prototype exploring player recommendations under a draft clock.",
    "longDescription": "A fantasy sports prototype exploring player recommendations under a draft clock. Built with AI implementation support.",
    "technologies": [
      "TypeScript",
      "React",
      "Supabase",
      "AI assistance"
    ],
    "isPrivate": false,
    "category": "ai"
  },
  {
    "id": "real-cost-finder",
    "title": "Real Cost Finder",
    "description": "A travel comparison prototype separating language based input interpretation from cost calculations.",
    "longDescription": "A travel comparison prototype separating language based input interpretation from cost calculations. Built with AI implementation support.",
    "technologies": [
      "Python",
      "FastAPI",
      "Gemini API",
      "REST APIs"
    ],
    "isPrivate": false,
    "category": "web"
  },
  {
    "id": "football-analyzer",
    "title": "FootballAnalyzer",
    "description": "A football data analysis project combining API ingestion, transformations and visual exploration.",
    "longDescription": "A football data analysis project combining API ingestion, transformations and visual exploration. Built with AI implementation support.",
    "technologies": [
      "pandas",
      "NumPy",
      "Streamlit",
      "API Football"
    ],
    "isPrivate": false,
    "category": "data",
    "githubUrl": "https://github.com/dureys/FootballAnalyzer"
  }
];

export const referenceDesigns: Project[] = [
  {
    "id": "family-inquiry",
    "title": "Textile sales inquiry to quotation brief",
    "description": "A proposed workflow for Dodanlı / Prizma that prepares complete inquiries and keeps price and availability approval with the team.",
    "longDescription": "Proposed flow: extract product, dimensions, units, quantity, destination and timing; request missing fields; save the source message and owner in a shared queue; prepare a draft for approval. Related proposals cover approved customer replies, consistent website product information and follow up tracking. Tool choices are proposed, not deployed.",
    "technologies": [
      "Make",
      "Structured AI extraction",
      "Shared inquiry tracking",
      "Human review"
    ],
    "isPrivate": false,
    "category": "integration",
    "deepDive": {
      "status": "Reference design",
      "timeframe": "Proposed family business workflow",
      "audience": "Small textile and carpet operations handling sales inquiries",
      "flow": [
        "Email or website inquiry",
        "Required fields",
        "Missing information check",
        "Quotation brief",
        "Team approval"
      ],
      "problem": "An inquiry may lack dimensions, units, quantity or delivery requirements, leaving the team to collect essentials before preparing a quote.",
      "solution": "Proposed flow: extract product, dimensions, units, quantity, destination and timing; request missing fields; save the source message and owner in a shared queue; prepare a draft for approval. Related proposals cover approved customer replies, consistent website product information and follow up tracking. Tool choices are proposed, not deployed.",
      "tradeoffs": [
        {
          "head": "Complete inquiry data before drafting a quote",
          "because": "fabric units and carpet dimensions cannot be guessed safely."
        },
        {
          "head": "Human price and availability approval",
          "because": "general product information does not establish stock or a delivery commitment."
        }
      ],
      "impactDetail": "Ready for a scoped pilot with measures for inquiry completeness, preparation time and reviewer corrections.",
      "watchNext": [
        "Inquiry completeness",
        "Quotation preparation time",
        "Overdue follow ups"
      ]
    },
    "systemNo": 8
  },
  {
    "id": "spend-intelligence",
    "title": "Proactive spend intelligence",
    "description": "A reference design for surfacing actionable spending exceptions from consistent financial data.",
    "longDescription": "Design a shared calculation and data layer for scoped finance, accounting and policy assistants. Surface the evidence behind an exception and send consequential actions to a responsible reviewer. The proposal defines pilot criteria for data quality, useful exceptions and reviewer effort.",
    "technologies": [
      "Scoped agents",
      "MCP",
      "Verified calculations",
      "Human review"
    ],
    "isPrivate": false,
    "category": "ai",
    "deepDive": {
      "status": "Reference design",
      "timeframe": "Architecture proposal",
      "audience": "Finance teams evaluating AI assistance",
      "flow": [
        "Financial event",
        "Verified data",
        "Scoped analysis",
        "Evidence",
        "Review queue"
      ],
      "problem": "A financial assistant needs to make exceptions visible without producing inconsistent calculations or acting beyond its authority.",
      "solution": "Design a shared calculation and data layer for scoped finance, accounting and policy assistants. Surface the evidence behind an exception and send consequential actions to a responsible reviewer. The proposal defines pilot criteria for data quality, useful exceptions and reviewer effort.",
      "tradeoffs": [
        {
          "head": "A shared calculation layer",
          "because": "financial totals need consistent definitions across assistants."
        },
        {
          "head": "Reviewed actions",
          "because": "an explanation and an instruction to change a financial record carry different consequences."
        }
      ],
      "impactDetail": "Reference design. A pilot would need to demonstrate correct exception detection and useful reviewer decisions.",
      "watchNext": [
        "False alerts",
        "Evidence completeness",
        "Time to a reviewed decision"
      ]
    },
    "systemNo": 9
  },
  {
    "id": "invoice-review",
    "title": "Invoice preparation & exception review",
    "description": "A reference design that separates extraction from matching and approval.",
    "longDescription": "Propose structured extraction, deterministic matching against order and receipt data, and an exception queue with source evidence. Partial deliveries and missing references remain visible to a reviewer. Payment execution is outside this proposed workflow.",
    "technologies": [
      "Document extraction",
      "Matching rules",
      "Review queues",
      "ERP integration design"
    ],
    "isPrivate": false,
    "category": "ai",
    "deepDive": {
      "status": "Reference design",
      "timeframe": "Architecture proposal",
      "audience": "Finance operations teams processing supplier invoices",
      "flow": [
        "Invoice",
        "Extracted fields",
        "Order and receipt match",
        "Exception reason",
        "Review"
      ],
      "problem": "Invoice handling mixes repeatable extraction with decisions that need purchasing context and accountable approval.",
      "solution": "Propose structured extraction, deterministic matching against order and receipt data, and an exception queue with source evidence. Partial deliveries and missing references remain visible to a reviewer. Payment execution is outside this proposed workflow.",
      "tradeoffs": [
        {
          "head": "Deterministic matching",
          "because": "quantity and value comparisons must follow explicit rules."
        },
        {
          "head": "Diagnosed exceptions",
          "because": "the reviewer needs the mismatch and evidence, rather than only a confidence score."
        }
      ],
      "impactDetail": "Pilot success would be measured through matching accuracy, reviewer effort and the handling of incomplete documents.",
      "watchNext": [
        "Extraction errors",
        "Incorrect matches",
        "Reviewer correction time"
      ]
    },
    "systemNo": 10
  }
];
