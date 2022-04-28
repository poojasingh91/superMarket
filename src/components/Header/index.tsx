import { Component } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { toast, ToastContainer } from "react-toastify";
import Cart from "../Cart";
import { accessToken, isLoggedIn } from "../../helpers";
import { apiKey, profileApiUrl } from "../../config";

class Header extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showCart: false,
      email: "",
    };

    // to use 'this' object from these handlers, needs to bind first
    this.handleShowCart = this.handleShowCart.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    // get profile data
    const getprofileApiUrl = profileApiUrl + "/show";
    fetch(getprofileApiUrl, {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + accessToken,
        "Api-key": apiKey,
        method: "GET",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // after data is return, set state

        this.setState({
          email: data.data.email,
        });
      })
      .catch((error) => {
        toast("Failed to fetch data! Please try again", { type: "warning" });
        console.error(error);
      });
  }

  // to close modal
  handleCloseModal() {
    this.setState({ showCart: false });
  }

  // to show cart modal
  handleShowCart(e: any) {
    e.preventDefault();
    // redirect to login page is not LoggedIn
    if (!isLoggedIn()) {
      window.location.href = "/login";
    }
    this.setState({ showCart: true });
  }

  handleLogout(e: any) {
    // logout, clears cache/localstorage/session(we used)
    e.preventDefault();
    localStorage.removeItem("super-market-jwt");
    window.location.href = "/login";
  }

  render() {
    const productCartData = {
      cartProdId: null,
      prodId: "main_cart",
      name: "all___cart",
      priceId: null,
      dprice: 0,
      mprice: 0,
      quantity: 1,
    };
    return (
      <>
        {/* we need toaster everywhere show rendered in common component */}
        <ToastContainer />
        <div className="agileits_header">
          <div className="container">
            <div className="w3l_offers">
              <p>
                {Object.keys(this.props.appInfo).length > 0 &&
                  this.props.appInfo.stockMessage}
                <Link to="/products">SHOP NOW</Link>
              </p>
            </div>
            <div className="agile-login">
              <ul>
                <li>
                  <Link to="/register">Create Account</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="#" onClick={this.handleLogout}>
                    Logout
                  </Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>

                {this.state.email && (
                  <li>
                    <a href="#" style={{textTransform:"lowercase"}}>Logged in as {this.state.email}</a>
                  </li>
                )}
              </ul>
            </div>
            <div className="product_list_header">
              <form action="#" method="post" className="last">
                <button
                  className="w3view-cart"
                  type="button"
                  data-toggle="modal"
                  data-target={"#flipFlopmain_cart"}
                  onClick={this.handleShowCart}
                >
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <Cart
              currentItem={productCartData}
              showCart={this.state.showCart}
              handleCloseModal={this.handleCloseModal}
            />
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="logo_products">
          <div className="container">
            <div className="w3ls_logo_products_left1">
              <ul className="phone_email">
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>Order online
                  or call us :{" "}
                  {Object.keys(this.props.appInfo).length > 0 &&
                    this.props.appInfo.pageData.phone}
                </li>
              </ul>
            </div>
            <div className="w3ls_logo_products_left">
              <h1>
                <Link to="/">
                  {Object.keys(this.props.appInfo).length > 0 &&
                    this.props.appInfo.title}
                </Link>
              </h1>
            </div>
            <SearchBar handleSearch={this.props.handleSearch} />
            <div className="clearfix"> </div>
          </div>
        </div>
        <Navbar />
      </>
    );
  }
}
export default Header;
