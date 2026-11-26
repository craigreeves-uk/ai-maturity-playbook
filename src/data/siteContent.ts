export interface PainPoint {
  title: string;
  description: string;
  costEstimate: string;
}

export interface OfferPillar {
  title: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_META = {
  brandName: 'Reeves Innovate Ltd',
  email: 'hello@reevesinnovate.com',
  locationNote: 'Registered in England and Wales. Serving UK SMEs.',
};

export const HERO_CONTENT = {
  eyebrow: 'UK SME Operations and Data Consultancy',
  headline: 'Your team is wasting 15 hours a week copying numbers between spreadsheets.',
  subheadline:
    'I build reliable reporting pipelines and practical AI workflows for growing UK businesses. Less manual admin, accurate Monday morning figures, and measurable payback within 60 to 90 days.',
  primaryCta: 'Book a 20 Minute Diagnostic Call',
  secondaryCta: 'Take the 2 Minute Readiness Check',
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
    title: 'Automated management reporting',
    description:
      'We connect your existing finance, sales, and operations systems directly so your weekly cash, margin, and capacity figures land accurately every morning without manual exports.',
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
  'Pricing: Fixed project fee agreed upfront after your diagnostic call, with zero surprise day rates',
  'Timeline: Four weeks from kickoff to full production handover',
  'Ownership: 100% of code, data pipelines, and documentation belong to you',
  'Risk reversal: If we do not identify measurable savings in staff time or margin during the diagnostic call, I will tell you plainly and decline the project',
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 'Step 01',
    title: 'Diagnose',
    description:
      'We start with a focused 20 minute diagnostic call, followed by a brief read only review of your current tools and spreadsheets. You get a plain English breakdown of where time is leaking, what to automate first, and the exact financial return to expect.',
  },
  {
    stepNumber: 'Step 02',
    title: 'Build',
    description:
      'Over three weeks, I connect your systems, clean the underlying data, and build the automated reporting or AI workflow inside your own UK cloud environment. We test everything against real historical records while your team works normally.',
  },
  {
    stepNumber: 'Step 03',
    title: 'Hand Over',
    description:
      'In week four, we run a practical training session with your team, switch on the live workflow, and hand over clear operational guides. You keep full control, with 30 days of included post launch support for peace of mind.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How is a sprint priced, and how do we justify the spend?',
    answer:
      'Every sprint is delivered for a single fixed fee agreed upfront after your diagnostic call, with 50% due on kickoff and 50% on verified handover. Most UK SME clients recover the investment within 60 to 90 days through reclaimed staff hours, faster quoting, or avoided stock and margin errors. If the numbers do not stack up on our initial call, I will tell you plainly and decline the project.',
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
