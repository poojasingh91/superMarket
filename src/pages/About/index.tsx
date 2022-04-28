import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const imagePath = "../../../assets/images/";
// functional component, this page is static for now
const About = () => {
  return (
    <>
      <Breadcrumb name="About Us" />
      <div className="about">
        <div className="container">
          <h3 className="w3_agile_header">About Us</h3>
          <div className="about-agileinfo w3layouts">
            <div className="col-md-8 about-wthree-grids grid-top">
              <h4>Blanditiis praesentium deleniti atque corrupti quos </h4>
              <p className="top">
                Gnissimos voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi. atque corrupti quos dolores et quas
                molestias excepturi sint occaecat officia deserunt mollitia
                laborum et dolorum fuga
              </p>
              <p>
                Dignissimos at vero eos et accusamus et iusto odio ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecat officia
                deserunt mollitia laborum et dolorum fuga. At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecat atque corrupti quos
                dolores et quas molestias excepturi sint occaecat officia
                deserunt mollitia laborum et dolorum
              </p>
              <div className="about-w3agilerow">
                <div className="col-md-4 about-w3imgs">
                  <img
                    src={imagePath + "p3.jpg"}
                    alt=""
                    className="img-responsive zoom-img"
                  />
                </div>
                <div className="col-md-4 about-w3imgs">
                  <img
                    src={imagePath + "p4.jpg"}
                    alt=""
                    className="img-responsive zoom-img"
                  />
                </div>
                <div className="col-md-4 about-w3imgs">
                  <img
                    src={imagePath + "p3.jpg"}
                    alt=""
                    className="img-responsive zoom-img"
                  />
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-4 about-wthree-grids">
              <div className="offic-time">
                <div className="time-top">
                  <h4>Praesentium :</h4>
                </div>
                <div className="time-bottom">
                  <h5>At vero eos </h5>
                  <h5>Accusamus et</h5>
                  <p>
                    Dignissimos at vero eos et accusamus et iusto odio ducimus
                    qui accusamus et.
                  </p>
                </div>
              </div>
              <div className="testi">
                <h3 className="w3_agile_header">Testimonial</h3>
                {/* <!--//End-slider-script --> */}

                <div id="top" className="callbacks_container">
                  <ul className="rslides" id="slider5">
                    <li>
                      <div className="testi-slider">
                        <h4>" I AM VERY PLEASED.</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse eu magna dolor, quisque semper.
                        </p>
                        <div className="testi-subscript">
                          <p>
                            <Link to="#">John Doe,</Link>Adipiscing
                          </p>
                          <span className="w3-agilesub"> </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testi-slider">
                        <h4>" I AM LOREM IPSUM.</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse eu magna dolor, quisque semper.
                        </p>
                        <div className="testi-subscript">
                          <p>
                            <Link to="#">elit semper,</Link>Dolor Elit
                          </p>
                          <span className="w3-agilesub"> </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testi-slider">
                        <h4>" CONSECTETUR PIMAGNA.</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse eu magna dolor, quisque semper.
                        </p>
                        <div className="testi-subscript">
                          <p>
                            <Link to="#">Amet Doe,</Link>Suspendisse
                          </p>
                          <span className="w3-agilesub"> </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* <!-- //about -->
        <!-- about-slid --> */}
      <div className="about-slid agileits-w3layouts">
        <div className="container">
          <div className="about-slid-info">
            <h2>Lorem Ipsum is that it has a moreless normal</h2>
            <p>
              Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks on the Internet tend as necessary, making this the first
              true generator on the Internet embarrassing hidden in the middle
              of text Lorem Ipsum generators on the Internet tend to repeat
              predefinedchunks as necessary, making this the first true
              generator on the.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- //about-slid -->
        <!-- about-team --> */}
      <div className="about-team">
        <div className="container">
          <h3 className="w3_agile_header">Meet Our Team</h3>
          <div className="team-agileitsinfo">
            <div className="col-md-3 about-team-grids">
              <img src={imagePath + "t4.jpg"} alt="" />
              <div className="team-w3lstext">
                <h4>
                  <span>ANDERSON,</span> Manager
                </h4>
                <p>
                  Odio dignissimos vero eos voluptatem accusantium doloremque
                  laudantium reader will be distracted.
                </p>
              </div>
              <div className="social-icons caption">
                <ul>
                  <li>
                    <Link to="#" className="fa fa-facebook facebook"></Link>
                  </li>
                  <li>
                    <Link to="#" className="fa fa-twitter twitter"></Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="fa fa-google-plus googleplus"
                    ></Link>
                  </li>
                </ul>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className=" col-md-3 about-team-grids">
              <img src={imagePath + "t2.jpg"} alt="" />
              <div className="team-w3lstext">
                <h4>
                  <span>ELIFS,</span> Director
                </h4>
                <p>
                  Odio dignissimos vero eos voluptatem accusantium doloremque
                  laudantium reader will be distracted.
                </p>
              </div>
              <div className="social-icons caption">
                <ul>
                  <li>
                    <Link to="#" className="fa fa-facebook facebook"></Link>
                  </li>
                  <li>
                    <Link to="#" className="fa fa-twitter twitter"></Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="fa fa-google-plus googleplus"
                    ></Link>
                  </li>
                </ul>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-3 about-team-grids">
              <img src={imagePath + "t1.jpg"} alt="" />
              <div className="team-w3lstext">
                <h4>
                  <span>JESSICA,</span> Supervisior
                </h4>
                <p>
                  Odio dignissimos vero eos voluptatem accusantium doloremque
                  laudantium reader will be distracted.
                </p>
              </div>
              <div className="social-icons caption">
                <ul>
                  <li>
                    <Link to="#" className="fa fa-facebook facebook"></Link>
                  </li>
                  <li>
                    <Link to="#" className="fa fa-twitter twitter"></Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="fa fa-google-plus googleplus"
                    ></Link>
                  </li>
                </ul>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-3 about-team-grids">
              <img src={imagePath + "t3.jpg"} alt="" />
              <div className="team-w3lstext">
                <h4>
                  <span>RACKHAM,</span> Staff
                </h4>
                <p>
                  Odio dignissimos vero eos voluptatem accusantium doloremque
                  laudantium reader will be distracted.
                </p>
              </div>
              <div className="social-icons caption">
                <ul>
                  <li>
                    <Link to="#" className="fa fa-facebook facebook"></Link>
                  </li>
                  <li>
                    <Link to="#" className="fa fa-twitter twitter"></Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="fa fa-google-plus googleplus"
                    ></Link>
                  </li>
                </ul>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
