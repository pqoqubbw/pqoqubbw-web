"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const pathVariants: Variants = {
  hidden: { opacity: 1 },
  visible: (i: number) => ({
    opacity: [0, 1],
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const SunIcon = () => {
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
        <circle cx="12" cy="12" r="4" />
        {[
          "M12 2v2",
          "m19.07 4.93-1.41 1.41",
          "M20 12h2",
          "m17.66 17.66 1.41 1.41",
          "M12 20v2",
          "m6.34 17.66-1.41 1.41",
          "M2 12h2",
          "m4.93 4.93 1.41 1.41",
        ].map((d, index) => (
          <motion.path
            key={d}
            d={d}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={pathVariants}
            custom={index + 1}
          />
        ))}
      </svg>
    </motion.div>
  );
};

export { SunIcon };
