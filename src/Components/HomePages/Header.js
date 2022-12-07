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
                <ul className="d-flex">
                  <li>
                    <NavLink to={`/`}>
                      <a href="#" className="mainPages">
                        Home
                      </a>
                    </NavLink>
                  </li>

                  <li>
                    <a href="#" className="mainPages">
                      Pages
                    </a>
                    <ul class="sub_menu">
                      <li className="sub__pages">
                        <a href="#">About Us</a>
                      </li>
                      <li className="sub__pages">
                        <a href="#">All Game</a>
                      </li>
                      <li className="sub__pages">
                        <a href="#">Game Details</a>
                      </li>
                      <li className="sub__pages">
                        <a href="#">Players</a>
                      </li>
                      <li className="sub__pages">
                        <a href="#">Player Details</a>
                      </li>
                      <li className="sub__pages">
                        <NavLink to="/signup">
                          <a href="#">Sign Up</a>
                        </NavLink>
                      </li>
                      <li className="sub__pages">
                        <NavLink to="/signin">
                          <a href="#">Login</a>
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#" className="mainPages">
                      Blogs
                    </a>
                  </li>

                  <li>
                    <a href="#" className="mainPages">
                      Contact
                    </a>
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
