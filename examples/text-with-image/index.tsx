"use client";

import Preview from "@/components/preview";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { forwardRef, ReactNode, RefObject, useRef } from "react";

const BLOCK_WIDTH = 90;

type Props = Pick<UseInViewOptions, "margin"> & {
  children: ReactNode;
  text: [string, string];
};

const TextWithImage = forwardRef<HTMLDivElement, Props>(
  ({ margin, children, text }, ref) => {
    const containerRef = useRef<HTMLHeadingElement>(null);

    const isInView = useInView(containerRef, {
      root: ref as RefObject<Element>,
      margin,
    });

    return (
      <h3
        className="text-4xl flex items-center gap-2 text-[#1F1F1F] dark:text-[#ffffff]"
        ref={containerRef}
      >
        <motion.span
          animate={{ x: isInView ? 0 : BLOCK_WIDTH / 2 }}
          transition={{
            type: "spring",
            stiffness: 125,
            damping: 10,
            mass: 0.5,
          }}
        >
          {text[0]}
        </motion.span>
        <motion.div
          className={`w-[${BLOCK_WIDTH}px] h-[50px] rounded-md overflow-hidden flex items-center justify-center`}
          initial={{ scale: 0 }}
          animate={{
            scale: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            delay: isInView ? 0.1 : 0,
          }}
        >
          {children}
        </motion.div>
        <motion.span
          animate={{ x: isInView ? 0 : -BLOCK_WIDTH / 2 }}
          transition={{
            type: "spring",
            stiffness: 125,
            damping: 10,
            mass: 0.5,
          }}
        >
          {text[1]}
        </motion.span>
      </h3>
    );
  },
);

const TextWithImageExample = () => {
  const root = useRef<HTMLDivElement>(null);

  return (
    <Preview ref={root} withRefresh className="h-[400px] overflow-auto p-0">
      <div className="w-full flex items-center flex-col justify-start min-h-full">
        <div className="w-full min-h-[300px] border-b border-border flex items-center justify-center">
          <p>scroll down :)</p>
        </div>
        <div className="w-full flex items-center py-40 justify-center flex-col gap-10">
          <TextWithImage
            margin="-140px 0px -140px 0px"
            text={["cats", "rule"]}
            ref={root}
          >
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "75%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/cBncDNrdxga2I"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
              />
            </div>
          </TextWithImage>
          <TextWithImage
            margin="-120px 0px -120px 0px"
            text={["everyone", "loves"]}
            ref={root}
          >
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "57%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/QKSXTlCRK0r1N2NnkV"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
              />
            </div>
          </TextWithImage>
          <TextWithImage
            margin="-100px 0px -100px 0px"
            text={["time to", "sleep"]}
            ref={root}
          >
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "56%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/xT8qBvH1pAhtfSx52U"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
              />
            </div>
          </TextWithImage>
        </div>
        <div className="w-full min-h-[300px] border-t border-border flex items-center justify-center">
          <p>scroll up :)</p>
        </div>
      </div>
    </Preview>
  );
};

export { TextWithImageExample };
