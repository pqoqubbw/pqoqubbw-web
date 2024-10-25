"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const RefreshIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="hover:bg-gray-a3  size-11 cursor-pointer rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        animate={
          isHovered
            ? {
                rotate: "-50deg",
              }
            : {
                rotate: "0deg",
              }
        }
      >
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </motion.svg>
    </motion.div>
  );
};

export { RefreshIcon };
