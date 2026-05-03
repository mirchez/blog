import type { HTMLAttributes } from "react";

export function H1(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className="mt-10 mb-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
      {...props}
    />
  );
}

export function H2(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="mt-10 mb-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
      {...props}
    />
  );
}

export function H3(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className="mt-8 mb-3 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
      {...props}
    />
  );
}
