"use client";

import { trackEvent } from "@/lib/analytics";
import { company } from "@/lib/company";

type PhoneLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function PhoneLink({ className = "", children }: PhoneLinkProps) {
  return (
    <a
      href={company.phoneHref}
      className={className}
      onClick={() => trackEvent("phone_click", { location: "phone_link" })}
    >
      {children ?? company.phoneDisplay}
    </a>
  );
}
