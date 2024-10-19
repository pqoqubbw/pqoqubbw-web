import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";

import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

import { Encryption } from "../encryption";

interface PostProps {
  category: string;
}

export const Posts = ({ category }: PostProps) => {
  // const posts = getPosts(category).sort((a, b) => {
  //   return (
  //     new Date(b.time.created).getTime() - new Date(a.time.created).getTime()
  //   );
  // });

  const posts = [];

  const Seperator = () => <div className="border-border border-t" />;

  if (true) {
    return (
      <div className="mt-6 flex flex-col">
        <h2 className="py-2 text-muted capitalize">
          {category} <span className="lowercase text-xs">working on it...</span>
        </h2>
        {["iconsiconsicons", "iconsiconsiconsiconsicons", "iconsicons"].map(
          (post) => {
            return (
              <React.Fragment key={post}>
                <Seperator />
                <div className="flex w-full justify-between py-2">
                  <Encryption text={post} />
                  <span className="text-muted mt-0 pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline-block"
                    >
                      <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z" />
                    </svg>
                  </span>
                  {/* <p className="mt-0 text-muted">
                {formatter.date(new Date(post.time.created))}
              </p> */}
                </div>
              </React.Fragment>
            );
          },
        )}
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col">
      <NextViewTransition
        href={`/${category}`}
        className="flex justify-between"
      >
        <h2 className="py-2 text-muted capitalize">{category}</h2>
      </NextViewTransition>

      {posts.map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <Seperator />
            <NextViewTransition
              href={`/${category}/${post.slug}`}
              className="flex w-full justify-between py-2"
            >
              <p>{post.title}</p>
              <p className="mt-0 text-muted">
                {formatter.date(new Date(post.time.created))}
              </p>
            </NextViewTransition>
          </React.Fragment>
        );
      })}
    </div>
  );
};
