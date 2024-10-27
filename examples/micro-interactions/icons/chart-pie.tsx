"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ChartPieIcon = () => {
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
          d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
          animate={
            isHovered
              ? {
                  translateX: 1.1,
                  translateY: -1.1,
                  transition: {
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                    bounce: 0.6,
                  },
                }
              : { translateX: 0, translateY: 0 }
          }
        />
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      </svg>
    </motion.div>
  );
};

export { ChartPieIcon };
