import { Component } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../helpers";

import type { TemplateProdType } from "../../interfaces";
import Cart from "../Cart";

const imagePath = "../../../assets/images/";

class TemplateProduct extends Component<TemplateProdType, any> {
  constructor(props: TemplateProdType) {
    super(props);
    this.state = {
      showCart: false,
    };
    // to use 'this' object from these handlers, needs to bind first
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ showCart: false });
  }

  handleAddToCart(e: any) {
    e.preventDefault();
    if (!isLoggedIn()) {
      window.location.href = "/login";
    }
    this.setState({ showCart: true });
  }

  render() {
    const { id, name, discountedPrice, markedPrice, imgFile, stars } =
      this.props;
    const cartItemData = {
      cartProdId: null,
      prodId: id,
      name: name,
      priceId: discountedPrice,
      mprice: markedPrice,
      dprice: discountedPrice,
      quantity: 1,
    };
    return (
      <>
        <Cart
          currentItem={cartItemData}
          showCart={this.state.showCart}
          handleCloseModal={this.handleCloseModal}
        />
        <div className="hover14 column">
          <div className="agile_top_brand_left_grid">
            <div className="agile_top_brand_left_grid_pos">
              <img
                src={imagePath + "offer.png"}
                alt=" "
                className="img-responsive"
              />
            </div>
            <div className="agile_top_brand_left_grid1">
              <figure>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb">
                    <Link to={"/single/" + id}>
                      <img title=" " alt=" " src={imagePath + imgFile} />
                    </Link>
                    <p>{name}</p>
                    {this.props.showStar && (
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
                      ${discountedPrice} <span>${markedPrice}</span>
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
export default TemplateProduct;
