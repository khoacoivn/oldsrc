import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo1.png";
import "../../assets/css/header.css";
import Button from "./Button";

export default class Header extends PureComponent {
  render() {
    return (
      <header>
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <a href="../HomePage">
                <img src={Logo} alt="logo" />
                <h3>Gaming</h3>
              </a>
            </div>

            <div className="header__menu">
              <nav>
                <ul>
                  <li>
                    <NavLink to={`/`}>
                      <a href="#">Home</a>
                    </NavLink>
                  </li>
                  <li>
                    <a href="#">Match</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            <NavLink to="/signup">
              <Button value="Sign Up" id="btnSignUp" />
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}
