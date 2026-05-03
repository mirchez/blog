import Image from "next/image";
import Link from "next/link";
import { getPosts } from "./get-posts";

export const revalidate = 300;

const TAGLINE =
  "21 y/o AI Engineer shipping production-ready software. Currently @ Brightlight Health, building Talkeo.";

const TIMELINE: string[] = [
  "Started programming in 2024 at 19, pushed by my best friend José",
  "Built Telos, an AI website builder, with E2B + Inngest + OpenAI in 2025",
  "Hired remote at Brightlight Health (Canadian healthcare SaaS) in August 2025",
  "Shipped EMR features in production: multi-timezone scheduling, Stripe billing, PDF forms with LLM autofill, Jitsi video with AI transcription, Azure → AWS migration",
  "Co-founded Talkeo, an AI voice tutor for English learners, in 2026",
];

const LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/mirchez" },
  { label: "X/Twitter", href: "https://x.com/mirchezz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mirchez/" },
  { label: "Email", href: "mailto:mmirandasanchez16@gmail.com" },
];

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-16">
      <Image
        src="/profile/miguel_profile.jpg"
        alt="Miguel Miranda"
        width={64}
        height={64}
        priority
        className="mb-8 rounded-full object-cover"
      />
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Miguel Miranda
      </h1>
      <p className="mt-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {TAGLINE}
      </p>

      <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <ul className="mt-12 space-y-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        {TIMELINE.map((item, i) => (
          <li key={i} className="flex">
            <span className="mr-3 mt-1 text-zinc-500 select-none">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {posts.length > 0 && (
        <>
          <h2 className="mt-20 mb-6 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Posts
          </h2>
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
        </>
      )}
    </div>
  );
}

function getYear(date: string): number {
  return new Date(date).getFullYear();
}
