import { ImageResponse } from "next/og";

export const alt = "Miguel Miranda — AI engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#666", letterSpacing: -0.3 }}>
          mirchez.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Miguel Miranda
          </div>
          <div
            style={{
              fontSize: 40,
              color: "#a1a1aa",
              marginTop: 28,
              letterSpacing: -0.5,
            }}
          >
            AI engineer. I ship production-ready software.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
