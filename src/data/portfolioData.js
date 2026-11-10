export const initialProfile = {
  name: "Mathias Birhanu",
  title: "Software Engineer & Web Developer",
  status: "Available for Hire & Projects",
  email: "mathiasbirhanu89@gmail.com",
  location: "Ethiopia, Addis Ababa",
  avatarUrl: "https://lh3.googleusercontent.com/d/1NMCvYwHjE_7a4LaRZJgwyAvEVA0nUvrD",
  bio: "Passionate Full-Stack Software Engineer specializing in modern JavaScript/TypeScript ecosystems, Python, and C# (.NET), with expertise in high-performance web applications and software architecture.",
  roles: [
    "Full-Stack Software Engineer",
    "React & Next.js Specialist",
    "Python and C# Specialist",
    "Software Archetect and Designer",
    "UI/UX Design Enthusiast"
  ],
  stats: [
    { value: "1 year and 5 months", label: "Internship Experience" },
    { value: "6", label: "Projects Completed" },
    { value: "99.9%", label: "Uptime Guaranteed" },
   {/* { value: "15k+", label: "Code Commits" }*/}
  ],
  socials: {
    github: "https://github.com/mathiasbirhanu",
    linkedin: "https://www.linkedin.com/in/mathias-berhanu-249855315/",
      }
};

export const initialCertifications = [
  {
    id: 1,
    title: "Network Security",
    issuer: "Addis Ababa university and Cisco",
    date: "Issued Oct 2024",
    credentialId: "AWS-ASA-849201",
    verifyUrl: "https:www.netacad.com/certificates/?issuanceId=0ea93123-07e1-4aad-9adb-e891bea21f1f",
    /*badgeColor: "from-amber-500 to-orange-600",*/
    skills: ["secure routers", "Deploy ASA, NAT/PAT ", "S3", "Implement AAA"]
  },
  {
    id: 2,
    title: "CyberOps Associate",
    issuer: "Addis Ababa university and Cisco",
    date: "Issued Dec 2024",
    credentialId: "9babf41f-1167-49f2-8191-1f9598313157",
    verifyUrl: "https://www.netacad.com/certificates/?issuanceId=9babf41f-1167-49f2-8191-1f9598313157",
    /*badgeColor: "from-blue-600 to-indigo-600",*/
    skills: ["Create safe environment", "Prevent malicious access", "Investigate vulnerabilities", "Apply incident response"]
  },
  {
    id: 3,
    title: "Programming In Python",
    issuer: "Addis Ababa university, Cisco & PyTHON Institute",
    date: "Issued Nov 2024",
    credentialId: "d9af196d-62ef-4f4c-857c-e9b4c05fbb86",
    verifyUrl: "https://cloud.google.com/certification",
    /*badgeColor: "from-emerald-500 to-teal-600",*/
    skills: ["Object Oriented Programming", "Coding"]

  },
  {
    id: 4,
    title: "Web Programming Nano Degree",
    issuer: "UDACITY",
    date: "Issued September, 2024",
    credentialId: "3049b2fa-4bce-11ef-bc63-d73d33f3cd82",
    verifyUrl: "https://www.udacity.com/certificate/e/3049b2fa-4bce-11ef-bc63-d73d33f3cd82",
    /*badgeColor: "from-emerald-500 to-teal-600",*/
    skills: ["HTML", "CSS", "JavaScript"]
    
  },
  {
    id: 5,
    title: "Android Developer Nano Degree",
    issuer: "UDACITY",
    date: "Issued October, 2024",
    credentialId: "32e14742-4bd0-11ef-9faf-0beb8f8efbb2",
    verifyUrl: "https://www.udacity.com/certificate/e/32e14742-4bd0-11ef-9faf-0beb8f8efbb2",
    /*badgeColor: "from-emerald-500 to-teal-600",*/
    skills: ["Android Development Using Kotlin"]
    
  },
   {
    id: 6,
    title: "Full Stack Developer",
    issuer: "IBT College Of Canada",
    date: "2026",
    credentialId: "-------",
    verifyUrl: "",
    /*badgeColor: "from-emerald-500 to-teal-600",*/
    skills: ["Python, React, Next.js, C#(.NET), MongoDB, PostgreSQL, Software Testing"]
    
  }
  
];

export const initialSkills = [
  
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript / JavaScriptS", level: 92, category: "Languages" },
  { name: "C#(.NET) / Python", level: 92, category: "Languages" },
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "Tailwind CSS", level: 96, category: "Frontend" },
  { name: "PostgreSQL / Prisma / MongoDB", level: 85, category: "Database" },
  { name: "GraphQL & REST APIs", level: 90, category: "Backend" },
  { name: "Docker", level: 90, category: "DevOps" },
  { name: "Git", level: 90, category: "DevOps" },
  { name: "Jest & Cypress", level: 82, category: "Testing" }
];

export const initialProjects = [
  {
    id: 1,
    title: "E-Learning and school management System",
    category: "Full-Stack",
    description: "A role-based School Management System (Admin, Teacher, Student, Parent) for tracking attendance, grades, and schedules using Next.js, TypeScript, Prisma, and PostgreSQL.",
    image: "https://img.magnific.com/free-vector/e-learning-infographic-set_1284-16836.jpg?semt=ais_hybrid&w=740&q=80",
    tags: ["React", "Next.js", ".NET", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mathiasbirhanu/school-management",
    featured: true,
    architecture: {
      overview: "Microservices architecture deployed on AWS ECS with Redis cache layers for real-time aggregation queries.",
      metrics: ["100k+ events/sec", "<50ms query latency", "99.99% availability"]
    }
  },
  {
    id: 2,
    title: "multi-vendor-e-commerce system",
    category: "Web App",
    description: "A high-performance, enterprise-grade multi-vendor e-commerce platform built with .NET, Next.js, and PostgreSQL.",
    image: "https://as2.ftcdn.net/jpg/02/00/21/19/1000_F_200211911_27uEQBHE8hLmtGWJKlBDtcTUToRxLnFE.webp",
    tags: ["React", "Next.js", ".NET", "PostgreSQL", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mathiasbirhanu/multi-vendor-e-commerce",
    featured: true,
    architecture: {
      overview: "Next.js App Router streaming endpoints integrated with Pinecone vector database for high-accuracy RAG workflows.",
      metrics: ["Sub-second generation", "98% context recall", "10k active users"]
    }
  },
  {
    id: 3,
    title: "Addis-Eats Food Delivery System",
    category: "Web App",
    description: "An online food ordering platform that connects customers with local eateries.",
    image: "https://i.pinimg.com/736x/4c/d5/fd/4cd5fd9ec6e635e133508cfbe186648a.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mathiasbirhanu/food-delivery-system",
    featured: true,
    architecture: {
      overview: "Headless commerce architecture with incremental static regeneration (ISR) ensuring sub-second page loads.",
      metrics: ["100/100 Lighthouse score", "45% conversion boost", "Global edge distribution"]
    }
  },
  {
    id: 4,
    title: "sheggar-wheals-vehicles-machinery-rental",
    category: "Web App",
    description: "A feature-rich, full-stack vehicle and car rental management system. Built with an ASP.NET Core Web API backend, a modern Next.js frontend, and powered by PostgreSQL for fast, reliable data persistence.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWR83a4_MYbIRkUPPKaNVE49cfWg-zoeuw4XW4fQ26kk-bkK5m1nWrj2q9&s=10",
    tags: ["Next.js", "TypeScript", ".NET", "Postgeress SQL", "prisma"],
    liveUrl: "https://github.com/mathiasbirhanu/sheggar-wheals-vehicles-machinery-rental",
    githubUrl: "https://github.com/mathiasbirhanu/sheggar-wheals-vehicles-machinery-rental",
    featured: true,
    architecture: {
      overview: "Headless commerce architecture with incremental static regeneration (ISR) ensuring sub-second page loads.",
      metrics: ["100/100 Lighthouse score", "45% conversion boost", "Global edge distribution"]
    }
  },
  {
    id: 5,
    title: "film & Theatre Streaming System",
    category: "Web App",
    description: "Film& Theatre Streaming System full stack A modern, high-performance, and scalable full-stack movie and video streaming platform built with .NET (Backend API) and Next.js (Frontend), backed by PostgreSQL for robust data management.",
    image: "https://img.magnific.com/free-vector/online-cinema-realistic-poster-with-play-button-screen-popcorn-3d-glasses-dark-blue-background-vector-illustration_1284-77062.jpg?semt=ais_hybrid&w=740&q=80",
    tags: ["Next.js", "TypeScript", ".NET", "Postgeress SQL", "prisma"],
    liveUrl: "https://github.com/mathiasbirhanu/sheggar-wheals-vehicles-machinery-rental",
    githubUrl: "https://github.com/mathiasbirhanu/film-streaming-full-stack",
    featured: true,
    architecture: {
      overview: "Headless commerce architecture with incremental static regeneration (ISR) ensuring sub-second page loads.",
      metrics: ["100/100 Lighthouse score", "45% conversion boost", "Global edge distribution"]
    }
  },
  {
    id: 6,
    title: "Bingo Game",
    category: "Web App",
    description: "Full-Stack Bingo Platform | Next.js, .NET Core, TypeScript, Tailwind CSS Engineered a real-time multiplayer Bingo web application featuring a high-performance Next.js frontend and a secure ASP.NET Core backend. Implemented live game state synchronization, automated win-condition validation, and a sleek, responsive user interface.",
    image: "https://as1.ftcdn.net/jpg/09/61/36/86/1000_F_961368602_LXUp7taZdNmFMhXfiwPJQx7eYgzQT7zX.webp",
    tags: ["Next.js", "TypeScript", ".NET", "Postgeress SQL", "prisma"],
    liveUrl: "https://github.com/mathiasbirhanu/sheggar-wheals-vehicles-machinery-rental",
    githubUrl: "https://github.com/mathiasbirhanu/bingo-full-stack",
    featured: true,
    architecture: {
      overview: "Headless commerce architecture with incremental static regeneration (ISR) ensuring sub-second page loads.",
      metrics: ["100/100 Lighthouse score", "45% conversion boost", "Global edge distribution"]
    }
  }
  
];

export const initialExperience = [
  {
    id: 1,
    role: "Full Stack Developer and IT support - Internship",
    company: "Addis Ababa City Development & Charity Organization (NGO)",
    period: "2024 - Present",
    type: "InternShip",
    description: "Full-stack software developer and IT support turning complex business goals into scalable, end-to-end technical execution.",
    highlights: [
      "Advised organizational leaders on technology adoption, infrastructure upgrades",
      "Designed and built scalable, high-performance full-stack applications based on the organization goals",
      "support technical workflows, managed IT operations"
    ]
  },
  {
    id: 3,
    role: "Msc. in Software Engineering",
    company: "HiLCoE School of Computer Science and Technology",
    period: "2024",
    type: "Education",
    description: "Focused on Software Engineering(Requairement, Archetecture & Design), Data Structures, Algorithms, and Distributed Systems.",
    highlights: [
      "Dean's Honor List 2021-2024",      
    ]
  }
];

export const estimatorOptions = {
  
 
};

export const INITIAL_MESSAGES = [
  {
    id: 1,
    name: "Sarah Jenkins",
    email: "sarah.j@techcorp.io",
    subject: "Full-Stack Web App Development Inquiry",
    message: "Hi Alex! We loved your portfolio and are looking for a senior React engineer for a 3-month contract starting next month. Are you available for a quick call?",
    timestamp: "2 hours ago",
    read: false
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@designstudio.com",
    subject: "Frontend UI Audit & Redesign",
    message: "Hello Alex, I tested out your project cost estimator. We need a similar interactive tool built for our client site. What is your estimated timeline?",
    timestamp: "Yesterday",
    read: true
  }
];