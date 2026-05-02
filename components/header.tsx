import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <Link
        href="/"
        className="font-bold text-zinc-50 hover:text-zinc-300 transition-colors"
      >
        Miguel Miranda
      </Link>
      <nav className="flex items-center gap-6 text-sm text-zinc-400">
        <Link
          href="/about"
          className="hover:text-zinc-50 transition-colors"
        >
          About
        </Link>
        <a
          href="https://x.com/mirchezz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-zinc-50 transition-colors"
        >
          <XIcon />
          Follow me
        </a>
      </nav>
    </header>
  );
}

function XIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
