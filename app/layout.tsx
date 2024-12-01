import "@/styles/main.css";

import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { SnowfallComponent } from "@/components/snowfall";
import { OpenGraph } from "@/lib/og";

import clsx from "clsx";
import { GeistMono as GeistSans } from "geist/font/mono";

export const metadata: Metadata = {
  ...OpenGraph,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(GeistSans.className)}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <main className="mx-auto max-w-screen-sm overflow-x-hidden px-6 py-24 md:overflow-x-visible">
            <article className="article">
              {children}
              <SnowfallComponent />
            </article>
          </main>
        </Providers>
      </body>
    </html>
  );
}
