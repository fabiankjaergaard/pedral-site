import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const imageData = readFileSync(join(process.cwd(), "public/pedral-symbol.png"));
  const base64 = `data:image/png;base64,${imageData.toString("base64")}`;

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
        <img
          src={base64}
          width={22}
          height={22}
          style={{
            filter:
              "invert(1) sepia(1) saturate(3) hue-rotate(5deg) brightness(0.85)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
