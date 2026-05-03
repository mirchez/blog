import { getPosts } from "@/app/get-posts";

const REPO = "https://github.com/mirchez/blog";
const HANDLE = "mirchezz";

export async function PostFooter({ id }: { id: string }) {
  const posts = await getPosts();
  const post = posts.find((p) => p.id === id);
  if (!post) return null;

  const year = new Date(post.date).getFullYear();
  const sourceUrl = `${REPO}/blob/main/app/(post)/${year}/${id}/page.mdx`;

  return (
    <footer className="mt-16 flex items-center justify-between font-mono text-xs text-zinc-500">
      <span>
        Miguel Miranda (
        <a
          href={`https://x.com/${HANDLE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        >
          @{HANDLE}
        </a>
        )
      </span>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
      >
        Source
      </a>
    </footer>
  );
}
