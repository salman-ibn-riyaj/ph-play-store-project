import { useEffect, useState } from "react";

const glitchKeyframes = `
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;800&display=swap');

@keyframes glitch1 {
  0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
  25% { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
  50% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 0); }
  75% { clip-path: inset(80% 0 5% 0); transform: translate(2px, 0); }
}

@keyframes glitch2 {
  0%, 100% { clip-path: inset(50% 0 30% 0); transform: translate(4px, 0); }
  33% { clip-path: inset(10% 0 80% 0); transform: translate(-4px, 0); }
  66% { clip-path: inset(70% 0 10% 0); transform: translate(2px, 0); }
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55% { opacity: 0.4; }
}

@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

export default function NotFound() {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{glitchKeyframes}</style>
      <div style={{
        minHeight: "100vh",
        background: "#080810",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Mono', monospace",
        color: "#e8e8f0",
        overflow: "hidden",
        position: "relative",
      }}>

        {/* Grid background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            linear-gradient(rgba(120,80,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,80,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }} />

        {/* Scanline */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(120,80,255,0.6), transparent)",
          animation: "scanline 4s linear infinite",
          pointerEvents: "none",
        }} />

        {/* Glow blob */}
        <div style={{
          position: "absolute",
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,80,255,0.15) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }} />

        {/* Main content */}
        <div style={{
          textAlign: "center",
          animation: "fadeUp 0.8s ease both",
          position: "relative",
          zIndex: 1,
          padding: "0 24px",
        }}>

          {/* 404 glitch text */}
          <div style={{ position: "relative", display: "inline-block", animation: "float 4s ease-in-out infinite" }}>
            <div style={{
              fontSize: "clamp(100px, 20vw, 180px)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              lineHeight: 1,
              color: "#e8e8f0",
              letterSpacing: "-4px",
              position: "relative",
              animation: "flicker 6s infinite",
            }}>
              404
              {/* Glitch layer 1 */}
              {glitching && <div style={{
                position: "absolute", inset: 0,
                color: "#7b50ff",
                animation: "glitch1 0.3s steps(1) infinite",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "inherit",
              }}>404</div>}
              {/* Glitch layer 2 */}
              {glitching && <div style={{
                position: "absolute", inset: 0,
                color: "#ff3c6e",
                animation: "glitch2 0.3s steps(1) infinite",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "inherit",
              }}>404</div>}
            </div>
          </div>

          {/* Divider */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            margin: "16px auto 28px",
            maxWidth: 360,
          }}>
            <div style={{ flex: 1, height: 1, background: "rgba(120,80,255,0.4)" }} />
            <span style={{ color: "#7b50ff", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>
              signal lost
            </span>
            <div style={{ flex: 1, height: 1, background: "rgba(120,80,255,0.4)" }} />
          </div>

          {/* Message */}
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 13,
            color: "rgba(232,232,240,0.5)",
            letterSpacing: 1,
            marginBottom: 40,
            lineHeight: 1.8,
          }}>
            The page you're looking for<br />
            doesn't exist in this dimension.
          </p>

          {/* Terminal line */}
          <div style={{
            background: "rgba(120,80,255,0.08)",
            border: "1px solid rgba(120,80,255,0.25)",
            borderRadius: 6,
            padding: "10px 20px",
            display: "inline-block",
            marginBottom: 36,
            fontSize: 12,
            color: "#7b50ff",
            letterSpacing: 1,
          }}>
            <span>~/error </span>
            <span style={{ color: "#ff3c6e" }}>»</span>
            <span> page_not_found</span>
            <span style={{ animation: "blink 1s infinite", marginLeft: 4 }}>█</span>
          </div>

          {/* Back button */}
          <div>
            <button
              onClick={() => window.history.back()}
              style={{
                background: "transparent",
                border: "1px solid rgba(120,80,255,0.6)",
                color: "#e8e8f0",
                padding: "12px 32px",
                borderRadius: 4,
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(120,80,255,0.15)";
                e.currentTarget.style.borderColor = "#7b50ff";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(120,80,255,0.6)";
                e.currentTarget.style.color = "#e8e8f0";
              }}
            >
              ← Go Homepage
            </button>
          </div>
        </div>
      </div>
    </>
  );
}