export const SITE_URL = "https://greatlybrands.com";

export const company = {
  name: "Greatly Brands",
  legalEntity: "Greatly LLC",
  legalName: "Greatly LLC DBA Greatly Brands",
  dba: "Greatly Brands",
  domain: "GreatlyBrands.com",
  url: SITE_URL,
  phoneDisplay: "918-321-0104",
  phoneHref: "tel:+19183210104",
  phoneE164: "+19183210104",
  address: {
    line1: "3801 S. Peoria Ave",
    line2: "Suite B 1024",
    city: "Tulsa",
    state: "Oklahoma",
    stateCode: "OK",
    postalCode: "74105",
    country: "United States",
    countryCode: "US",
  },
  serviceArea: "United States",
  serviceAreaLabel: "United States — Nationwide",
} as const;

export const marketplaceChannels = [
  "Amazon",
  "Walmart.com",
] as const;

export const contactReasons = [
  "Brand / Manufacturer",
  "Distributor / Wholesaler",
  "Government Purchasing",
  "Commercial Purchasing",
  "General Business Inquiry",
  "Other",
] as const;

export const supplierRelationships = [
  "Manufacturer",
  "Brand owner",
  "Master distributor",
  "Authorized distributor",
  "Wholesaler",
  "Importer",
  "Established product supplier",
  "Other",
] as const;

export const nationwideRightsOptions = [
  "Yes",
  "No",
  "Regional / limited",
  "Unsure",
] as const;

/**
 * Verified government identifiers only. Keep null until documented.
 * Do not invent UEI, CAGE, SAM, GSA, or socioeconomic values.
 */
export const governmentCredentials = {
  uei: null as string | null,
  cageCode: null as string | null,
  samRegistered: null as boolean | null,
  gsaSchedule: null as string | null,
  socioeconomicDesignations: [] as string[],
};

export const logo = {
  /**
   * Set true and place a production SVG/PNG at `src` when a final logo file is available.
   * The inline Logo component is used until then.
   */
  useImageAsset: false,
  src: "/logo/greatly-brands.svg",
  width: 220,
  height: 48,
};

export function formatAddress(variant: "full" | "stacked" | "footer" = "stacked") {
  const { line1, line2, city, state, stateCode, postalCode } = company.address;
  if (variant === "full") {
    return `${line1}, ${line2}, ${city}, ${state} ${postalCode}`;
  }
  if (variant === "footer") {
    return `${line1}\n${line2}\n${city}, ${stateCode} ${postalCode}`;
  }
  return `${line1}\n${line2}\n${city}, ${state} ${postalCode}`;
}

export function hasVerifiedGovernmentCredentials() {
  return Boolean(
    governmentCredentials.uei ||
      governmentCredentials.cageCode ||
      governmentCredentials.samRegistered ||
      governmentCredentials.gsaSchedule ||
      governmentCredentials.socioeconomicDesignations.length,
  );
}
