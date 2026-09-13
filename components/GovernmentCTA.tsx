import { Button } from "@/components/Button";

export function GovernmentCTA() {
  return (
    <section className="h-full border border-line bg-white p-8 shadow-[0_8px_24px_rgba(12,30,56,0.04)] md:p-10">
      <p className="eyebrow">Public sector</p>
      <h2 className="mt-3 text-2xl font-semibold text-navy md:text-3xl">
        Government purchasing inquiry
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        Greatly Brands evaluates government and institutional procurement
        opportunities involving consumer goods, household products, supplies, and
        general merchandise. Specific registrations, certifications and contract
        credentials will be published only when verified.
      </p>
      <div className="mt-6">
        <Button href="/contact?reason=Government%20Purchasing">
          Government Purchasing Inquiry
        </Button>
      </div>
    </section>
  );
}
