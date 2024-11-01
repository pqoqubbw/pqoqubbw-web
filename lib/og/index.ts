import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: "pqoqubbw",
    template: "%s",
  },
  description: "trying to make the web a better place",
  keywords: ["Design", "Development", "Engineering"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "dmytro",
    description: "trying to make the web a better place",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/api/og`],
    siteName: "pqoqubbw.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "dmytro",
    description: "trying to make the web a better place",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/api/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
