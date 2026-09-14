export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  gridImage: string;
  imageAlt: string;
  wide?: boolean;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "household-essentials",
    name: "Household Essentials",
    summary:
      "Paper goods, cleaning supplies, household consumables, and everyday essentials.",
    image: "/images/category-household.webp",
    gridImage: "/images/redesign/category-household.jpg",
    wide: true,
    imageAlt:
      "Cleaning and household supply bottles arranged on a counter, representing everyday household essentials.",
  },
  {
    slug: "health-personal-care",
    name: "Health & Personal Care",
    summary:
      "Personal-care products, hygiene products, wellness-related consumer goods, and daily necessities.",
    image: "/images/category-health.webp",
    gridImage: "/images/redesign/category-health.jpg",
    imageAlt:
      "Personal-care bottles and toiletries on a bathroom shelf, representing health and hygiene merchandise.",
  },
  {
    slug: "beauty-grooming",
    name: "Beauty & Grooming",
    summary: "Beauty, skincare, grooming, and personal-care merchandise.",
    image: "/images/category-beauty.webp",
    gridImage: "/images/redesign/category-beauty.jpg",
    imageAlt:
      "Makeup brushes and beauty tools on a neutral surface, representing beauty and grooming products.",
  },
  {
    slug: "home-kitchen",
    name: "Home & Kitchen",
    summary:
      "Housewares, kitchen accessories, home organization, and general household merchandise.",
    image: "/images/category-home.webp",
    gridImage: "/images/redesign/category-home.jpg",
    imageAlt:
      "Kitchen cookware and utensils on a counter, representing home and kitchen merchandise.",
  },
  {
    slug: "baby-family",
    name: "Baby & Family",
    summary:
      "Family-oriented consumer products and everyday household necessities.",
    image: "/images/category-baby.webp",
    gridImage: "/images/redesign/category-baby.jpg",
    imageAlt:
      "Soft baby toys and family merchandise on a light blanket, representing baby and family products.",
  },
  {
    slug: "office-school",
    name: "Office & School",
    summary:
      "Office products, organizational supplies, and school-related merchandise.",
    image: "/images/category-office.webp",
    gridImage: "/images/redesign/category-office.jpg",
    imageAlt:
      "Notebooks, pens, and desk supplies arranged neatly, representing office and school merchandise.",
  },
  {
    slug: "pet-supplies",
    name: "Pet Supplies",
    summary: "General consumer pet products and accessories.",
    image: "/images/category-pet.webp",
    gridImage: "/images/redesign/category-pet.jpg",
    imageAlt:
      "A household dog resting indoors, representing general consumer pet products and accessories.",
  },
  {
    slug: "seasonal-products",
    name: "Seasonal Products",
    summary: "Seasonal household and consumer merchandise.",
    image: "/images/category-seasonal.webp",
    gridImage: "/images/redesign/category-seasonal.jpg",
    imageAlt:
      "Warm string lights suggesting seasonal household merchandise and holiday consumer products.",
  },
  {
    slug: "general-merchandise",
    name: "General Merchandise",
    summary:
      "Additional consumer categories based upon supplier and market opportunities.",
    image: "/images/category-general.webp",
    gridImage: "/images/redesign/category-general.jpg",
    imageAlt:
      "Retail merchandise displayed on store fixtures, representing general consumer merchandise.",
  },
];
