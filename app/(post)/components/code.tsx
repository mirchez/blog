import type { HTMLAttributes } from "react";

export function InlineCode(props: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-800 dark:text-zinc-200"
      {...props}
    />
  );
}

export function CodeBlock(props: HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 font-mono text-sm leading-6 text-zinc-800 dark:text-zinc-200"
      {...props}
    />
  );
}
