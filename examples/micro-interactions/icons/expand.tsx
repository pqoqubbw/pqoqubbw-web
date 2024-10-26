"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ExpandIcon = () => {
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
        <motion.path
          d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          animate={
            isHovered
              ? { translateX: "2px", translateY: "2px" }
              : { translateX: "0%", translateY: "0%" }
          }
        />
        <motion.path
          d="M3 16.2V21m0 0h4.8M3 21l6-6"
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          animate={
            isHovered
              ? { translateX: "-2px", translateY: "2px" }
              : { translateX: "0%", translateY: "0%" }
          }
        />
        <motion.path
          d="M21 7.8V3m0 0h-4.8M21 3l-6 6"
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          animate={
            isHovered
              ? { translateX: "2px", translateY: "-2px" }
              : { translateX: "0%", translateY: "0%" }
          }
        />
        <motion.path
          d="M3 7.8V3m0 0h4.8M3 3l6 6"
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          animate={
            isHovered
              ? { translateX: "-2px", translateY: "-2px" }
              : { translateX: "0%", translateY: "0%" }
          }
        />
      </svg>
    </motion.div>
  );
};

export { ExpandIcon };
