import { ImageResponse } from "next/og"

export const alt = "Ingrid Melo — Product Designer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1E1A4F",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* orbs */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -160,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(83,74,183,0.55) 0%, rgba(30,26,79,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -140,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(188,200,245,0.22) 0%, rgba(30,26,79,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#AFA9EC",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(188,200,245,0.75)",
            }}
          >
            Product Designer · Rio de Janeiro
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#FFFFFF",
            }}
          >
            Ingrid Melo
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 34,
              lineHeight: 1.35,
              color: "rgba(214,210,245,0.92)",
              maxWidth: 860,
            }}
          >
            Produtos B2B complexos de supply chain — com IA no processo e entrega em código.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Agentes de IA", "Design System", "UX Research", "Claude Code"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 22,
                color: "rgba(214,210,245,0.9)",
                border: "1px solid rgba(175,169,236,0.4)",
                borderRadius: 999,
                padding: "10px 22px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
