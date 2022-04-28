import { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Breadcrumb from "../../components/Breadcrumb";

import { authApiUrl, clientSecret } from "../../config";

class Register extends Component {
  handleRegister(e: any) {
    e.preventDefault();
    // prepare data to submit
    const loginData = {
      first_name: e.target.firstname.value,
      last_name: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value,
      mobile_number: e.target.mobile_number.value,
      tnc: e.target.tnc.value,
      client_secret: clientSecret,
    };

    // validations
    if (loginData.password.length < 6) {
      toast("Password length must be of 6 character!", { type: "warning" });
      return;
    }
    if (loginData.password !== loginData.confirm_password) {
      toast("Password does not match!", { type: "error" });
      return;
    }
    const signUpUrl = authApiUrl + "/signup";

    // post data from SIGN UP API
    fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.data) {
          toast("Registered Successfully!", { type: "success" });
          window.location.href = "/login";
        } else {
          toast("Error Registering User!", { type: "error" });
        }
      })
      .catch((error) => {
        console.error(error);
        toast("Error Registering User!", { type: "error" });
      });
  }

  render() {
    return (
      <>
        <Breadcrumb name="Register" />
        <div className="register">
          <div className="container">
            <h2>Register Here</h2>
            <div className="login-form-grids">
              <h5>profile information</h5>

              <form onSubmit={this.handleRegister}>
                <div>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name..."
                    required
                  />
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name..."
                    required
                  />
                </div>

                <h6>Login information</h6>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Password Confirmation"
                  required
                />
                <input
                  type="number"
                  id="mobile_number"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  maxLength={10}
                  required
                />
                <div className="register-check-box">
                  <div className="check">
                    <label className="checkbox">
                      <input type="checkbox" name="tnc" id="tnc" />
                      <i> </i>I accept the terms and conditions
                    </label>
                  </div>
                </div>
                <input type="submit" value="Register" />
              </form>
            </div>
            <div className="register-home">
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Register;
