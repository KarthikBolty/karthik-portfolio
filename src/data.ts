import eatnfitImg from './assets/eatnfit.png';
import ciaImg from './assets/cia.png';
import portfolioImg from './assets/portfolio.png';
import profileImg from './assets/profile.png';

export const profile = {
  name: 'Karthik B',
  title: 'Python Full Stack Developer',
  tagline:
    'Building modern web applications with Python, Django, FastAPI and React.',
  location: 'Pathanamthitta, India',
  email: 'karthikb3048@gmail.com',
  phone: '+91 7902721844',
  resumeUrl: '/Karthik_B_Resume.pdf',
  avatar: profileImg,

  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/KarthikBolty',
      icon: 'Github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/karthik-binu-',
      icon: 'Linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:karthikb3048@gmail.com',
      icon: 'Mail',
    },
  ],
};

export const typingRoles = [
  'Python Developer',
  'Django Developer',
  'React Developer',
  'FastAPI Developer',
];

export const about = {
  heading: 'Passionate about building modern web applications.',

  paragraphs: [
    "I'm a Python Full Stack Developer with hands-on experience in building responsive and user-friendly web applications using Python, Django, React, FastAPI, HTML, CSS, Bootstrap, JavaScript, MySQL, and SQLite.",

    'During my 6-month internship at Luminar Technolab, I developed projects including EatnFit, a health and nutrition tracking application, and a CSV Intelligence Analyzer for data analysis and visualization. These projects strengthened my backend, frontend, and database development skills.',

    "I'm passionate about continuously learning modern technologies, solving real-world problems, and building scalable web applications with clean, maintainable code.",
  ],

  stats: [
    {
      label: 'Months Internship',
      value: '6',
    },
    {
      label: 'Major Projects',
      value: '3',
    },
    {
      label: 'Certifications',
      value: '2',
    },
    {
      label: 'Technical Skills',
      value: '10+',
    },
  ],
};

export const experience = [
  {
    role: 'Python Full Stack Intern',

    company: 'Luminar Technolab',

    period: '2025',

    location: 'Kerala, India',

    description:
      'Completed a 6-month Python Full Stack internship where I developed full-stack web applications using Python, Django, HTML, CSS, Bootstrap, JavaScript, SQLite, and Git. Built projects including EatnFit and gained hands-on experience in backend development, database integration, and responsive UI design.',

    tags: [
      'Python',
      'Django',
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'SQLite',
      'Git',
    ],
  },
];

export const skills = [
  {
    name: 'Python',
    level: 90,
    category: 'Backend',
  },
  {
    name: 'Django',
    level: 85,
    category: 'Backend',
  },
  {
    name: 'FastAPI',
    level: 80,
    category: 'Backend',
  },
  {
    name: 'REST APIs',
    level: 80,
    category: 'Backend',
  },
  {
    name: 'React',
    level: 75,
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    level: 75,
    category: 'Frontend',
  },
  {
    name: 'HTML5',
    level: 95,
    category: 'Frontend',
  },
  {
    name: 'CSS3',
    level: 90,
    category: 'Frontend',
  },
  {
    name: 'Bootstrap',
    level: 90,
    category: 'Frontend',
  },
  {
    name: 'MySQL',
    level: 80,
    category: 'Database',
  },
  {
    name: 'SQLite',
    level: 85,
    category: 'Database',
  },
  {
    name: 'Git & GitHub',
    level: 80,
    category: 'Tools',
  },
];
export const projects = [
  {
    name: 'EatnFit',
    tagline: 'Health & Nutrition Tracking Web Application',

    description:
      'A health and fitness web application developed using Python, Django, HTML, CSS, Bootstrap, JavaScript, and SQLite. It enables users to track calories, monitor BMI, manage body weight, and achieve daily nutrition goals through an interactive dashboard.',

    image: eatnfitImg,

    tags: [
      'Python',
      'Django',
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'SQLite',
    ],

    highlights: [
      'Calorie Tracking',
      'BMI Calculator',
      'Nutrition Goals',
    ],

    // Replace with GitHub or Live Demo
    link: 'https://github.com/KarthikBolty/EatnFit.git',

    accent: 'from-rose-500/20 to-crimson-700/10',
  },

  {
    name: 'CSV Intelligence Analyzer',

    tagline: 'CSV Analysis & Data Visualization Tool',

    description:
      'A web application built with React, TypeScript, FastAPI, and Python that allows users to upload CSV files, analyze datasets, generate statistical summaries, and visualize data through interactive charts.',

    image: ciaImg,

    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'Pandas',
    ],

    highlights: [
      'CSV Upload',
      'Dataset Summary',
      'Interactive Charts',
    ],

    // Replace with GitHub or Live Demo
    link: 'https://github.com/KarthikBolty/csv-intelligence-analyzer.git',

    accent: 'from-amber-500/20 to-crimson-700/10',
  },

  {
    name: 'Developer Portfolio',

    tagline: 'Responsive Personal Portfolio Website',

    description:
      'A modern portfolio website built using React, TypeScript, Tailwind CSS, and Framer Motion to showcase my projects, internship experience, technical skills, certifications, education, and resume with a clean and responsive user interface.',

    image: portfolioImg,

    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
    ],

    highlights: [
      'Responsive Design',
      'Modern UI',
      'Resume Download',
    ],

    // Replace with Netlify URL after deployment
    link: '#',

    accent: 'from-indigo-500/20 to-crimson-700/10',
  },
];

export const certifications = [
  {
    name: 'Python Basics',

    issuer: 'HackerRank',

    year: '2025',

    icon: 'Code',
  },

  {
    name: 'Python Full Stack Internship',

    issuer: 'Luminar Technolab',

    year: '2025',

    icon: 'Award',
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',

    institution: 'Mannam Memorial NSS College, Konni',

    period: '2022 – 2026',

    description:
      'Studying core computer science subjects including programming, database management systems, software engineering, web technologies, and problem solving.',
  },
];

export const navLinks = [
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'about',
    label: 'About',
  },
  {
    id: 'experience',
    label: 'Experience',
  },
  {
    id: 'skills',
    label: 'Skills',
  },
  {
    id: 'projects',
    label: 'Projects',
  },
  {
    id: 'certifications',
    label: 'Certifications',
  },
  {
    id: 'education',
    label: 'Education',
  },
  {
    id: 'resume',
    label: 'Resume',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
];