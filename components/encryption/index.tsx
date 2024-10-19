"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export function Encryption({
  text = "Секретное сообщение",
}: {
  text?: string;
}) {
  const [encryptedText, setEncryptedText] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      setEncryptedText((prevText) =>
        prevText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (Math.random() < 0.5) return char;
            return specialChars[
              Math.floor(Math.random() * specialChars.length)
            ];
          })
          .join(""),
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="font-mono text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {encryptedText.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
