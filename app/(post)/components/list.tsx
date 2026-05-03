import type { HTMLAttributes, OlHTMLAttributes, LiHTMLAttributes } from "react";

export function UL(props: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="my-5 ml-4 list-disc text-zinc-700 dark:text-zinc-300 [&>li]:my-1.5"
      {...props}
    />
  );
}

export function OL(props: OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className="my-5 ml-4 list-decimal text-zinc-700 dark:text-zinc-300 [&>li]:my-1.5"
      {...props}
    />
  );
}

export function LI(props: LiHTMLAttributes<HTMLLIElement>) {
  return <li className="leading-7" {...props} />;
}
