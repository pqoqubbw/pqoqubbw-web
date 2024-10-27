"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const RouteIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
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
        <motion.circle
          cx="6"
          cy="19"
          r="3"
          animate={
            isHovered
              ? {
                  pathLength: [0, 1],
                  opacity: [0, 1],
                  transition: {
                    duration: 0.3,
                    delay: 0.1,
                    opacity: { delay: 0.1 },
                  },
                }
              : { pathLength: 1, opacity: 1 }
          }
        />
        <motion.path
          d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
          animate={
            isHovered
              ? {
                  pathLength: [0, 1],
                  opacity: [0, 1],
                  pathOffset: [1, 0],
                  transition: {
                    duration: 0.7,
                    delay: 0.5,
                    opacity: { delay: 0.5 },
                  },
                }
              : { pathLength: 1, opacity: 1, pathOffset: 0 }
          }
        />
        <motion.circle
          cx="18"
          cy="5"
          r="3"
          animate={
            isHovered
              ? {
                  pathLength: [0, 1],
                  opacity: [0, 1],
                  transition: {
                    duration: 0.3,
                    delay: 0.1,
                    opacity: { delay: 0.1 },
                  },
                }
              : { pathLength: 1, opacity: 1 }
          }
        />
      </svg>
    </motion.div>
  );
};

export { RouteIcon };
