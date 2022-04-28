import { Component } from "react";
import withRouter from "../withRouter";
import Breadcrumb from "../Breadcrumb";
import Categories from "../Categories";
import PageAndSort from "../PageAndSort";
import Pagination from "../Pagination";

import { apiKey, productApiUrl, productsPerRow } from "../../config";
import { renderItemRow } from "../../helpers";

import type { ProductType } from "../../interfaces";
import { toast } from "react-toastify";

const defaultPageSize: number = 9;

interface StateType {
  products: Array<ProductType>;
  currentPage: number;
  pageSize: number;
  sort: string;
}
class Products extends Component<any, StateType, ProductType> {
  products: Array<ProductType> = [];

  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      currentPage: 1,
      pageSize: defaultPageSize,
      sort: "priceAsc",
    };

    // to use 'this' object from these handlers, needs to bind first
    this.handleSortSelection = this.handleSortSelection.bind(this);
    this.handlePageSizeSelection = this.handlePageSizeSelection.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  fetchProducts() {
    const params: any = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop: any) => searchParams.get(prop),
    });
    let value = params.query;
    const prodcutQueryUrl = value
      ? productApiUrl + "?query=" + value
      : productApiUrl;
    fetch(prodcutQueryUrl, {
      method: "GET",
      headers: {
        "Warehouse-Id": "1",
        "content-type": "application/json",
        "Api-key": apiKey,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = JSON.parse(JSON.stringify(data.data));
        this.setState({
          products: products,
        });
        this.products = this.state.products.filter(
          (prod, index) => index < defaultPageSize
        );
      })
      .catch((error) => {
        toast("Failed to fetch the data! Please try again", {
          type: "warning",
        });
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchProducts();
  }

  handleSortSelection(e: any) {
    this.setState({ sort: e.target.value });
  }

  handlePageSizeSelection(e: any) {
    let size = defaultPageSize;

    if (e.target.value) {
      size = parseInt(e.target.value);
    } else if (
      !e.target.value ||
      this.state.pageSize >= this.state.products.length
    ) {
      size = this.products.length;
    }

    this.setState({ pageSize: size });
  }
  handlePageClick(e: any, value: number) {
    this.setState({ currentPage: value });
  }

  render() {
    const params: any = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop: string) => searchParams.get(prop),
    });

    const catId = parseInt(params.catId);

    if (this.state.sort === "priceAsc") {
      this.state.products.sort((a, b) =>
        a.unitPrice[0].sellingPrice < b.unitPrice[0].sellingPrice ? -1 : 1
      );
    } else if (this.state.sort === "priceDsc") {
      this.state.products.sort((a, b) =>
        a.unitPrice[0].sellingPrice < b.unitPrice[0].sellingPrice ? 1 : -1
      );
    }

    let totalProds = this.state.products.length;

    this.products = this.state.products.filter(
      (prod, index) =>
        index >= this.state.currentPage - 1 &&
        index < this.state.currentPage - 1 + this.state.pageSize
    );
    if (catId) {
      this.products = this.state.products.filter(
        (prod) => prod.categoryId === catId
      );
      totalProds = this.products.length;
      this.products = this.products.filter(
        (prod, index) =>
          index >= this.state.currentPage - 1 &&
          index < this.state.currentPage - 1 + this.state.pageSize
      );
    }
    const noOfRows =
      this.products.length % productsPerRow === 0
        ? this.products.length / productsPerRow
        : Math.floor(this.products.length / productsPerRow) + 1;

    return (
      <div>
        <Breadcrumb name={"Products"} />
        {/* products */}
        <div className="products">
          <div className="container">
            <div className="col-md-4 products-left">
              <Categories />
            </div>
            <div className="col-md-8 products-right">
              <PageAndSort
                pageSize={this.state.pageSize}
                sort={this.state.sort}
                handleSortSelection={this.handleSortSelection}
                handlePageSizeSelection={this.handlePageSizeSelection}
              />

              {Array.from(Array(noOfRows).keys()).map((rowIndex) => (
                <div key={rowIndex} className="agile_top_brands_grids">
                  {renderItemRow(this.products, rowIndex, productsPerRow, "")}
                  <div className="clearfix"> </div>
                </div>
              ))}

              <Pagination
                handlePageClick={this.handlePageClick}
                currentPage={this.state.currentPage}
                pageSize={this.state.pageSize}
                total={totalProds}
              />
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Products);
