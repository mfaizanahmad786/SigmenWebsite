import { cn } from "@/lib/utils";

/**
 * Inline SVG rather than emoji flags: Windows renders regional-indicator
 * pairs as plain letters ("PK"), so emoji would break for a large share
 * of visitors.
 */
type FlagIconProps = {
  country: "PK" | "US";
  className?: string;
};

const US_STRIPES = [0, 2, 4, 6, 8, 10, 12];
const US_STAR_ROWS = [1.3, 3.5, 5.7, 7.9];

export function FlagIcon({ country, className }: FlagIconProps) {
  const classes = cn("h-[0.85em] w-auto shrink-0 rounded-[1px]", className);

  if (country === "PK") {
    return (
      <svg
        viewBox="0 0 30 20"
        className={classes}
        role="img"
        aria-label="Pakistan"
      >
        <rect width="30" height="20" fill="#01411e" />
        <rect width="7.5" height="20" fill="#fff" />
        <circle cx="19.4" cy="10" r="5.2" fill="#fff" />
        <circle cx="21.3" cy="8.4" r="5.2" fill="#01411e" />
        <path
          d="M22.9 7.3 23.4 9l1.7.1-1.3 1.1.4 1.7-1.4-1-1.4.9.5-1.6-1.3-1.1 1.7-.1z"
          fill="#fff"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 30 20"
      className={classes}
      role="img"
      aria-label="United States"
    >
      <rect width="30" height="20" fill="#fff" />
      {US_STRIPES.map((i) => (
        <rect
          key={i}
          y={(i * 20) / 13}
          width="30"
          height={20 / 13}
          fill="#b22234"
        />
      ))}
      <rect width="12.6" height={(20 / 13) * 7} fill="#3c3b6e" />
      {US_STAR_ROWS.map((y) =>
        [1.3, 3.4, 5.5, 7.6, 9.7, 11.3].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.52" fill="#fff" />
        )),
      )}
    </svg>
  );
}
