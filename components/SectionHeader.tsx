import { Button } from "@/components/Button";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: { href: string; label: string };
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  action,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const copyColor = tone === "dark" ? "text-white/75" : "text-muted";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`font-display text-3xl tracking-tight md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description ? <p className={`text-lg ${copyColor}`}>{description}</p> : null}
      {action ? (
        <div>
          <Button href={action.href} variant={tone === "dark" ? "onDark" : "primary"}>
            {action.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
