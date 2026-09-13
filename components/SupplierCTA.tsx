import { Button } from "@/components/Button";
import { PhoneLink } from "@/components/PhoneLink";
import { company } from "@/lib/company";

export function SupplierCTA({
  tone = "navy",
}: {
  tone?: "navy" | "paper";
}) {
  const dark = tone === "navy";

  return (
    <section className={dark ? "bg-navy text-white" : "bg-paper"}>
      <div className="container-site grid items-center gap-8 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-8">
          <p className="eyebrow">{dark ? "Suppliers" : "Partner with Greatly Brands"}</p>
          <h2 className={`mt-4 text-3xl font-semibold tracking-tight md:text-4xl ${dark ? "text-white" : "text-navy"}`}>
            Interested in supplying Greatly Brands?
          </h2>
          <p className={`mt-4 max-w-2xl text-lg ${dark ? "text-white/75" : "text-muted"}`}>
            We welcome conversations with manufacturers, brands, distributors and
            wholesale suppliers seeking professional retail relationships.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:col-span-4 md:items-end">
          <Button href="/suppliers" variant={dark ? "onDark" : "primary"}>
            Become a Supplier
          </Button>
          <p className={`text-sm ${dark ? "text-white/75" : "text-muted"}`}>
            Call{" "}
            <PhoneLink className={dark ? "font-semibold text-white hover:underline" : "font-semibold text-blue hover:underline"}>
              {company.phoneDisplay}
            </PhoneLink>
          </p>
        </div>
      </div>
    </section>
  );
}
