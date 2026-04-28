export const profileData = {
  full_name: "David Kian",
  role: "Développeur FullStack",
  bio: "Développeur basé en Côte d'Ivoire, je me spécialise dans la création de solutions informatiques modernes et performantes.",
  years_of_experience: 1,
  profile_picture: "", // Laissez vide pour utiliser l'image par défaut (src/assets/logo.jpg)
  cv_url: "",
  github_url: "https://github.com/RowannDavid",
  linkedin_url: "https://www.linkedin.com/in/rowann-eli-david-kian-029625334/"
};

export const servicesData = [
  {
    icon_name: "Monitor",
    title: "Développement Web",
    description: "Création de sites web responsives, rapides et modernes pour améliorer votre présence en ligne.",
    skills: [{ name: "React" }, { name: "Django" }, { name: "Tailwind CSS" }]
  },
  {
    icon_name: "Smartphone",
    title: "Développement Mobile",
    description: "Création d'applications mobiles performantes et intuitives pour iOS et Android.",
    skills: [{ name: "React Native" }, { name: "Flutter" }]
  },
  {
    icon_name: "Database",
    title: "Backend & API",
    description: "Conception d'architectures robustes, sécurisées et d'API RESTful pour vos applications.",
    skills: [{ name: "Node.js" }, { name: "PostgreSQL" }, { name: "Spring Boot" }]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Plateforme",
    description: "Une plateforme de commerce en ligne complète.",
    long_description: "Une plateforme de commerce en ligne complète avec gestion des utilisateurs, panier, paiements sécurisés et tableau de bord administrateur.",
    image: null,
    skills: [{ name: "React" }, { name: "Node.js" }, { name: "PostgreSQL" }],
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
      { name: "React", level: 85, icon_emoji: "⚛️" },
      { name: "JavaScript", level: 90, icon_emoji: "💛" },
      { name: "Tailwind CSS", level: 80, icon_emoji: "🌊" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Django", level: 80, icon_emoji: "🐍" },
      { name: "Spring Boot", level: 75, icon_emoji: "🍃" },
      { name: "Node.js", level: 70, icon_emoji: "🟢" }
    ]
  },
  {
    category: "Base de données & Outils",
    skills: [
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
    title: "Certification Développeur FullStack",
    issuer: "Centre de Formation / Plateforme en ligne",
    date: "2023",
    description: "Formation complète couvrant le développement web frontend et backend, la conception d'API et la gestion de base de données."
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2022",
    description: "Compréhension des principes fondamentaux de la cybersécurité et des bonnes pratiques."
  }
];
