import redis from "@/app/redis";

const BOT_REGEX = /bot|crawler|spider|crawl|preview|fetch|monitor|googleother/i;

export async function POST(req: Request) {
  if (!redis) {
    return new Response(null, { status: 200 });
  }

  const ua = req.headers.get("user-agent") ?? "";
  if (BOT_REGEX.test(ua)) {
    return new Response(null, { status: 200 });
  }

  let id: string;
  try {
    const body = (await req.json()) as { id?: unknown };
    if (typeof body.id !== "string" || body.id.length === 0 || body.id.length > 100) {
      return new Response("bad id", { status: 400 });
    }
    id = body.id;
  } catch {
    return new Response("invalid json", { status: 400 });
  }

  try {
    await redis.hincrby("views", id, 1);
  } catch {
    // Don't fail the request if Redis is down — best-effort.
  }

  return new Response(null, { status: 200 });
}
