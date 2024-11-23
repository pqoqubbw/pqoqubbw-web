"use client";

import { cn } from "@/lib/cn";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Fragment, useEffect, useRef } from "react";

const Corners = () => {
  const DEFAULT_CLASSES =
    "absolute w-3 h-3 after:content-[' '] before:content-[' '] after:absolute before:absolute after:w-[2px] after:h-3 before:w-3 before:h-[2px] after:bg-purple-400 before:bg-purple-400";

  return (
    <Fragment>
      <div
        className={cn(
          DEFAULT_CLASSES,
          "top-0 left-0 after:-top-[2px] after:-left-[2px] before:-top-[2px] before:-left-[2px]",
        )}
      />
      <div
        className={cn(
          DEFAULT_CLASSES,
          "top-0 right-0 after:-top-[2px] after:-right-[2px] before:-top-[2px] before:-right-[2px]",
        )}
      />
      <div
        className={cn(
          DEFAULT_CLASSES,
          "bottom-0 left-0 after:-bottom-[2px] after:-left-[2px] before:-bottom-[2px] before:-left-[2px]",
        )}
      />
      <div
        className={cn(
          DEFAULT_CLASSES,
          "bottom-0 right-0 after:-bottom-[2px] after:-right-[2px] before:-bottom-[2px] before:-right-[2px]",
        )}
      />
    </Fragment>
  );
};

const ClipPathBlock = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseY = useMotionValue(230);
  const smoothMouseY = useSpring(mouseY, {
    damping: 8,
    stiffness: 60,
    mass: 0.6,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const relativeY = e.clientY - rect.top;
        mouseY.set(relativeY);
      }
    };

    const resetMousePosition = () => {
      mouseY.set(125);
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", updateMousePosition);
      containerRef.current.addEventListener("mouseleave", resetMousePosition);
      resetMousePosition();
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition,
        );
        containerRef.current.removeEventListener(
          "mouseleave",
          resetMousePosition,
        );
      }
    };
  }, [mouseY]);

  const constrainedY = useTransform(smoothMouseY, (y) => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      const padding = 30;
      const minY = padding;
      const maxY = height - padding - 5;
      return Math.min(Math.max(y, minY), maxY);
    }
    return y;
  });

  const clipPathY = useTransform(constrainedY, (y) => `inset(${y}px 0px 0px)`);

  return (
    <div
      ref={containerRef}
      className="border-border p-12 relative border-[2px] h-[250px] flex items-center justify-center"
    >
      <Corners />
      <h2 className="text-4xl text-foreground font-bold font-mono leading-relaxed m-0">
        it's time to ship something
      </h2>
      <motion.div
        style={{
          translateY: constrainedY,
        }}
        initial={{ translateY: 230, opacity: 0 }}
        animate={{ translateY: 125, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="absolute left-0 top-0 h-[2px] after:content-[' '] after:absolute after:-top-[2px] after:w-full after:h-[2px] after:bg-background w-full bg-purple-400"
      />
      <motion.div
        style={{
          clipPath: clipPathY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="absolute bg-gradient-to-b from-purple-400/50 to-transparent w-full h-full"
      />
      <motion.div
        style={{
          clipPath: clipPathY,
        }}
        className="absolute p-12 flex items-center justify-center select-none pointer-events-none w-full h-full"
      >
        <h3 className="text-4xl text-background font-bold font-mono leading-relaxed m-0 [text-shadow:_-1px_-1px_0_theme(colors.purple.400),_1px_-1px_0_theme(colors.purple.400),_-1px_1px_0_theme(colors.purple.400),_1px_1px_0_theme(colors.purple.400)]">
          it's time to ship something
        </h3>
      </motion.div>
    </div>
  );
};

export { ClipPathBlock };
