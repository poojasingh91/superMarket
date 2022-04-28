import Offer from "./Offer";

// functional component for categories
const ShopByCatogories = (props: any) => {
  const categories = props.categories;
  return (
    <div className="top-brands">
      <div className="container">
        <h2>Shop By Catogories</h2>
        <div className="grid_3 grid_5">
          <div
            className="bs-example bs-example-tabs"
            role="tabpanel"
            data-example-id="togglable-tabs"
          >
            <ul id="myTab" className="nav nav-tabs" role="tablist">
              {categories &&
                categories.map((category: any, index: number) => (
                  <li
                    style={{
                      width: Math.floor(100 / categories.length) + "%",
                    }}
                    role="presentation"
                    className={index === 0 ? "active" : ""}
                    key={index}
                  >
                    <a
                      href={"#cat" + category.id}
                      id={"cat" + category.id + "-tab"}
                      role="tab"
                      data-toggle="tab"
                      aria-controls={"#cat" + category.id}
                      aria-expanded="true"
                    >
                      {category.title}
                    </a>
                  </li>
                ))}
            </ul>

            <div id="myTabContent" className="tab-content">
              {categories &&
                categories.map((category: any, index: number) => (
                  <Offer offer={category} key={index} isActive={index === 0} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCatogories;
