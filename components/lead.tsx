import type { HTMLAttributes } from "react";

export function Lead(props: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className="my-5 text-lg md:text-xl leading-relaxed text-zinc-900 dark:text-zinc-100"
      {...props}
    />
  );
}
