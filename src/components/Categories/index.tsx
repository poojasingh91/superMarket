import { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { apiKey, categoryApiUrl } from "../../config";
import type { CategoryType } from "../../interfaces";

interface StateType {
  categories: Array<CategoryType>;
}
class Categories extends Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    // fetch Category from Category API
    fetch(categoryApiUrl, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Api-key": apiKey,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ categories: data.data });
      })
      .catch((error) => {
        toast("Failed to fetch data! Please try again", { type: "warning" });
        console.error(error);
      });
  }

  render() {
    return (
      <div className="categories">
        <h2>Categories</h2>
        <ul className="cate">
          {this.state.categories.map((category: CategoryType, i: number) => {
            return (
              <div key={i}>
                <li>
                  {/* link to indicidual category, later this id is read and filter data accordingly from product component */}
                  <Link to={"/products?catId=" + category.id}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    {category.title}
                  </Link>
                </li>
                <ul>
                  {category.subcategories.data.map((subcat: any, i: number) => {
                    return (
                      <div key={i}>
                        <li>
                          {/* link to indicidual category, later this id is read and filter data accordingly from product component */}
                          <Link to={"/products?catId=" + subcat.id}>
                            <i
                              className="fa fa-arrow-right"
                              aria-hidden="true"
                            ></i>
                            {subcat.title}
                          </Link>
                        </li>

                        <ul>
                          {subcat.subcategories.data.map(
                            (subsubcat: any, i: number) => {
                              return (
                                <li>
                                  {/* link to indicidual category, later this id is read and filter data accordingly from product component */}
                                  <Link to={"/products?catId=" + subsubcat.id}>
                                    <i
                                      className="fa fa-arrow-right"
                                      aria-hidden="true"
                                    ></i>
                                    {subsubcat.title}
                                  </Link>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Categories;
