import "./SparxWordmark.css";

export function SparxWordmark({
  footer = false,
  compact = false,
}: {
  footer?: boolean;
  compact?: boolean;
}) {
  return (
    <span
      className={`sparx-wordmark landing-wordmark${footer ? " landing-wordmark--footer" : ""}${compact ? " sparx-wordmark--compact" : ""}`}
      role="img"
      aria-label="SPARX — Driving Trust, Powering Global Trade"
    >
      <span className="sparx-wordmark-text landing-wordmark-text">
        SP<span>A</span>RX
      </span>
      {footer && <span className="landing-wordmark-company">AUTO INTERNATIONAL PVT. LTD.</span>}
      <span className="sparx-wordmark-tagline landing-wordmark-tagline">
        Driving Trust, Powering Global Trade
      </span>
    </span>
  );
}
