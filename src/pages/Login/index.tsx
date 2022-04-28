import { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { authApiUrl, ClientId, clientSecret, apiKey } from "../../config";
import Breadcrumb from "../../components/Breadcrumb";
import { accessToken, isLoggedIn } from "../../helpers";

class Login extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      forgotPWClick: false,
    };
    // to use 'this' object from these handlers, needs to bind first
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: any) {
    e.preventDefault();

    if (this.state.forgotPWClick) {
      const forgotPasswordUrl = authApiUrl + "/forgot-password";

      fetch(forgotPasswordUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
          "Api-key": apiKey,
        },
        body: JSON.stringify({ email: e.target.emailfp.value }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.data) {
            toast("You will be sent email soon ", { type: "info" });
          } else {
            toast("Request failed!", { type: "error" });
          }
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
          toast("Request failed!", { type: "error" });
        });
    } else {
      let loginData = {
        grant_type: "password",
        email: e.target.email.value,
        username: e.target.email.value,
        client_id: ClientId,
        client_secret: clientSecret,
        password: e.target.password.value,
      };
      const loginUrl = authApiUrl + "/login";
      fetch(loginUrl, {
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
          if (data.expires_in) {
            toast("Your are logged in successfully!", { type: "success" });
            this.props.handleSetAccessToken(data);
          } else {
            toast("Login failed!", { type: "error" });
          }
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
          toast("Login failed!", { type: "error" });
        });
    }
  }

  handleForgotPassword(e: any) {
    this.setState({ forgotPWClick: !this.state.forgotPWClick });
  }

  render() {
    return (
      <>
        <Breadcrumb name="Login Page" />
        {/* login */}
        <div className="login">
          <div className="container">
            <h2>Login Form</h2>

            <div
              className="login-form-grids animated wow slideInUp"
              data-wow-delay=".5s"
            >
              <form onSubmit={this.handleSubmit}>
                {!this.state.forgotPWClick && (
                  <>
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
                  </>
                )}
                <div className="forgot">
                  <div className="fgt-password">
                    <label>
                      <b>
                        {this.state.forgotPWClick ? (
                          <div onClick={this.handleForgotPassword}>
                            <div style={{ marginBottom: "20px" }}>
                              Back to Login
                            </div>
                          </div>
                        ) : (
                          <div onClick={this.handleForgotPassword}>
                            Forgot Password?
                          </div>
                        )}
                      </b>
                    </label>
                  </div>
                  {this.state.forgotPWClick && (
                    <div className="forgot-pw">
                      <div style={{ marginBottom: "10px" }}>
                        Forgot Password
                      </div>
                      <p>
                        An email will be sent to the following email address the
                        email address is already registerd.
                      </p>
                      <input
                        type="email"
                        id="emailfp"
                        name="emailfp"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  )}
                </div>
                <input
                  type="submit"
                  value={this.state.forgotPWClick ? "Submit" : "Login"}
                />
              </form>
            </div>
            <h4>For New People</h4>
            <p>
              <Link to="/register">Register Here</Link> (Or) go back to{" "}
              <Link to="/">
                Home
                <span
                  className="glyphicon glyphicon-menu-right"
                  aria-hidden="true"
                ></span>
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
