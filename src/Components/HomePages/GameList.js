import React, { Component } from "react";
import "../../assets/css/gameList.css";

export default class GameList extends Component {
  render() {
    let { img, name } = this.props;
    return (
      <div className="gameList__content col-lg-6 col-md-6">
        <div className={name}>
          <a href="#">
            <img src={img} alt />
          </a>

          <div className="overplay">
            <div className="folio__icon">
              <a href="#" className="btn btn-link">
                <i className="fa fa-plus" />
              </a>
            </div>
            <div className="folio__text">
              <h3>Dinosaurs Game</h3>
              <p>By Jhone Doe</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
