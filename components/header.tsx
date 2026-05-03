import Link from "next/link";

export function Header() {
  return (
    <header className="pt-8 pb-2">
      <Link
        href="/"
        className="font-bold text-zinc-900 dark:text-zinc-50 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
      >
        Miguel Miranda
      </Link>
    </header>
  );
}
