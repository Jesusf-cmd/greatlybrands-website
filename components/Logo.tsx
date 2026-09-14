import Link from "next/link";
import { logo } from "@/lib/company";

type LogoProps = {
  variant?: "navy" | "white";
  href?: string | null;
  className?: string;
};

export function Logo({ variant = "navy", href = "/", className = "" }: LogoProps) {
  const onDark = variant === "white";
  const inner = (
    <span
      className={
        onDark
          ? "relative isolate inline-flex items-center gap-2 rounded-md bg-white px-2 py-1 shadow-[0_0_0_1px_rgba(15,31,61,0.06)] sm:px-2.5"
          : "relative isolate inline-flex items-center gap-2"
      }
    >
      {/* Approved Precision G: hard mask + lighting, not the original Canva raster. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.markSrc}
        alt=""
        width={376}
        height={375}
        className="h-8 w-8 shrink-0 [filter:drop-shadow(0.75px_1px_0_#070B22)_drop-shadow(1.5px_2.5px_1.5px_rgba(8,14,40,0.38))] sm:h-9 sm:w-9"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.wordmarkSrc}
        alt="Greatly Brands"
        width={850}
        height={220}
        className="h-6 w-auto max-w-[7.25rem] shrink-0 sm:h-7 sm:max-w-[8.5rem]"
      />
    </span>
  );
  const classes = `inline-flex shrink-0 items-center rounded-sm ${className}`;
  return href ? (
    <Link href={href} className={classes} aria-label="Greatly Brands home">
      {inner}
    </Link>
  ) : (
    <span className={classes}>{inner}</span>
  );
}
