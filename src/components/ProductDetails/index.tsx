import { Component } from "react";
import Breadcrumb from "../Breadcrumb";
import withRouter from "../withRouter";

import { productApiUrl, apiKey, warehouseId } from "../../config";
import type { ProductType } from "../../interfaces";
import { toast } from "react-toastify";
import { isLoggedIn } from "../../helpers";
import Cart from "../Cart";

interface StateType {
  product: Array<ProductType>;
  showCart: boolean;
}
class ProductDetails extends Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: [],
      showCart: false,
    };

    // to use 'this' object from these handlers, needs to bind first
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // change state if modal is closed
  handleCloseModal() {
    this.setState({ showCart: false });
  }

  handleAddToCart(e: any) {
    e.preventDefault();
    // if no LoggedIn, redirect to login page
    if (!isLoggedIn()) {
      window.location.href = "/login";
    }
    // update state to open modal
    this.setState({ showCart: true });
  }

  componentDidMount() {
    // fetch single product data
    fetch(productApiUrl + "/" + this.props.router.params.id, {
      method: "GET",
      headers: {
        "Warehouse-Id": warehouseId,
        "content-type": "application/json",
        "Api-key": apiKey,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // update state after data fetch
        this.setState({ product: [data.data] });
      })
      .catch((error) => {
        toast("Failed to fetch data! Please try again", { type: "warning" });
        console.error(error);
      });
  }
  handleSubmit(e: any) {
    e.preventDefault();
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  }
  render() {
    const product = this.state.product[0];
    const productCartData = product && {
      cartProdId: null,
      prodId: product.id,
      name: product.title,
      priceId: product.unitPrice[0].id,
      dprice: product.unitPrice[0].sellingPrice,
      mprice: product.unitPrice[0].markedPrice,
      quantity: 1,
    };
    return (
      <>
        <Breadcrumb name="Single Product" />
        {/* render cart of product to show later by clicking 'add to cart' */}
        {product && Object.keys(product).length > 0 && (
          <Cart
            currentItem={productCartData}
            showCart={this.state.showCart}
            handleCloseModal={this.handleCloseModal}
          />
        )}
        <div className="products">
          (
          <div className="container">
            {product ? (
              <div className="agileinfo_single">
                <div className="col-md-4 agileinfo_single_left">
                  <img
                    id="example"
                    src={product.images[0].imageName}
                    alt=" "
                    className="img-responsive"
                    width={"285px"}
                  />
                </div>
                <div className="col-md-8 agileinfo_single_right">
                  <h2>{product.title}</h2>
                  <div className="rating1">
                    <span className="starRating">
                      <input
                        id="rating5"
                        type="radio"
                        name="rating"
                        value="5"
                      />
                      <label htmlFor="rating5">5</label>
                      <input
                        id="rating4"
                        type="radio"
                        name="rating"
                        value="4"
                      />
                      <label htmlFor="rating4">4</label>
                      <input
                        id="rating3"
                        type="radio"
                        name="rating"
                        value="3"
                      />
                      <label htmlFor="rating3">3</label>
                      <input
                        id="rating2"
                        type="radio"
                        name="rating"
                        value="2"
                      />
                      <label htmlFor="rating2">2</label>
                      <input
                        id="rating1"
                        type="radio"
                        name="rating"
                        value="1"
                      />
                      <label htmlFor="rating1">1</label>
                    </span>
                  </div>
                  <div className="w3agile_description">
                    <h4>Description :</h4>
                    <p>{product.description}</p>
                  </div>
                  <div className="snipcart-item block">
                    <div className="snipcart-thumb agileinfo_single_right_snipcart">
                      <h4 className="m-sing">
                        NRs. {product.unitPrice[0].sellingPrice}{" "}
                        <span>NRs. {product.unitPrice[0].markedPrice}</span>
                      </h4>
                    </div>
                    <div className="snipcart-details agileinfo_single_right_details">
                      <form
                        action="#"
                        method="post"
                        onSubmit={this.handleAddToCart}
                      >
                        <input
                          type="submit"
                          name="submit"
                          value="Add to cart"
                          data-toggle="modal"
                          data-target={"#flipFlop" + product.id}
                          className="button"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            ) : (
              <h4>Product Not Found!</h4>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(ProductDetails);
