import type { Translations } from "./en";

/* ─────────────────────────────────────────────────────────────
   DEUTSCH — German translation dictionary
───────────────────────────────────────────────────────────── */
const de: Translations = {
  nav: {
    home: "Start",
    education: "Ausbildung",
    skills: "Kenntnisse",
    projects: "Projekte",
    experience: "Erfahrung",
    contact: "Kontakt",
    letsTalk: "Kontakt aufnehmen",
    openSettings: "Erscheinungsbild-Einstellungen öffnen",
    toggleMenu: "Menü umschalten",
  },
  settings: {
    appearance: "Erscheinungsbild",
    colorTheme: "Farbthema",
    mode: "Modus",
    dark: "Dunkel",
    light: "Hell",
  },
  language: {
    label: "Sprache",
    switchLanguage: "Sprache wechseln",
    current: "Aktuelle Sprache: {lang}",
  },
  hero: {
    greeting: "Hallo, ich bin",
    viewWork: "Meine Arbeit ansehen",
    viewResume: "Lebenslauf ansehen",
    scroll: "scrollen",
  },
  about: {
    heading: "Meine Geschichte",
    paragraph2:
      "Meine Leidenschaft wird von einer tiefen Neugier angetrieben, wie Dinge funktionieren. Ob es um die Architektur eines robusten Backend-Systems oder die Feinabstimmung der Bewegung einer 3D-Oberfläche geht — ich finde Schönheit im Gleichgewicht zwischen Komplexität und Einfachheit.",
  },
  education: {
    heading: "Meine Ausbildung",
    subtitle: "Akademischer Werdegang und wichtige Meilensteine.",
  },
  skills: {
    heading: "Mein Werkzeugkasten",
    subtitle: "Die Technologien und Tools, mit denen ich Ideen zum Leben erwecke.",
    toolsCount: "{count} Tools",
    currentlyExploring: "Derzeit in Erkundung",
    categories: {
      Language: "Programmiersprachen",
      Frontend: "Frameworks & Tools",
      Backend: "Kursinhalte & Praktiken",
      Database: "Datenbanken",
      "Tools & Analytics": "Tools & Analytik",
      Design: "Design",
      "AI/ML": "KI & Machine Learning",
    },
  },
  projects: {
    heading: "Meine Projekte",
    subtitle: "Eine Auswahl meiner besten Arbeiten und aktuellen Experimente.",
    viewAll: "Alle Projekte ansehen",
    backToHome: "Zurück zur Startseite",
    ongoingExperiment: "Laufendes Experiment",
    brewing: "Was ist gerade in Arbeit?",
    allHeading: "Alle Projekte",
    allSubtitle:
      "Jedes Projekt, das ich gebaut habe — von Full-Stack-Anwendungen bis hin zu Deep-Learning-Experimenten.",
    noProjects: "Für diese Kategorie wurden keine Projekte gefunden.",
    filters: {
      All: "Alle",
      "Full-Stack": "Full-Stack",
      "ML/DL": "ML/DL",
      "UI/UX": "UI/UX",
      "Open Source": "Open Source",
    },
    items: {
      "skin-disease-detection": {
        title: "KI-basiertes System zur Erkennung von Hautkrankheiten",
        tagline: "Deep-Learning-Modell für die präzise Klassifizierung von Hautkrankheiten",
        description:
          "Ein Swin-Transformer-Deep-Learning-Modell für die präzise Klassifizierung von Hautkrankheiten entworfen und feinabgestimmt. Vorverarbeitungspipelines entwickelt und die Modellleistung durch Testfälle validiert. An Softwarediagrammen für eine saubere End-to-End-Implementierung gearbeitet und zur Verbesserung der Modellgenauigkeit debuggt.",
      },
      "road-segmentation": {
        title: "Straßensegmentierung aus Satellitenbildern",
        tagline: "Vergleich mehrerer CNN-Architekturen für Satellitenbilder",
        description:
          "Mehrere Architekturen implementiert und verglichen, darunter U-Net Lite, U-Net Full, U-Net++, DeepLabV3+ (ResNet-50), HRNet-Small und SegFormer-B0. Eine eigene Datenvorverarbeitungspipeline mit Größenanpassung, Normalisierung, binärer Maskenerzeugung und Datenaugmentierung mit Albumentations entwickelt. Das Training für begrenzten GPU-Speicher mit Mixed-Precision-Training und effizienter Batch-Größe optimiert.",
      },
      "scholar-logic": {
        title: "ScholarLogic — Stipendienportal",
        tagline: "KI-gestützte Plattform zur Stipendiensuche und -verwaltung",
        description:
          "Eine mit Next.js und TypeScript entwickelte Full-Stack-Plattform zur Stipendienverwaltung. Zu den Funktionen gehören KI-gestütztes PDF-Parsing für den Massenupload von Stipendien, Dokumentenverwaltung für Studierendenprofile und ein intelligenter Matching-Algorithmus. Als gemeinschaftliches Projekt mit einem Team entwickelt.",
      },
      "anvaya-railfit": {
        title: "Anvaya RailFit",
        tagline: "Gesundheits- und Fitness-Tracking-Plattform für Eisenbahnmitarbeiter",
        description:
          "Eine auf TypeScript basierende Full-Stack-Webanwendung für die Gesundheits- und Fitnessüberwachung. Mit einem modernen Frontend-Stack entwickelt und auf eine benutzerfreundliche UI/UX zur Verfolgung von Gesundheitswerten und Fitnessroutinen ausgerichtet.",
      },
      "athlete-injury-prediction": {
        title: "Vorhersage des Verletzungsrisikos bei Athleten",
        tagline: "KI-Modell zur Vorhersage des Verletzungsrisikos bei Athleten — Projekt im 4. Semester",
        description:
          "Ein Machine-Learning-System zur Vorhersage des Verletzungsrisikos bei Athleten anhand von Gesundheits- und Leistungsdaten entwickelt. Als KI-Kursprojekt im 4. Semester umgesetzt, mit Datenanalyse, Modelltraining und Risikobewertung mit Python und Jupyter Notebooks.",
      },
      "casequest-25": {
        title: "CaseQuest 2025",
        tagline: "Plattform für einen Fallstudienwettbewerb",
        description:
          "Eine JavaScript-Webanwendung zur Verwaltung und Ausrichtung des Fallstudienwettbewerbs CaseQuest 2025. Zu den Funktionen gehören Teamregistrierung, Fallabgabe und Bewertungsabläufe.",
      },
      "web-scraping-selenium": {
        title: "Web-Scraping mit Selenium",
        tagline: "Automatisierte Extraktion von Webdaten mit Selenium & Python",
        description:
          "Ein automatisiertes Web-Scraping-Tool mit Python und Selenium zur Extraktion strukturierter Daten von Websites entwickelt. Zeigt Browser-Automatisierung, Datenparsing und den Umgang mit dynamischen Inhalten.",
      },
      "object-detection": {
        title: "Objekterkennung",
        tagline: "Sammlung von OpenCV- und Computer-Vision-Projekten",
        description:
          "Eine Sammlung von Computer-Vision-Miniprojekten mit Python und OpenCV, darunter Echtzeit-Objekterkennung, Bildverarbeitung und Experimente zur Merkmalsextraktion.",
      },
      "search-bar-lazy-load": {
        title: "Suchleiste mit Lazy Loading",
        tagline: "Performante Such-UI mit endlosem Scrollen & Lazy Loading",
        description:
          "Eine JavaScript-Frontend-Komponente, die eine Suchleiste mit Lazy-Loading-Funktionalität für effizientes Datenabrufen und -rendern implementiert. Zeigt Techniken zur Leistungsoptimierung bei großen Datensätzen.",
      },
    },
  },
  experience: {
    heading: "Mein Werdegang",
    subtitle: "Berufliche Rollen und Positionen, die ich im Laufe der Jahre innehatte.",
  },
  timeline: {
    items: {
      "edu-1": {
        title: "B.E. Computer Engineering",
        organization: "Thapar Institute of Engineering and Technology",
        description:
          "Studium des Bachelor of Engineering in Computer Engineering. Notendurchschnitt: 8,57/10. Schwerpunkte: Full-Stack-Entwicklung, Machine Learning, Datenstrukturen & Algorithmen sowie Softwaretechnik.",
      },
      "edu-2": {
        title: "Klasse XII — CBSE",
        organization: "Swami Sant Dass Public School",
        description:
          "Höhere Sekundarschulbildung mit 94,2 % in den CBSE-Abschlussprüfungen abgeschlossen.",
      },
      "work-1": {
        title: "Forschungspraktikant",
        organization: "Thapar Institute of Engineering and Technology",
        description:
          "Tätig unter Dr. Neeraj Kumar und Dr. Sandeep Verma, Fachbereich Informatik. Umfassende Überprüfung von Unterwassersensornetzwerken durchgeführt und Fortschritte bei Kommunikationsprotokollen und 3D-Netzwerktopologien analysiert. Fähigkeiten im wissenschaftlichen Schreiben, in der kritischen Analyse und Dateninterpretation ausgebaut, in Zusammenarbeit mit Fachexperten während des gesamten Forschungsprozesses.",
      },
      "achievement-1": {
        title: "Technischer Sekretär",
        organization: "Thapar Venture Club",
        description:
          "Tätig als Technischer Sekretär des Thapar Venture Club, Leitung technischer Initiativen und Veranstaltungen für die Gründer-Community.",
      },
      "achievement-2": {
        title: "Gesamt-Content-Koordinator — E-Summit'25",
        organization: "Thapar Venture Club",
        description:
          "Leitung der Content-Strategie und -Koordination für den E-Summit'25, verantwortlich für die gesamte schriftliche und digitale Kommunikation des größten Unternehmertum-Gipfels.",
      },
      "achievement-3": {
        title: "Mitglied des Exekutivkomitees",
        organization: "Thapar Food Festival",
        description:
          "Mitglied des Exekutivkomitees des Thapar Food Festival 2025, Mitwirkung an Veranstaltungsplanung und -durchführung.",
      },
    },
  },
  contact: {
    heading: "Hallo sagen",
    subtitle:
      "Ich bin immer offen für neue Projekte, kreative Ideen oder die Möglichkeit, Teil Ihrer Vision zu werden.",
    directContact: "Direkter Kontakt",
    emailMe: "Schreiben Sie mir",
    followMe: "Folgen Sie mir",
    ctaHeading: "Lassen Sie uns gemeinsam etwas Großartiges schaffen.",
    ctaParagraph:
      "Ob Sie eine Frage haben oder einfach nur Hallo sagen möchten — mein Postfach steht immer offen. Ich melde mich so schnell wie möglich bei Ihnen zurück!",
    dropMail: "Schreiben Sie mir eine E-Mail",
    mailSubject: "Lass uns verbinden — Aus deinem Portfolio",
  },
  terminal: {
    openChat: "Terminal-Chat öffnen",
    closeChat: "Terminal schließen",
    chatInput: "Chat-Eingabe",
    askMeAnything: "Frag mich alles",
    welcomeLine1: "// willkommen in Gursharens Terminal",
    welcomeLine2: "// gib eine Frage ein oder klicke unten auf einen Vorschlag",
    inputPlaceholder: "Gib deine Frage ein...",
  },
  data: {
    personalInfo: {
      name: "Gursharen Kaur Suri",
      roles: "Full-Stack-Entwickler|ML-Ingenieur|Forschungsbegeistert|Finanzbegeistert",
      tagline:
        "Computer-Engineering-Student mit Leidenschaft für Machine Learning, Deep Learning und Quantitative Finance — Entwicklung intelligenter, skalierbarer Lösungen an der Schnittstelle von KI und realer Wirkung.",
      bio: "Ich bin Computer-Engineering-Student am Thapar Institute of Engineering and Technology mit Kenntnissen in Full-Stack-Entwicklung. Erfahren im Aufbau skalierbarer Anwendungen mit modernen Frameworks und angetrieben von der Leidenschaft für sichere, benutzerorientierte digitale Innovation. Ich verfüge über praktische Expertise im Machine Learning und bin mit Git, Agile (Scrum) sowie kollaborativen Teamumgebungen vertraut. Ich bin bestrebt, meine Problemlösungsfähigkeiten einzusetzen und hochwertige Softwarelösungen zu liefern.",
      availabilityNote: "Offen für neue Möglichkeiten — 2026",
    },
  },
};

export default de;
