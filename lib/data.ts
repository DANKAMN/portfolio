import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import estateImg from "@/public/daniel-estate.png";
import imaginifyImg from "@/public/imaginify.png";
import eatsImg from "@/public/daniel-eats.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Aptech Computer Education",
    location: "Lagos, Nigeria",
    description:
      "I graduated from Aptech Computer Education with an ADSE (Advanced Diploma In Software Engineering) degree. In the following year I found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "JAN 2021 - DEC 2022",
  },
  {
    title: "Web developer",
    location: "Twealthy Nigeria Limited",
    description: "Spearheaded the redesign of the outdated website and incorporating of modern UI/UX principles",
    icon: React.createElement(CgWorkAlt),
    date: "JAN 2022 - NOV 2022",
  },
  {
    title: "Full-Stack Open University",
    location: "Helsinki, Finland",
    description:
      "I enrolled in the Full Stack Open University online. After that I upskilled to a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Mongoose and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "JAN 2023 - APR 2023",
  },
  {
    title: "Front-end developer",
    location: "Freelance, Remote",
    description: "Built and maintained responsive websites that improved user engagement by ensuring cross-browser and mobile compatibility.",
    icon: React.createElement(CgWorkAlt),
    date: "FEB 2023 - MAY 2024",
  },
  {
    title: "Full Stack developer",
    location: "Chain CO-OP",
    description: "Implemented and optimized database structures using MongoDB, ensuring efficient data retrieval and storage.",
    icon: React.createElement(CgWorkAlt),
    date: "SEP 2024 - PRESENT",
  }
] as const;

export const projectsData = [
  {
    title: "Real Estate",
    description:
      "A cutting-edge full-stack real estate marketplace. Users can post real estate listings and book listings.",
    url: "https://mern-real-estate-isek.onrender.com/",
    source: "https://github.com/DANKAMN/mern_real_estate",
    tags: ["React", "Node.js", "MongoDB", "Google OAuth", "Firebase"],
    imageUrl: estateImg,
  },
  {
    title: "Imaginify",
    description:
      "A cutting-edge Software-as-a-Service AI image editing application, enriched  with a sophisticated payments and credits system.",
    url: "https://imaginify-omega-six.vercel.app/",
    source: "https://github.com/DANKAMN/ai-saas-nextjs14",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Clerk"],
    imageUrl: imaginifyImg,
  },
  {
    title: "Daniel Eats",
    description:
      "An enterprise level food ordering platform. Enjoy effortless restaurant addition, menu exploration, order placement, and advanced search features. ",
    url: "https://food-ordering-web-app-frontend.onrender.com/",
    source: "https://github.com/DANKAMN/food-ordering-web-app",
    tags: ["React", "TypeScript", "MongoDB", "Auth0", "Cloudinary"],
    imageUrl: eatsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS / SCSS",
  "Tailwind",
  "Shadcn",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux Toolkit",
  "Next.js",
  "Node.js",
  "Mongoose",
  "Express",
  "MongoDB",
  "Axios",
  "Git",
  "GitHub",
  "PostgreSQL",
  "Jest",
  "GraphQL",
  "NPM",
  "Yarn",
  "Vercel",
  "Netlify",
  "Render"
] as const;