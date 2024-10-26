"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const lidVariants: Variants = {
  closed: { y: 0 },
  open: { y: -1.1 },
};

const springTransition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const DeleteIcon = () => {
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
        <motion.g
          variants={lidVariants}
          initial="closed"
          animate={isHovered ? "open" : "closed"}
          transition={springTransition}
        >
          <path d="M3 6h18" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </motion.g>
        <motion.path
          d="M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8"
          variants={{
            closed: { d: "M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8" },
            open: { d: "M19 9v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V9" },
          }}
          initial="closed"
          animate={isHovered ? "open" : "closed"}
          transition={springTransition}
        />
        <motion.line
          x1="10"
          x2="10"
          y1="11"
          y2="17"
          variants={{
            closed: { y1: 11, y2: 17 },
            open: { y1: 11.5, y2: 17.5 },
          }}
          initial="closed"
          animate={isHovered ? "open" : "closed"}
          transition={springTransition}
        />
        <motion.line
          x1="14"
          x2="14"
          y1="11"
          y2="17"
          variants={{
            closed: { y1: 11, y2: 17 },
            open: { y1: 11.5, y2: 17.5 },
          }}
          initial="closed"
          animate={isHovered ? "open" : "closed"}
          transition={springTransition}
        />
      </svg>
    </motion.div>
  );
};

export { DeleteIcon };
