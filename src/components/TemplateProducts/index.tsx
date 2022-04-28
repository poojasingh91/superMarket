import { Component } from "react";
import withRouter from "../withRouter";
import Breadcrumb from "../Breadcrumb";
import TemplateCategory from "../TemplateCategory";
import PageAndSort from "../PageAndSort";
import Pagination from "../Pagination";

import { productsPerRow } from "../../config";
import { renderTemplateItemRow } from "../../helpers";

import type { ProductType } from "../../interfaces";

const defaultPageSize: number = 9;

interface Props {
  products: Array<ProductType>;
}

interface StateType {
  currentPage: number;
  pageSize: number;
  sort: string;
}
class TemplateProducts extends Component<Props, StateType, ProductType> {
  products: Array<ProductType> = this.props.products.filter(
    (prod, index) => index < defaultPageSize
  );

  constructor(props: Props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: defaultPageSize,
      sort: "priceAsc",
    };

    // to use 'this' object from these handlers, needs to bind first
    this.handleSortSelection = this.handleSortSelection.bind(this);
    this.handlePageSizeSelection = this.handlePageSizeSelection.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.products = nextProps.products.filter(
      (prod, index) => index < defaultPageSize
    );
  }

  handleSortSelection(e: any) {
    if (e.target.value === "priceAsc") {
      this.products.sort((a, b) =>
        a.unitPrice[0].sellingPrice < b.unitPrice[0].sellingPrice ? -1 : 1
      );
    } else if (e.target.value === "priceDsc") {
      this.products.sort((a, b) =>
        a.unitPrice[0].sellingPrice < b.unitPrice[0].sellingPrice ? 1 : -1
      );
    }

    this.setState({ sort: e.target.value });
  }
  handlePageSizeSelection(e: any) {
    let size = defaultPageSize;
    if (!e.target.value || this.state.pageSize >= this.props.products.length) {
      size = this.props.products.length;
    } else if (e.target.value) {
      size = e.target.value;
    }
    this.products = this.props.products.filter((prod, index) => index < size);

    this.setState({ pageSize: size });
  }
  handlePageClick(e: any, value: number) {
    this.products = this.props.products.filter(
      (prod, index) =>
        index >= this.state.currentPage - 1 &&
        index < this.state.currentPage - 1 + this.state.pageSize
    );
    this.setState({ currentPage: value });
  }

  render() {
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
              <TemplateCategory />
            </div>
            <div className="col-md-8 products-right">
              <PageAndSort
                sort={this.state.sort}
                pageSize={this.state.pageSize}
                handleSortSelection={this.handleSortSelection}
                handlePageSizeSelection={this.handlePageSizeSelection}
              />

              {Array.from(Array(noOfRows).keys()).map((rowIndex) => (
                <div key={rowIndex} className="agile_top_brands_grids">
                  {renderTemplateItemRow(
                    this.products,
                    rowIndex,
                    productsPerRow,
                    ""
                  )}
                  <div className="clearfix"> </div>
                </div>
              ))}

              <Pagination
                handlePageClick={this.handlePageClick}
                currentPage={this.state.currentPage}
                pageSize={this.state.pageSize}
                total={this.props.products.length}
              />
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(TemplateProducts);
