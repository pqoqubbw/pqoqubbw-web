"use client";

import { AppThemeSwitcher } from "@/components/theme";

import { useOpenPanel } from "@openpanel/nextjs";
import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const op = useOpenPanel();

  return (
    <div className="flex w-full min-[460px]:items-center min-[460px]:flex-row flex-col gap-4 min-[460px]:justify-between border-border border-t pt-2">
      <div className="flex items-center gap-4 text-small text-kbd-foreground">
        <a
          href="https://www.linkedin.com/in/pqoqubbw/"
          target="_blank"
          className="flex items-center gap-1"
          onClick={() => op.track("linkedin")}
        >
          <LinkedInLogoIcon />
          linkedin
        </a>
        <a
          href="https://read.cv/pqoqubbw"
          target="_blank"
          className="flex items-center gap-1"
          onClick={() => op.track("resume")}
        >
          <FileTextIcon />
          resume
        </a>
        <a
          href="https://github.com/pqoqubbw"
          target="_blank"
          className="flex items-center gap-1"
          onClick={() => op.track("github")}
        >
          <GitHubLogoIcon />
          github
        </a>
        <a
          href="https://x.com/pqoqubbw"
          target="_blank"
          className="flex items-center gap-1"
          onClick={() => op.track("twitter")}
        >
          <TwitterLogoIcon />
          twitter
        </a>
      </div>
      <div className="text-kbd-foreground text-small flex justify-end items-end">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };
