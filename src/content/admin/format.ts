/** Compact USD, e.g. $9.66M / $720K. */
export function fmtUSD(n: number): string {
  if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(2) + "M";
  if (n >= 1_000) return "$" + Math.round(n / 1_000) + "K";
  return "$" + n.toLocaleString("en-US");
}

/** Full USD, e.g. $1,240,000. */
export function fmtUSDFull(n: number): string {
  return "$" + n.toLocaleString("en-US");
}
