import { Component } from "react";
import "./App.css";

import { apiKey, siteConfigApiUrl } from "./config";

import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Products from "./components/Products";
import TemplateProducts from "./components/TemplateProducts";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Faq from "./pages/Faq";
import Offers from "./pages/Offers";
import Register from "./pages/Register";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import type { ProductType, TemplateProdType } from "./interfaces";
import { toast } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";

// this is static data collected from template
const products = [
  {
    id: 1,
    category: "groceries",
    name: "Toor Dal",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "14.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 2,
    category: "groceries",
    name: "Moong Dal",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "15.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 3,
    category: "groceries",
    name: "Channa",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "16.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 4,
    category: "groceries",
    name: "Arhar Dal",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "17.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 5,
    category: "groceries",
    name: "Toor Dal",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "14.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 6,
    category: "groceries",
    name: "Moong Dal",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "15.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 7,
    category: "groceries",
    name: "Channa",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "16.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 8,
    category: "groceries",
    name: "Arhar Dal",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "17.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 9,
    category: "groceries",
    name: "Toor Dal",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "14.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 1,
    category: "household",
    name: "Fry Pan",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "hh1.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 2,
    category: "household",
    name: "Cookware",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "hh2.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 3,
    category: "household",
    name: "Dosa Tawa",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "hh3.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 4,
    category: "household",
    name: "Flask",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "hh4.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 5,
    category: "household",
    name: "Kadai Idly",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "hh5.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 6,
    category: "household",
    name: "Breakfast Pan",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "hh6.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 7,
    category: "household",
    name: "Elite Set",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "hh7.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 8,
    category: "household",
    name: "Coated Pan",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "hh8.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 9,
    category: "household",
    name: "Tadka Pan",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "hh9.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 1,
    category: "packagedFood",
    name: "Sampann-Toor-Dal",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "pf9.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 2,
    category: "packagedFood",
    name: "Parryss-Sugar",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "pf1.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 3,
    category: "packagedFood",
    name: "Saffola-Gold",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "pf2.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 4,
    category: "packagedFood",
    name: "Sampann-Toor-Dal",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "pf3.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 5,
    category: "packagedFood",
    name: "Parryss-Sugar",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "pf4.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 6,
    category: "packagedFood",
    name: "Saffola-Gold",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "pf5.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 7,
    category: "packagedFood",
    name: "Sampann-Toor-Dal",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "pf6.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 8,
    category: "packagedFood",
    name: "Parryss-Sugar",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "pf7.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 9,
    category: "packagedFood",
    name: "Saffola-Gold",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "pf8.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 1,
    category: "personalCare",
    name: "Baby Lotion",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "pc1.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 2,
    category: "personalCare",
    name: "Rash Cream",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "pc2.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 3,
    category: "personalCare",
    name: "Rash Cream",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "pc3.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 4,
    category: "personalCare",
    name: "Rash Cream",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "pc4.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 5,
    category: "personalCare",
    name: "Baby Lotion",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "pc5.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 6,
    category: "personalCare",
    name: "Rash Cream",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "pc6.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 7,
    category: "personalCare",
    name: "Baby Lotion",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "pc7.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 8,
    category: "personalCare",
    name: "Wipes Gentle",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "pc8.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 9,
    category: "personalCare",
    name: "Rash Cream",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "pc9.jpg",
    stars: 5,
    showStar: false,
  },
  {
    id: 1,
    category: "beverage",
    name: "Frooti",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "bv2.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 2,
    category: "beverage",
    name: "Tropicana",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "bv3.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 3,
    category: "beverage",
    name: "Tropicana",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "bv4.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 4,
    category: "beverage",
    name: "Coca Cola",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "bv5.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 5,
    category: "beverage",
    name: "Coca Cola",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "bv6.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 6,
    category: "beverage",
    name: "Appy",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "bv7.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 7,
    category: "beverage",
    name: "Real",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "bv8.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 8,
    category: "beverage",
    name: "Red Bull",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "bv9.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 9,
    category: "beverage",
    name: "Minute Maid",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "bv1.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 1,
    category: "gourmet",
    name: "Milk Caramel",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "gu1.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 2,
    category: "gourmet",
    name: "Gourmet",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "gu2.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 3,
    category: "gourmet",
    name: "Strawberry",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "gu3.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 4,
    category: "gourmet",
    name: "Miniatures",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "gu4.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 5,
    category: "gourmet",
    name: "Le-Gourmet",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "gu5.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 6,
    category: "gourmet",
    name: "Chocolate Bar",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "gu6.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 7,
    category: "gourmet",
    name: "Poultry Rub",
    description: "Test Description",
    discountedPrice: 35.99,
    markedPrice: 55.0,
    imgFile: "gu7.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 8,
    category: "gourmet",
    name: "Sandwich",
    description: "Test Description",
    discountedPrice: 30.99,
    markedPrice: 45.0,
    imgFile: "gu8.png",
    stars: 5,
    showStar: false,
  },
  {
    id: 9,
    category: "gourmet",
    name: "Fruit Nut",
    description: "Test Description",
    discountedPrice: 80.99,
    markedPrice: 105.0,
    imgFile: "gu9.png",
    stars: 5,
    showStar: false,
  },
];

// type for state
interface StateType {
  authInfo: any; // authentication/authorization data
  appInfo: {
    // application information
    data: Object;
    meta: Object;
  };
}
class App extends Component<any, StateType, ProductType> {
  constructor(props: any) {
    super(props);
    this.state = {
      authInfo: {},
      appInfo: { data: {}, meta: {} },
    };
    // to use 'this' object from these handlers, needs to bind first
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSetAccessToken = this.handleSetAccessToken.bind(this);
  }
  // function to fetch application information
  fetchAppInfo() {
    fetch(siteConfigApiUrl, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Api-key": apiKey,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          appInfo: data,
        });
      })
      .catch((error) => {
        toast("Failed to fetch! Please try again", { type: "warning" });
        console.error(error);
      });
  }

  // called when component is mounted in DOM
  componentDidMount() {
    this.fetchAppInfo();
    // read authentication data from browser cache/localstorage
    let authInfo = localStorage.getItem("super-market-jwt") || "";

    // if already session exist set state with session from app info
    if (authInfo) {
      authInfo = JSON.parse(authInfo);
      this.setState({
        authInfo: authInfo,
      });
    }
  }

  // search handler
  handleSearch(searchKey: string) {
    window.location.href = "/products?query=" + searchKey;
  }

  // called after login from login component
  handleSetAccessToken(data: Object) {
    localStorage.setItem("super-market-jwt", JSON.stringify(data));
    window.location.href = "/";
  }

  render() {
    // extract corresponding data to show in respective pages
    const productGroceries = products.filter(
      (product: TemplateProdType) => product.category === "groceries"
    );
    const productHousehold = products.filter(
      (product: TemplateProdType) => product.category === "household"
    );

    const productPersonalcares = products.filter(
      (product: TemplateProdType) => product.category === "personalCare"
    );
    const productPackagedfoods = products.filter(
      (product: TemplateProdType) => product.category === "packagedFood"
    );
    const productBeverages = products.filter(
      (product: TemplateProdType) => product.category === "beverage"
    );
    const productGourmet = products.filter(
      (product: TemplateProdType) => product.category === "gourmet"
    );

    // routing (header/footer does not require routing)
    return (
      <BrowserRouter>
        {/* heqader requires application data so this state's data is passed in appInfo, seach is triggged from header so seach handler also passed */}
        <Header
          handleSearch={this.handleSearch}
          appInfo={this.state.appInfo.data}
        />
        <Routes>
          {/* routing with product id */}
          <Route path="/single/:id" element={<ProductDetails />} />
          {/* <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
          <Route path="/" element={<Home />} />
          {/* login component will call setaccesstoken coz access token is read from there */}
          <Route
            path="/login"
            element={<Login handleSetAccessToken={this.handleSetAccessToken} />}
          />

          <Route path="/changepassword" element={<ChangePassword />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />

          {/* contact also need app information in its page */}
          <Route
            path="/contact"
            element={<Contact appInfo={this.state.appInfo.data} />}
          />

          {/* This component will fetch data from within component itself so no products need to sent */}
          <Route path="/products" element={<Products />} />

          <Route
            path="/templateproducts"
            element={<TemplateProducts products={products} />}
          />
          <Route
            path="/groceries"
            element={<TemplateProducts products={productGroceries} />}
          />
          <Route
            path="/household"
            element={<TemplateProducts products={productHousehold} />}
          />
          <Route
            path="/personalcare"
            element={<TemplateProducts products={productPersonalcares} />}
          />
          <Route
            path="/packagedfoods"
            element={<TemplateProducts products={productPackagedfoods} />}
          />
          <Route
            path="/beverages"
            element={<TemplateProducts products={productBeverages} />}
          />
          <Route
            path="/gourmet"
            element={<TemplateProducts products={productGourmet} />}
          />
          {/* routing for other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>

        {/* footer also needs application data so this state's data is passed in appInfo */}
        <Footer appInfo={this.state.appInfo} />
      </BrowserRouter>
    );
  }
}

export default App;
