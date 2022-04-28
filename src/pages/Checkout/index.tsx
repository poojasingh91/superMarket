import { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import {
  isLoggedIn,
  deleteFromCart,
  getCart,
  updateCart,
} from "../../helpers";

// for now type of props and state is any
class Checkout extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      checkoutProducts: [], // to store checkoutProducts
    };
    // to use 'this' object from these handlers, needs to bind first
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }

  componentDidMount() {
    // get Cart data after this component is rendered
    getCart()
      .then((checkoutProducts) => {
        this.setState({
          checkoutProducts: checkoutProducts,
        });
      })
      .catch(() => {});
  }

  // handler to remove items from cart
  handleRemove(cartProdId: number, prodId: number) {
    if (!window.confirm("Are you sure?")) {
      return;
    }

    // also remove from state
    let prods = [...this.state.checkoutProducts];
    prods = prods.filter((prod: any) => prod.prodId !== prodId);

    // delete API called
    deleteFromCart(cartProdId).then(() => {
      this.setState({ checkoutProducts: prods });
    });
  }

  // handler to update product quantiy in Cart
  handleUpdate(cartProdId: number, prodId: number) {
    // get data to update the state after API called
    let prods = [...this.state.checkoutProducts];
    prods = prods.filter((prod: any) => prod.prodId !== prodId);

    // get changed quantity of updated product
    const updatedProd = this.state.checkoutProducts.find(
      (prod: any) => prod.prodId === prodId
    );
    const formdata = {
      quntity: parseInt(updatedProd.quantity),
    };

    // Update API called
    updateCart(formdata, cartProdId).then(() => {
      this.setState({ checkoutProducts: prods });
    });
  }

  handleClickPlus(prodId: number) {
    // increase the value of quantity and update state
    let prods = [...this.state.checkoutProducts];
    prods = prods.map((prod: any, i: number) => {
      if (prodId === prod.prodId) {
        prod.quantity = prod.quantity + 1;
      }
      return prod;
    });
    this.setState({ checkoutProducts: prods });
  }

  handleClickMinus(prodId: number) {
    // descrease the value of quantity and update state
    let prods = [...this.state.checkoutProducts];
    prods.map((prod: any) => {
      if (prodId === prod.prodId && prod.quantity > 1) {
        prod.quantity = prod.quantity - 1;
      }
      return prod;
    });
    this.setState({ checkoutProducts: prods });
  }

  render() {
    // redirect to login page if not logged in
    if (!isLoggedIn()) {
      window.location.href = "/login";
    }
    // calculate total price
    const totalCharge: number = this.state.checkoutProducts.reduce(
      (tempTotal: number, prod: any) => tempTotal + prod.quantity * prod.dprice,
      0.0
    );
    // calculate service charge
    const serviceCharge = 0.1 * totalCharge;
    return (
      <>
        <Breadcrumb name="Checkout Page" />
        <div className="checkout">
          <div className="container">
            <h2>
              Your shopping cart contains:{" "}
              <span>{this.state.checkoutProducts.length} Products</span>
            </h2>
            <div className="checkout-right">
              <table className="timetable_sub">
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>Product</th>
                    <th>Quality</th>
                    <th>Product Name</th>
                    <th style={{ width: "10%" }}>Price</th>
                    <th>Modify</th>
                    <th>remove</th>
                  </tr>
                </thead>
                <tbody>
                  {/* render each products */}
                  {this.state.checkoutProducts.map(
                    (prod: any, index: number) => (
                      <tr key={index}>
                        <td className="invert">{index + 1}</td>
                        <td className="invert-image">
                          <Link to={"/single/" + prod.prodId}>
                            <img
                              src={prod.imgSrc}
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                        </td>
                        <td className="invert">
                          <div className="quantity">
                            <div className="quantity-select">
                              <div
                                className="entry value-minus"
                                onClick={() => {
                                  this.handleClickMinus(prod.prodId);
                                }}
                              >
                                &nbsp;
                              </div>
                              <div className="entry value">
                                <span>{prod.quantity}</span>
                              </div>
                              <div
                                className="entry value-plus active"
                                onClick={() => {
                                  this.handleClickPlus(prod.prodId);
                                }}
                              >
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="invert">{prod.name}</td>

                        <td className="invert">
                          {(prod.quantity * prod.dprice).toFixed(2)}
                        </td>
                        <td className="invert">
                          <div className="update">
                            <div
                              className="tick"
                              onClick={(e: any) => {
                                this.handleUpdate(prod.cartProdId, prod.prodId);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-check"
                                viewBox="0 0 16 16"
                              >
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td className="invert">
                          <div className="rem">
                            <div
                              className="remove"
                              onClick={(e: any) => {
                                this.handleRemove(prod.cartProdId, prod.prodId);
                              }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div className="checkout-left">
              <div className="checkout-left-basket">
                <h4>Continue to basket</h4>
                <ul>
                  {this.state.checkoutProducts.map(
                    (prod: any, index: number) => (
                      <li key={index}>
                        {prod.name} <i>-</i>{" "}
                        <span>
                          {"NRs. "}
                          {(prod.dprice * prod.quantity).toFixed(2)}{" "}
                        </span>
                      </li>
                    )
                  )}
                  <li>
                    <b>
                      Total Service Charges <i>-</i>{" "}
                      <span>
                        {"NRs. "}
                        {serviceCharge.toFixed(2)}
                      </span>
                    </b>
                  </li>
                  <li>
                    <b>
                      Total <i>-</i>{" "}
                      <span>
                        {"NRs. "}
                        {(totalCharge + serviceCharge).toFixed(2)}
                      </span>
                    </b>
                  </li>
                </ul>
              </div>
              <div className="checkout-right-basket">
                <Link to={"/products"}>
                  <span
                    className="glyphicon glyphicon-menu-left"
                    aria-hidden="true"
                  ></span>
                  Continue Shopping
                </Link>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Checkout;
