import Link from "next/link";

export const revalidate = 300;

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="py-10">
        <Link
          href="/"
          className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        >
          ← Miguel Miranda
        </Link>
      </header>
      <article className="pb-10 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        {children}
      </article>
    </>
  );
}
