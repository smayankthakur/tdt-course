export default function MoonPhases({ className }: { className?: string }) {
  const phases = [1, 0.8, 0.55, 0.3, 0.1, 0.3, 0.55, 0.8, 1];
  return (
    <div className={`flex items-center justify-center gap-3 sm:gap-5 ${className ?? ""}`} aria-hidden="true">
      {phases.map((p, i) => (
        <span
          key={i}
          className="relative inline-block h-3 w-3 rounded-full sm:h-3.5 sm:w-3.5"
          style={{ background: "var(--gold)", opacity: 0.25 + p * 0.55 }}
        >
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: "var(--bg-void)",
              clipPath:
                i < 4
                  ? `inset(0 ${p * 100}% 0 0)`
                  : i > 4
                  ? `inset(0 0 0 ${p * 100}%)`
                  : "inset(0 0 0 0)",
            }}
          />
        </span>
      ))}
    </div>
  );
}
