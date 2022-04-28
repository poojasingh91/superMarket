import { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { toast } from "react-toastify";

interface Props {
  appInfo: any;
}
class Contact extends Component<Props> {
  // handler to submit contact info
  handleSubmit(e: any) {
    e.preventDefault();
    toast("Work in progress", { type: "info" });
  }
  render() {
    const { appInfo } = this.props;

    return (
      <>
        <Breadcrumb name="Contact" />
        <div className="about">
          <div className="w3_agileits_contact_grids">
            <div className="col-md-6 w3_agileits_contact_grid_left">
              <div className="agile_map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3905851087434!2d-34.90500565012194!3d-8.061582082752993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d90992e4ab%3A0x8e83c4afabe39a3a!2sSport+Club+Do+Recife!5e0!3m2!1sen!2sin!4v1478684415917"
                ></iframe>
              </div>
              <div className="agileits_w3layouts_map_pos">
                <div className="agileits_w3layouts_map_pos1">
                  <h3>Contact Info</h3>
                  <p>{appInfo && appInfo.pageData["section1 address"]}</p>
                  <ul className="wthree_contact_info_address">
                    <li>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <Link to="mailto:info@example.com">
                        {appInfo && appInfo.pageData["section1 email"]}
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      {appInfo && appInfo.pageData.phone}
                    </li>
                  </ul>
                  <div className="w3_agile_social_icons w3_agile_social_icons_contact">
                    <ul>
                      <li>
                        <Link
                          to={appInfo && appInfo.pageData.facebook}
                          className="icon icon-cube agile_facebook"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          to={appInfo && appInfo.pageData.instagram}
                          className="icon icon-cube agile_instagram"
                        ></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 w3_agileits_contact_grid_right">
              <h2 className="w3_agile_header">
                Leave a<span> Message</span>
              </h2>
              <form action="#" method="post" onSubmit={this.handleSubmit}>
                <span className="input input--ichiro">
                  <input
                    className="input__field input__field--ichiro"
                    type="text"
                    id="input-25"
                    name="Name"
                    placeholder=" "
                    required
                  />
                  <label
                    className="input__label input__label--ichiro"
                    htmlFor="input-25"
                  >
                    <span className="input__label-content input__label-content--ichiro">
                      Your Name
                    </span>
                  </label>
                </span>
                <span className="input input--ichiro">
                  <input
                    className="input__field input__field--ichiro"
                    type="email"
                    id="input-26"
                    name="Email"
                    placeholder=" "
                    required
                  />
                  <label
                    className="input__label input__label--ichiro"
                    htmlFor="input-26"
                  >
                    <span className="input__label-content input__label-content--ichiro">
                      Your Email
                    </span>
                  </label>
                </span>
                <textarea
                  name="Message"
                  placeholder="Your message here..."
                  required
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
