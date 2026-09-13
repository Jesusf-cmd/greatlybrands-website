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
          ? "inline-flex items-center rounded-md bg-white px-2.5 py-1 shadow-[0_0_0_1px_rgba(15,31,61,0.06)]"
          : "inline-flex items-center"
      }
    >
      {/* Approved color Precision G on a light field. Do not invert or replace the artwork. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt="Greatly Brands"
        width={logo.width}
        height={logo.height}
        className="h-8 w-auto max-w-[10.5rem] shrink-0 md:h-9 md:max-w-[12rem]"
      />
    </span>
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
