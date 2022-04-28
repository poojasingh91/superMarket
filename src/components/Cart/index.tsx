import { Component } from "react";

import { addToCart, deleteFromCart, getCart, updateCart } from "../../helpers";
import CartRow from "./CartRow";
class Cart extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentItem: {}, // product from which cart is open
      cartProducts: [], // products already in cart
    };

    // to use 'this' object from these handlers, needs to bind first
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdateCart = this.handleUpdateCart.bind(this);
    this.handleChangeQuantityCart = this.handleChangeQuantityCart.bind(this);
    this.handleRemoveCart = this.handleRemoveCart.bind(this);
  }

  componentWillReceiveProps(nextProps: any) {
    // call API to fetch cart product only if cart is to show
    if (nextProps.showCart === true) {
      const { currentItem } = nextProps;
      // Cart API called
      getCart()
        .then((cartProducts) => {
          // update state by current product and cart product
          this.setState({
            cartProducts: cartProducts,
            currentItem: currentItem,
          });
        })
        .catch(() => {
          // update state by current product even if products on cart can not be fetched
          this.setState({ currentItem: currentItem });
        });
    }
  }
  handleCloseModal() {
    // call parent component function
    this.props.handleCloseModal();
  }

  handleCheckout(e: any) {
    // redirect to checkout
    window.location.href = "/checkout";
  }

  handleChangeQuantity(e: any) {
    if (e.target.value < 1) {
      return;
    }
    // change value and update state
    const currentItem = { ...this.state.currentItem };
    currentItem.quantity = e.target.value;
    this.setState({ currentItem: currentItem });
  }

  handleAdd(e: any) {
    // prepare data
    const formdata = {
      productId: this.state.currentItem.prodId,
      priceId: this.state.currentItem.priceId,
      quantity: this.state.currentItem.quantity,
      note: "Test",
    };

    // call ADD CART API
    addToCart(formdata)
      .then((cartProduct) => {
        // update state
        this.setState({
          cartProducts: [cartProduct, ...this.state.cartProducts],
        });
      })
      .catch(() => {
        // error already handled in API function 'addToCart'
      });
  }

  handleChangeQuantityCart(e: any) {
    if (e.target.value < 1) {
      return;
    }
    // change quantity of selected product (selected row in cart)
    const cartProducts = this.state.cartProducts.map((prod: any) => {
      if (prod.prodId === e.target.dataset.prodid) {
        prod.quantity = e.target.value;
      }
      return prod;
    });
    // update state
    this.setState({ cartProducts: cartProducts });
  }

  handleUpdateCart(prodId: number, cartProdId: number) {
    // read quantity of selected product (selected row in cart)
    const updatedProd = this.state.cartProducts.find(
      (prod: any) => prod.prodId === prodId
    );
    const formdata = {
      quntity: parseInt(updatedProd.quantity),
    };

    // update API call
    updateCart(formdata, cartProdId).then(() => {});
  }

  handleRemoveCart(cartProdId: number) {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    // delete API call
    deleteFromCart(cartProdId).then(() => {});
  }

  render() {
    const currentItem = this.props.currentItem;
    const cartProducts = this.state.cartProducts;
    // check if selected product is already added in cart (for that case open product in update mode)
    const itemAlreadyInCart = cartProducts.find(
      (prod: any) => prod.prodId === currentItem.prodId
    );
    const allCartProds = itemAlreadyInCart
      ? cartProducts
      : [currentItem, ...cartProducts];

    return currentItem && (
      <div className="PPMiniCart">
        <div
          className="modal fade"
          id={"flipFlop" + currentItem.prodId}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="modalLabel">
                  {"My Cart"}
                </h4>
              </div>
              <div className="modal-body">
                <form method="post">
                  <div>
                    <ul>
                      {/* do not show new product in cart is cart is opened from click of cart icon or cart has that product already in it */}
                      {!itemAlreadyInCart && currentItem.name !== "all___cart" && (
                        <>
                          <CartRow
                            prod={currentItem}
                            newItem={true}
                            handleChangeQuantity={this.handleChangeQuantity}
                            handleApply={this.handleAdd}
                          />
                          <li className="clearfix"></li>
                        </>
                      )}
                      {cartProducts.length > 0 &&
                        cartProducts.map((prod: any, index: number) => (
                          <CartRow
                            key={index}
                            prod={prod}
                            newItem={false}
                            handleChangeQuantity={this.handleChangeQuantityCart}
                            handleApply={this.handleUpdateCart}
                            handleRemove={this.handleRemoveCart}
                          />
                        ))}
                    </ul>
                  </div>
                  <div className="minicart-footer">
                    <div className="minicart-subtotal">
                      {"Subtotal: NRs. "}
                      {/* summ the price */}
                      {allCartProds.length > 0 &&
                        allCartProds
                          .reduce(
                            (acc: number, prod: any) =>
                              acc + prod.quantity * prod.dprice,
                            0
                          )
                          .toFixed(2)}
                    </div>
                    <div className="minicart-btn">
                      <button
                        className="minicart-submit minicart-checkout"
                        type="button"
                        onClick={this.handleCheckout}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
