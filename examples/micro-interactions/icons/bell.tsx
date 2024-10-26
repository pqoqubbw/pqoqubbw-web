"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const BellIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="hover:bg-gray-a3 size-11 cursor-pointer rounded-md transition-colors duration-200 flex items-center justify-center"
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
        animate={{
          rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.path
          d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
          initial={false}
          animate={{ opacity: 1 }}
        />
        <motion.path
          d="M10.3 21a1.94 1.94 0 0 0 3.4 0"
          initial={false}
          animate={{ opacity: 1 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export { BellIcon };
