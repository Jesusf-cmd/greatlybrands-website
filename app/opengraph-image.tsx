import { ImageResponse } from "next/og";

export const alt = "Greatly Brands — nationwide retail and procurement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0C1E38",
          color: "#ffffff",
          padding: "72px",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 10,
              background: "#16325C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            G
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 28,
                letterSpacing: "0.28em",
                fontWeight: 700,
              }}
            >
              GREATLY
            </div>
            <div
              style={{
                fontSize: 18,
                letterSpacing: "0.42em",
                color: "#8FB4FF",
                fontWeight: 500,
              }}
            >
              BRANDS
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 54,
              lineHeight: 1.1,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Nationwide Retail & Procurement Partner
          </div>
          <div style={{ fontSize: 24, color: "#C9D6E8", maxWidth: 820 }}>
            Consumer products. Multi-channel retail. Supplier relationships
            across the United States.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#6EA0FF", letterSpacing: "0.08em" }}>
          GREATLYBRANDS.COM
        </div>
      </div>
    ),
    { ...size },
  );
}
