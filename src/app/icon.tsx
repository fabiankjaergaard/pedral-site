import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#0a1214",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/*
            Three subpaths with evenodd:
            1. Outer A shape with V-notch feet
            2. Diamond cutout (upper centre)
            3. Inner leg hollow (below diamond to V-notch)
          */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="
              M 50,2 L 88,93 L 64,93 L 50,74 L 36,93 L 12,93 Z
              M 50,27 L 64,50 L 50,63 L 36,50 Z
              M 50,63 L 64,93 L 50,74 L 36,93 Z
            "
            fill="#c9a84c"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
