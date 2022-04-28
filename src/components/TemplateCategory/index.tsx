import { Link } from "react-router-dom";

// category from template
const categories = [
  {
    id: 1,
    name: "Fruits And Vegetables",
    subcats: [
      { id: 1, name: "Cuts & Sprouts" },
      { id: 1, name: "Flowers" },
      { id: 1, name: "Fresh Herbs & Seasonings" },
      { id: 1, name: "Fresh Vegetables" },
      { id: 1, name: "International Vegetables" },
      { id: 1, name: "Organic Fruits & Vegetables" },
    ],
  },
  {
    id: 2,
    name: "Grocery & Staples",
    subcats: [
      { id: 1, name: "Dals & Pulses" },
      { id: 1, name: "Dry Fruits" },
      { id: 1, name: "Edible Oils & Ghee" },
      { id: 1, name: "Flours & Sooji" },
      { id: 1, name: "Masalas & Spices" },
      { id: 1, name: "Organic Staples" },
      { id: 1, name: "Rice & Rice Products" },
      { id: 1, name: "Salt, Sugar & Jaggery" },
    ],
  },
  {
    id: 3,
    name: "PersonalCare",
    subcats: [
      { id: 1, name: "Baby Care" },
      { id: 1, name: "Cosmetics" },
      { id: 1, name: "Deos & Perfumes" },
      { id: 1, name: "Skin Care" },
      { id: 1, name: "Sanitary Needs" },
      { id: 1, name: "Oral Care" },
      { id: 1, name: "Personal Hygiene" },
      { id: 1, name: "Saving Needs" },
    ],
  },
];

// show satic category
const TemplateCategory = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul className="cate">
        {categories.map((category, i) => {
          return (
            <div key={i}>
              <li>
                <Link to={"/templateproducts"}>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  {category.name}
                </Link>
              </li>
              <ul>
                {category.subcats.map((subcat, i) => {
                  return (
                    <li key={i}>
                      <Link to={"/templateproducts"}>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        {subcat.name}
                      </Link>{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default TemplateCategory;
