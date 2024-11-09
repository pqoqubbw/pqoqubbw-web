"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const letterVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

type ValueTitleProps = {
  valueName: string;
};

type LetterState = {
  char: string;
  highlighted: boolean;
};

const ITEMS_COUNT = 150;
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%_+-";

export function MatrixBox({ valueName }: ValueTitleProps) {
  const [letters, setLetters] = useState<LetterState[]>([]);

  const getRandomChar = useCallback(
    () => CHARS[Math.floor(Math.random() * CHARS.length)],
    [],
  );

  const updateLetter = useCallback(
    (index: number) => {
      setLetters((prevLetters) => {
        const newLetters = [...prevLetters];
        const letter = newLetters[index];
        const newHighlighted = Math.random() > 0.96;
        newLetters[index] = {
          char:
            newHighlighted && Math.random() < 0.1
              ? getRandomChar()
              : letter.char,
          highlighted: newHighlighted,
        };
        return newLetters;
      });
    },
    [getRandomChar],
  );

  useEffect(() => {
    const generateLetters = (): LetterState[] => {
      return Array.from({ length: ITEMS_COUNT }, () => ({
        char: getRandomChar(),
        highlighted: false,
      }));
    };

    setLetters(generateLetters());

    const intervals: NodeJS.Timeout[] = [];

    for (let i = 0; i < ITEMS_COUNT; i++) {
      const intervalId = setInterval(
        () => updateLetter(i),
        Math.random() * 2000,
      );
      intervals.push(intervalId);
    }

    return () => intervals.forEach(clearInterval);
  }, [getRandomChar, updateLetter]);

  return (
    <div className="w-full max-w-2xl border rounded-base border-border p-[7px_7px_10px_7px] overflow-hidden font-mono font-medium text-sm leading-6 uppercase tracking-[0.3em] break-all relative">
      <div className="w-full overflow-hidden text-center h-[60px]">
        {letters.map((letter, index) => (
          <AnimatePresence key={index} initial={false} mode="popLayout">
            <motion.span
              variants={letterVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.1 }}
              className={`inline-block transition-all select-none duration-750 ${
                letter.highlighted ? "opacity-30" : "opacity-10"
              }`}
            >
              {letter.char}
            </motion.span>
          </AnimatePresence>
        ))}
      </div>
      <div className="absolute inset-0 flex font-bold items-center justify-center text-center text-white whitespace-pre">
        {valueName.split("").map((char, index) => (
          <span key={index} className="inline-block relative select-none">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
