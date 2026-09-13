import Link from "next/link";
import { logo } from "@/lib/company";

type LogoProps = {
  variant?: "navy" | "white";
  href?: string | null;
  className?: string;
};

export function Logo({ variant = "navy", href = "/", className = "" }: LogoProps) {
  const inner = (
    // Preserve the approved Canva artwork and its outlined wordmark.
    // On dark chrome the Figma reference inverts this same file; do not swap in a new mark.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.src}
      alt="Greatly Brands"
      width={logo.width}
      height={logo.height}
      className={`h-10 w-auto shrink-0 md:h-11 ${
        variant === "white" ? "brightness-0 invert" : ""
      }`}
    />
  );
  const classes = `inline-flex shrink-0 items-center rounded-sm ${className}`;
  return href ? (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
