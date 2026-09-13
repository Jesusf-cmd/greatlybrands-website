import Link from "next/link";
import { logo } from "@/lib/company";

type LogoProps = {
  variant?: "navy" | "white";
  href?: string | null;
  className?: string;
};

function Mark({ variant }: { variant: "navy" | "white" }) {
  const box = variant === "white" ? "#FFFFFF" : "#0C1E38";
  const letter = variant === "white" ? "#0C1E38" : "#FFFFFF";
  const accent = "#2B6BE4";

  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 shrink-0 md:h-11 md:w-11"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="8" fill={box} />
      <path
        d="M47.5 21.2C43.2 15.2 37.4 12.2 31.8 12.2C20.8 12.2 12.8 20.8 12.8 32C12.8 43.2 20.8 51.8 31.8 51.8C40.6 51.8 47.4 46.1 49.6 38.2"
        fill="none"
        stroke={letter}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <rect x="30" y="28.4" width="20.5" height="7.2" rx="1.2" fill={letter} />
      <rect x="43.4" y="28.4" width="7.1" height="16.4" rx="1.2" fill={accent} />
    </svg>
  );
}

export function Logo({ variant = "navy", href = "/", className = "" }: LogoProps) {
  const word = variant === "white" ? "text-white" : "text-navy";
  const sub = variant === "white" ? "text-blue-soft" : "text-blue";

  const inner = logo.useImageAsset ? (
    // Production logo drop-in. Keep width/height attributes to limit layout shift.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.src}
      alt="Greatly Brands"
      width={logo.width}
      height={logo.height}
      className="h-10 w-auto"
    />
  ) : (
    <>
      <Mark variant={variant} />
      <span className="leading-none">
        <span
          className={`block font-bold tracking-[0.22em] text-[15px] md:text-[17px] ${word}`}
        >
          GREATLY
        </span>
        <span
          className={`mt-1 block font-semibold tracking-[0.38em] text-[10px] md:text-[11px] ${sub}`}
        >
          BRANDS
        </span>
      </span>
    </>
  );

  const classes = `inline-flex items-center gap-3 ${className}`.trim();

  if (!href) {
    return (
      <span className={classes} role="img" aria-label="Greatly Brands">
        {inner}
      </span>
    );
  }

  return (
    <Link href={href} className={`${classes} rounded-sm`}>
      {inner}
    </Link>
  );
}
