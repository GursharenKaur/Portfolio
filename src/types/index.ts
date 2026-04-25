/* ─────────────────────────────────────────────────────────────
   Portfolio Type Definitions
───────────────────────────────────────────────────────────── */

/* ── Navigation ──────────────────────────────────────────── */
export interface NavLink {
  label: string;
  href: string;
}

/* ── Projects ────────────────────────────────────────────── */
export type ProjectTag =
  | "All"
  | "Full-Stack"
  | "ML/DL"
  | "UI/UX"
  | "Open Source";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: ProjectTag[];
  techStack: string[];
  image: string;         // path in /public/images/
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  isOngoing?: boolean;
}

/* ── Skills / Tech Stack ─────────────────────────────────── */
export type SkillLevel = "Expert" | "Proficient" | "Learning";

export interface Skill {
  name: string;
  icon: string;          // emoji or icon name
  level: SkillLevel;
  category: SkillCategory;
}

export type SkillCategory =
  | "Language"
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "Design"
  | "AI/ML";

/* ── Experience / Timeline ───────────────────────────────── */
export type TimelineType = "work" | "education" | "achievement";

export interface TimelineItem {
  id: string;
  type: TimelineType;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  tags?: string[];
}

/* ── Bento Cards ─────────────────────────────────────────── */
export interface BentoCard {
  id: string;
  title: string;
  description?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  type:
    | "skills"
    | "github"
    | "currently-learning"
    | "fun-fact"
    | "availability"
    | "tech-stack"
    | "location";
}

/* ── Social Links ────────────────────────────────────────── */
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

/* ── Contact Form ────────────────────────────────────────── */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/* ── AI Chat ─────────────────────────────────────────────── */
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

/* ── Spotify Now Playing ─────────────────────────────────── */
export interface SpotifyTrack {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumArt?: string;
  songUrl?: string;
}
