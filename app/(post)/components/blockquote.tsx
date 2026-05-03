import type { BlockquoteHTMLAttributes } from "react";

export function Blockquote(props: BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="my-6 border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 text-zinc-600 dark:text-zinc-400 italic"
      {...props}
    />
  );
}
