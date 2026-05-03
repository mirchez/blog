import { getPosts } from "@/app/get-posts";
import { ViewCounter } from "./view-counter";

export async function PostMeta({ id }: { id: string }) {
  const posts = await getPosts();
  const post = posts.find((p) => p.id === id);
  if (!post) return null;

  return (
    <div className="-mt-4 mb-10 flex items-center justify-between font-mono text-xs text-zinc-500">
      <span>@mirchez · {formatDate(post.date)}</span>
      <span>{post.viewsFormatted} views</span>
      <ViewCounter id={id} />
    </div>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
