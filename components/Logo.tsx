import Link from "next/link";
import { logo } from "@/lib/company";
type LogoProps = { variant?: "navy" | "white"; href?: string | null; className?: string };
export function Logo({ variant = "navy", href = "/", className = "" }: LogoProps) {
  const inner = (
    // Preserve the approved Canva artwork and its outlined wordmark.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={variant === "white" ? logo.darkSrc : logo.src} alt="Greatly Brands" width={logo.width} height={logo.height} className="h-auto w-40 shrink-0 md:w-48" />
  );
  const classes = `inline-flex shrink-0 items-center rounded-sm ${className}`;
  return href ? <Link href={href} className={classes}>{inner}</Link> : <span className={classes}>{inner}</span>;
}
