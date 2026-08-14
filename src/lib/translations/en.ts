/* ─────────────────────────────────────────────────────────────
   ENGLISH — base translation dictionary (default locale).
   All other locale files are type-checked against this shape.
───────────────────────────────────────────────────────────── */
const en = {
  nav: {
    home: "Home",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    letsTalk: "Let's Talk",
    openSettings: "Open appearance settings",
    toggleMenu: "Toggle menu",
  },
  settings: {
    appearance: "Appearance",
    colorTheme: "Color theme",
    mode: "Mode",
    dark: "Dark",
    light: "Light",
  },
  language: {
    label: "Language",
    switchLanguage: "Switch language",
    current: "Current language: {lang}",
  },
  hero: {
    greeting: "Hi, I'm",
    viewWork: "View My Work",
    viewResume: "View Resume",
    scroll: "scroll",
  },
  about: {
    heading: "My Story",
    paragraph2:
      "My journey is driven by a deep curiosity for how things work. Whether it's architecting a robust backend system or fine-tuning the motion of a 3D interface, I find beauty in the balance between complexity and simplicity.",
  },
  education: {
    heading: "My Education",
    subtitle: "Academic background and learning milestones.",
  },
  skills: {
    heading: "My Toolkit",
    subtitle: "The technologies and tools I use to bring ideas to life.",
    toolsCount: "{count} Tools",
    currentlyExploring: "Currently Exploring",
    categories: {
      Language: "Languages",
      Frontend: "Frameworks & Tools",
      Backend: "Coursework & Practices",
      Database: "Databases",
      "Tools & Analytics": "Tools & Analytics",
      Design: "Design",
      "AI/ML": "AI & Machine Learning",
    },
  },
  projects: {
    heading: "My Projects",
    subtitle: "A selection of my best work and current experiments.",
    viewAll: "View All Projects",
    backToHome: "Back to Home",
    ongoingExperiment: "Ongoing Experiment",
    brewing: "What's Brewing?",
    allHeading: "All Projects",
    allSubtitle:
      "Every project I've built — from full-stack apps to deep learning experiments.",
    noProjects: "No projects found for this category.",
    filters: {
      All: "All",
      "Full-Stack": "Full-Stack",
      "ML/DL": "ML/DL",
      "UI/UX": "UI/UX",
      "Open Source": "Open Source",
    },
    items: {
      "skin-disease-detection": {
        title: "AI-based Skin Disease Detection System",
        tagline: "Deep learning model for accurate skin disease classification",
        description:
          "Designed and fine-tuned a Swin Transformer deep learning model for accurate classification of skin diseases. Built pre-processing pipelines and validated model performance through test cases. Worked on software diagrams for proper end-to-end implementation and debugged to improve model accuracy.",
      },
      "road-segmentation": {
        title: "Road Segmentation from Satellite Images",
        tagline: "Multi-architecture CNN comparison for satellite imagery",
        description:
          "Implemented and compared multiple architectures including U-Net Lite, U-Net Full, U-Net++, DeepLabV3+ (ResNet-50), HRNet-Small, and SegFormer-B0. Built a custom data preprocessing pipeline including resizing, normalization, binary mask generation, and data augmentation using Albumentations. Optimized training for limited GPU memory using mixed-precision training and efficient batch sizing.",
      },
      "scholar-logic": {
        title: "ScholarLogic — Scholarship Portal",
        tagline: "AI-powered scholarship discovery and management platform",
        description:
          "A full-stack scholarship management platform built with Next.js and TypeScript. Features include AI-driven PDF parsing for bulk scholarship uploads, document management for student profiles, and a smart matching algorithm. Developed as a collaborative project with a team.",
      },
      "anvaya-railfit": {
        title: "Anvaya RailFit",
        tagline: "Health & fitness tracking platform for railway employees",
        description:
          "A TypeScript-based full-stack web application designed for health and fitness monitoring. Built with a modern frontend stack and focused on user-friendly UI/UX for tracking health metrics and fitness routines.",
      },
      "athlete-injury-prediction": {
        title: "Athlete Injury Risk Prediction",
        tagline: "AI model to predict athlete injury risk — 4th semester project",
        description:
          "Built a machine learning system to predict injury risk in athletes using health and performance data. Developed as a 4th semester AI course project, featuring data analysis, model training, and risk scoring with Python and Jupyter Notebooks.",
      },
      "casequest-25": {
        title: "CaseQuest 2025",
        tagline: "Case study competition platform",
        description:
          "A JavaScript web application built for managing and hosting the CaseQuest 2025 case study competition. Features include team registration, case submission, and judging workflows.",
      },
      "web-scraping-selenium": {
        title: "Web Scraping with Selenium",
        tagline: "Automated web data extraction using Selenium & Python",
        description:
          "Built an automated web scraping tool using Python and Selenium for extracting structured data from websites. Demonstrates browser automation, data parsing, and handling dynamic content.",
      },
      "object-detection": {
        title: "Object Detection",
        tagline: "Collection of OpenCV & computer vision projects",
        description:
          "A collection of computer vision mini-projects using Python and OpenCV, including real-time object detection, image processing, and feature extraction experiments.",
      },
      "search-bar-lazy-load": {
        title: "Search Bar with Lazy Loading",
        tagline: "Performant search UI with infinite scroll & lazy loading",
        description:
          "A JavaScript frontend component implementing a search bar with lazy loading functionality for efficient data fetching and rendering. Demonstrates performance optimization techniques for large datasets.",
      },
    },
  },
  experience: {
    heading: "My Journey",
    subtitle: "Professional roles and positions I've held over the years.",
  },
  timeline: {
    items: {
      "edu-1": {
        title: "B.E. Computer Engineering",
        organization: "Thapar Institute of Engineering and Technology",
        description:
          "Pursuing Bachelor of Engineering in Computer Engineering. CGPA: 8.57/10. Focused on full-stack development, machine learning, data structures & algorithms, and software engineering.",
      },
      "edu-2": {
        title: "Class XII — CBSE",
        organization: "Swami Sant Dass Public School",
        description:
          "Completed senior secondary education with 94.2% in CBSE board examinations.",
      },
      "work-1": {
        title: "Research Intern",
        organization: "Thapar Institute of Engineering and Technology",
        description:
          "Worked under Dr. Neeraj Kumar and Dr. Sandeep Verma, Computer Science Department. Conducted comprehensive review on underwater sensor networks, analyzing advancements in communication protocols and 3D network topologies. Enhanced skills in scientific writing, critical analysis, and data interpretation, collaborating with domain experts throughout the research process.",
      },
      "achievement-1": {
        title: "Technical Secretary",
        organization: "Thapar Venture Club",
        description:
          "Serving as Technical Secretary of Thapar Venture Club, leading technical initiatives and events for the entrepreneurship community.",
      },
      "achievement-2": {
        title: "Overall Content Coordinator — E-Summit'25",
        organization: "Thapar Venture Club",
        description:
          "Led the content strategy and coordination for E-Summit'25, managing all written and digital communication for the flagship entrepreneurship summit.",
      },
      "achievement-3": {
        title: "Executive Committee Member",
        organization: "Thapar Food Festival",
        description:
          "Served on the Executive Committee for Thapar Food Festival 2025, contributing to event planning and execution.",
      },
    },
  },
  contact: {
    heading: "Say Hello",
    subtitle:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    directContact: "Direct Contact",
    emailMe: "Email Me",
    followMe: "Follow me",
    ctaHeading: "Let's build something amazing together.",
    ctaParagraph:
      "Whether you have a question or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!",
    dropMail: "Drop Me a Mail",
    mailSubject: "Let's Connect — From Your Portfolio",
  },
  terminal: {
    openChat: "Open terminal chat",
    closeChat: "Close terminal",
    chatInput: "Chat input",
    askMeAnything: "ask me anything",
    welcomeLine1: "// welcome to gursharen's terminal",
    welcomeLine2: "// type a question or click a suggestion below",
    inputPlaceholder: "type your question...",
  },
  data: {
    personalInfo: {
      roles: "Full Stack Developer|ML Engineer|Research Enthusiast|Finance Enthusiast",
      tagline:
        "Computer Engineering student passionate about Machine Learning, Deep Learning, and Quantitative Finance — building intelligent, scalable solutions at the intersection of AI and real-world impact.",
      bio: "I'm a Computer Engineering student at Thapar Institute of Engineering and Technology, skilled in Full Stack Development. Experienced in building scalable applications using modern frameworks and driven by a passion for secure, user-focused digital innovation. I have hands-on expertise in Machine Learning, and I'm familiar with Git, Agile (Scrum), and collaborative team environments. I'm eager to apply problem-solving skills and work to provide high-quality software solutions.",
      availabilityNote: "Open to opportunities — 2026",
    },
  },
} as const;

export default en;
export type Translations = typeof en;
