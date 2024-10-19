import type React from "react";

import { cn } from "@/lib/cn";

import styles from "./styles.module.css";

const Preview = ({
  children,
  codeblock,
  className,
}: React.HTMLAttributes<HTMLDivElement> & { codeblock?: string }) => (
  <figure
    data-with-codeblock={codeblock}
    className={cn(styles.preview, className)}
  >
    {children}
  </figure>
);

export default Preview;
