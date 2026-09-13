import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="border-b border-line bg-cream pt-28">
      <div className="container-site py-12 md:py-16">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? <p className="eyebrow mt-6">{eyebrow}</p> : null}
        <h1 className="font-display mt-4 max-w-4xl text-4xl tracking-tight text-navy md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-muted">{description}</p>
      </div>
    </section>
  );
}
