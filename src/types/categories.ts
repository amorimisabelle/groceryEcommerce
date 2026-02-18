export const PRODUCT_CATEGORIES = [
  'Vegetables',
  'Fruits',
  'Grains',
  'Proteins',
  'Dairy',
  'Coffee & Teas',
  'Meat',
  'Beverages',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

// Para uso em selects/dropdowns
export const CATEGORY_OPTIONS = [
  { value: '', label: 'All categories' },
  ...PRODUCT_CATEGORIES.map((category) => ({
    value: category,
    label: category,
  })),
];
