export function SectionLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <div className={`h-px w-5 ${light ? "bg-indigo-soft" : "bg-indigo"}`} />
      <span
        className={`text-xs font-semibold tracking-widest uppercase ${
          light ? "text-indigo-soft" : "text-indigo"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
