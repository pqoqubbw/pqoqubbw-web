"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const DownvoteIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="hover:bg-gray-a3  size-11 cursor-pointer rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.2 }}
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
        animate={
          isHovered
            ? {
                translateX: "-1px",
                translateY: "2px",
                rotate: "-12deg",
              }
            : {
                translateX: "0px",
                translateY: "0px",
                rotate: "0deg",
              }
        }
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <path d="M17 14V2" />
        <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
      </motion.svg>
    </motion.div>
  );
};

export { DownvoteIcon };
