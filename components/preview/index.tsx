import type React from "react";

import { cn } from "@/lib/cn";

import styles from "./styles.module.css";

const Preview = ({
  children,
  codeblock,
  className,
  style,
}: React.HTMLAttributes<HTMLDivElement> & { codeblock?: string }) => (
  <figure
    data-with-codeblock={codeblock}
    className={cn(styles.preview, className)}
    style={style}
  >
    {children}
  </figure>
);

export default Preview;
