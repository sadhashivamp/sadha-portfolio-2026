// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Developer Portal for API Gateway",
    client: "McKesson",
    description: "Designed and developed a centralized developer portal enabling secure enterprise API discovery and management. Integrated Redocly for dynamic, interactive API documentation with versioning and endpoint-level details. Implemented role-based access control and advanced usage analytics dashboards.",
    technologies: ["React.js", "TypeScript", "Redocly", "Material-UI", "Redux Toolkit"],
    icon: "🏥",
    color: "from-blue-500 to-cyan-500",
    category: "Healthcare",
    year: "2024"
  },
  {
    id: 2,
    title: "Digital Twin Application",
    client: "Verizon",
    description: "Developed a Digital Twin platform simulating real-world telecom equipment and operational environments. Built interactive dashboards displaying real-time equipment status, alerts, timelines, and performance metrics using Material-UI. Integrated API-driven and IoT data sources to reflect live asset health and anomalies.",
    technologies: ["React.js", "Material-UI", "Redux", "IoT Integration", "Real-time Dashboards"],
    icon: "📡",
    color: "from-red-500 to-orange-500",
    category: "Telecom",
    year: "2023"
  },
  {
    id: 3,
    title: "Local Video on Demand Platform",
    client: "Saudi Arabia",
    description: "Worked as Frontend React Developer for a regional video streaming platform. Built and optimized reusable UI components for video listing, playback, and content discovery screens using Material-UI. Implemented search, category filtering, and sorting using Redux Toolkit for efficient state management.",
    technologies: ["React.js", "Redux Toolkit", "Material-UI", "Video Streaming", "Performance Optimization"],
    icon: "🎬",
    color: "from-purple-500 to-pink-500",
    category: "Media",
    year: "2023"
  }
];

export const additionalProjects = {
  count: 10,
  message: "And 10+ more projects across various domains including e-commerce, fintech, and enterprise applications"
};