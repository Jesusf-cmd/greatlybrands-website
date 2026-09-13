import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-cream pt-28 pb-24">
      <div className="container-site max-w-2xl">
        <p className="eyebrow">404</p>
        <h1 className="font-display mt-4 text-4xl text-navy">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you requested is not available. Return to the Greatly Brands
          homepage or start a supplier conversation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Home</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
