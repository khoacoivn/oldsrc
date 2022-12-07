import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/locationHeader.css";

export default class LocationHeader extends Component {
  render() {
    let { title, location } = this.props;
    return (
      <>
        <div className="signIn__title text-center">
          <div className="container pt-5">
            <h1>{title}</h1>
            <ul className="location d-flex justify-content-center">
              <li>
                <NavLink to="/">
                  <a href="#">Home</a>
                </NavLink>
              </li>
              <li>
                <span>//</span>
              </li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
