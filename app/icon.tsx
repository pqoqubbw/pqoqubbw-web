import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: "#7365BC",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
        }}
      >
        {Array.from({ length: 36 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "16.666%",
              height: "16.666%",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          />
        ))}
      </div>
    ),
    {
      ...size,
    },
  );
}
