export const profileData = {
  full_name: "David Kian",
  role: "Développeur FullStack",
  bio: "Développeur basé en Côte d'Ivoire, je me spécialise dans la création de solutions informatiques modernes et performantes.",
  years_of_experience: 1,
  profile_picture: "/logo.jpg",
  github_url: "https://github.com/RowannDavid",
  linkedin_url: "https://www.linkedin.com/in/rowann-eli-david-kian-029625334/"
};

export const servicesData = [
  {
    icon_name: "Monitor",
    title: "Développement Web",
    description: "Création de sites web responsives, rapides et modernes pour améliorer votre présence en ligne.",
    skills: [{ name: "React" }, { name: "Grails" }, { name: "Tailwind CSS" }],
  },
  {
    icon_name: "Smartphone",
    title: "Développement Mobile",
    description: "Création d'applications mobiles performantes et intuitives pour iOS et Android.",
    skills: [{ name: "Flutter" }],
  },
  {
    icon_name: "Database",
    title: "Backend & API",
    description: "Conception d'architectures robustes, sécurisées et d'API RESTful pour vos applications.",
    skills: [{ name: "Grails" }, { name: "PostgreSQL" }, { name: "Spring Boot" }],
  }
];

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Plateforme",
    description: "Une plateforme de commerce en ligne complète.",
    long_description: "Une plateforme de commerce en ligne complète avec gestion des utilisateurs, panier, paiements sécurisés et tableau de bord administrateur.",
    image: "/Accueil.png",
    skills: [{ name: "React" }, { name: "Grails" }, { name: "PostgreSQL" }],
    live_demo_url: "https://example.com",
    github_url: "https://github.com/RowannDavid",
    created_at: "2023-08-01T00:00:00Z"
  },
  {
    id: 2,
    title: "Application de Gestion de Rendez-vous",
    description: "Un système de réservation de rendez-vous pour les professionnels.",
    long_description: "Application fullstack permettant aux clients de prendre rendez-vous avec des professionnels, avec notifications et rappels automatiques.",
    image: null,
    skills: [{ name: "React" }, { name: "Spring Boot" }, { name: "PostgreSQL" }],
    live_demo_url: "",
    github_url: "https://github.com/RowannDavid",
    created_at: "2023-11-15T00:00:00Z"
  }
];

export const skillCategoriesData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 80, icon_emoji: "" },
      { name: "CSS", level: 70, icon_emoji: "" },
      { name: "React", level: 65, icon_emoji: "⚛️" },
      { name: "JavaScript", level: 50, icon_emoji: "💛" },
      { name: "Tailwind CSS", level: 40, icon_emoji: "🌊" },
      { name: "Angular JS", level: 30, icon_emoji: "🟢" },
      { name: "React", level: 85, icon_emoji: "⚛️" },
      { name: "JavaScript", level: 90, icon_emoji: "💛" },
      { name: "Tailwind CSS", level: 80, icon_emoji: "🌊" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Grails", level: 70, icon_emoji: "" },
      { name: "Django", level: 60, icon_emoji: "🐍" },
      { name: "Spring Boot", level: 55, icon_emoji: "🍃" },
      { name: "Node.js", level: 30, icon_emoji: "🟢" },
      { name: "Express js", level: 30, icon_emoji: "🟢" },
      { name: "Django", level: 80, icon_emoji: "🐍" },
      { name: "Spring Boot", level: 75, icon_emoji: "🍃" },
      { name: "Node.js", level: 70, icon_emoji: "🟢" }
    ]
  },
  {
    category: "Base de données & Outils",
    skills: [
      { name: "PostgreSQL", level: 60, icon_emoji: "🐘" },
      { name: "Git", level: 65, icon_emoji: "📦" },
      { name: "PostgreSQL", level: 80, icon_emoji: "🐘" },
      { name: "Git", level: 85, icon_emoji: "📦" },
      { name: "Docker", level: 65, icon_emoji: "🐳" }
    ]
  }
];

export const toolsData = [
  { name: "VS Code", icon_emoji: "💻" },
  { name: "Postman", icon_emoji: "🚀" },
  { name: "Figma", icon_emoji: "🎨" },
  { name: "GitHub Desktop", icon_emoji: "🐙" },
  { name: "Jira / Trello", icon_emoji: "📋" }
];

export const certificationsData = [
  {
    title: "CERTIFICATE OF COMPLETION",
    issuer: "simplilearn SkillUP / Plateforme en ligne",
    date: "2026",
    description: "Formation complète couvrant le développement backend avec django"
  },
  {
    title: "Academie des jeunes developper 3eme edition",
    issuer: "proactive.siwss",
    date: "2026",
    description: "Compréhension des principes fondamentaux de la developpement web fullstack avec grails et angular js et des bonnes pratiques.",
  },
];
