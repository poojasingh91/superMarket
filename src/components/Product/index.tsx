import { Component } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../helpers";
import type { ProductType } from "../../interfaces";
import Cart from "../Cart";

const imagePath = "../../../assets/images/";
const stars = 5,
  showStar = false;
class Product extends Component<ProductType, any> {
  constructor(props: ProductType) {
    super(props);
    this.state = {
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

  render() {
    // read individual props
    const { id, title, unitPrice, images } = this.props;
    const cartItemData = {
      cartProdId: null,
      prodId: id,
      name: title,
      priceId: unitPrice[0].id,
      mprice: unitPrice[0].markedPrice,
      dprice: unitPrice[0].sellingPrice,
      quantity: 1,
    };
    return (
      <>
        {/* render cart of product to show later by clicking 'add to cart' */}
        <Cart
          currentItem={cartItemData}
          showCart={this.state.showCart}
          handleCloseModal={this.handleCloseModal}
        />
        <div className="hover14 column">
          <div className="agile_top_brand_left_grid">
            {unitPrice[0].hasOffer && (
              <div className="agile_top_brand_left_grid_pos">
                <img
                  src={imagePath + "offer.png"}
                  alt=" "
                  className="img-responsive"
                />
              </div>
            )}

            <div className="agile_top_brand_left_grid1">
              <figure>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb">
                    <Link to={"/single/" + id}>
                      <img
                        title=""
                        alt=""
                        width={"100px"}
                        height={"100px"}
                        src={images[0].imageName}
                      />
                    </Link>
                    <p>{title}</p>
                    {showStar && (
                      <div className="stars">
                        {Array.from(Array(stars).keys()).map((a, i) => (
                          <i
                            key={i}
                            className="fa fa-star blue-star"
                            aria-hidden="true"
                          ></i>
                        ))}
                        {Array.from(Array(5 - stars).keys()).map((a, i) => (
                          <i
                            key={i}
                            className="fa fa-star gray-star"
                            aria-hidden="true"
                          ></i>
                        ))}
                      </div>
                    )}

                    <h4>
                      NRs. {unitPrice[0].sellingPrice}{" "}
                      <span>NRs. {unitPrice[0].markedPrice}</span>
                    </h4>
                  </div>
                  <div className="snipcart-details top_brand_home_details">
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
                        data-target={"#flipFlop" + id}
                        className="button"
                      />
                    </form>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Product;
