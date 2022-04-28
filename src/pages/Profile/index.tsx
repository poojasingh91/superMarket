import { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Breadcrumb from "../../components/Breadcrumb";
import { profileApiUrl, apiKey } from "../../config";
import { accessToken } from "../../helpers";

class Profile extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      profile: {
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        image: "",
      },
    };

    // to use 'this' object from these handlers, needs to bind first
    this.handleChange = this.handleChange.bind(this);
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
        const profile = {
          email: data.data.email,
          username: data.data.username,
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          mobileNumber: data.data.mobileNumber,
          image: data.data.image,
        };
        this.setState({
          profile: profile,
        });
      })
      .catch((error) => {
        toast("Failed to fetch data! Please try again", { type: "warning" });
        console.error(error);
      });
  }

  // since input fields are populated by state value, also update state
  handleChange(e: any) {
    const profile = { ...this.state.profile };
    if (e.target.id === "firstname") {
      profile.firstName = e.target.value;
    } else if (e.target.id === "lastname") {
      profile.lastName = e.target.value;
    } else if (e.target.id === "email") {
      profile.email = e.target.value;
    } else if (e.target.id === "mobile_number") {
      profile.mobileNumber = e.target.value;
    }
    this.setState({
      profile,
    });
  }

  handleSubmit(e: any) {
    // submit udpated data
    e.preventDefault();
    const formdata = {
      "first-name": e.target.firstname.value,
      "last-name": e.target.lastname.value,
    };

    fetch(profileApiUrl, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + accessToken,
        "Api-key": apiKey,
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          toast("Profile Updated Successfully ", { type: "success" });
        } else {
          toast("Failed to update the profile! Please try again", {
            type: "error",
          });
        }
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        toast("Failed to update the profile! Please try again", {
          type: "error",
        });
      });
  }

  render() {
    // read corresponding properties from current profile to show in html element
    const { email, firstName, lastName, mobileNumber } = this.state.profile;
    return (
      <>
        <Breadcrumb name="My Profile" />
        {/* login */}
        <div className="login">
          <div className="container">
            <h2>Update Profile</h2>

            <div
              className="login-form-grids animated wow slideInUp"
              data-wow-delay=".5s"
            >
              <form onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name..."
                    value={firstName}
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name..."
                    value={lastName}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={this.handleChange}
                  disabled
                />
                <input
                  type="number"
                  id="mobile_number"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  maxLength={10}
                  value={mobileNumber}
                  onChange={this.handleChange}
                  disabled
                />

                <input type="submit" value="Update" />
              </form>

              <div className="forgot change-pw">
                <Link to="/changepassword">Change Password</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
