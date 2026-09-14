export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/retail", label: "Retail" },
  { href: "/government", label: "Government" },
  { href: "/contact", label: "Contact" },
];

export const headerNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/retail", label: "Retail" },
  { href: "/government", label: "Government" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/products", label: "Products" },
  { href: "/retail", label: "Retail" },
  { href: "/government", label: "Government" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export const footerColumns = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/suppliers", label: "Suppliers" },
    { href: "/retail", label: "Retail" },
  ],
  Procurement: [
    { href: "/government", label: "Government" },
    { href: "/suppliers", label: "Become a Supplier" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
} as const;

export const supplierCta = {
  href: "/suppliers",
  label: "Become a Supplier",
} as const;

export const purchasingCta = {
  href: "/contact",
  label: "Discuss Purchasing",
} as const;
