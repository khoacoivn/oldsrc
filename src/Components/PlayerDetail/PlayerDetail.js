import React, { Component } from "react";
import "../../assets/css/playerDetail.css";
import ConnectUs from "../HomePages/ConnectUs";
import Numbers from "../HomePages/Numbers";
import ItemPlayer from "../Players/ItemPlayer";
import { players } from "../Players/Players";
import LocationHeader from "../SignUp/LocationHeader";
import ItemDetail from "./ItemDetail";

export default class PlayerDetail extends Component {
  renderListPlayer = () => {
    return players.map((item, index) => {
      return <ItemPlayer data={item} key={index} />;
    });
  };
  render() {
    return (
      <div>
        <LocationHeader title={"Player Detail"} location={"Player Detail"} />

        <div className="player__detail">
          <div className="container">
            <div className="playerDetail__content">
              <ItemDetail />
            </div>
          </div>
        </div>

        <div className="players__content playerDetail__list">
          <div className="container">
            <div className="players__list row ">{this.renderListPlayer()}</div>
          </div>
        </div>

        <Numbers />
        <ConnectUs />
      </div>
    );
  }
}
