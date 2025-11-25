import {
  Code2,
  Github,
  Linkedin,
  Mail,
  Layers,
  Wrench,
  Cloud,
  GraduationCap,
  Award,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS_DATA = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Java", "SQL", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    icon: Layers,
    skills: ["Spring Boot", "Hibernate", "Jakarta EE", "React", "Next.js"],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Docker", "Kubernetes", "Jenkins", "Git", "Maven", "Gradle"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Azure", "Google Cloud Platform", "Terraform"],
  },
];

export const EXPERIENCE_DATA = [
  {
    title: "Senior Java Developer",
    company: "Tech Solutions Inc.",
    date: "Jan 2021 - Present",
    description:
      "Leading the design and development of microservices-based architecture for enterprise-level applications.",
    achievements: [
      "Architected and implemented a new event-driven system using Spring Boot and Kafka, improving system resilience and scalability by 40%.",
      "Optimized database performance by redesigning schemas and queries, reducing average response time by 200ms.",
      "Mentored junior developers, conducted code reviews, and established best practices for CI/CD pipelines using Jenkins and Docker.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Innovatech Ltd.",
    date: "Jun 2018 - Dec 2020",
    description:
      "Developed and maintained backend services for a high-traffic e-commerce platform.",
    achievements: [
      "Contributed to a 25% increase in application performance by implementing caching strategies with Redis.",
      "Developed RESTful APIs for new product features, serving over 1 million daily requests.",
      "Participated in the migration of monolithic application to a microservices architecture on AWS.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "CodeCrafters Co.",
    date: "Jul 2016 - May 2018",
    description:
      "Assisted in the development of various Java-based web applications.",
    achievements: [
      "Wrote and maintained unit and integration tests, increasing code coverage by 15%.",
      "Fixed over 200 bugs and contributed to feature development in a large-scale enterprise application.",
      "Gained proficiency in Spring Framework, Hibernate, and agile development methodologies.",
    ],
  },
];

export const PROJECTS_DATA = [
  {
    title: "E-Commerce Platform Microservices",
    description:
      "A robust backend for an e-commerce site, broken down into scalable microservices for managing users, products, and orders.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A full-stack chat application using WebSockets for real-time communication, with a secure authentication system.",
    techStack: ["Java", "Spring WebSocket", "React", "MongoDB"],
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "Cloud Deployment Automation Tool",
    description:
      "A command-line tool to automate the deployment of Java applications to AWS EC2 instances using Jenkins and Ansible.",
    techStack: ["Python", "Jenkins", "Ansible", "AWS SDK"],
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "API Gateway Service",
    description:
      "A centralized API Gateway using Spring Cloud Gateway to manage routing, security, and rate limiting for all backend services.",
    techStack: ["Java", "Spring Cloud", "Redis", "OAuth 2.0"],
    githubLink: "#",
    liveDemoLink: "#",
  },
];

export const EDUCATION_DATA = [
  {
    icon: GraduationCap,
    title: "M.S. in Computer Science",
    institution: "Georgia Institute of Technology",
    date: "2016",
  },
  {
    icon: GraduationCap,
    title: "B.S. in Software Engineering",
    institution: "University of Example",
    date: "2014",
  },
  {
    icon: Award,
    title: "Oracle Certified Professional, Java SE 11 Developer",
    institution: "Oracle",
    date: "2021",
  },
  {
    icon: Award,
    title: "AWS Certified Solutions Architect – Associate",
    institution: "Amazon Web Services",
    date: "2020",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "mailto:contact@example.com",
};
