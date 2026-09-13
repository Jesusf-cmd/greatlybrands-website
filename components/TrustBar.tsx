const items = [
  {
    title: "Nationwide Reach",
    copy: "Consumer products sourced for customers throughout the United States.",
  },
  {
    title: "Multi-Channel Retail",
    copy: "Products may be offered through established U.S. online retail channels.",
  },
  {
    title: "Broad Product Categories",
    copy: "Purchasing across household, personal care, and general merchandise.",
  },
  {
    title: "Commercial & Government",
    copy: "Prepared to evaluate eligible commercial and public-sector purchasing needs.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white" aria-label="Capabilities">
      <div className="container-site grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="lg:border-l lg:border-line lg:pl-8 first:lg:border-l-0 first:lg:pl-0">
            <p className="text-sm font-semibold tracking-wide text-navy uppercase">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
