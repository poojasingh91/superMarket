import { renderItemRow } from "../../helpers";

// demo data
const demoData = [
  {
    id: 1752,
    title: "Veg Momo Steam",
    slug: "q3lp-veg-momo-steam-ktm258-fmai",
    link: null,
    moreInfo: "",
    description: "",
    taxable: true,
    taxableAmount: 0,
    decimal: false,
    hasOffer: false,
    categoryId: 358,
    categoryTitle: "Steam",
    categorySlug: "dmms-steam-qwbl",
    categoryIcon:
      "https://dalle.com.np/storage/placeholder/placeholder-web-category.png",
    categoryBackgroundImage:
      "https://dalle.com.np/storage/placeholder/placeholder-category-background.png",
    unitPrice: [
      {
        id: 1752,
        title: "Plate",
        sellingPrice: 190,
        markedPrice: 168.14,
        newPrice: 0,
        oldPrice: 190,
        size: null,
        sku: "Ktm258",
        description: null,
        barcode: null,
        stock: 999,
        hasOffer: false,
        alwaysAvailable: true,
      },
    ],
    images: [
      {
        id: 433,
        imageName:
          "https://dalle.com.np/storage/products/thumbnail/60e40be70c57c.jpg",
        unit_price_id: null,
      },
    ],
    warehouses: [
      {
        id: 1,
        title: "Kathmandu",
      },
    ],
    tags: [],
    brand: null,
  },
  {
    id: 1750,
    title: "Veg Momo Kothey",
    slug: "zm6f-veg-momo-kothey-ktm256-f6t2",
    link: null,
    moreInfo: "",
    description: "",
    taxable: true,
    taxableAmount: 0,
    decimal: false,
    hasOffer: false,
    categoryId: 357,
    categoryTitle: "Kothey",
    categorySlug: "6vbp-kothey-hw5p",
    categoryIcon:
      "https://dalle.com.np/storage/placeholder/placeholder-web-category.png",
    categoryBackgroundImage:
      "https://dalle.com.np/storage/placeholder/placeholder-category-background.png",
    unitPrice: [
      {
        id: 1750,
        title: "Plate",
        sellingPrice: 210,
        markedPrice: 185.84,
        newPrice: 0,
        oldPrice: 210,
        size: null,
        sku: "Ktm256",
        description: null,
        barcode: null,
        stock: 999,
        hasOffer: false,
        alwaysAvailable: true,
      },
    ],
    images: [
      {
        id: 238,
        imageName:
          "https://dalle.com.np/storage/products/thumbnail/60d98d25d141b.jpg",
        unit_price_id: null,
      },
    ],
    warehouses: [
      {
        id: 1,
        title: "Kathmandu",
      },
    ],
    tags: [],
    brand: null,
  },
  {
    id: 1740,
    title: "Chicken Momo Fried",
    slug: "tmkb-chicken-momo-fried-ktm246-wu2s",
    link: null,
    moreInfo: "<p>Dalle fried momos are very tasty</p>",
    description: "<p>This is dalle fried momos</p>",
    taxable: true,
    taxableAmount: 0,
    decimal: false,
    hasOffer: false,
    categoryId: 354,
    categoryTitle: "Fried",
    categorySlug: "cfn5-fried-lq9r",
    categoryIcon:
      "https://dalle.com.np/storage/placeholder/placeholder-web-category.png",
    categoryBackgroundImage:
      "https://dalle.com.np/storage/placeholder/placeholder-category-background.png",
    unitPrice: [
      {
        id: 1740,
        title: "Plate",
        sellingPrice: 280,
        markedPrice: 247.79,
        newPrice: 0,
        oldPrice: 280,
        size: null,
        sku: "Ktm246",
        description: null,
        barcode: null,
        stock: 999,
        hasOffer: false,
        alwaysAvailable: true,
      },
    ],
    images: [
      {
        id: 428,
        imageName:
          "https://dalle.com.np/storage/products/thumbnail/60e407247b8de.jpg",
        unit_price_id: null,
      },
    ],
    warehouses: [
      {
        id: 1,
        title: "Kathmandu",
      },
    ],
    tags: [],
    brand: null,
  },
];

// function component
const Offer = (props: any) => {
  const rowCount = 1,
    columnCount = 3;
  const category = props.offer;
  let products = category.products;
  products = products.length === 0 ? demoData : products;

  return (
    <div
      role="tabpanel"
      className={"tab-pane fade " + (props.isActive ? " in active" : " ")}
      id={"cat" + category.id}
      aria-labelledby={"cat" + category.id + "-tab"}
    >
      <div className="agile-tp">
        <h5>{category.title}</h5>
        <p className="w3l-ad">{category && category.description}</p>
      </div>

      {Array.from(Array(rowCount).keys()).map((rowIndex) => (
        <div key={rowIndex} className="agile_top_brands_grids">
          {renderItemRow(products, rowIndex, columnCount, "")}
          <div className="clearfix"> </div>
        </div>
      ))}
    </div>
  );
};

export default Offer;
