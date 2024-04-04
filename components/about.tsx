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
        After graduating highschool, I decided to pursue my
        passion for programming. I enrolled in a 2 year tech program (Aptech) and learnt{" "}
        <span className="font-medium">software engineering</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express and MongoDB
        </span>
        . I also possess experience with TypeScript and several other front-end pakages. I am continuously eager to explore emerging technologies. 
        Presently, I am actively seeking a{" "}
        <span className="font-medium">full-time software developer role</span> to further advance my skills and contribute to innovative projects.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        basketball, watching movies, and playing chess. I also enjoy{" "}
        <span className="font-medium">trying out new things</span>. I am currently
        trying out{" "}
        <span className="font-medium">journalism</span>, and also
        learning how to bake cookies.
      </p>
    </motion.section>
  )
}

export default About