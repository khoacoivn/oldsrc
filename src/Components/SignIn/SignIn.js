import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "../HomePages/Button";
import "../../assets/css/SignIn.css";
import signInImage from "../../assets/img/signUp.webp";
import LocationHeader from "../SignUp/LocationHeader";

export default class SignIn extends Component {
  render() {
    return (
      <div className="signIn">
        <LocationHeader title="Sign In" location="Pages" />

        <div className="container">
          <div className="signIn__content row justify-content-between align-items-center">
            <div className="content__left col-lg-6 col-md-8 col-12 mx-auto mb-50">
              <img src={signInImage} alt="" />
            </div>

            <div className="content__right col-lg-5 col-md-8 col-12 mx-auto mb-50">
              <div className="section_title text-center">
                <h2>Sign In</h2>
              </div>
              <div className="form_input">
                <input name="signIn_email" placeholder="Email" type="email" />
              </div>
              <div className="form_input">
                <input
                  name="signIn_password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="form_input_btn text-center">
                <Button value={"Sign In"} id={"signIn_Btn"} />
              </div>
              <p className="dontHaveAccount text-center">
                Dont't have any account,
                <NavLink to="/signup">
                  <a href="#"> Sign up here</a>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
