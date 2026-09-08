// Static marketing copy for the GoStudy website, mirrored from the
// web_version (Jaspr) design prototype in the Ub-Hub repo.

export type StripItem = { n: string; title: string; sub: string };
export type Shot = { n: string; tab: string; src: string; title: string; body: string };
export type FeatureBlock = { n: string; title: string; body: string; items: string[] };
export type WhyItem = { n: string; title: string; body: string };
export type Faq = { q: string; a: string };
export type LegalSection = { n: string; title: string; hint: string };
export type Processor = { name: string; role: string };

export const supportEmail = "sumeebong7@gmail.com";
export const whatsappNumber = "+237 682 397 481";
export const whatsappUrl = "https://wa.me/237682397481";
export const playPackage = "com.ebongsume.gostudy";
export const playStoreUrl = `https://play.google.com/store/apps/details?id=${playPackage}`;
export const playLabel = "ANDROID · GOOGLE PLAY · COM.EBONGSUME.GOSTUDY";
export const deletionDays = 7;

export const apkDownloadUrl =
  "https://github.com/ebongi/Ub-Hub/releases/latest/download/GoStudy.apk";

export const shots: Shot[] = [
  {
    n: "01",
    tab: "HOME",
    src: "/shot-home.png",
    title: "Your day, the moment you open it",
    body: 'Tasks due, the next exam, where you left off in a course and the week at a glance — the home screen answers "what do I need to do today" before you go looking.',
  },
  {
    n: "02",
    tab: "AI ASSISTANT",
    src: "/shot-ai.png",
    title: "Ask the Study Assistant anything",
    body: "Gemini-powered explanations that show their working. Ask in plain language, get an answer pitched at your level, and keep the thread for revision later.",
  },
  {
    n: "03",
    tab: "ALL TOOLS",
    src: "/shot-tools.png",
    title: "Twelve tools, one grid",
    body: "AI Study, Exam Scheduler, Performance, Library, News, Marketplace, Task Manager, Focus Timer, Transcripts, PORTAL, UB Support Bot and Offline AI — all one tap from anywhere.",
  },
  {
    n: "04",
    tab: "MESSAGES",
    src: "/shot-dm.png",
    title: "Your class, in one thread",
    body: "Global Chat for the whole campus and direct messages gated behind friend requests, so your inbox stays people you actually know.",
  },
  {
    n: "05",
    tab: "COURSES",
    src: "/shot-courses.png",
    title: "Every UB course, structured",
    body: "Browse by faculty, department and level. Course docs, past papers and a chat per course — read the PDFs in-app and keep them offline for when the data runs out.",
  },
  {
    n: "06",
    tab: "STUDY PLAN",
    src: "/shot-studyplan.png",
    title: "A revision plan built around your deadlines",
    body: "GoStudy reads your pending tasks and upcoming exams and lays out a balanced routine — so revision week is a schedule, not a panic.",
  },
  {
    n: "07",
    tab: "LEADERBOARD",
    src: "/shot-leaderboard.png",
    title: "Study streaks worth defending",
    body: "Points for consistency, a level ladder and a campus-wide board. Friendly pressure from your own department beats a motivational quote.",
  },
];

export const strip: StripItem[] = [
  { n: "01", title: "AI Study Assistant", sub: "Explanations on demand" },
  { n: "02", title: "Course Materials", sub: "Offline library, in-app PDFs" },
  { n: "03", title: "Global Chat & DMs", sub: "Your campus, your class" },
  { n: "04", title: "Campus Marketplace", sub: "Buy, sell, swap on campus" },
  { n: "05", title: "Exams & Focus Timer", sub: "Plan it, then sit down to it" },
  { n: "06", title: "Language Practice", sub: "Lessons, cloze, word banks" },
  { n: "07", title: "Transcript Requests", sub: "Official, without the queue" },
];

export const features: FeatureBlock[] = [
  {
    n: "F.01",
    title: "AI study tools",
    body: "A study partner that is awake at 2am and knows your syllabus.",
    items: [
      "Gemini-powered Study Assistant",
      "UB Support Bot for university-specific questions",
      "Offline AI chat when the data runs out",
      "AI-generated study plans",
      "Flashcards and auto-generated quizzes",
      "Language practice: lessons, cloze, matching, word banks",
    ],
  },
  {
    n: "F.02",
    title: "Courses & materials",
    body: "The whole UB course tree, and the documents that go with it.",
    items: [
      "Browse faculties, departments and courses",
      "Built-in PDF viewer",
      "Offline library for saved materials",
      "Performance tracking across the semester",
    ],
  },
  {
    n: "F.03",
    title: "Productivity",
    body: "Deadlines stop being a surprise.",
    items: [
      "Exam scheduler with reminders",
      "Focus timer for real study sessions",
      "Task manager tied to your courses",
    ],
  },
  {
    n: "F.04",
    title: "Community",
    body: "Campus life, minus the twelve group chats.",
    items: [
      "Global Chat for the whole campus",
      "Direct messages gated by friend requests",
      "Study leaderboard and levels",
      "Marketplace for physical and digital listings",
    ],
  },
  {
    n: "F.05",
    title: "News",
    body: "Official campus announcements, posted by admins.",
    items: [
      "Verified announcements only",
      "Push notification when something matters",
      "Searchable archive",
    ],
  },
  {
    n: "F.06",
    title: "Student services",
    body: "The paperwork, handled from your phone.",
    items: [
      "Official transcript requests",
      "Choose your delivery method",
      "Payment and status tracking end to end",
    ],
  },
];

export const why: WhyItem[] = [
  {
    n: "W.01",
    title: "One app, not seven",
    body: "Notes, chat, deadlines, past papers and transcripts stop living in five different places and one lost WhatsApp thread.",
  },
  {
    n: "W.02",
    title: "AI help on demand",
    body: "A study assistant that explains rather than just answers — and one that still works when your data bundle does not.",
  },
  {
    n: "W.03",
    title: "Connect with your class",
    body: "Course-level chat and friend-gated DMs mean you reach the people on your own timetable, not strangers.",
  },
  {
    n: "W.04",
    title: "Official services, no queue",
    body: "Request a transcript, choose delivery, track payment — from your phone instead of the counter.",
  },
];

export const faqs: Faq[] = [
  {
    q: "How do I delete my account?",
    a: `In the app: Settings → Delete Account → confirm. That removes your account and all associated data immediately and permanently. Without the app installed, email ${supportEmail} from your registered address and we handle it within ${deletionDays} business days. Full detail on the Delete My Account page.`,
  },
  {
    q: "How do I reset my password?",
    a: 'Tap "Forgot password?" on the login screen and enter your registered email. You will get a reset link — it expires after an hour, so use it while you have signal.',
  },
  {
    q: "Is my payment information safe?",
    a: "Payments are processed by Fapshi through MTN Mobile Money and Orange Money. You approve each charge on your own handset and GoStudy never sees or stores your mobile money PIN.",
  },
  {
    q: "Does GoStudy work without data?",
    a: "Mostly, yes. Course materials you have opened stay in your offline library, and the offline AI chat answers without a connection. Chat, News and the Marketplace need data to sync.",
  },
];

export const privacySections: LegalSection[] = [
  {
    n: "01",
    title: "Information we collect",
    hint: "Account details, profile information, content you post, and technical data collected automatically.",
  },
  {
    n: "02",
    title: "How we use your information",
    hint: "Delivering the service, personalising study content, processing payments, and safety enforcement.",
  },
  {
    n: "03",
    title: "How your information is stored",
    hint: "Where account data lives, how it is encrypted, and who inside GoStudy can reach it.",
  },
  {
    n: "04",
    title: "AI features and your prompts",
    hint: "What is sent to the AI provider when you use the Study Assistant, and whether it is retained.",
  },
  {
    n: "05",
    title: "Data retention",
    hint: "How long each category of data is kept, and what happens when your account closes.",
  },
  {
    n: "06",
    title: "Your rights and choices",
    hint: "Access, correction, export, deletion, and notification preferences.",
  },
  {
    n: "07",
    title: "Children and student data",
    hint: "Minimum age, and how student status is handled.",
  },
];

export const processors: Processor[] = [
  {
    name: "Supabase",
    role: "Data storage and authentication — your account, profile, courses, messages and listings.",
  },
  {
    name: "Firebase",
    role: "Push notifications — device token and delivery metadata only.",
  },
  {
    name: "Google Gemini",
    role: "AI queries — the text and images you send to the Study Assistant.",
  },
  {
    name: "Fapshi",
    role: "Payment processing for MTN Mobile Money and Orange Money transactions.",
  },
];

export const termsSections: LegalSection[] = [
  {
    n: "01",
    title: "Acceptance of terms",
    hint: "What creating an account commits you to.",
  },
  {
    n: "02",
    title: "Eligibility and your account",
    hint: "Who may register, and your responsibility for credentials and activity.",
  },
  {
    n: "03",
    title: "Acceptable use",
    hint: "Conduct rules for chat, DMs, the Marketplace and shared materials.",
  },
  {
    n: "04",
    title: "Content and intellectual property",
    hint: "Who owns uploaded materials, and the licence you grant GoStudy.",
  },
  {
    n: "05",
    title: "Subscriptions and payments",
    hint: "Billing, renewal, refunds and the mobile money flow.",
  },
  {
    n: "06",
    title: "AI-generated content",
    hint: "That AI answers may be wrong and are not a substitute for course material or staff.",
  },
  {
    n: "07",
    title: "Suspension and termination",
    hint: "When GoStudy may close an account, and how you close yours.",
  },
  {
    n: "08",
    title: "Liability, changes and governing law",
    hint: "Limits of liability, how terms change, and the governing jurisdiction.",
  },
];

export const deletedOnAccountDeletion: string[] = [
  "Your account and login credentials",
  "Your profile, avatar and study statistics",
  "Global Chat messages and direct messages you sent",
  "Saved course materials and offline library entries",
  "Marketplace listings, active and completed",
  "Tasks, exam schedule, study plans and quiz history",
];

export const retainedOnAccountDeletion: string[] = [
  "Payment and transaction records, kept for accounting and tax obligations",
  "Transcript request records held by the university as official academic documents",
  "Minimal abuse records where an account was closed for a safety breach",
];
