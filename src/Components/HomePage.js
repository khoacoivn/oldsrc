import React, { Component } from "react";
import AboutUs from "./HomePages/AboutUs";
import Banner from "./HomePages/Banner";
import Blog from "./HomePages/Blog";
import ClientComment from "./HomePages/ClientComment";
import ConnectUs from "./HomePages/ConnectUs";
import Numbers from "./HomePages/Numbers";
import PopularGame from "./HomePages/PopularGame";
import Service from "./HomePages/Service";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Service />
        <AboutUs />
        <Numbers />
        <PopularGame />
        <ClientComment />
        <Blog />
        <ConnectUs />
      </div>
    );
  }
}
