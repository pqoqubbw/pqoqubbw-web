"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const rectVariants: Variants = {
  normal: {
    translateY: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    translateY: -1.5,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
};

const ArchiveIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover:bg-gray-a3 size-11 cursor-pointer rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.rect
          width="20"
          height="5"
          x="2"
          y="3"
          rx="1"
          initial="normal"
          animate={isHovered ? "animate" : "normal"}
          variants={rectVariants}
        />
        <motion.path
          d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
          animate={
            isHovered
              ? { d: "M4 11v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11" }
              : { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }
          }
        />
        <motion.path
          d="M10 12h4"
          animate={isHovered ? { d: "M10 15h4" } : { d: "M10 12h4" }}
        />
      </svg>
    </div>
  );
};

export { ArchiveIcon };
