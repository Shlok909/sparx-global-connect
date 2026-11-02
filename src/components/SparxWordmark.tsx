import "./SparxWordmark.css";
export function SparxWordmark({
  footer = false,
  compact = false,
}: {
  footer?: boolean;
  compact?: boolean;
}) {
  return (
    <img
      className={
        "sparx-logo" +
        (compact ? " sparx-logo--compact" : "") +
        (footer ? " sparx-logo--footer" : "")
      }
      src="/images/identity/sparx-logo.png"
      width={1416}
      height={382}
      alt="SPARX Auto International Pvt. Ltd. — Quality auto parts. Delivered."
    />
  );
}
