import Link from "next/link";
import { getPosts } from "./get-posts";

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="font-mono text-sm text-zinc-500">Posts coming soon.</div>
    );
  }

  return (
    <ul className="text-sm">
      {posts.map((post) => {
        const year = new Date(post.date).getFullYear();
        return (
          <li key={post.id}>
            <Link
              href={`/${year}/${post.id}`}
              className="flex items-center py-1.5 text-zinc-900 dark:text-zinc-100 hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              <span className="w-12 shrink-0 font-mono text-xs text-zinc-500">
                {year}
              </span>
              <span className="grow">{post.title}</span>
              <span className="font-mono text-xs text-zinc-500">
                {post.viewsFormatted}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
