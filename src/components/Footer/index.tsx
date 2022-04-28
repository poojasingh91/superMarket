import { Link } from "react-router-dom";

// read and render data
const Footer = (props: any) => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="w3_footer_grids">
            <div className="col-md-3 w3_footer_grid">
              <h3>Contact</h3>
              <ul className="address">
                <li>
                  <i
                    className="glyphicon glyphicon-map-marker"
                    aria-hidden="true"
                  ></i>
                  {Object.keys(props.appInfo.data).length > 0 &&
                    props.appInfo.data.pageData["section1 address"]}{" "}
                  <span>Nepal</span>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  ></i>
                  <Link to="mailto:info@example.com">
                    {Object.keys(props.appInfo.data).length > 0 &&
                      props.appInfo.data.pageData["section1 email"]}
                  </Link>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  ></i>
                  {Object.keys(props.appInfo.data).length > 0 &&
                    props.appInfo.data.pageData.phone}
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Information</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/faq">FAQ's</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Category</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/groceries">Groceries</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/household">Household</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/personalcare">Personal Care</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/packagedfoods">Packaged Foods</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/beverages">Beverages</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Profile</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/products">Store</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/checkout">My Cart</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/register">Create Account</Link>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container">
            <p>
              ©{" "}
              {Object.keys(props.appInfo.meta).length > 0 &&
                props.appInfo.meta.copyright}{" "}
              {Object.keys(props.appInfo.data).length > 0 &&
                props.appInfo.data.title}
              . All rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="footer-botm">
        <div className="container">
          <div className="w3layouts-foot">
            <ul>
              <li>
                <Link
                  to={
                    Object.keys(props.appInfo.data).length > 0 &&
                    props.appInfo.data.pageData.facebook
                  }
                  className="w3_agile_facebook"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  to={
                    Object.keys(props.appInfo.data).length > 0 &&
                    props.appInfo.data.pageData.instagram
                  }
                  className="agile_twitter"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link
                  to={
                    Object.keys(props.appInfo.data).length > 0 &&
                    props.appInfo.data.pageData["section5 youtube"]
                  }
                  className="w3_agile_dribble"
                >
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="payment-w3ls">
            <img
              src="../../../assets/images/card.png"
              alt=" "
              className="img-responsive"
            />
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
