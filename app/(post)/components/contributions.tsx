import type { ReactNode } from "react";

export function Contributions({ children }: { children: ReactNode }) {
  return (
    <ul className="my-5 list-none pl-0 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
      {children}
    </ul>
  );
}

export function Contribution({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-zinc-500">
      {children}
    </li>
  );
}
