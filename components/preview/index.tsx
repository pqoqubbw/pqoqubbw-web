"use client";

import type React from "react";

import { RefreshIcon } from "@/examples/micro-interactions/icons/refresh";
import { cn } from "@/lib/cn";

import { useState } from "react";

import styles from "./styles.module.css";

const Preview = ({
  children,
  codeblock,
  className,
  style,
  withRefresh = false,
}: React.HTMLAttributes<HTMLDivElement> & {
  codeblock?: string;
  withRefresh?: boolean;
}) => {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <figure
      data-with-codeblock={codeblock}
      className={cn(styles.preview, className)}
      style={style}
      key={refreshKey}
    >
      {withRefresh && (
        <RefreshIcon
          className="absolute top-2 right-2 size-8 text-gray-11"
          width={18}
          height={18}
          onClick={() => setRefreshKey((prevKey) => prevKey + 1)}
        />
      )}
      {children}
    </figure>
  );
};

export default Preview;
