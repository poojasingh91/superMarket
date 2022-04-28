import { Component } from "react";
import { toast } from "react-toastify";

import Breadcrumb from "../../components/Breadcrumb";

import { profileApiUrl, apiKey } from "../../config";
import { isLoggedIn } from "../../helpers";

class ChangePassword extends Component {
  // Change password data submit handler, parameter is form submit event
  handleSubmit(e: any) {
    e.preventDefault();
    const formdata = {
      "old-password": e.target.opassword.value,
      "new-password": e.target.npassword.value,
      "confirm-password": e.target.cpassword.value,
    };
    const changePWUrl = profileApiUrl + "/change-password";

    fetch(changePWUrl, {
      method: "POST",
      // headers is as per API's rules
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + isLoggedIn(),
        "Api-key": apiKey,
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.errors) {
          toast("Password Changed Successfully ", { type: "success" });
        }
        console.log(data);
      })
      .then((error) => {
        console.error(error);
        toast("Failed to change the password! Please try again", {
          type: "error",
        });
      });
  }

  render() {
    // redirect to login page if not LoggedIn
    if (!isLoggedIn()) {
      window.location.href = "/login";
    }
    return (
      <>
        {/* render breadcrub */}
        <Breadcrumb name="Change Password Page" />
        {/* render change password */}
        <div className="login">
          <div className="container">
            <h2>Change Password Form</h2>
            <div
              className="login-form-grids animated wow slideInUp"
              data-wow-delay=".5s"
            >
              <form onSubmit={this.handleSubmit}>
                <input
                  type="password"
                  id="opassword"
                  name="opassword"
                  placeholder="Current Password"
                  required
                />
                <input
                  type="password"
                  id="npassword"
                  name="npassword"
                  placeholder="New Password"
                  required
                />
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  placeholder="Password Confirmation"
                  required
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ChangePassword;
