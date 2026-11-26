export interface PainPoint {
  title: string;
  description: string;
  costEstimate: string;
}

export interface OfferPillar {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

export interface ProcessStep {
  stepNumber: string;
  timeframe: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface PipelineStage {
  stageLabel: string;
  title: string;
  highlighted?: boolean;
  items: string[];
}

export interface DeliveryPrinciple {
  title: string;
  description: string;
}

export interface FounderCredential {
  title: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_META = {
  brandName: 'Reeves Innovate Ltd',
  email: 'craig.reeves@reevesinnovate.com',
  locationNote:
    'Company No. 16093590, registered in England and Wales. Based in Nottingham, serving UK SMEs.',
};

export const HERO_CONTENT = {
  eyebrow: 'UK SME Operations and Data Consultancy',
  headline: 'Practical AI and Data Operations Consultancy for UK Businesses',
  subheadline:
    'Built for UK Managing Directors and Operations Directors tired of chasing numbers across disconnected spreadsheets. I design automated operational reporting and practical AI workflows that cut repetitive admin and deliver measurable payback within 60 to 90 days.',
  primaryCta: 'Book an AI Operations Discovery Call',
  calculatorCta: 'Calculate the annual cost of repetitive admin in your business',
  roadmapAlt:
    '90 day AI maturity roadmap showing Diagnose, Build, and Hand Over stages for UK businesses',
  proofPoints: [
    'Fixed project fee agreed upfront',
    'Delivered in four weeks',
    'Zero long term retainers',
    'UK GDPR compliant by design',
  ],
};

export const PAIN_POINTS: PainPoint[] = [
  {
    title: 'Senior staff doing copy and paste admin',
    description:
      'When skilled managers spend Monday mornings exporting CSV files from your CRM, finance ledger, and warehouse system, you are paying £40 an hour for clerical work. Across a team of four, that easily burns £2,500 a month in wasted payroll.',
    costEstimate: 'Typical monthly leak: £2,000 to £3,500 in lost staff capacity',
  },
  {
    title: 'Decisions made on fortnight old numbers',
    description:
      'If it takes five days to compile your weekly margin or stock report, problems are already expensive by the time you spot them. Slow visibility leads to overstocked shelves, missed supplier rebates, and quoting unprofitable jobs.',
    costEstimate: 'Typical impact: 2% to 4% margin erosion on preventable errors',
  },
  {
    title: 'Key processes locked inside one person’s head',
    description:
      'Every growing SME has a critical spreadsheet held together by macros that only one employee understands. When that person takes annual leave or hands in their notice, quoting, invoicing, and stock forecasting grind to a halt.',
    costEstimate: 'Operational risk: single point of failure across core workflows',
  },
];

export const OFFER_PILLARS: OfferPillar[] = [
  {
    title: 'Automated operational reporting',
    description:
      'We connect your existing finance, sales, and operations systems directly so your weekly cash, margin, and capacity figures land accurately every morning without manual exports.',
    href: '/automated-operational-reporting',
    linkLabel: 'Explore automated operational reporting for UK businesses',
  },
  {
    title: 'Practical AI workflow automation',
    description:
      'Where your staff are reading supplier PDFs, triaging customer enquiries, or drafting standard quotes by hand, we deploy reliable AI steps with human approval gates that cut processing time by 70%.',
  },
  {
    title: 'Clean, documented data foundations',
    description:
      'Every integration and automated rule is written in plain, standard tooling with full documentation, so your internal staff or future hires are never trapped in a black box.',
  },
];

export const COMMERCIAL_TERMS = [
  'Pricing: Fixed project fee agreed upfront after your discovery call, with zero surprise day rates',
  'Timeline: Four weeks from kickoff to full production handover',
  'Ownership: 100% of code, data pipelines, and documentation belong to you',
  'Risk reversal: If we do not identify measurable savings in staff time or margin during the discovery call, I will tell you plainly and decline the project',
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 'Step 01',
    timeframe: 'Week 1',
    title: 'Diagnose',
    description:
      'We start with a focused 20 minute discovery call, followed by a brief read only review of your current tools and spreadsheets before any build begins.',
    deliverables: [
      'Shadow one core workflow without interrupting daily operations',
      'Map every manual CSV export, rekeyed field, and fragile macro',
      'Agree a plain English scope, fixed fee, and expected payback window',
    ],
  },
  {
    stepNumber: 'Step 02',
    timeframe: 'Weeks 2 and 3',
    title: 'Build',
    description:
      'I engineer the entire reporting pipeline or AI workflow quietly inside your own UK or EU cloud environment while your team works normally.',
    deliverables: [
      'Connect finance, CRM, and stock tools using read only API access',
      'Clean, standardise, and reconcile mismatched records across departments',
      'Add AI extraction or drafting steps with mandatory human approval gates',
      'Run parallel shadow tests against historical records to prove figure accuracy',
    ],
  },
  {
    stepNumber: 'Step 03',
    timeframe: 'Week 4',
    title: 'Hand Over',
    description:
      'We switch on the live workflow alongside your operations and finance leads, hand over full documentation, and verify everything in production.',
    deliverables: [
      'Practical training session tailored to the staff using the outputs daily',
      'Full technical runbooks, data dictionaries, and architecture diagrams',
      '30 days of included post launch monitoring and adjustments',
    ],
  },
];

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    stageLabel: '1. Inputs',
    title: 'Existing Business Systems',
    items: [
      'Finance ledger (Xero or Sage)',
      'CRM and quoting (HubSpot or Pipedrive)',
      'Stock and job systems (Cin7, Unleashed, or Excel)',
      'Supplier PDFs and shared operations inboxes',
    ],
  },
  {
    stageLabel: '2. Processing Layer',
    title: 'Clean Pipeline and AI Gateways',
    highlighted: true,
    items: [
      'Automated overnight sync in UK or EU cloud',
      'Standardised margin, WIP, and stock calculations',
      'Structured AI document parsing or draft triage',
      'Mandatory human approval gate before action',
    ],
  },
  {
    stageLabel: '3. Outputs',
    title: 'Daily Operational Visibility',
    items: [
      'Accurate Monday morning executive margin summary',
      'Cash, overdue debt, and capacity alerts',
      'Draft customer quotes ready for manager sign off',
      'Zero manual CSV exports or copy and paste admin',
    ],
  },
];

export const DELIVERY_PRINCIPLES: DeliveryPrinciple[] = [
  {
    title: 'UK or EU cloud only',
    description:
      'All data pipelines, databases, and AI calls run inside your own UK or European cloud tenant under UK GDPR. Public AI models are never trained on your records.',
  },
  {
    title: 'Full documentation',
    description:
      'Every connector, metric formula, and automated rule ships with plain English runbooks and data maps so your team understands exactly how numbers are built.',
  },
  {
    title: 'Client owns everything',
    description:
      'You keep 100% ownership of all code, pipelines, prompts, and reporting models from day one. Zero proprietary lock in and zero ongoing licence traps.',
  },
  {
    title: 'Human approval gates on any AI steps',
    description:
      'No AI workflow sends a client quote, posts a finance entry, or changes stock levels unsupervised. Your managers review and approve every critical output.',
  },
];

export const FOUNDER_BIO = {
  eyebrow: 'About Reeves Innovate Ltd',
  heading: 'Who you will work with: Craig Reeves',
  role: 'Founder and Principal Consultant',
  paragraphs: [
    'Before incorporating Reeves Innovate Ltd in November 2024, I spent over 10 years in service quality management, customer operations, training, and coaching. Having worked closely with operational queues and frontline teams, I know how quickly clunky handoffs and manual spreadsheets drain morale and margin.',
    'My work focuses on bridging technical automation and practical everyday operations. Instead of handing your managers complex tools they ignore, every reporting pipeline and AI workflow is built around how your staff actually work, backed by clear training so your team adopts it from day one.',
  ],
  credentials: [
    {
      title: '10+ years in UK service quality and training',
      detail:
        'Proven track record in operational quality management, client retention, and designing practical AI training programmes.',
    },
    {
      title: 'Direct principal delivery',
      detail:
        'You work directly with Craig Reeves from initial discovery call through to live handover, never passed off to junior analysts.',
    },
    {
      title: 'UK registered and accountable',
      detail:
        'Reeves Innovate Ltd is registered in England and Wales (Company No. 16093590), based in Nottingham and serving UK SMEs.',
    },
  ] as FounderCredential[],
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How is a sprint priced, and how do we justify the spend?',
    answer:
      'Every sprint is delivered for a single fixed fee agreed upfront after your discovery call, with 50% due on kickoff and 50% on verified handover. Most UK SME clients recover the investment within 60 to 90 days through reclaimed staff hours, faster quoting, or avoided stock and margin errors. If the numbers do not stack up on our initial call, I will tell you plainly and decline the project.',
  },
  {
    question: 'Is our commercial and customer data kept secure under UK GDPR?',
    answer:
      'Yes. All data processing stays inside your own UK or European cloud accounts, such as Microsoft Azure, Google Cloud, or AWS. I never train public AI models on your company records, I work under a standard UK mutual NDA and data processing agreement, and all system access uses read only or least privilege permissions.',
  },
  {
    question: 'How much disruption will this cause to our busy operations team?',
    answer:
      'Almost none. I know your managers do not have spare afternoons for workshops. We need roughly 60 minutes from your key process owner in week one to map the workflow, and 45 minutes in week four for training and handover. All building and testing happens quietly in the background without pausing daily operations.',
  },
  {
    question: 'What can realistically be delivered in four weeks?',
    answer:
      'We scope tightly around one high impact commercial bottleneck rather than boiling the ocean. That means either uniting three to five core systems into automated daily management reporting, or automating one heavy manual workflow such as supplier invoice matching, quote preparation, or enquiry triage.',
  },
];
