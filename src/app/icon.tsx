import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/*
          The A mark:
          - Outer: triangle with two pointed feet and a V notch
          - Inner: a tall diamond whose bottom tip IS the V notch point
          Both share the same bottom-centre point (50, 63)
        */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="
            M 50,0  L 97,100 L 67,100 L 50,63 L 33,100 L 3,100  Z
            M 50,22 L 64,50  L 50,63  L 36,50 Z
          "
          fill="#c9a84c"
        />
      </svg>
    ),
    { ...size }
  );
}
