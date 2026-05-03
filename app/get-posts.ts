import postsData from "./posts.json";

export type Post = {
  id: string;
  date: string;
  title: string;
  views: number;
  viewsFormatted: string;
};

export async function getPosts(): Promise<Post[]> {
  const posts: Post[] = postsData.posts
    .map((post) => ({
      ...post,
      views: 0,
      viewsFormatted: "—",
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}
