import Link from "next/link";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "onDark"
  | "onDarkSecondary"
  | "pill"
  | "pillBright"
  | "pillOutline";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-indigo text-white hover:opacity-90 border border-indigo",
  secondary:
    "rounded-full bg-white text-navy border border-navy/20 hover:border-navy hover:bg-paper",
  ghost: "rounded-full bg-transparent text-navy hover:bg-paper border border-transparent",
  onDark:
    "rounded-full bg-indigo text-white hover:opacity-90 border border-indigo hover:shadow-[0_0_32px_rgba(67,56,202,0.5)]",
  onDarkSecondary:
    "rounded-full bg-transparent text-white border border-white/20 hover:bg-white/10",
  pill: "rounded-full bg-indigo text-white hover:opacity-90 hover:shadow-[0_0_32px_rgba(67,56,202,0.5)] border border-transparent",
  pillBright:
    "rounded-full bg-blue text-white hover:opacity-90 border border-transparent",
  pillOutline:
    "rounded-full bg-transparent text-white border border-white/25 hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={`transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
