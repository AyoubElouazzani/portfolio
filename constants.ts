import { Experience, Project, SkillCategory, SpokenLanguage } from './types';

export const PERSONAL_INFO = {
  name: "Ayoub Elouazzani",
  title: "Master's Student in Embedded Artificial Intelligence",
  tagline: "Bridging the gap between Embedded Systems and Artificial Intelligence.",
  location: "Agadir, Morocco",
  email: "elouazzaniayoub@outlook.com",
  phone: "+212 6 35 79 44 31",
  bio: "Passionate Data Science student currently pursuing a Master's in Embedded Artificial Intelligence. I have robust experience in machine learning, embedded systems, and full-stack development. Committed to creating innovative technological solutions that solve real-world problems."
};

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "Java", "PHP", "JavaScript", "C", "C++"]
  },
  {
    name: "AI & Data Science",
    skills: ["TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "SciPy", "Power BI", "Kafka"]
  },
  {
    name: "Web & Frameworks",
    skills: ["React", "Flask", "Django", "HTML5", "CSS3", "Bootstrap", "Tailwind"]
  },
  {
    name: "Databases & Cloud",
    skills: ["MySQL", "MongoDB", "Cassandra", "SQLite", "Azure"]
  }
];

export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  { language: "French", proficiency: "Upper Intermediate", flagCode: "FR" },
  { language: "English", proficiency: "Upper Intermediate", flagCode: "GB" },
  { language: "Arabic", proficiency: "Native", flagCode: "MA" }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "edu-1",
    role: "Master in Embedded Artificial Intelligence",
    company: "University of Sciences",
    location: "Ait Melloul, Morocco",
    period: "2023 – 2025",
    description: "Specializing in AI algorithms for embedded hardware and edge computing.",
    type: "education"
  },
  {
    id: "edu-2",
    role: "Bachelor (Licence) in Data Science",
    company: "University of Sciences",
    location: "Ait Melloul, Morocco",
    period: "2022 – 2023",
    description: "Focused on statistical analysis, big data processing, and machine learning foundations.",
    type: "education"
  },
  {
    id: "work-1",
    role: "Web Developer Intern",
    company: "Ibn Zohr University",
    location: "Agadir, Morocco",
    period: "Apr 2022 – Jun 2022",
    description: "Created a comprehensive student management platform using HTML5, CSS, JavaScript, PHP, Bootstrap, and SQL.",
    type: "work"
  },
  {
    id: "edu-3",
    role: "DUT in Software Engineering & Networks",
    company: "Higher School of Technology (EST)",
    location: "Essaouira, Morocco",
    period: "2020 – 2022",
    description: "Foundation in computer science principles, networking, and software architecture.",
    type: "education"
  },
  {
    id: "work-2",
    role: "IT Intern",
    company: "Office National des Pêches (ONP)",
    location: "Agadir, Morocco",
    period: "Jun 2021 – Jul 2021",
    description: "Installed domain controllers and explored enterprise network functionalities.",
    type: "work"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI Agent \"Al Mardia\"",
    description: "A conversational AI agent designed to handle emergency client needs and provide telephone consultations. Features NLP and Voice Recognition for fluid interaction.",
    tags: ["OpenAI API", "LiveKit", "Azure", "NLP", "Graduation Project"],
    type: "Academic",
    year: "2025"
  },
  {
    title: "Real-Time Object Detection",
    description: "A computer vision system capable of detecting and classifying objects (cars, pedestrians) and measuring their speed in real-time using video feeds.",
    tags: ["YOLO", "OpenCV", "Tkinter", "Python"],
    type: "Academic"
  },
  {
    title: "IoT Fire Prediction System",
    description: "IoT solution using DHT11 sensors to capture real-time humidity and temperature. Data is streamed to MongoDB, with an alert system for abnormal values to prevent fires.",
    tags: ["IoT", "MongoDB", "Sensors", "NoSQL"],
    type: "Personal"
  },
  {
    title: "Tweet Analysis Platform",
    description: "Web application for analyzing sentiment and insights from tweet data using natural language processing techniques.",
    tags: ["Flask", "Python", "Scikit-learn", "Pandas", "NLP"],
    type: "Academic"
  },
  {
    title: "Medical Chatbot",
    description: "Developed during a Health-themed Hackathon. The bot provides medical advice and health-related information to users.",
    tags: ["Chatbot", "Healthcare", "Hackathon", "AI"],
    type: "Hackathon"
  }
];