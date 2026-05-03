"use client";

import { useEffect, useRef } from "react";

export function ViewCounter({ id }: { id: string }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    fetch("/api/incr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).catch(() => {
      // Silent fail — view tracking is best-effort.
    });
  }, [id]);

  return null;
}
