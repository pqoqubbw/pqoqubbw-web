"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const HomeIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const pathVariants: Variants = {
    normal: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        opacity: { duration: 0.2 },
      },
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      transition: {
        duration: 0.6,
        opacity: { duration: 0.2 },
      },
    },
  };

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
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <motion.path
          d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
          variants={pathVariants}
          initial="normal"
          animate={isHovered ? "animate" : "normal"}
        />
      </svg>
    </div>
  );
};

export { HomeIcon };
