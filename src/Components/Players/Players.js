import React, { Component } from "react";
import "../../assets/css/Players.css";
import ConnectUs from "../HomePages/ConnectUs";
import LocationHeader from "../SignUp/LocationHeader";
import ItemPlayer from "./ItemPlayer";

const players = [
  {
    name: "THUNDERMAN",
    avatar: "/img/player1.png",
    level: "80 LEVEL COMPLETED",
  },
  {
    name: "LION KING",
    avatar: "/img/player2.png",
    level: "36 LEVEL COMPLETED",
  },
  {
    name: "WOLF SMART",
    avatar: "/img/player3.png",
    level: "40 LEVEL COMPLETED",
  },
  {
    name: "JOHNNYBRAVO",
    avatar: "/img/player4.png",
    level: "90 LEVEL COMPLETED",
  },
  {
    name: "GAMER_XBOY",
    avatar: "/img/player5_2.png",
    level: "75 LEVEL COMPLETED",
  },
  {
    name: "WARRIOR-782",
    avatar: "/img/player6.png",
    level: "102 LEVEL COMPLETED",
  },
];

export default class Players extends Component {
  renderListPlayer = () => {
    return players.map((item, index) => {
      return <ItemPlayer data={item} key={index} />;
    });
  };

  render() {
    return (
      <div>
        <LocationHeader title="Players" location="Players" />

        <div className="players__content">
          <div className="container">
            <div className="players__list row ">{this.renderListPlayer()}</div>
          </div>
        </div>

        <ConnectUs />
      </div>
    );
  }
}
