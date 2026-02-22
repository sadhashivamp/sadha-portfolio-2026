// src/data/personalInfo.js
export const personalInfo = {
  name: "Sadha Shivam Pendem",
  title: "React Developer",
  role: "Associate Consultant",
  company: "Infosys Limited",
  location: "Hyderabad, India",
  email: "sadha.info.8328@gmail.com",
  phone: "+91-8328285571",
  linkedin: "https://www.linkedin.com/in/sadha-shivam-pendem-764358372/",
  github: "https://github.com/sadhashivamp",
  resumeLink: "/resume.pdf",
  yearsOfExperience: 3,
  projectsCompleted: 10,
  companiesWorked: 2,
  languages: ["English", "Hindi", "Telugu"]
};

export const heroData = {
  badge: "AVAILABLE FOR OPPORTUNITIES",
  title: ["REACT", "FRONTEND DEVELOPER"],
  subtitle: "Associate Consultant at Infosys",
  description: "Frontend Engineer with 3+ years of experience building scalable web applications. Specialized in React.js, Next.js, and Redux Toolkit with a track record of delivering enterprise-grade solutions.",
  techStack: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "JavaScript"]
};

// Add this to src/data/personalInfo.js

export const experiences = [
  {
    id: 1,
    role: "Associate Consultant – Frontend Development",
    company: "Infosys Limited",
    location: "Hyderabad, India",
    period: "July 2024 – Present",
    type: "Full-time",
    achievements: [
      "Develop and maintain web applications using React.js and Next.js for multiple client projects",
      "Build reusable React components and custom hooks to maintain code consistency across applications",
      "Integrate REST APIs using Axios and manage application state with Redux Toolkit for smooth data flow",
      "Implement responsive designs using Material-UI and Bootstrap ensuring cross-device compatibility",
      "Work closely with backend developers, designers, and product managers in agile sprints",
      "Participate in code reviews and help team members with React best practices and TypeScript",
      "Optimize component rendering and application performance using React best practices",
      "Received Best Performer Insta Award for outstanding performance and commendable feedback from manager"
    ],
    technologies: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "Material-UI", "Bootstrap", "Axios"],
    award: "Best Performer Insta Award"
  },
  {
    id: 2,
    role: "Software Engineer – Frontend Development",
    company: "Extended Web AppTech LLP",
    location: "Hyderabad, India",
    period: "March 2022 – February 2024",
    type: "Full-time",
    achievements: [
      "Developed web applications using React.js, TypeScript, and Redux Toolkit for various client projects",
      "Created user interfaces with Material-UI components following design specifications from designers",
      "Implemented state management using Redux Toolkit to handle complex application data",
      "Integrated RESTful APIs and handled API responses to display data in the user interface",
      "Wrote unit tests using Jest and Enzyme to test React components and ensure code quality",
      "Worked on making applications responsive for mobile, tablet, and desktop views",
      "Participated in daily standups, sprint planning, and code reviews following agile practices",
      "Created reusable components and maintained component library for consistent UI across projects"
    ],
    technologies: ["React.js", "Redux Toolkit", "TypeScript", "Material-UI", "Jest", "Enzyme", "REST APIs"],
    award: null
  }
];

// Add at bottom of personalInfo.js

export const projects = [
  {
    id: 1,
    title: "Developer Portal for API Gateway",
    client: "McKesson",
    description: "Designed and developed a centralized developer portal enabling secure enterprise API discovery and management. Integrated Redocly for dynamic, interactive API documentation with role-based access control and advanced usage analytics dashboards.",
    technologies: ["React.js", "TypeScript", "Redocly", "Material-UI", "Redux Toolkit"],
    icon: "🏥",
    color: "from-blue-500 to-cyan-500",
    category: "Healthcare"
  },
  {
    id: 2,
    title: "Digital Twin Application",
    client: "Verizon",
    description: "Developed a Digital Twin platform simulating real-world telecom equipment. Built interactive dashboards with Material-UI displaying real-time equipment status, alerts, and performance metrics with IoT data integration.",
    technologies: ["React.js", "Material-UI", "Redux", "IoT", "Real-time Dashboards"],
    icon: "📡",
    color: "from-red-500 to-orange-500",
    category: "Telecom"
  },
  {
    id: 3,
    title: "Local Video on Demand Platform",
    client: "Saudi Arabia",
    description: "Frontend React Developer for regional video streaming platform. Built optimized UI components with Material-UI for video listing, playback, and content discovery. Implemented search and filtering using Redux Toolkit.",
    technologies: ["React.js", "Redux Toolkit", "Material-UI", "Video Streaming"],
    icon: "🎬",
    color: "from-purple-500 to-pink-500",
    category: "Media"
  }
];

export const skills = [
  {
    category: "Frontend Core",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Redux Toolkit", "Context API"],
    color: "cyan"
  },
  {
    category: "UI Frameworks",
    items: ["Material-UI", "Tailwind CSS", "Bootstrap", "Responsive Design", "Figma"],
    color: "purple"
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "GitLab", "JIRA", "Confluence", "Postman", "VS Code"],
    color: "pink"
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Enzyme", "ESLint", "Prettier"],
    color: "green"
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Mechanical Engineering",
    institution: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    location: "Hyderabad, India",
    year: "2015",
    score: "68%",
    icon: "🎓",
    type: "completed"
  },
  {
    id: 2,
    degree: "Advanced Certification in AI & Machine Learning",
    institution: "IIT Patna in collaboration with Masai School",
    location: "Online (IIT Patna & Masai)",
    year: "2026",
    duration: "February 2026 – August 2026",
    description: "Comprehensive training in AI/ML fundamentals, neural networks, deep learning, and practical applications through IIT Patna's academic rigor combined with Masai School's hands-on industry approach",
    icon: "🤖",
    type: "ongoing",
    status: "Ongoing",
    partners: ["IIT Patna", "Masai School"]
  }
];

export const certifications = [];

export const achievements = [
  {
    id: 1,
    title: "Best Performer Insta Award",
    organization: "Infosys Limited",
    year: "2025",
    description: "Recognized for exceptional performance, outstanding project contributions, and consistent delivery excellence.",
    icon: "🏆",
    color: "yellow"
  },
  {
    id: 2,
    title: "Commendable Feedback",
    organization: "Management Recognition",
    year: "2025",
    description: "Received consistent commendable feedback from managers for proactive problem-solving and quality work.",
    icon: "⭐",
    color: "cyan"
  }
];
