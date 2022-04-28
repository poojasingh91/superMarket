// type for template product
interface TemplateProdType {
  id: number;
  category: string;
  name: string;
  description: string;
  discountedPrice: number;
  markedPrice: number;
  imgFile: string;
  stars: number;
  showStar: boolean;
}

// type for unit price
interface UnitPriceType {
  id: number;
  title: string;
  sellingPrice: number;
  markedPrice: number;
  newPrice: number;
  oldPrice: number;
  size: null;
  sku: string;
  description: string;
  barcode: string;
  stock: number;
  hasOffer: boolean;
  alwaysAvailable: boolean;
}

// type for image type
interface ImageType {
  id: number;
  imageName: string;
  unit_price_id: number;
}

// type for warehouse
interface WarehouseType {
  id: number;
  title: string;
}

// type for product type
interface ProductType {
  id: number;
  title: string;
  slug: string;
  link: string;
  moreInfo: string;
  description: string;
  taxable: boolean;
  taxableAmount: number;
  decimal: boolean;
  hasOffer: boolean;
  categoryId: number;
  categoryTitle: String;
  categorySlug: string;
  categoryIcon: string;
  categoryBackgroundImage: string;
  unitPrice: Array<UnitPriceType>;
  images: Array<ImageType>;
  warehouses: Array<WarehouseType>;
  tags: Array<string>;
  brand: string;
}

// type for subcategory
interface SubCategoryType {
  data: Array<CategoryType>;
  meta: any;
}

// type for category
interface CategoryType {
  avgRating: number;
  backgroundImage: string;
  banner: Array<string>;
  description: string;
  hasProduct: boolean;
  hierarchy_level: number;
  icon: string;
  id: number;
  isRestaurant: boolean;
  isRestaurantOpen: boolean;
  parentId: number;
  position: number;
  productCount: number;
  ratingCount: number;
  slug: string;
  subcategories: SubCategoryType;
  title: string;
  userRating: string;
}

export type { TemplateProdType, ProductType, CategoryType };
