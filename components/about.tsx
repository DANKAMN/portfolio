"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75)

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from high school, I chose to follow my passion for programming by enrolling in a{" "}
        <span className="font-medium">two-year software engineering program at Aptech</span>. This experience provided me with a strong foundation in{" "}
        <span className="font-medium">full-stack development</span> and ignited my love for solving complex problems through code.
      </p>

      <p className="mb-3">
        My core tech stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express, and MongoDB
        </span>
        , complemented by experience with TypeScript and various front-end libraries. I’m constantly exploring{" "}
        <span className="italic">emerging technologies</span> and refining my skills to stay ahead in the rapidly evolving tech landscape.
      </p>

      <p className="mb-3">
        I’m currently seeking a{" "}
        <span className="font-medium">full-time software developer role</span> where I can contribute to impactful projects, collaborate with innovative teams, and continue honing my expertise.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I enjoy playing basketball, watching movies, and engaging in chess matches. I’m also passionate about{" "}
        <span className="font-medium">trying new things</span>—currently diving into{" "}
        <span className="font-medium">journalism</span> and learning how to bake cookies.
      </p>

    </motion.section>
  )
}

export default About