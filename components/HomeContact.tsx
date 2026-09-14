"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { PhoneLink } from "@/components/PhoneLink";
import { SectionLabel } from "@/components/SectionLabel";
import { SupplierForm } from "@/components/SupplierForm";
import { company } from "@/lib/company";

type Path = "supplier" | "buyer";

export function HomeContact() {
  const [path, setPath] = useState<Path>("supplier");

  return (
    <section id="contact" className="bg-cream py-28">
      <div className="container-site">
        <FadeIn className="mb-16 text-center">
          <div className="flex justify-center">
            <SectionLabel>Get in Touch</SectionLabel>
          </div>
          <h2 className="font-display mb-4 text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-navy">
            Let&apos;s talk about what you need.
          </h2>
          <p className="mx-auto max-w-[48ch] text-sm leading-relaxed text-muted">
            Whether you are a supplier exploring a relationship or a buyer with procurement
            needs, use the inquiry forms below or continue to the dedicated{" "}
            <Link href="/suppliers" className="font-semibold text-indigo underline-offset-4 hover:underline">
              supplier
            </Link>{" "}
            and{" "}
            <Link href="/contact" className="font-semibold text-indigo underline-offset-4 hover:underline">
              contact
            </Link>{" "}
            pages.
          </p>
        </FadeIn>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.5fr]">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft">
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      d="M3 4a1 1 0 011-1h2.5l1.5 3.5L6.5 8a11 11 0 004.5 4.5l1.5-1.5L16 12.5V15a1 1 0 01-1 1C7 16 4 9 4 4"
                      stroke="#4338ca"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 text-xs font-semibold tracking-wide text-warm-muted uppercase">
                    Phone
                  </div>
                  <PhoneLink className="text-sm font-medium text-navy hover:text-indigo">
                    {company.phoneDisplay}
                  </PhoneLink>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft">
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      d="M10 2C7.2 2 5 4.2 5 7c0 4 5 11 5 11s5-7 5-11c0-2.8-2.2-5-5-5z"
                      stroke="#4338ca"
                      strokeWidth="1.5"
                    />
                    <circle cx="10" cy="7" r="1.5" stroke="#4338ca" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 text-xs font-semibold tracking-wide text-warm-muted uppercase">
                    Address
                  </div>
                  <p className="text-sm font-medium whitespace-pre-line text-navy">
                    {company.address.line1} {company.address.line2}
                    {"\n"}
                    {company.address.city}, {company.address.stateCode} {company.address.postalCode}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft">
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20" aria-hidden="true">
                    <rect x="2" y="5" width="16" height="12" rx="1.5" stroke="#4338ca" strokeWidth="1.5" />
                    <path d="M6 5V4a2 2 0 014 0v1" stroke="#4338ca" strokeWidth="1.5" />
                    <path d="M2 10h16" stroke="#4338ca" strokeWidth="1" strokeOpacity="0.4" />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 text-xs font-semibold tracking-wide text-warm-muted uppercase">
                    Entity
                  </div>
                  <p className="text-sm font-medium text-navy">{company.legalName}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-navy p-6">
              <p className="mb-4 text-xs font-semibold tracking-widest text-white/50 uppercase">
                Two paths forward
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo text-xs font-bold text-white">
                    S
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Become a Supplier</div>
                    <div className="mt-0.5 text-xs text-white/40">
                      Tell us about your products and volumes
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">
                    B
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Discuss Purchasing Needs</div>
                    <div className="mt-0.5 text-xs text-white/40">
                      Describe your procurement requirements
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="rounded-3xl border border-[#eae8e3] bg-white p-8 shadow-[0_4px_40px_rgba(15,31,61,0.06)]">
              <div className="mb-6 flex overflow-hidden rounded-xl bg-paper p-1">
                {(
                  [
                    ["supplier", "Become a Supplier"],
                    ["buyer", "Purchasing Inquiry"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setPath(value)}
                    className="flex-1 rounded-lg py-2.5 text-xs font-semibold transition-all duration-200"
                    style={{
                      background: path === value ? "#4338ca" : "transparent",
                      color: path === value ? "white" : "#8a909c",
                      boxShadow: path === value ? "0 2px 8px rgba(67,56,202,0.3)" : "none",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {path === "supplier" ? (
                <SupplierForm />
              ) : (
                <ContactForm defaultReason="Commercial Purchasing" />
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
