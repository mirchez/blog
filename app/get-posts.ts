import postsData from "./posts.json";
import redis from "./redis";

const formatter = new Intl.NumberFormat("en-US");

export type Post = {
  id: string;
  date: string;
  title: string;
  views: number;
  viewsFormatted: string;
};

type ViewsHash = Record<string, string | number>;

export async function getPosts(): Promise<Post[]> {
  const allViews: ViewsHash | null = redis
    ? await redis.hgetall<ViewsHash>("views").catch(() => null)
    : null;

  const posts: Post[] = postsData.posts
    .map((post) => {
      const raw = allViews?.[post.id];
      const views = typeof raw === "number" ? raw : Number(raw ?? 0);
      return {
        ...post,
        views,
        viewsFormatted: views > 0 ? formatter.format(views) : "—",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}
