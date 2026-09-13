import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkSecondary";

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
    "bg-blue text-white hover:bg-blue-hover border border-blue hover:border-blue-hover",
  secondary:
    "bg-white text-navy border border-navy/20 hover:border-navy hover:bg-paper",
  ghost: "bg-transparent text-navy hover:bg-paper border border-transparent",
  onDark:
    "bg-blue text-white hover:bg-blue-hover border border-blue",
  onDarkSecondary:
    "bg-transparent text-white border border-white/35 hover:border-white hover:bg-white/10",
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
  const classes = `inline-flex min-h-11 items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

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
