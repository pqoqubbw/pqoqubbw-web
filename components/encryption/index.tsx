"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

function Encryption({ text = "Секретное сообщение" }: { text?: string }) {
  const [encryptedText, setEncryptedText] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      setEncryptedText((prevText) =>
        prevText
          .split("")
          .map((char) =>
            Math.random() > 0.5
              ? characters[Math.floor(Math.random() * characters.length)]
              : char,
          )
          .join(""),
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      className="font-mono text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {encryptedText}
    </motion.p>
  );
}

export { Encryption };
