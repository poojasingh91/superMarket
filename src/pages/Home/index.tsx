import { Component } from "react";
import BrandStores from "./BrandStores";
import ShopByCatogories from "./ShopByCatogories";
import MainSlider from "./MainSlider";
import Carousel from "./Carousel";
import BannerBottom from "./BannerBottom";
import { apiKey, homeApiUrl } from "../../config";
import { toast } from "react-toastify";

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    // fetch home data (banners/adproducts etc) and set to state
    fetch(homeApiUrl, {
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
        this.setState({ data: data.data });
      })
      .catch((error) => {
        toast("Failed to fetch data! Please try again", { type: "warning" });
        console.error(error);
      });
  }

  render() {
    const data = this.state.data;
    // read state properties and pass to corresping props
    return (
      <>
        {/* main-slider */}
        <MainSlider banners={data.banners} />

        {/* top-brands  */}
        <ShopByCatogories categories={data.appCategories} />

        {/* BannerBottom */}
        <BannerBottom banners={data.adbanners} />

        {/* Carousel */}
        <Carousel banners={data.adbanners} />

        {/* brands */}
        <BrandStores brands={data.brands} />
      </>
    );
  }
}
export default Home;
