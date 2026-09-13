type CapabilityCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export function CapabilityCard({ title, description, icon }: CapabilityCardProps) {
  return (
    <article className="h-full rounded-sm border border-line bg-white p-6 shadow-[0_8px_24px_rgba(12,30,56,0.04)]">
      {icon ? <div className="mb-4 text-blue">{icon}</div> : null}
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
