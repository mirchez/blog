"use client";

import { useState } from "react";

const EMAIL = "mmirandasanchez16@gmail.com";

const STATIC_LINKS = [
  { label: "GitHub", href: "https://github.com/mirchez" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mirchez/" },
  { label: "X/Twitter", href: "https://x.com/mirchezz" },
];

export function Links() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable; fall back silently.
    }
  }

  return (
    <div className="my-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
      {STATIC_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        >
          {link.label}
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
      >
        {copied ? "Email copied" : "Copy email"}
      </button>
    </div>
  );
}
