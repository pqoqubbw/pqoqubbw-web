"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip";
import { cn } from "@/lib/cn";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";

dayjs.extend(relativeTime);
dayjs.extend(utc);

const unixMicroToIsoTimestamp = (unix: string | number): string => {
  return dayjs.unix(Number(unix) / 1000 / 1000).toISOString();
};

const isUnixMicro = (unix: string | number): boolean => {
  const digitLength = String(unix).length === 16;
  const isNum = !Number.isNaN(Number(unix));
  return isNum && digitLength;
};

const timestampLocalFormatter = (value: string | number) => {
  const timestamp = isUnixMicro(value) ? unixMicroToIsoTimestamp(value) : value;
  return dayjs(timestamp).format("DD MMM  HH:mm:ss");
};

const timestampUtcFormatter = (value: string | number) => {
  const timestamp = isUnixMicro(value) ? unixMicroToIsoTimestamp(value) : value;
  return dayjs(timestamp).utc().format("DD MMM  HH:mm:ss");
};

const timestampRelativeFormatter = (value: string | number) => {
  const timestamp = isUnixMicro(value) ? unixMicroToIsoTimestamp(value) : value;
  return dayjs(timestamp).fromNow();
};

const variants = {
  enter: { y: -10, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 },
};

const TooltipRow = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(value);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1000);
      }}
      className={cn(
        "flex items-center gap-2 cursor-pointer rounded-md px-2 py-1 hover:bg-black-a1 hover:dark:bg-white-a1",
      )}
    >
      <p className="text-left truncate text-[12px] text-kbd-foreground w-32">
        {label}
      </p>
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={copied ? "copied" : "value"}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.1 }}
          className="text-base"
        >
          {copied ? "Copied!" : value}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export const TimeTooltip = ({ value }: { value: string | number }) => {
  const [open, setOpen] = useState(false);
  const local = timestampLocalFormatter(value);
  const utc = timestampUtcFormatter(value);
  const relative = timestampRelativeFormatter(value);
  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
    if (
      open &&
      !(event.target as HTMLElement)?.closest(".time-tooltip-content")
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [open]);

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger
          onClick={(event) => {
            event.preventDefault();
            if (!open) {
              setOpen(true);
            }
          }}
          onTouchEnd={(event) => {
            event.preventDefault();
            setOpen(true);
          }}
          className="cursor-pointer underline underline-offset-2 decoration-dotted text-base"
        >
          <span>{timestampLocalFormatter(value)}</span>
        </TooltipTrigger>
        <TooltipContent
          sticky="always"
          className="font-mono flex flex-col justify-center w-[300px] time-tooltip-content"
        >
          <TooltipRow label="UTC" value={utc} />
          <TooltipRow label={`${localTimezone}`} value={local} />
          <TooltipRow label="Relative" value={relative} />
          <TooltipRow
            label="Timestamp"
            value={
              isUnixMicro(value)
                ? String(value)
                : dayjs(value).valueOf().toString()
            }
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const TimeTooltipPreview = () => {
  const [times, setTimes] = useState<{ [key: string]: number | null }>({
    seconds: null,
    minutes: null,
    hours: null,
    days: null,
  });

  useEffect(() => {
    const now = new Date();
    const newTimes = {
      seconds: new Date(now.getTime() - 16 * 1000).getTime(),
      minutes: new Date(now.getTime() - 30 * 60 * 1000).getTime(),
      hours: new Date(now.getTime() - 3 * 60 * 60 * 1000).getTime(),
      days: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000).getTime(),
    };
    setTimes(newTimes);
  }, []);

  if (Object.values(times).some((time) => time === null)) return null;

  return (
    <Suspense>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-center gap-0">
          <TimeTooltip value={times.seconds!} />
          <p className="text-muted text-xs m-0">16 Seconds Ago</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-0">
          <TimeTooltip value={times.minutes!} />
          <p className="text-muted text-xs m-0">30 Minutes Ago</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-0">
          <TimeTooltip value={times.hours!} />
          <p className="text-muted text-xs m-0">3 Hours Ago</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-0">
          <TimeTooltip value={times.days!} />
          <p className="text-muted text-xs m-0">5 Days Ago</p>
        </div>
      </div>
    </Suspense>
  );
};

export { TimeTooltipPreview };
