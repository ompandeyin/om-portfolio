// ─── Portfolio Data Constants ─────────────────────────────────────────

export const PERSONAL = {
  name: 'Om Pandey',
  handle: '@ompandeyin',
  email: 'ompandey.co@gmail.com',
  github: 'https://github.com/ompandeyin',
  githubUsername: 'ompandeyin',
  socials: {
    linkedin: 'https://linkedin.com/in/ompandeyin',
    instagram: 'https://instagram.com/ompandeyin',
    youtube: 'https://youtube.com/@ompandeyin',
    twitter: 'https://twitter.com/ompandeyin',
    github: 'https://github.com/ompandeyin',
    medium: 'https://medium.com/@ompandeyin',
  },
  tagline: 'Quant Researcher | AI Engineer | National Speaker',
  roles: [
    'AI/ML Engineer',
    'MERN Developer',
    'Quant Researcher',
    'Teaching Assistant',
  ],
  about: `I am a B.Tech student in AI/ML & Robotics driven by a passion for solving complex, real-world problems through artificial intelligence and intelligent systems. As a Quant Consultant at WorldQuant, I engineer data-driven quantitative models that push boundaries in systematic trading.

Beyond research, I am a dedicated educator and National Level Speaker. As a Teaching Assistant at Apna College, I have had the privilege of mentoring 5,000+ students across 1,500+ live sessions, helping them master AI, ML, and MERN stack development. I am also deeply committed to nation-building through technology, having proudly participated in the Viksit Bharat Young Leaders Dialogue (VBYLD). Whether I am architecting highly scalable platforms or delivering technical seminars, my mission remains the same: building systems that scale and impacting lives through tech.`
};

export const STATS = [
  { label: 'Live Sessions', value: 1500, suffix: '+' },
  { label: 'Students Taught', value: 5000, suffix: '+' },
  { label: 'Quant Models', value: 50, suffix: '+' },
  { label: 'DSA Problems', value: 200, suffix: '+' },
];

export const SKILLS = {
  Languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'R'],
  Web: ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Tailwind CSS'],
  'AI / ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'LLMs'],
  Tools: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code', 'Jupyter'],
};

export const HIGHLIGHTS = [
  {
    title: 'National Level Speaker',
    description: 'Delivering technical seminars and keynotes on advanced AI, ML, and Software Engineering topics at prestigious venues.',
    icon: '🏆',
  },
  {
    title: 'VBYLD Participant',
    description: 'Selected to participate in the Viksit Bharat Young Leaders Dialogue, sharing vision for technology in national growth.',
    icon: '🇮🇳',
  },
  {
    title: 'Mentored 5000+ Students',
    description: 'Empowering the next generation of engineers through 1500+ live sessions teaching AI/ML & MERN at Apna College.',
    icon: '👨‍🏫',
  },
  {
    title: 'Quant Research',
    description: 'Developing high-performance alpha models and quantitative trading strategies based on data analytics at WorldQuant.',
    icon: '📊',
  },
];

export const MEDIUM_BLOGS = [
  {
    title: "Mastering Next-Gen AI Integration in MERN Apps",
    preview: "Discover the foundational techniques for building highly scalable AI pipelines within your traditional MERN projects.",
    link: "https://medium.com/@ompandeyin",
    date: "Dec 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Quantitative Trading & Predictive Modeling",
    preview: "An inside look into feature engineering and statistical models driving actionable insights in quantitative finance.",
    link: "https://medium.com/@ompandeyin",
    date: "Jan 04, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Scaling Websockets for 5000+ Concurrent Users",
    preview: "How I architected robust real-time communication protocols to support massive live student participation reliably.",
    link: "https://medium.com/@ompandeyin",
    date: "Feb 22, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"
  }
];

export const PROJECTS = [
  {
    title: 'WhatsApp Ordering Agent',
    description:
      'An AI-powered conversational agent that automates product ordering via WhatsApp using NLP and intelligent dialogue management.',
    tech: ['Python', 'NLP', 'WhatsApp API', 'LLMs'],
    tags: ['AI', 'Production'],
    featured: true,
    github: 'https://github.com/ompandeyin/whatsapp-restaurant-ordering-agent',
    demo: 'https://github.com/ompandeyin/whatsapp-restaurant-ordering-agent',
    color: '#6366f1',
  },
  {
    title: 'AI Campus System',
    description:
      'A smart campus management platform integrating AI for attendance tracking, resource allocation, and student performance analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow'],
    tags: ['AI', 'Research'],
    featured: true,
    github: 'https://github.com/ompandeyin/LPU-Smart-AI-Campus-Management-System',
    demo: 'https://github.com/ompandeyin/LPU-Smart-AI-Campus-Management-System',
    color: '#a855f7',
  },
  {
    title: 'Farm2Home (MERN)',
    description:
      'A full-stack MERN marketplace connecting farmers directly to consumers, with real-time inventory, payments, and delivery tracking.',
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    tags: ['Production', 'Full Stack'],
    featured: false,
    github: 'https://github.com/ompandeyin/Digital-Farmer-Market',
    demo: 'https://github.com/ompandeyin/Digital-Farmer-Market',
    color: '#06b6d4',
  },
  {
    title: 'Groundwater ML System',
    description:
      'Machine learning pipeline for predicting groundwater levels using geological and environmental data with high accuracy.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    tags: ['Research', 'Machine Learning'],
    featured: false,
    github: 'https://github.com/ompandeyin/Groundwater-Quality-Monitoring-System',
    demo: 'https://github.com/ompandeyin/Groundwater-Quality-Monitoring-System',
    color: '#10b981',
  },
];

export const EXPERIENCE = [
  {
    title: 'Quant Consultant',
    company: 'WorldQuant',
    period: 'Feb 2026 — Present',
    description:
      'Developing and validating quantitative alpha models. Research-driven approach to systematic trading strategies using statistical methods and big data analysis.',
    type: 'work',
  },
  {
    title: 'Teaching Assistant — AI/ML & MERN',
    company: 'Apna College',
    period: 'July 2025 — Present',
    description:
      'Conducted 1,500+ live sessions teaching AI/ML fundamentals, MERN stack development, and data structures to 5,000+ students. Built curriculum and mentored students on real-world projects.',
    type: 'work',
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Patent Filed',
    description: 'Filed a patent for an innovative AI-based solution in the agricultural technology domain.',
    icon: '🏛️',
  },
  {
    title: 'WorldQuant Certified',
    description: 'Certified Quant Consultant recognized for developing high-performance alpha models.',
    icon: '📈',
  },
  {
    title: '5000+ Students Impacted',
    description: 'Taught and mentored thousands of students in AI/ML and full-stack development at Apna College.',
    icon: '🎓',
  },
  {
    title: 'Top Open Source Contributor',
    description: 'Active contributor to open-source projects in AI/ML and web development ecosystems.',
    icon: '⭐',
  },
];

export const CHATBOT_RESPONSES = {
  greetings: [
    "Hey! 👋 I'm Om's AI assistant. Ask me anything about his work, skills, or projects!",
  ],
  about: [
    `Om Pandey is a B.Tech AI/ML & Robotics student, Teaching Assistant at Apna College (5,000+ students, 1,500+ live sessions), and Quant Consultant at WorldQuant. He specializes in building intelligent systems, scalable MERN platforms, and quantitative models.`,
  ],
  projects: [
    `Om's key projects include:\n\n🤖 **WhatsApp Ordering Agent** — AI-powered conversational agent for automated ordering\n🏫 **AI Campus System** — Smart campus with AI-driven analytics\n🌾 **Farm2Home** — Full-stack MERN marketplace for farmers\n💧 **Groundwater ML System** — ML pipeline for groundwater-level prediction`,
  ],
  skills: [
    `Om's tech stack:\n\n💻 **Languages:** Python, JavaScript, TypeScript, C++, SQL, R\n🌐 **Web:** React, Node.js, Express, MongoDB, Next.js\n🤖 **AI/ML:** TensorFlow, PyTorch, Scikit-learn, OpenCV, NLP, LLMs\n🛠️ **Tools:** Git, Docker, AWS, Linux`,
  ],
  experience: [
    `Om currently works as:\n\n📊 **Quant Consultant at WorldQuant** — Building alpha models & systematic trading strategies\n👨‍🏫 **Teaching Assistant at Apna College** — 1,500+ live sessions, 5,000+ students taught in AI/ML & MERN`,
  ],
  contact: [
    `You can reach Om via:\n\n📧 Email: ompandey.co@gmail.com\n🐙 GitHub: github.com/ompandeyin`,
  ],
  fallback: [
    "I'm not sure about that one. Try asking about Om's projects, skills, experience, or achievements!",
    "Hmm, I don't have info on that. You can ask me about Om's work, tech stack, or background!",
  ],
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Blog', href: '#blogs' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];
