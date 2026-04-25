import type { ChatKnowledgeEntry } from "@/types";

/* ─────────────────────────────────────────────────────────────
   CHAT KNOWLEDGE BASE
   ↳ All the data that powers the terminal chatbot.
   ↳ Organized by category: projects, skills, experience, etc.
───────────────────────────────────────────────────────────── */

/* ── Project Knowledge ──────────────────────────────────── */
const projectKnowledge: ChatKnowledgeEntry[] = [
  /* — Skin Disease Detection — */
  {
    id: "proj-skin-overview",
    category: "project",
    projectId: "skin-disease-detection",
    keywords: [
      "skin disease", "skin detection", "swin transformer", "deep learning model",
      "skin classification", "dermatology", "skin",
    ],
    question: "Tell me about the Skin Disease Detection project",
    answer:
      "I built an AI-based Skin Disease Detection System using a SWIN Transformer deep learning model. It classifies various skin diseases from images with high accuracy. I designed the full preprocessing pipeline — image augmentation, normalization, and validation — and created software diagrams for end-to-end implementation. I iteratively debugged and fine-tuned the model to improve classification accuracy.",
    followUps: [
      "What challenges did you face in this project?",
      "Why did you choose SWIN Transformer over other architectures?",
      "What was the accuracy of the model?",
    ],
  },
  {
    id: "proj-skin-challenges",
    category: "project",
    projectId: "skin-disease-detection",
    keywords: [
      "skin challenge", "skin difficulty", "skin problem",
    ],
    question: "What challenges did you face in the Skin Disease Detection project?",
    answer:
      "The main challenges were dealing with class imbalance in the dataset (some diseases had far fewer samples), ensuring the model generalized well to unseen images, and optimizing the SWIN Transformer's hyperparameters for our specific use case. I used data augmentation techniques and careful validation splits to address these issues.",
    followUps: [
      "What tech stack did you use?",
      "Tell me about your other ML projects",
    ],
  },
  {
    id: "proj-skin-why-swin",
    category: "project",
    projectId: "skin-disease-detection",
    keywords: [
      "why swin", "swin vs", "architecture choice", "why transformer",
    ],
    question: "Why did you choose SWIN Transformer?",
    answer:
      "SWIN Transformer was chosen because it excels at capturing both local and global features in images through its shifted window approach. Unlike traditional CNNs, it handles multi-scale feature extraction naturally, which is critical for skin disease images where lesions vary significantly in size and appearance. It also has better computational efficiency compared to standard Vision Transformers.",
    followUps: [
      "Tell me about your Road Segmentation project",
      "What other ML architectures have you worked with?",
    ],
  },

  /* — Road Segmentation — */
  {
    id: "proj-road-overview",
    category: "project",
    projectId: "road-segmentation",
    keywords: [
      "road segmentation", "satellite", "satellite imagery", "road extraction",
      "segmentation", "u-net", "deeplab", "hrnet", "segformer",
    ],
    question: "Tell me about the Road Segmentation project",
    answer:
      "I implemented and compared 6 different CNN architectures for road segmentation from satellite images: U-Net Lite, U-Net Full, U-Net++, DeepLabV3+ (ResNet-50), HRNet-Small, and SegFormer-B0. I built a custom preprocessing pipeline including resizing, normalization, binary mask generation, and data augmentation using Albumentations. The training was optimized for limited GPU memory using mixed-precision training and efficient batch sizing.",
    followUps: [
      "Which architecture performed best?",
      "What preprocessing techniques did you use?",
      "How did you handle GPU memory limitations?",
    ],
  },
  {
    id: "proj-road-tech",
    category: "project",
    projectId: "road-segmentation",
    keywords: [
      "road tech", "road architecture", "best architecture", "which performed",
    ],
    question: "Which architecture performed best for Road Segmentation?",
    answer:
      "The comparison across all 6 architectures revealed interesting trade-offs between accuracy, speed, and memory usage. DeepLabV3+ with ResNet-50 backbone showed strong performance due to its atrous convolutions, while SegFormer-B0 offered a great balance of efficiency and accuracy. The project was valuable in understanding how different architectures approach the same problem differently.",
    followUps: [
      "Tell me about your ML experience overall",
      "What's your strongest project?",
    ],
  },

  /* — ScholarLogic — */
  {
    id: "proj-scholar-overview",
    category: "project",
    projectId: "scholar-logic",
    keywords: [
      "scholarlogic", "scholar logic", "scholarship", "scholarship portal",
      "pdf parsing", "scholarship management",
    ],
    question: "Tell me about ScholarLogic",
    answer:
      "ScholarLogic is a full-stack scholarship management platform built with Next.js and TypeScript. It features AI-driven PDF parsing for bulk scholarship uploads, document management for student profiles, and a smart matching algorithm that connects students with relevant scholarships. I developed this collaboratively with a team, handling both frontend and backend work.",
    followUps: [
      "What was your role in the team?",
      "How does the AI-driven PDF parsing work?",
      "What database did you use?",
    ],
  },
  {
    id: "proj-scholar-tech",
    category: "project",
    projectId: "scholar-logic",
    keywords: [
      "scholar tech", "scholar stack", "scholar database",
    ],
    question: "What tech stack did you use for ScholarLogic?",
    answer:
      "ScholarLogic is built with Next.js and TypeScript on the frontend, PostgreSQL for the database, and Tailwind CSS for styling. The AI-driven PDF parsing uses natural language processing to extract scholarship details from uploaded documents automatically.",
    followUps: [
      "Tell me about your other full-stack projects",
      "What's your experience with Next.js?",
    ],
  },

  /* — Anvaya RailFit — */
  {
    id: "proj-railfit-overview",
    category: "project",
    projectId: "anvaya-railfit",
    keywords: [
      "anvaya", "railfit", "rail fit", "railway", "health tracking",
      "fitness tracking", "health monitoring",
    ],
    question: "Tell me about Anvaya RailFit",
    answer:
      "Anvaya RailFit is a full-stack web application designed for health and fitness monitoring of railway employees. Built with TypeScript, React, Node.js, and Tailwind CSS, it provides a user-friendly interface for tracking health metrics and fitness routines. The focus was on creating an intuitive UI/UX that makes health tracking accessible for all users.",
    followUps: [
      "What was the most interesting part of building this?",
      "Tell me about your other full-stack projects",
    ],
  },

  /* — Athlete Injury Prediction — */
  {
    id: "proj-athlete-overview",
    category: "project",
    projectId: "athlete-injury-prediction",
    keywords: [
      "athlete", "injury", "prediction", "injury risk", "sports",
      "4th semester", "ai course",
    ],
    question: "Tell me about the Athlete Injury Prediction project",
    answer:
      "This was my 4th semester AI course project where I built a machine learning system to predict injury risk in athletes using health and performance data. It features data analysis, model training with Scikit-learn, and risk scoring. I used Python, Pandas, and Jupyter Notebooks for the entire pipeline from data exploration to prediction.",
    followUps: [
      "What ML algorithms did you use?",
      "Tell me about your other ML projects",
    ],
  },

  /* — CaseQuest 2025 — */
  {
    id: "proj-casequest-overview",
    category: "project",
    projectId: "casequest-25",
    keywords: [
      "casequest", "case quest", "case study", "competition platform",
    ],
    question: "Tell me about CaseQuest 2025",
    answer:
      "CaseQuest 2025 is a web application built for managing and hosting a case study competition. It features team registration, case submission workflows, and judging tools. Built with JavaScript, HTML, CSS, and Node.js — it was a practical exercise in building event management functionality from scratch.",
    followUps: [
      "Tell me about your full-stack experience",
      "What other projects have you built?",
    ],
  },

  /* — Web Scraping — */
  {
    id: "proj-scraping-overview",
    category: "project",
    projectId: "web-scraping-selenium",
    keywords: [
      "web scraping", "selenium", "scraping", "automation", "beautifulsoup",
      "data extraction",
    ],
    question: "Tell me about the Web Scraping project",
    answer:
      "I built an automated web scraping tool using Python and Selenium for extracting structured data from websites. It demonstrates browser automation, data parsing with BeautifulSoup, and handling dynamic JavaScript-rendered content. This project showcases my ability to work with automation and data extraction pipelines.",
    followUps: [
      "What did you scrape?",
      "Tell me about your Python experience",
    ],
  },

  /* — Object Detection — */
  {
    id: "proj-objdetect-overview",
    category: "project",
    projectId: "object-detection",
    keywords: [
      "object detection", "opencv", "computer vision", "image processing",
      "feature extraction",
    ],
    question: "Tell me about the Object Detection projects",
    answer:
      "This is a collection of computer vision mini-projects using Python and OpenCV, including real-time object detection, image processing, and feature extraction experiments. It was a great way to build hands-on experience with computer vision fundamentals before moving on to more complex deep learning architectures.",
    followUps: [
      "How did this lead to your deep learning work?",
      "Tell me about your ML journey",
    ],
  },

  /* — Search Bar with Lazy Loading — */
  {
    id: "proj-searchbar-overview",
    category: "project",
    projectId: "search-bar-lazy-load",
    keywords: [
      "search bar", "lazy loading", "infinite scroll", "performance",
      "lazy load",
    ],
    question: "Tell me about the Search Bar with Lazy Loading",
    answer:
      "This is a JavaScript frontend component implementing a search bar with lazy loading functionality for efficient data fetching and rendering. It demonstrates performance optimization techniques for handling large datasets, including intersection observer-based lazy loading and debounced search queries.",
    followUps: [
      "What frontend skills do you have?",
      "Tell me about your strongest project",
    ],
  },
];

/* ── General Project Questions ──────────────────────────── */
const generalProjectKnowledge: ChatKnowledgeEntry[] = [
  {
    id: "gen-best-project",
    category: "project",
    keywords: [
      "best project", "strongest project", "favorite project", "proudest",
      "top project", "most impressive",
    ],
    question: "What's your best/strongest project?",
    answer:
      "I'd say my AI-based Skin Disease Detection System is my strongest work — it combines deep learning (SWIN Transformer), custom preprocessing pipelines, and end-to-end software engineering. But if you're looking at full-stack, ScholarLogic stands out for its AI-driven PDF parsing and smart matching algorithm. Both showcase different sides of my skills!",
    followUps: [
      "Tell me about the Skin Disease Detection project",
      "Tell me about ScholarLogic",
      "What's your tech stack?",
    ],
  },
  {
    id: "gen-all-projects",
    category: "project",
    keywords: [
      "all projects", "how many projects", "list projects", "your projects",
      "what have you built", "show projects",
    ],
    question: "What projects have you built?",
    answer:
      "I've built 9+ projects spanning ML/Deep Learning and Full-Stack development:\n\n• AI-based Skin Disease Detection (SWIN Transformer)\n• Road Segmentation from Satellite Images (6 architectures compared)\n• ScholarLogic — Scholarship Portal (Next.js + AI)\n• Anvaya RailFit — Health tracking for railway employees\n• Athlete Injury Risk Prediction (ML)\n• CaseQuest 2025 — Competition platform\n• Web Scraping with Selenium\n• Object Detection mini-projects (OpenCV)\n• Search Bar with Lazy Loading\n\nAsk me about any specific one for a deep dive!",
    followUps: [
      "Tell me about your ML projects",
      "Tell me about your full-stack projects",
      "What's your strongest project?",
    ],
  },
  {
    id: "gen-ml-projects",
    category: "project",
    keywords: [
      "ml projects", "machine learning projects", "deep learning projects",
      "ai projects", "ml experience",
    ],
    question: "Tell me about your ML projects",
    answer:
      "My ML/Deep Learning work includes:\n\n• Skin Disease Detection — SWIN Transformer for classification\n• Road Segmentation — Compared U-Net, DeepLabV3+, HRNet, SegFormer on satellite imagery\n• Athlete Injury Prediction — Risk scoring with Scikit-learn\n• Object Detection — OpenCV-based computer vision experiments\n\nI have hands-on experience with PyTorch, TensorFlow, OpenCV, and various CNN architectures.",
    followUps: [
      "Tell me about the Skin Disease Detection project",
      "Tell me about Road Segmentation",
      "What ML frameworks do you know?",
    ],
  },
  {
    id: "gen-fullstack-projects",
    category: "project",
    keywords: [
      "full stack projects", "fullstack projects", "web projects",
      "frontend projects", "backend projects", "web development",
    ],
    question: "Tell me about your full-stack projects",
    answer:
      "My full-stack work includes:\n\n• ScholarLogic — Next.js + TypeScript + PostgreSQL scholarship platform with AI-driven PDF parsing\n• Anvaya RailFit — React + Node.js health tracking app for railway employees\n• CaseQuest 2025 — Competition management platform\n• This Portfolio — Built with Next.js, TypeScript, Framer Motion, and a custom design system\n\nI work across the entire stack from database design to UI/UX implementation.",
    followUps: [
      "Tell me about ScholarLogic",
      "What's your experience with Next.js?",
      "What databases have you worked with?",
    ],
  },
];

/* ── Skills Knowledge ───────────────────────────────────── */
const skillsKnowledge: ChatKnowledgeEntry[] = [
  {
    id: "skill-tech-stack",
    category: "skill",
    keywords: [
      "tech stack", "technologies", "tools", "what do you use",
      "programming languages", "frameworks", "skills",
    ],
    question: "What's your tech stack?",
    answer:
      "Here's what I work with:\n\n🔤 Languages: C++, Python, JavaScript/TypeScript, HTML/CSS\n⚛️ Frontend: React, Next.js, Tailwind CSS\n🔧 Backend: Node.js, Express.js\n🧠 ML/AI: PyTorch, TensorFlow, OpenCV, SWIN Transformer, CNNs\n🛠️ Tools: Git, GitHub, Selenium, Jupyter Notebooks\n📊 Other: Data Analysis, Agile/Scrum, Computer Networking",
    followUps: [
      "What's your strongest language?",
      "Tell me about your ML skills",
      "What frontend frameworks do you know?",
    ],
  },
  {
    id: "skill-strongest-lang",
    category: "skill",
    keywords: [
      "strongest language", "best language", "which language", "favorite language",
      "most experienced",
    ],
    question: "What's your strongest programming language?",
    answer:
      "I'm most proficient in Python and C++. Python is my go-to for ML/deep learning work, data analysis, and scripting. C++ is my foundation for DSA and competitive problem-solving. For web development, I work extensively with TypeScript/JavaScript.",
    followUps: [
      "Tell me about your ML skills",
      "What frontend frameworks do you know?",
    ],
  },
  {
    id: "skill-ml",
    category: "skill",
    keywords: [
      "ml skills", "machine learning skills", "deep learning skills",
      "ai skills", "ml frameworks", "ml experience",
    ],
    question: "What ML/AI skills do you have?",
    answer:
      "My ML/AI expertise includes:\n\n• Deep Learning: SWIN Transformer, CNNs, U-Net, DeepLabV3+, SegFormer, HRNet\n• Frameworks: PyTorch, TensorFlow, Scikit-learn\n• Computer Vision: OpenCV, image segmentation, object detection\n• Data: Pandas, NumPy, Albumentations for augmentation\n• Research: Currently exploring advanced ML architectures and semantic segmentation",
    followUps: [
      "Tell me about your ML projects",
      "What are you currently learning?",
    ],
  },
  {
    id: "skill-frontend",
    category: "skill",
    keywords: [
      "frontend", "react", "next.js", "nextjs", "web dev", "css",
      "tailwind", "ui", "ux",
    ],
    question: "What frontend frameworks do you know?",
    answer:
      "I work with React and Next.js as my primary frontend frameworks, with TypeScript for type safety. For styling, I use Tailwind CSS and custom CSS. I also have experience with Framer Motion for animations. This portfolio itself is built with Next.js + TypeScript + Framer Motion!",
    followUps: [
      "Tell me about your full-stack projects",
      "What's your experience with Next.js?",
    ],
  },
  {
    id: "skill-currently-learning",
    category: "skill",
    keywords: [
      "currently learning", "learning now", "what are you studying",
      "upskilling", "future skills",
    ],
    question: "What are you currently learning?",
    answer:
      "I'm currently diving deeper into:\n\n🧠 SWIN Transformer architectures\n🖼️ Advanced Semantic Segmentation techniques\n🌐 Three.js / React Three Fiber for 3D web experiences\n🔬 Advanced ML architectures and research papers\n\nAlways expanding my toolkit!",
    followUps: [
      "Tell me about your ML projects",
      "What's your tech stack?",
    ],
  },
];

/* ── Experience & Education Knowledge ───────────────────── */
const experienceKnowledge: ChatKnowledgeEntry[] = [
  {
    id: "exp-research-intern",
    category: "experience",
    keywords: [
      "research intern", "internship", "work experience", "thapar research",
      "underwater sensor", "research experience", "intern",
    ],
    question: "Tell me about your work experience",
    answer:
      "I worked as a Research Intern at Thapar Institute of Engineering and Technology (Jun–Dec 2025) under Dr. Neeraj Kumar and Dr. Sandeep Verma in the Computer Science Department. I conducted a comprehensive review on underwater sensor networks, analyzing advancements in communication protocols and 3D network topologies. This enhanced my skills in scientific writing, critical analysis, and data interpretation.",
    followUps: [
      "Tell me about your education",
      "What leadership roles do you hold?",
    ],
  },
  {
    id: "exp-leadership",
    category: "experience",
    keywords: [
      "leadership", "roles", "organizations", "clubs", "extracurricular",
      "venture club", "technical secretary", "e-summit",
    ],
    question: "What leadership roles do you hold?",
    answer:
      "I'm actively involved in campus organizations:\n\n🎯 Technical Secretary — Thapar Venture Club (2025–2026): Leading technical initiatives for the entrepreneurship community\n📝 Overall Content Coordinator — E-Summit'25: Led content strategy for the flagship entrepreneurship summit\n🍕 Executive Committee Member — Thapar Food Festival 2025\n\nThese roles have strengthened my leadership, event management, and communication skills.",
    followUps: [
      "Tell me about your research internship",
      "Are you open to opportunities?",
    ],
  },
  {
    id: "edu-overview",
    category: "education",
    keywords: [
      "education", "college", "university", "thapar", "degree",
      "cgpa", "gpa", "academic", "school", "class 12",
    ],
    question: "Tell me about your education",
    answer:
      "🎓 B.E. Computer Engineering — Thapar Institute of Engineering and Technology (2023–2027)\nCGPA: 8.57/10 | Focused on full-stack development, ML, DSA, and software engineering\n\n📚 Class XII (CBSE) — Swami Sant Dass Public School, Phagwara\nScored 94.2% in board examinations",
    followUps: [
      "What's your CGPA?",
      "Tell me about your research internship",
      "What are your strongest skills?",
    ],
  },
];

/* ── General / About Knowledge ──────────────────────────── */
const generalKnowledge: ChatKnowledgeEntry[] = [
  {
    id: "gen-who",
    category: "general",
    keywords: [
      "who are you", "about you", "introduce yourself", "tell me about yourself",
      "about gursharen", "who is gursharen",
    ],
    question: "Who are you?",
    answer:
      "Hey! I'm Gursharen Kaur Suri — a Computer Engineering student at Thapar Institute of Engineering and Technology. I'm a Full Stack Developer and ML Engineer with a research bent. I build everything from deep learning models (SWIN Transformers, CNNs) to full-stack web apps (Next.js, React). Currently in my 3rd year with an 8.57 CGPA, and I'm always exploring new technologies!",
    followUps: [
      "What's your tech stack?",
      "Tell me about your projects",
      "Are you open to opportunities?",
    ],
  },
  {
    id: "gen-availability",
    category: "contact",
    keywords: [
      "available", "availability", "hire", "hiring", "internship",
      "opportunities", "open to", "job", "work with you", "freelance",
    ],
    question: "Are you open to opportunities?",
    answer:
      "Yes! I'm currently open to opportunities for 2026 — whether it's internships, research collaborations, or full-time roles. I'm particularly interested in positions involving ML/Deep Learning, Full-Stack Development, or research. Feel free to reach out!",
    followUps: [
      "How can I contact you?",
      "What kind of roles interest you?",
    ],
  },
  {
    id: "gen-contact",
    category: "contact",
    keywords: [
      "contact", "email", "reach", "get in touch", "connect",
      "message", "how to reach",
    ],
    question: "How can I contact you?",
    answer:
      "You can reach me at:\n\n📧 Email: gksuri04@gmail.com\n💼 LinkedIn: linkedin.com/in/gursharen-kaur-suri\n🐙 GitHub: github.com/GursharenKaur\n\nOr use the contact form on this portfolio — I'd love to hear from you!",
    followUps: [
      "Are you open to opportunities?",
      "Tell me about your projects",
    ],
  },
  {
    id: "gen-resume",
    category: "contact",
    keywords: [
      "resume", "cv", "curriculum vitae", "download resume",
    ],
    question: "Can I see your resume?",
    answer:
      "Absolutely! You can view or download my resume from the 'View Resume' button in the hero section of this portfolio, or click the link in the navigation. It has a detailed breakdown of my projects, skills, and experience.",
    followUps: [
      "Tell me about your experience",
      "What's your tech stack?",
    ],
  },
  {
    id: "gen-location",
    category: "general",
    keywords: [
      "location", "where", "based", "city", "country", "india",
    ],
    question: "Where are you based?",
    answer:
      "I'm based in Patiala, India 🇮🇳 — studying at Thapar Institute of Engineering and Technology. I'm open to remote opportunities as well as relocating for the right role!",
    followUps: [
      "Are you open to opportunities?",
      "Tell me about your education",
    ],
  },
];

/* ── Default / Fallback Responses ───────────────────────── */
export const fallbackResponses = [
  "Hmm, I don't have specific info on that. Try asking about my projects, skills, experience, or education!",
  "I'm not sure about that one. You could ask me things like 'What's your tech stack?' or 'Tell me about your ML projects'.",
  "I don't have a great answer for that. Try asking about a specific project, my skills, or how to get in touch!",
];

export const greetingResponse: ChatKnowledgeEntry = {
  id: "greeting",
  category: "general",
  keywords: ["hi", "hello", "hey", "sup", "yo", "good morning", "good evening"],
  question: "Hello!",
  answer:
    "Hey there! 👋 Welcome to my portfolio terminal. I'm Gursharen's AI assistant — ask me anything about her projects, skills, experience, or how to get in touch!",
  followUps: [
    "What's your best project?",
    "What's your tech stack?",
    "Are you open to opportunities?",
  ],
};

/* ── Suggested starter queries (shown when chat opens) ─── */
export const suggestedQueries = [
  "What are your best projects?",
  "Tell me about your ML experience",
  "What's your tech stack?",
  "Are you open to opportunities?",
];

/* ── Project-specific suggested queries ─────────────────── */
export const projectSuggestedQueries: Record<string, string[]> = {
  "skin-disease-detection": [
    "What challenges did you face?",
    "Why SWIN Transformer?",
    "What was the accuracy?",
  ],
  "road-segmentation": [
    "Which architecture performed best?",
    "What preprocessing did you use?",
    "How did you handle GPU memory?",
  ],
  "scholar-logic": [
    "How does the PDF parsing work?",
    "What was your role in the team?",
    "What database did you use?",
  ],
  "anvaya-railfit": [
    "What was most interesting to build?",
    "What health metrics does it track?",
  ],
  "athlete-injury-prediction": [
    "What ML algorithms did you use?",
    "How accurate is the prediction?",
  ],
  "casequest-25": [
    "How does the judging system work?",
    "What features did you build?",
  ],
  "web-scraping-selenium": [
    "What websites did you scrape?",
    "How do you handle dynamic content?",
  ],
  "object-detection": [
    "What objects can it detect?",
    "How does it work in real-time?",
  ],
  "search-bar-lazy-load": [
    "How does lazy loading improve performance?",
    "What API does it use?",
  ],
};

/* ── Export: complete knowledge base ─────────────────────── */
export const knowledgeBase: ChatKnowledgeEntry[] = [
  ...projectKnowledge,
  ...generalProjectKnowledge,
  ...skillsKnowledge,
  ...experienceKnowledge,
  ...generalKnowledge,
];
