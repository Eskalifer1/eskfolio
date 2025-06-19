import { SkillKeyValue } from "../skills";

export interface Project {
  name: string;
  key: string;
  description: string;
  image: string;
  url: string;
  skills: SkillKeyValue[];
}

export const PROJECTS: Project[] = [
  {
    name: "Study UA",
    key: "study-ua",
    description: `I worked as a Frontend Developer on Study.ua, a large-scale commercial online education platform that brings together over 5,000 active students and educators from Ukraine and beyond. The platform offers a wide range of educational programs, courses, and exclusive learning resources, contributing significantly to the company’s revenue.

    My responsibilities covered the full-cycle development of both the client-facing and administrative interfaces from the ground up:

    - Developing Core Features: Designed and implemented an intuitive, feature-rich user interface for students, as well as powerful administrative tools for managing learning workflows, schedules, and user accounts.

    - Performance Optimization: Engineered performance-focused solutions to ensure fast load times and smooth user interactions, even under high concurrent usage.

    - Enhancing UX/UI: Focused on usability, responsive design, and accessibility—resulting in a measurable increase in user satisfaction and engagement.

    - Business Impact: Delivered scalable, maintainable, and user-centric frontend solutions that directly supported business goals and improved the overall user experience.`,
    image: "/projects/study.webp",
    url: "https://campus.key.study",
    skills: ["react", "mui", "formik", "mobx", "ts", "jwt", "lang"],
  },
  {
    name: "Wippli",
    key: "wippli",
    description: `Wippli is an international digital platform designed to streamline collaboration between clients, internal teams, and external suppliers. It features a centralized workspace for task management, real-time communication, file sharing, a dynamic marketplace, and an advanced admin panel.

    As a Frontend Developer on the Wippli project, I played a key role in enhancing platform functionality and performance:

    - Feature Development: Implemented new, business-critical features across multiple components of the platform, including the admin panel, marketplace, and user dashboards.

    - UX/UI Improvements: Refined user flows and interface elements to improve intuitiveness, accessibility, and consistency across devices, resulting in higher user engagement.

    - Performance Optimization: Diagnosed and resolved frontend performance bottlenecks, significantly reducing load times and improving responsiveness for a global user base.

    - Business Logic Enhancement: Collaborated closely with backend and product teams to restructure and refine frontend-side logic for better maintainability and user outcomes.

    - Impact: My contributions helped Wippli become a more stable, efficient, and user-friendly platform—enabling smoother collaboration experiences for users worldwide.`,
    image: "/projects/wippli.webp",
    url: "https://app.wippli.com/",
    skills: [
      "react",
      "next",
      "mui",
      "tailwind",
      "tanstack",
      "ts",
      "rhf",
      "seo",
    ],
  },
  {
    name: "ProBhub - Estet",
    key: "weather-app",
    description: `PRO BHUB is a network of four specialized online educational platforms tailored to professionals across key sectors of the beauty industry, including Cosmetology, Permanent Makeup, Nails, Hair & Makeup. Each platform is designed to serve as a go-to resource for both beginners and seasoned experts, offering valuable insights, learning content, and tools for professional growth.

    - As a Frontend Developer, I contributed to the development and refinement of these platforms to ensure a high-quality user experience:

    - Multi-Platform Interface Development: Built and maintained responsive, visually consistent interfaces across all four domains, ensuring a seamless and intuitive user experience tailored to each specialization.

    - UX-Focused Enhancements: Worked on user journeys and interface logic to improve content discoverability and ease of use for various professional user groups.

    - Component Reusability and Scalability: Developed modular, reusable components to support scalable design across platforms while maintaining brand consistency.

    - Performance Tuning: Optimized frontend performance to support fast page loads and smooth navigation, especially important for mobile and low-bandwidth users.

    - User-Centric Impact: My efforts helped elevate the professionalism and usability of the PRO BHUB platforms, making them more effective educational tools for the beauty community.`,
    image: "/projects/estet.webp",
    url: "https://pro.bhub.com.ua/",
    skills: [
      "react",
      "next",
      "ts",
      "antd",
      "styled",
      "tanstack",
      "seo",
      "lang",
    ],
  },
  {
    name: "PowerPulse",
    key: "powerpulse",
    description: `PowerPulse is a self-initiated pet project designed to support structured and consistent progress in strength training. Built to address personal fitness needs, the application allows users to create, manage, and track gym workouts—both at the workout and individual exercise levels.

    As the sole developer and product owner, I was responsible for the end-to-end frontend implementation:

    - Custom Workout Builder: Developed an intuitive interface that enables users to create and customize workouts with flexible sets, reps, weights, and rest periods.

    - Progress Tracking Logic: Implemented logic for tracking improvements over time, both globally (entire workout programs) and granularly (specific exercises).

    - Responsive UI Design: Designed and developed a responsive layout optimized for mobile-first usage, ensuring seamless usability on phones and tablets during training.

    - Personalized Experience: Integrated feedback loops and smart defaults to encourage consistency and ease of use for solo athletes.
    
    THE BACKEND IS HOSTED ON A FREE PLATFORM, SO YOU NEED TO WAIT A MINUTE AFTER THE FIRST REQUEST FOR THE BACKEND TO START WORKING`,
    image: "/projects/powerpulse.webp",
    url: "https://powerpulse.vercel.app/",
    skills: ["react", "next", "ts", "rhf", "styled", "jwt", "lang", "seo"],
  },
];

export const PROJECTS_LENGTH = PROJECTS.length;
