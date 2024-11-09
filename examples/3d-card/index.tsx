"use client";

import QrCodeSvg from "@/examples/3d-card/qr-code.svg";

import { motion } from "framer-motion";
import Image from "next/image";

const ThreeDCard = () => {
  return (
    <div style={{ perspective: "1200px" }} className="relative">
      <div className="absolute inset-0 dark:bg-white-a1 bg-black-a2 blur-md rounded-2xl" />
      <motion.div
        animate={{
          rotateX: [10, 12, -10, -15, 10],
          rotateY: [18, -12, -13, 20, 18],
        }}
        transition={{
          duration: 9,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ transform: "preserve-3d" }}
        className="font-mono rounded-base bg-background border border-border p-4 flex items-center justify-center flex-col gap-4"
      >
        <Image
          src={QrCodeSvg}
          alt="QR Code"
          width={150}
          height={150}
          className="pointer-events-none select-none"
        />
        <h3 className="text-base font-medium text-foreground m-0">
          scan to visit
        </h3>
      </motion.div>
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl blur-md dark:hidden"
        style={{
          background:
            "linear-gradient(100deg, transparent 25%, rgba(255, 255, 255, 0.3) 35%, rgba(255, 255, 255, 0.3) 65%, transparent 75%)",
        }}
      />
    </div>
  );
};

export { ThreeDCard };
