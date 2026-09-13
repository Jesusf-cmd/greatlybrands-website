import { Button } from "@/components/Button";

export function SupplierCTA({
  tone = "navy",
}: {
  tone?: "navy" | "paper";
}) {
  const dark = tone === "navy";

  return (
    <section className={dark ? "bg-navy text-white" : "bg-paper"}>
      <div className="container-site grid items-center gap-8 py-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="eyebrow">{dark ? "Suppliers" : "Partner with Greatly Brands"}</p>
          <h2 className={`mt-4 text-3xl font-semibold tracking-tight md:text-4xl ${dark ? "text-white" : "text-navy"}`}>
            Discuss a supplier relationship
          </h2>
          <p className={`mt-4 max-w-2xl text-lg ${dark ? "text-white/75" : "text-muted"}`}>
            Manufacturers, brand owners, distributors, and wholesalers can start a
            conversation about product categories, distribution rights, and retail
            channel fit.
          </p>
        </div>
        <div className="md:col-span-4 md:justify-self-end">
          <Button href="/suppliers" variant={dark ? "onDark" : "primary"}>
            Become a Supplier
          </Button>
        </div>
      </div>
    </section>
  );
}
