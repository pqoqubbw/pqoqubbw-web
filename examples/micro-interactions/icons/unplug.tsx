"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const plugVariants: Variants = {
  disconnected: {
    x: 0,
    y: 0,
  },
  connected: {
    x: -3,
    y: 3,
  },
};

const socketVariants: Variants = {
  disconnected: {
    x: 0,
    y: 0,
  },
  connected: {
    x: 3,
    y: -3,
  },
};

const pathVariants = {
  initial: (custom: { x: number; y: number }) => ({
    d: `M${custom.x} ${custom.y} l2.5 -2.5`,
  }),
  hovered: (custom: { x: number; y: number }) => ({
    d: `M${custom.x + 2.93} ${custom.y - 2.93} l0.10 -0.10`,
  }),
};

const UnplugIcon = () => {
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
          d="M19 5l3 -3"
          animate={isHovered ? { d: "M17 7l5 -5" } : { d: "M19 5l3 -3" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <motion.path
          d="m2 22 3-3"
          animate={isHovered ? { d: "m2 22 6-6" } : { d: "m2 22 3-3" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <motion.path
          d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
          variants={socketVariants}
          animate={isHovered ? "connected" : "disconnected"}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <motion.path
          variants={pathVariants}
          custom={{ x: 7.5, y: 13.5 }}
          initial="initial"
          animate={isHovered ? "hovered" : "initial"}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <motion.path
          variants={pathVariants}
          custom={{ x: 10.5, y: 16.5 }}
          initial="initial"
          animate={isHovered ? "hovered" : "initial"}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <motion.path
          d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
          variants={plugVariants}
          animate={isHovered ? "connected" : "disconnected"}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </svg>
    </motion.div>
  );
};

export { UnplugIcon };
