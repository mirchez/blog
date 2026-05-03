import { Redis } from "@upstash/redis";

const redis =
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    ? Redis.fromEnv()
    : null;

export default redis;
