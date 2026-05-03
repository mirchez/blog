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
      {posts.map((post, i) => {
        const year = getYear(post.date);
        const prevYear = posts[i - 1] ? getYear(posts[i - 1].date) : null;
        const firstOfYear = prevYear !== year;

        return (
          <li key={post.id} className="group">
            <Link
              href={`/${year}/${post.id}`}
              className="flex items-center py-2"
            >
              <span className="w-12 shrink-0 self-start font-mono text-xs text-zinc-500 mt-0.5">
                {firstOfYear ? year : ""}
              </span>
              <span className="grow text-zinc-900 dark:text-zinc-100">
                <span className="rounded-md px-1.5 py-0.5 -mx-1.5 transition-colors group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800">
                  {post.title}
                </span>
              </span>
              <span className="font-mono text-xs text-zinc-500 mt-0.5">
                {post.viewsFormatted}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function getYear(date: string): number {
  return new Date(date).getFullYear();
}
