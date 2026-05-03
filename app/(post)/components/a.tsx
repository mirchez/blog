import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";

export function A({
  href = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = /^https?:\/\//.test(href);
  const className =
    "underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-2 hover:decoration-zinc-700 dark:hover:decoration-zinc-300 transition-colors";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
