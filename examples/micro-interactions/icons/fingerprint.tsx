"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const pathVariants: Variants = {
  initial: { pathLength: 1, opacity: 1 },
  hover: {
    opacity: [0, 0, 1, 1, 1],
    pathLength: [0.1, 0.3, 0.5, 0.7, 0.9, 1],
    transition: {
      opacity: { duration: 0.5 },
      pathLength: {
        duration: 2,
      },
    },
  },
};

const FingerprintIcon = () => {
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
        <path
          d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
          strokeOpacity={0.4}
          strokeWidth={2}
          fill="none"
        />
        <motion.path
          d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
          variants={pathVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        <path
          d="M14 13.12c0 2.38 0 6.38-1 8.88"
          strokeOpacity={0.4}
          strokeWidth={2}
          fill="none"
        />
        <motion.path
          d="M14 13.12c0 2.38 0 6.38-1 8.88"
          variants={pathVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        <path
          d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
          strokeOpacity={0.4}
          strokeWidth={2}
          fill="none"
        />
        <motion.path
          d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
          variants={pathVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        <path
          d="M2 12a10 10 0 0 1 18-6"
          strokeOpacity={0.4}
          strokeWidth={2}
          fill="none"
        />
        <motion.path
          d="M2 12a10 10 0 0 1 18-6"
          variants={pathVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        <path d="M2 16h.01" strokeOpacity={0.4} strokeWidth={2} fill="none" />
        <motion.path
          d="M2 16h.01"
          variants={pathVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        <path
          d="M21.8 16c.2-2 .131-5.354 0-6"
          strokeOpacity={0.4}
          strokeWidth={2}
          fill="none"
        />
        <motion.path
          d="M21.8 16c.2-2 .131-5.354 0-6"
          variants={pathVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        <path
          d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
          strokeOpacity={0.4}
          strokeWidth={2}
          fill="none"
        />
        <motion.path
          d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
          variants={pathVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        <path
          d="M8.65 22c.21-.66.45-1.32.57-2"
          strokeOpacity={0.4}
          strokeWidth={2}
          fill="none"
        />
        <motion.path
          d="M8.65 22c.21-.66.45-1.32.57-2"
          variants={pathVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        <path
          d="M9 6.8a6 6 0 0 1 9 5.2v2"
          strokeOpacity={0.4}
          strokeWidth={2}
          fill="none"
        />
        <motion.path
          d="M9 6.8a6 6 0 0 1 9 5.2v2"
          variants={pathVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />
      </svg>
    </motion.div>
  );
};

export { FingerprintIcon };
