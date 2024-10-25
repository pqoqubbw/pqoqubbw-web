"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const transition = {
  type: "spring",
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const SettingsIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="hover:bg-gray-a3  size-11 cursor-pointer rounded-md transition-colors duration-200 flex items-center justify-center"
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
        <motion.line
          x1="21"
          x2={isHovered ? 10 : 14}
          y1="4"
          y2="4"
          initial={false}
          animate={{ x2: isHovered ? 10 : 14 }}
          transition={transition}
        />
        <motion.line
          x1={isHovered ? 5 : 10}
          x2="3"
          y1="4"
          y2="4"
          initial={false}
          animate={{ x1: isHovered ? 5 : 10 }}
          transition={transition}
        />

        <motion.line
          x1="21"
          x2={isHovered ? 18 : 12}
          y1="12"
          y2="12"
          initial={false}
          animate={{ x2: isHovered ? 18 : 12 }}
          transition={transition}
        />

        <motion.line
          x1={isHovered ? 13 : 8}
          x2="3"
          y1="12"
          y2="12"
          initial={false}
          animate={{ x1: isHovered ? 13 : 8 }}
          transition={transition}
        />

        <motion.line
          x1="3"
          x2={isHovered ? 4 : 12}
          y1="20"
          y2="20"
          initial={false}
          animate={{ x2: isHovered ? 4 : 12 }}
          transition={transition}
        />

        <motion.line
          x1="21"
          x2="21"
          y1="20"
          y2="20"
          initial={false}
          animate={{ x1: isHovered ? 8 : 16 }}
          transition={transition}
        />

        <motion.line
          x1={isHovered ? 9 : 14}
          x2={isHovered ? 9 : 14}
          y1="2"
          y2="6"
          initial={false}
          animate={{ x1: isHovered ? 9 : 14, x2: isHovered ? 9 : 14 }}
          transition={transition}
        />

        <motion.line
          x1={isHovered ? 14 : 8}
          x2={isHovered ? 14 : 8}
          y1="10"
          y2="14"
          initial={false}
          animate={{ x1: isHovered ? 14 : 8, x2: isHovered ? 14 : 8 }}
          transition={transition}
        />

        <motion.line
          x1={isHovered ? 8 : 16}
          x2={isHovered ? 8 : 16}
          y1="18"
          y2="22"
          initial={false}
          animate={{ x1: isHovered ? 8 : 16, x2: isHovered ? 8 : 16 }}
          transition={transition}
        />
      </svg>
    </motion.div>
  );
};

export { SettingsIcon };
