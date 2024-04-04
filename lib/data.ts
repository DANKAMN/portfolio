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
    title: "Graduated bootcamp",
    location: "Lagos, Nigeria",
    description:
      "I graduated from Aptech Computer Education with an ADSE (Advanced Diploma In Software Engineering) degree. In the following year I found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "DEC 2022",
  },
  {
    title: "Freelance Front-End Developer",
    location: "Remote",
    description:
      "I worked as a freelance front-end developer for 6 months with clients online.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Open University",
    location: "Helsinki, Finland",
    description:
      "I enrolled in the Full Stack Open University online. After that I upskilled to a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Mongoose and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "OCT 2023 - DEC 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Real Estate",
    description:
      "A cutting-edge full-stack real estate marketplace. Users can post real estate listings and book listings",
    tags: ["React", "Node.js", "MongoDB", "Google OAuth", "Firebase"],
    imageUrl: estateImg,
  },
  {
    title: "Imaginify",
    description:
      "Imaginfy is a cutting-edge Software-as-a-Service image editing application, enriched  with AI capabilities and a sophisticated payments and credits system.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Clerk"],
    imageUrl: imaginifyImg,
  },
  {
    title: "Daniel Eats",
    description:
      "Daniel Eats is an enterprise level food ordering platform. Enjoy effortless restaurant addition, menu exploration, order placement, and advanced search features. ",
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