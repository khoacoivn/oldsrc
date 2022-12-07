import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/signUp.css";
import signUpImage from "../../assets/img/signUp.webp";
import Button from "../HomePages/Button";

export default class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="signUp__title text-center">
          <div className="container pt-5">
            <h1>Sign Up</h1>
            <ul className="location d-flex justify-content-center">
              <li>
                <NavLink to="/">
                  <a href="#">Home</a>
                </NavLink>
              </li>
              <li>
                <span>//</span>
              </li>
              <li>Pages</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="signUp__content row justify-content-between align-items-center">
            <div className="content__left col-lg-6 col-md-8 col-12 mx-auto mb-50">
              <img src={signUpImage} alt="" />
            </div>

            <div className="content__right col-lg-5 col-md-8 col-12 mx-auto mb-50">
              <div className="section_title text-center">
                <h2>Signup</h2>
              </div>
              <div className="form_input">
                <input name="signup_name" placeholder="Name" type="text" />
              </div>
              <div className="form_input">
                <input name="signup_email" placeholder="Email" type="email" />
              </div>
              <div className="form_input">
                <input
                  name="signup_password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="form_input">
                <input
                  name="signup_password"
                  placeholder="Retype Password"
                  type="password"
                />
              </div>
              <div className="form_input_btn text-center">
                <Button value={"Sign Up"} id={"signUp_Btn"} />
              </div>
              <p className="haveAccount text-center">
                Already have account,
                <NavLink to="/signin">
                  <a href="#"> Login here</a>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
