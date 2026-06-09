export const blueprintKits = [
  {
    title: "Tradie Invoice Kit",
    category: "Finance",
    pain: "Invoices",
    hook: "Hate invoices?",
    promise: "Quote, invoice, and follow up before the paperwork steals your evening.",
    outcome: "Create quotes, invoices, and payment follow-ups from one tidy operating screen.",
    bullets: ["Turn job notes into quotes", "Send payment nudges without sounding awkward", "Keep Gmail and Calendar in step"],
    includes: ["Invoice template", "Gmail prompts", "Calendar workflow"],
    effort: "45 min setup",
    persona: "Tradie/service business",
    group: "Get paid faster",
    featured: true
  },
  {
    title: "Job Follow-Up CRM",
    category: "Sales",
    pain: "Follow-up",
    hook: "Leads going cold?",
    promise: "A lightweight follow-up machine for businesses that do not need a bloated CRM.",
    outcome: "Track leads, next actions, and gentle follow-ups without adopting a full CRM.",
    bullets: ["See every lead in one lane", "Know the next message to send", "Stop relying on memory"],
    includes: ["Pipeline UI", "Email scripts", "Lead scoring tags"],
    effort: "35 min setup",
    persona: "Owner/operator",
    group: "Win and retain customers",
    featured: true
  },
  {
    title: "Cashflow Snapshot",
    category: "Finance",
    pain: "Cashflow",
    hook: "Cashflow foggy?",
    promise: "See what is coming in, going out, and quietly becoming a problem.",
    outcome: "See weekly runway, upcoming bills, and late payments in a compact dashboard.",
    bullets: ["Spot late money early", "See next week's pressure points", "Make decisions without spreadsheet fog"],
    includes: ["Dashboard shell", "CSV importer", "Forecast prompts"],
    effort: "50 min setup",
    persona: "Finance admin",
    group: "Get paid faster",
    featured: true
  },
  {
    title: "Client Onboarding Portal",
    category: "Operations",
    pain: "Onboarding",
    hook: "New clients messy?",
    promise: "Give every client the same calm start, without another back-and-forth thread.",
    outcome: "Give new clients a clear checklist, file requests, and welcome sequence.",
    bullets: ["Request files once", "Show clients what happens next", "Start every job clean"],
    includes: ["Portal UI", "Checklist schema", "Welcome emails"],
    effort: "60 min setup",
    persona: "Ops manager",
    group: "Win and retain customers"
  },
  {
    title: "Meeting-to-Tasks Kit",
    category: "Productivity",
    pain: "Follow-up",
    hook: "Meetings evaporate?",
    promise: "Turn talk into owners, decisions, and dates before momentum leaks away.",
    outcome: "Turn calls into owners, decisions, due dates, and a clean action register.",
    bullets: ["Capture decisions fast", "Assign owners clearly", "Carry tasks into the week"],
    includes: ["Task board", "Summary prompts", "Calendar handoff"],
    effort: "30 min setup",
    persona: "Owner/operator",
    group: "Run the work"
  },
  {
    title: "Maintenance Scheduler",
    category: "Operations",
    pain: "Scheduling",
    hook: "Recurring work slipping?",
    promise: "Keep service visits, reminders, and technician notes moving on time.",
    outcome: "Plan recurring service work, technician visits, and reminder messages.",
    bullets: ["Plan repeat visits", "Send reminders automatically", "Give technicians a clean checklist"],
    includes: ["Schedule UI", "Reminder copy", "Visit checklist"],
    effort: "55 min setup",
    persona: "Ops manager",
    group: "Run the work"
  },
  {
    title: "Stock Reorder Assistant",
    category: "Inventory",
    pain: "Stock",
    hook: "Stock surprises?",
    promise: "Know what is running low before the job stops waiting for parts.",
    outcome: "Track thresholds and prepare supplier reorder emails before shelves run low.",
    bullets: ["Track reorder points", "Draft supplier emails", "Catch shortages early"],
    includes: ["Inventory table", "Supplier prompts", "Reorder rules"],
    effort: "45 min setup",
    persona: "Ops manager",
    group: "Stay in control"
  },
  {
    title: "Compliance Evidence Vault",
    category: "Compliance",
    pain: "Compliance",
    hook: "Audit trail scattered?",
    promise: "Put evidence, renewals, and review notes where panic cannot hide them.",
    outcome: "Collect policy evidence, renewal dates, and audit notes in one calm workspace.",
    bullets: ["Store evidence by risk", "Track renewal dates", "Prepare review notes"],
    includes: ["Evidence vault", "Review checklist", "Risk tags"],
    effort: "70 min setup",
    persona: "Finance admin",
    group: "Stay in control"
  },
  {
    title: "Review Request Engine",
    category: "Marketing",
    pain: "Reviews",
    hook: "Great work, no reviews?",
    promise: "Ask at the right moment, with the right words, and track who answered.",
    outcome: "Send timely review requests after completed jobs and track response status.",
    bullets: ["Trigger requests after jobs", "Use polished message copy", "Track responses without chasing"],
    includes: ["Campaign UI", "SMS/email copy", "Review log"],
    effort: "25 min setup",
    persona: "Owner/operator",
    group: "Win and retain customers"
  },
  {
    title: "Scope Creep Tracker",
    category: "Projects",
    pain: "Scope creep",
    hook: "Scope creeping again?",
    promise: "Catch changes while they are still conversations, not margin leaks.",
    outcome: "Capture change requests, approvals, and price adjustments before work expands.",
    bullets: ["Log change requests", "Get approval before extra work", "Protect margin politely"],
    includes: ["Change form", "Approval prompts", "Margin notes"],
    effort: "40 min setup",
    persona: "Owner/operator",
    group: "Run the work"
  }
];

export const painFilters = [
  "Invoices",
  "Follow-up",
  "Cashflow",
  "Onboarding",
  "Scheduling",
  "Compliance",
  "Stock",
  "Reviews",
  "Scope creep"
];

export const catalogGroups = [
  "Get paid faster",
  "Win and retain customers",
  "Run the work",
  "Stay in control"
];

export const personas = [
  "Owner/operator",
  "Tradie/service business",
  "Finance admin",
  "Ops manager",
  "AI consultant"
];
