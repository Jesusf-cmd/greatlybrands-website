import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop, ScrollProgress } from "@/components/ScrollChrome";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-0 z-[70] -translate-y-full rounded-sm bg-indigo px-4 py-2 text-sm text-white focus:translate-y-4"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
