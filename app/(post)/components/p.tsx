import type { HTMLAttributes } from "react";

export function P(props: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className="my-5 text-zinc-700 dark:text-zinc-300 leading-7"
      {...props}
    />
  );
}
