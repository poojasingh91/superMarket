import { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Breadcrumb from "../../components/Breadcrumb";
import { apiKey, bannerApiUrl } from "../../config";
const imagePath = "../../assets/images/";

const showStar = true;
class Offers extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // fetch offer data
    fetch(bannerApiUrl + "?type=offer", {
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
    const offers = this.state.data;
    // random star from 0 - 5
    const stars = Math.floor((Math.random() * 10) / 2);

    return (
      <>
        <Breadcrumb name="Offers" />
        <div className="newproducts-w3agile">
          <div className="container">
            <h3>Top selling offers</h3>
            <div className="agile_top_brands_grids">
              {/* display offer only if exist */}
              {offers.length > 0 &&
                offers.map((offer: any, index: number) => (
                  <div className="col-md-3 top_brand_left" key={index}>
                    <div className="hover14 column">
                      <div className="agile_top_brand_left_grid">
                        {
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src={imagePath + "offer.png"}
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                        }

                        <div className="agile_top_brand_left_grid1">
                          <figure>
                            <div className="snipcart-item block">
                              <div className="snipcart-thumb">
                                <Link to={"/single/" + offer.id}>
                                  <img
                                    title=""
                                    alt=""
                                    width={"100px"}
                                    height={"100px"}
                                    src={offer.bannerImage}
                                  />
                                </Link>
                                <p>{offer.title}</p>
                                {showStar && (
                                  <div className="stars">
                                    {/* show star in blue color */}
                                    {Array.from(Array(stars).keys()).map(
                                      (a, i) => (
                                        <i
                                          key={i}
                                          className="fa fa-star blue-star"
                                          aria-hidden="true"
                                        ></i>
                                      )
                                    )}
                                    {/* remaining star in gray color */}
                                    {Array.from(Array(5 - stars).keys()).map(
                                      (a, i) => (
                                        <i
                                          key={i}
                                          className="fa fa-star gray-star"
                                          aria-hidden="true"
                                        ></i>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Offers;
