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
                    <a href="#">Pages</a>
                    <ul class="sub_menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="all-game.html">All Game</a>
                      </li>
                      <li>
                        <a href="game-details.html">Game Details</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq Page</a>
                      </li>
                      <li>
                        <a href="players.html">Players</a>
                      </li>
                      <li>
                        <a href="player-details.html">Player Details</a>
                      </li>
                      <li>
                        <a href="registration.html">Sign Up</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                    </ul>
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
