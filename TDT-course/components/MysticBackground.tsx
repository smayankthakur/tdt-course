const stars = [
  { top: "8%", left: "12%", size: 3, delay: "0s" },
  { top: "15%", left: "82%", size: 2, delay: "0.6s" },
  { top: "22%", left: "45%", size: 2, delay: "1.2s" },
  { top: "30%", left: "68%", size: 3, delay: "0.3s" },
  { top: "38%", left: "5%", size: 2, delay: "1.8s" },
  { top: "48%", left: "90%", size: 2, delay: "0.9s" },
  { top: "55%", left: "25%", size: 3, delay: "2.1s" },
  { top: "63%", left: "58%", size: 2, delay: "1.5s" },
  { top: "70%", left: "10%", size: 2, delay: "0.4s" },
  { top: "78%", left: "78%", size: 3, delay: "1.1s" },
  { top: "85%", left: "35%", size: 2, delay: "2.4s" },
  { top: "12%", left: "60%", size: 2, delay: "1.9s" },
  { top: "92%", left: "88%", size: 2, delay: "0.7s" },
  { top: "5%", left: "35%", size: 2, delay: "1.4s" },
  { top: "60%", left: "95%", size: 2, delay: "2.6s" },
];

const embers = [
  { left: "8%", size: 4, duration: "14s", delay: "0s", drift: "24px" },
  { left: "22%", size: 3, duration: "18s", delay: "3s", drift: "-30px" },
  { left: "38%", size: 5, duration: "16s", delay: "6s", drift: "18px" },
  { left: "55%", size: 3, duration: "20s", delay: "1.5s", drift: "-20px" },
  { left: "70%", size: 4, duration: "15s", delay: "4.5s", drift: "26px" },
  { left: "85%", size: 3, duration: "19s", delay: "8s", drift: "-16px" },
  { left: "95%", size: 4, duration: "17s", delay: "2s", drift: "22px" },
];

export default function MysticBackground() {
  return (
    <div className="mystic-bg" aria-hidden="true">
      {/* soft moon glow, upper right */}
      <div
        className="mystic-moon"
        style={{
          top: "-8%",
          right: "-6%",
          width: "38vw",
          height: "38vw",
          maxWidth: "480px",
          maxHeight: "480px",
          background:
            "radial-gradient(circle, rgba(212,175,106,0.28) 0%, rgba(212,175,106,0.08) 45%, transparent 72%)",
        }}
      />
      {/* violet glow, lower left */}
      <div
        className="mystic-moon"
        style={{
          bottom: "-10%",
          left: "-8%",
          width: "44vw",
          height: "44vw",
          maxWidth: "560px",
          maxHeight: "560px",
          animationDelay: "2s",
          background:
            "radial-gradient(circle, rgba(109,40,217,0.3) 0%, rgba(109,40,217,0.08) 45%, transparent 72%)",
        }}
      />

      {/* drifting fog */}
      <div
        className="mystic-fog"
        style={{
          top: "20%",
          left: "-10%",
          width: "60vw",
          height: "40vh",
          background: "rgba(167,139,250,0.06)",
        }}
      />
      <div
        className="mystic-fog"
        style={{
          bottom: "5%",
          right: "-10%",
          width: "55vw",
          height: "35vh",
          animationDelay: "8s",
          animationDuration: "26s",
          background: "rgba(212,175,106,0.05)",
        }}
      />

      {/* twinkling stars */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="mystic-star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* rising embers */}
      {embers.map((e, i) => (
        <span
          key={i}
          className="mystic-ember"
          style={
            {
              left: e.left,
              width: e.size,
              height: e.size,
              animationDuration: e.duration,
              animationDelay: e.delay,
              "--drift": e.drift,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
