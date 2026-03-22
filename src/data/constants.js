// ─── Portfolio Data Constants ─────────────────────────────────────────

export const PERSONAL = {
  name: 'Om Pandey',
  handle: '@ompandeyin',
  email: 'ompandey.co@gmail.com',
  github: 'https://github.com/ompandeyin',
  githubUsername: 'ompandeyin',
  tagline: 'I build intelligent systems, scalable platforms, and impactful AI solutions.',
  roles: [
    'AI/ML Engineer',
    'MERN Developer',
    'Quant Researcher',
    'Teaching Assistant',
  ],
  about: `I'm a B.Tech student in AI/ML & Robotics passionate about building things that matter. As a Teaching Assistant at Apna College, I've helped 5,000+ students master AI/ML and MERN concepts across 1,500+ live sessions. As a Quant Consultant at WorldQuant, I build quantitative models that drive data-driven decisions. My work spans from full-stack web platforms to machine learning systems and quantitative research.`,
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

export const PROJECTS = [
  {
    title: 'WhatsApp Ordering Agent',
    description:
      'An AI-powered conversational agent that automates product ordering via WhatsApp using NLP and intelligent dialogue management.',
    tech: ['Python', 'NLP', 'WhatsApp API', 'LLMs'],
    github: 'https://github.com/ompandeyin',
    color: '#6366f1',
  },
  {
    title: 'AI Campus System',
    description:
      'A smart campus management platform integrating AI for attendance tracking, resource allocation, and student performance analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow'],
    github: 'https://github.com/ompandeyin',
    color: '#a855f7',
  },
  {
    title: 'Farm2Home (MERN)',
    description:
      'A full-stack MERN marketplace connecting farmers directly to consumers, with real-time inventory, payments, and delivery tracking.',
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    github: 'https://github.com/ompandeyin',
    color: '#06b6d4',
  },
  {
    title: 'Groundwater ML System',
    description:
      'Machine learning pipeline for predicting groundwater levels using geological and environmental data with high accuracy.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/ompandeyin',
    color: '#10b981',
  },
];

export const EXPERIENCE = [
  {
    title: 'Quant Consultant',
    company: 'WorldQuant',
    period: '2024 — Present',
    description:
      'Developing and validating quantitative alpha models. Research-driven approach to systematic trading strategies using statistical methods and big data analysis.',
    type: 'work',
  },
  {
    title: 'Teaching Assistant — AI/ML & MERN',
    company: 'Apna College',
    period: '2023 — Present',
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
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];
