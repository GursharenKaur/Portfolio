import type {
  NavLink,
  Project,
  Skill,
  TimelineItem,
  SocialLink,
} from "@/types";

/* ─────────────────────────────────────────────────────────────
   PORTFOLIO DATA — Gursharen Kaur Suri
   ↳ Edit this file to update all your portfolio content.
───────────────────────────────────────────────────────────── */

/* ── Personal Info ───────────────────────────────────────── */
export const personalInfo = {
  name: "Gursharen Kaur Suri",
  role: "Full Stack Developer",
  roles: ["Full Stack Developer", "ML Engineer", "Research Enthusiast"],
  tagline:
    "Computer Engineering student skilled in Full Stack Development, driven by a passion for secure, user-focused digital innovation with hands-on expertise in Machine Learning.",
  bio: `I'm a Computer Engineering student at Thapar Institute of Engineering and Technology,
skilled in Full Stack Development. Experienced in building scalable applications using modern
frameworks and driven by a passion for secure, user-focused digital innovation. I have hands-on
expertise in Machine Learning, and I'm familiar with Git, Agile (Scrum), and collaborative
team environments. I'm eager to apply problem-solving skills and work to provide high-quality
software solutions.`,
  location: "Patiala, India 🇮🇳",
  availability: true,
  availabilityNote: "Open to opportunities — 2026",
  email: "gksuri04@gmail.com",
  resumeUrl: "/resume/My_Resume_ML.pdf",
};

/* ── Navigation ──────────────────────────────────────────── */
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
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
    href: "https://www.linkedin.com/in/gursharen-kaur-suri",
    icon: "linkedin",
  },
];

/* ── Projects ────────────────────────────────────────────── */
export const projects: Project[] = [
  {
    id: "skin-disease-detection",
    title: "AI-based Skin Disease Detection System",
    tagline: "Deep learning model for accurate skin disease classification",
    description:
      "Designed and fine-tuned a Swin Transformer deep learning model for accurate classification of skin diseases. Built pre-processing pipelines and validated model performance through test cases. Worked on software diagrams for proper end-to-end implementation and debugged to improve model accuracy.",
    tags: ["AI"],
    techStack: ["Python", "SWIN Transformer", "OpenCV", "Deep Learning"],
    image: "/images/skin-detection.png",
    githubUrl: "https://github.com/GursharenKaur/Skin-Disease-Detection-using-SwinTransformer",
    featured: true,
    year: 2025,
  },
  {
    id: "road-segmentation",
    title: "Road Segmentation from Satellite Images",
    tagline: "Multi-architecture CNN comparison for satellite imagery",
    description:
      "Implemented and compared multiple architectures including U-Net Lite, U-Net Full, U-Net++, DeepLabV3+ (ResNet-50), HRNet-Small, and SegFormer-B0. Built a custom data preprocessing pipeline including resizing, normalization, binary mask generation, and data augmentation using Albumentations. Optimized training for limited GPU memory using mixed-precision training and efficient batch sizing.",
    tags: ["AI"],
    techStack: ["Python", "PyTorch", "U-Net", "DeepLabV3+", "SegFormer", "Albumentations"],
    image: "/images/road-segmentation.png",
    githubUrl: "https://github.com/GursharenKaur/Road-Extraction-From-Satellite-Imagery",
    featured: true,
    year: 2025,
  },
  {
    id: "scholar-logic",
    title: "ScholarLogic — Scholarship Portal",
    tagline: "AI-powered scholarship discovery and management platform",
    description:
      "A full-stack scholarship management platform built with Next.js and TypeScript. Features include AI-driven PDF parsing for bulk scholarship uploads, document management for student profiles, and a smart matching algorithm. Developed as a collaborative project with a team.",
    tags: ["Full-Stack"],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/images/scholar-logic.png",
    githubUrl: "https://github.com/GursharenKaur/scholarLogic",
    featured: true,
    year: 2026,
  },
  {
    id: "anvaya-railfit",
    title: "Anvaya RailFit",
    tagline: "Health & fitness tracking platform for railway employees",
    description:
      "A TypeScript-based full-stack web application designed for health and fitness monitoring. Built with a modern frontend stack and focused on user-friendly UI/UX for tracking health metrics and fitness routines.",
    tags: ["Full-Stack"],
    techStack: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
    image: "/images/anvaya-railfit.png",
    githubUrl: "https://github.com/GursharenKaur/Anvaya-RailFit",
    featured: true,
    year: 2025,
  },
  {
    id: "athlete-injury-prediction",
    title: "Athlete Injury Risk Prediction",
    tagline: "AI model to predict athlete injury risk — 4th semester project",
    description:
      "Built a machine learning system to predict injury risk in athletes using health and performance data. Developed as a 4th semester AI course project, featuring data analysis, model training, and risk scoring with Python and Jupyter Notebooks.",
    tags: ["AI"],
    techStack: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebook"],
    image: "/images/athlete-injury.png",
    githubUrl: "https://github.com/GursharenKaur/Athlete-Injury-Risk-Prediction-AI-4th-Semester-Project-",
    featured: false,
    year: 2025,
  },
  {
    id: "casequest-25",
    title: "CaseQuest 2025",
    tagline: "Case study competition platform",
    description:
      "A JavaScript web application built for managing and hosting the CaseQuest 2025 case study competition. Features include team registration, case submission, and judging workflows.",
    tags: ["Full-Stack"],
    techStack: ["JavaScript", "HTML", "CSS", "Node.js"],
    image: "/images/casequest.png",
    githubUrl: "https://github.com/GursharenKaur/CASEQUEST-25",
    featured: false,
    year: 2025,
  },
  {
    id: "web-scraping-selenium",
    title: "Web Scraping with Selenium",
    tagline: "Automated web data extraction using Selenium & Python",
    description:
      "Built an automated web scraping tool using Python and Selenium for extracting structured data from websites. Demonstrates browser automation, data parsing, and handling dynamic content.",
    tags: ["Full-Stack"],
    techStack: ["Python", "Selenium", "BeautifulSoup", "Automation"],
    image: "/images/web-scraping.png",
    githubUrl: "https://github.com/GursharenKaur/Web-Scraping-Selenium",
    featured: false,
    year: 2025,
  },
  {
    id: "object-detection",
    title: "Object Detection",
    tagline: "Collection of OpenCV & computer vision projects",
    description:
      "A collection of computer vision mini-projects using Python and OpenCV, including real-time object detection, image processing, and feature extraction experiments.",
    tags: ["AI"],
    techStack: ["Python", "OpenCV", "Computer Vision"],
    image: "/images/object-detection.png",
    githubUrl: "https://github.com/GursharenKaur/Object-Detection-MiniProjects",
    featured: false,
    year: 2025,
  },
  {
    id: "search-bar-lazy-load",
    title: "Search Bar with Lazy Loading",
    tagline: "Performant search UI with infinite scroll & lazy loading",
    description:
      "A JavaScript frontend component implementing a search bar with lazy loading functionality for efficient data fetching and rendering. Demonstrates performance optimization techniques for large datasets.",
    tags: ["UI/UX"],
    techStack: ["JavaScript", "HTML", "CSS", "REST API"],
    image: "/images/search-bar.png",
    githubUrl: "https://github.com/GursharenKaur/Search-Bar-with-Lazy-Load-Functionality",
    featured: false,
    year: 2026,
  },
];

/* ── Skills ──────────────────────────────────────────────── */
export const skills: Skill[] = [
  // Languages
  { name: "C++", icon: "⚡", level: "Proficient", category: "Language" },
  { name: "Python", icon: "🐍", level: "Proficient", category: "Language" },
  { name: "HTML/CSS", icon: "🎨", level: "Expert", category: "Language" },

  // Frameworks & Tools
  { name: "React", icon: "⚛️", level: "Proficient", category: "Frontend" },
  { name: "Node.js", icon: "🟩", level: "Proficient", category: "Frontend" },
  { name: "Express.js", icon: "🚀", level: "Proficient", category: "Frontend" },
  { name: "Next.js", icon: "▲", level: "Proficient", category: "Frontend" },
  { name: "Tailwind CSS", icon: "💨", level: "Expert", category: "Frontend" },

  // ML & Deep Learning
  { name: "SWIN Transformer", icon: "🧠", level: "Proficient", category: "AI/ML" },
  { name: "Semantic Segmentation", icon: "🖼️", level: "Proficient", category: "AI/ML" },
  { name: "OpenCV", icon: "👁️", level: "Proficient", category: "AI/ML" },
  { name: "Deep Learning", icon: "🔬", level: "Proficient", category: "AI/ML" },
  { name: "CNNs", icon: "🧬", level: "Proficient", category: "AI/ML" },

  // Tools & Others
  { name: "Git", icon: "🔀", level: "Expert", category: "DevOps" },
  { name: "GitHub", icon: "🐙", level: "Expert", category: "DevOps" },
  { name: "Selenium", icon: "🌐", level: "Proficient", category: "DevOps" },
  { name: "Excel", icon: "📊", level: "Proficient", category: "DevOps" },
  { name: "Data Analysis", icon: "📈", level: "Proficient", category: "DevOps" },

  // Coursework topics (as skills)
  { name: "DSA", icon: "🧮", level: "Proficient", category: "Backend" },
  { name: "Agile / Scrum", icon: "🔄", level: "Proficient", category: "Backend" },
  { name: "Computer Networking", icon: "🌐", level: "Proficient", category: "Backend" },
];

/* ── Marquee Skills ────────────────────────────────────────── */
export const marqueeSkills = [
  { name: "C++", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "Express.js", icon: "🚀" },
  { name: "Next.js", icon: "▲" },
  { name: "OpenCV", icon: "👁️" },
  { name: "Deep Learning", icon: "🔬" },
  { name: "Git", icon: "🔀" },
  { name: "Selenium", icon: "🌐" },
];

/* ── Currently Learning ──────────────────────────────────── */
export const currentlyLearning = [
  { name: "SWIN Transformer", icon: "🧠" },
  { name: "Semantic Segmentation", icon: "🖼️" },
  { name: "Three.js / R3F", icon: "🌐" },
  { name: "Advanced ML Architectures", icon: "🔬" },
];

/* ── Timeline ────────────────────────────────────────────── */
export const timeline: TimelineItem[] = [
  /* ─── Education ────────────────────────────────────────── */
  {
    id: "edu-1",
    type: "education",
    title: "B.E. Computer Engineering",
    organization: "Thapar Institute of Engineering and Technology",
    location: "Patiala, India",
    period: "2023 — 2027",
    description:
      "Pursuing Bachelor of Engineering in Computer Engineering. CGPA: 8.57/10. Focused on full-stack development, machine learning, data structures & algorithms, and software engineering.",
    tags: ["Computer Engineering", "ML", "Full-Stack", "DSA"],
  },
  {
    id: "edu-2",
    type: "education",
    title: "Class XII — CBSE",
    organization: "Swami Sant Dass Public School",
    location: "Phagwara, India",
    period: "2023",
    description:
      "Completed senior secondary education with 94.2% in CBSE board examinations.",
    tags: ["CBSE", "94.2%"],
  },

  /* ─── Work Experience ──────────────────────────────────── */
  {
    id: "work-1",
    type: "work",
    title: "Research Intern",
    organization: "Thapar Institute of Engineering and Technology",
    location: "Patiala, India",
    period: "Jun 2025 — Dec 2025",
    description:
      "Worked under Dr. Neeraj Kumar and Dr. Sandeep Verma, Computer Science Department. Conducted comprehensive review on underwater sensor networks, analyzing advancements in communication protocols and 3D network topologies. Enhanced skills in scientific writing, critical analysis, and data interpretation, collaborating with domain experts throughout the research process.",
    tags: ["Research", "Sensor Networks", "Scientific Writing"],
  },

  /* ─── Organizational Roles ─────────────────────────────── */
  {
    id: "achievement-1",
    type: "achievement",
    title: "Technical Secretary",
    organization: "Thapar Venture Club",
    location: "Patiala, India",
    period: "2025 — 2026",
    description:
      "Serving as Technical Secretary of Thapar Venture Club, leading technical initiatives and events for the entrepreneurship community.",
    tags: ["Leadership", "Tech"],
  },
  {
    id: "achievement-2",
    type: "achievement",
    title: "Overall Content Coordinator — E-Summit'25",
    organization: "Thapar Venture Club",
    location: "Patiala, India",
    period: "2025",
    description:
      "Led the content strategy and coordination for E-Summit'25, managing all written and digital communication for the flagship entrepreneurship summit.",
    tags: ["Content", "Event Management"],
  },
  {
    id: "achievement-3",
    type: "achievement",
    title: "Executive Committee Member",
    organization: "Thapar Food Festival",
    location: "Patiala, India",
    period: "2025",
    description:
      "Served on the Executive Committee for Thapar Food Festival 2025, contributing to event planning and execution.",
    tags: ["Event Management", "Leadership"],
  },
];

/* ── Stats ───────────────────────────────────────────────── */
export const stats = [
  { value: "9+", label: "Projects Built" },
  { value: "8.57", label: "CGPA" },
  { value: "10+", label: "Tech Stack" },
  { value: "36", label: "GitHub Repos" },
];

/* ── Fun Facts (for Bento / About) ──────────────────────── */
export const funFacts = [
  { emoji: "🎓", text: "B.E. Computer Engineering @ TIET (8.57 CGPA)" },
  { emoji: "🔬", text: "Research intern — underwater sensor networks" },
  { emoji: "🧠", text: "Passionate about ML & deep learning" },
  { emoji: "📝", text: "Technical Secretary @ Thapar Venture Club" },
];
