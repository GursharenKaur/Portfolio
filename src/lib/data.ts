import type {
  NavLink,
  Project,
  Skill,
  TimelineItem,
  SocialLink,
} from "@/types";

/* ─────────────────────────────────────────────────────────────
   PORTFOLIO DATA
   ↳ Edit this file to update all your portfolio content.
───────────────────────────────────────────────────────────── */

/* ── Personal Info ───────────────────────────────────────── */
export const personalInfo = {
  name: "Gursharen Kaur",
  role: "Full Stack Developer",
  tagline: "Building fast, beautiful, AI-powered web experiences.",
  bio: `I'm a Full Stack Developer passionate about crafting seamless digital
experiences — from pixel-perfect UIs to scalable backend systems. I love
working at the intersection of design and engineering, and I'm currently
exploring AI-native applications and 3D web experiences.`,
  location: "India 🇮🇳",
  availability: true,
  availabilityNote: "Open to opportunities — 2026",
  email: "gursharen@email.com",         // ← update
  resumeUrl: "/resume.pdf",             // ← place your resume in /public/
};

/* ── Navigation ──────────────────────────────────────────── */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* ── Social Links ────────────────────────────────────────── */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/GursharenKaur",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/gursharen-kaur",  // ← update
    icon: "linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/gursharen",            // ← update
    icon: "twitter",
  },
];

/* ── Projects ────────────────────────────────────────────── */
export const projects: Project[] = [
  {
    id: "fpi-monitor",
    title: "FPI Monitor",
    tagline: "Real-time Foreign Portfolio Investment tracking dashboard",
    description:
      "A full-stack application that scrapes NSDL data, stores it in SQLite, and visualises FPI equity/debt flows with interactive charts and filters. Built to help retail investors track institutional money movement.",
    tags: ["Full-Stack", "AI"],
    techStack: ["Next.js", "Python", "SQLite", "Recharts", "Tailwind CSS"],
    image: "/images/fpi-monitor.png",
    githubUrl: "https://github.com/GursharenKaur/fpi-monitor",  // ← update
    featured: true,
    year: 2026,
  },
  {
    id: "scholarship-portal",
    title: "Scholarship Portal",
    tagline: "AI-powered scholarship discovery and application platform",
    description:
      "An admin-facing portal with AI-driven PDF parsing to bulk-upload scholarships, document management for student profiles, and a smart matching algorithm. Features OCR via Tesseract.js and auto-fill from uploaded resumes.",
    tags: ["Full-Stack", "AI"],
    techStack: ["Next.js", "TypeScript", "Python", "Tesseract.js", "PostgreSQL"],
    image: "/images/scholarship-portal.png",
    githubUrl: "https://github.com/GursharenKaur",              // ← update
    featured: true,
    year: 2025,
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    tagline: "2026-stack personal portfolio with AI chatbot",
    description:
      "A dark, premium portfolio built with Next.js 15, Framer Motion, GSAP ScrollTrigger, React Three Fiber, and a Vercel AI SDK chatbot that answers questions about my resume in real time.",
    tags: ["UI/UX", "Full-Stack"],
    techStack: ["Next.js 15", "TypeScript", "GSAP", "Three.js", "Vercel AI SDK"],
    image: "/images/portfolio.png",
    githubUrl: "https://github.com/GursharenKaur/Portfolio",
    featured: false,
    year: 2026,
  },
];

/* ── Skills ──────────────────────────────────────────────── */
export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", icon: "🔷", level: "Expert", category: "Language" },
  { name: "JavaScript", icon: "🟡", level: "Expert", category: "Language" },
  { name: "Python", icon: "🐍", level: "Proficient", category: "Language" },
  { name: "HTML/CSS", icon: "🎨", level: "Expert", category: "Language" },

  // Frontend
  { name: "React", icon: "⚛️", level: "Expert", category: "Frontend" },
  { name: "Next.js", icon: "▲", level: "Expert", category: "Frontend" },
  { name: "Tailwind CSS", icon: "💨", level: "Expert", category: "Frontend" },
  { name: "Framer Motion", icon: "🎭", level: "Proficient", category: "Frontend" },
  { name: "GSAP", icon: "🟢", level: "Proficient", category: "Frontend" },
  { name: "Three.js", icon: "🌐", level: "Learning", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "🟩", level: "Proficient", category: "Backend" },
  { name: "REST APIs", icon: "🔗", level: "Expert", category: "Backend" },

  // Database
  { name: "PostgreSQL", icon: "🐘", level: "Proficient", category: "Database" },
  { name: "SQLite", icon: "📦", level: "Proficient", category: "Database" },
  { name: "MongoDB", icon: "🍃", level: "Proficient", category: "Database" },

  // DevOps
  { name: "Git", icon: "🔀", level: "Expert", category: "DevOps" },
  { name: "Vercel", icon: "▲", level: "Expert", category: "DevOps" },
  { name: "Docker", icon: "🐳", level: "Learning", category: "DevOps" },

  // AI/ML
  { name: "Vercel AI SDK", icon: "🤖", level: "Proficient", category: "AI/ML" },
  { name: "OpenAI API", icon: "✨", level: "Proficient", category: "AI/ML" },
  { name: "LangChain", icon: "🔗", level: "Learning", category: "AI/ML" },
];

/* ── Currently Learning ──────────────────────────────────── */
export const currentlyLearning = [
  { name: "React Three Fiber", icon: "🌐" },
  { name: "GSAP ScrollTrigger", icon: "🎬" },
  { name: "LangChain", icon: "🔗" },
  { name: "Cloudflare Workers", icon: "⚡" },
];

/* ── Timeline ────────────────────────────────────────────── */
export const timeline: TimelineItem[] = [
  {
    id: "edu-1",
    type: "education",
    title: "B.Tech — Computer Science",
    organization: "Your College Name",        // ← update
    location: "India",
    period: "2022 — 2026",
    description:
      "Pursuing a Bachelor's in Computer Science. Focused on full-stack development, algorithms, and AI/ML. Active member of the coding club.",
    tags: ["CS", "Algorithms", "Full-Stack"],
  },
  {
    id: "work-1",
    type: "work",
    title: "Full Stack Developer Intern",
    organization: "Company Name",             // ← update
    location: "Remote",
    period: "Jun 2025 — Sep 2025",
    description:
      "Built and maintained production features for a scholarship management platform. Led the document parsing pipeline using Python and Tesseract.js.",
    tags: ["Next.js", "Python", "PostgreSQL"],
  },
  {
    id: "achievement-1",
    type: "achievement",
    title: "Hackathon Winner 🏆",
    organization: "Hackathon Name",           // ← update
    location: "India",
    period: "2025",
    description:
      "Built an AI-powered tool that won 1st place. Competed against 200+ teams in a 24-hour hackathon.",
    tags: ["AI", "Hackathon"],
  },
];

/* ── Fun Facts (for Bento / About) ──────────────────────── */
export const funFacts = [
  { emoji: "☕", text: "Powered by caffeine and curiosity" },
  { emoji: "🎵", text: "Coding playlists are a personality trait" },
  { emoji: "🌙", text: "Best code written after midnight" },
  { emoji: "📚", text: "Currently reading: Deep Work by Cal Newport" },
];

/* ── Stats ───────────────────────────────────────────────── */
export const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "2+", label: "Years Coding" },
  { value: "5+", label: "Tech Stack" },
  { value: "100%", label: "Passion" },
];
