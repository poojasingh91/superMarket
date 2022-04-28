import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation-agileits">
      <div className="container">
        <nav className="navbar navbar-default">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header nav_2">
            <button
              type="button"
              className="navbar-toggle collapsed navbar-toggle1"
              data-toggle="collapse"
              data-target="#bs-megadropdown-tabs"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/" className="act">
                  Home
                </Link>
              </li>
              {/* <!-- Mega Menu --> */}
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Products<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <Link to="/products">All Products (Dalle)</Link>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Household & Groceries<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>All Groceries</h6>
                        <li>
                          <Link to="/groceries">Dals & Pulses</Link>
                        </li>
                        <li>
                          <Link to="/groceries">Almonds</Link>
                        </li>
                        <li>
                          <Link to="/groceries">Cashews</Link>
                        </li>
                        <li>
                          <Link to="/groceries">Dry Fruit</Link>
                        </li>
                        <li>
                          <Link to="/groceries"> Mukhwas </Link>
                        </li>
                        <li>
                          <Link to="/groceries">Rice & Rice Products</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row second-list">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>All Household</h6>
                        <li>
                          <Link to="/household">Cookware</Link>
                        </li>
                        <li>
                          <Link to="/household">Dust Pans</Link>
                        </li>
                        <li>
                          <Link to="/household">Scrubbers</Link>
                        </li>
                        <li>
                          <Link to="/household">Dust Cloth</Link>
                        </li>
                        <li>
                          <Link to="/household"> Mops </Link>
                        </li>
                        <li>
                          <Link to="/household">Kitchenware</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Personal Care<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>Baby Care</h6>
                        <li>
                          <Link to="/personalcare">Baby Soap</Link>
                        </li>
                        <li>
                          <Link to="/personalcare">Baby Care Accessories</Link>
                        </li>
                        <li>
                          <Link to="/personalcare">Baby Oil & Shampoos</Link>
                        </li>
                        <li>
                          <Link to="/personalcare">Baby Creams & Lotion</Link>
                        </li>
                        <li>
                          <Link to="/personalcare"> Baby Powder</Link>
                        </li>
                        <li>
                          <Link to="/personalcare">Diapers & Wipes</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Packaged Foods<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>All Accessories</h6>
                        <li>
                          <Link to="/packagedfoods">Baby Food</Link>
                        </li>
                        <li>
                          <Link to="/packagedfoods">Dessert Items</Link>
                        </li>
                        <li>
                          <Link to="/packagedfoods">Biscuits</Link>
                        </li>
                        <li>
                          <Link to="/packagedfoods">Breakfast Cereals</Link>
                        </li>
                        <li>
                          <Link to="/packagedfoods"> Canned Food </Link>
                        </li>
                        <li>
                          <Link to="/packagedfoods">Chocolates & Sweets</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  Beverages<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu multi-column columns-3">
                  <div className="row">
                    <div className="multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <h6>Tea & Coeffe</h6>
                        <li>
                          <Link to="/beverages">Green Tea</Link>
                        </li>
                        <li>
                          <Link to="/beverages">Ground Coffee</Link>
                        </li>
                        <li>
                          <Link to="/beverages">Herbal Tea</Link>
                        </li>
                        <li>
                          <Link to="/beverages">Instant Coffee</Link>
                        </li>
                        <li>
                          <Link to="/beverages"> Tea </Link>
                        </li>
                        <li>
                          <Link to="/beverages">Tea Bags</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li>
                <Link to="/gourmet">Gourmet</Link>
              </li>
              <li>
                <Link to="/offers">Offers</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
