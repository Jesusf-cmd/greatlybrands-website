export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Product Categories" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/retail", label: "Retail" },
  { href: "/government", label: "Government" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/products", label: "Product Categories" },
  { href: "/retail", label: "Retail" },
  { href: "/government", label: "Government" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export const supplierCta = {
  href: "/suppliers",
  label: "Become a Supplier",
} as const;
