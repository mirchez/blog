export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
      {children}
    </article>
  );
}
