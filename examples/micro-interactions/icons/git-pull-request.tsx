"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const DURATION = 0.3;

const GitPullRequestIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const calculateDelay = (i: number) => {
    if (i === 0) return 0.1;

    return i * DURATION + 0.1;
  };

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
          cx="18"
          cy="18"
          r="3"
          animate={
            isHovered
              ? {
                  pathLength: [0, 1],
                  opacity: [0, 1],
                  transition: {
                    duration: DURATION,
                    delay: calculateDelay(0),
                    opacity: { delay: calculateDelay(0) },
                  },
                }
              : { pathLength: 1, opacity: 1 }
          }
        />
        <motion.circle
          cx="6"
          cy="6"
          r="3"
          animate={
            isHovered
              ? {
                  pathLength: [0, 1],
                  opacity: [0, 1],
                  transition: {
                    duration: DURATION,
                    delay: calculateDelay(2),
                    opacity: { delay: calculateDelay(2) },
                  },
                }
              : { pathLength: 1, opacity: 1 }
          }
        />
        <motion.path
          d="M13 6h3a2 2 0 0 1 2 2v7"
          animate={
            isHovered
              ? {
                  pathLength: [0, 1],
                  opacity: [0, 1],
                  pathOffset: [1, 0],
                  transition: {
                    duration: DURATION,
                    delay: calculateDelay(1),
                    opacity: { delay: calculateDelay(1) },
                  },
                }
              : { pathLength: 1, pathOffset: 0, opacity: 1 }
          }
        />
        <motion.line
          x1="6"
          x2="6"
          y1="9"
          y2="21"
          animate={
            isHovered
              ? {
                  opacity: [0, 1],
                  pathLength: [0, 1],
                  transition: {
                    duration: DURATION,
                    delay: calculateDelay(3),
                    opacity: { delay: calculateDelay(3) },
                  },
                }
              : { opacity: 1, pathLength: 1 }
          }
        />
      </svg>
    </motion.div>
  );
};

export { GitPullRequestIcon };
