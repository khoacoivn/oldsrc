import React, { Component } from "react";
import AboutUs from "./HomePages/AboutUs";
import Banner from "./HomePages/Banner";
import Header from "./HomePages/Header";
import Numbers from "./HomePages/Numbers";
import Service from "./HomePages/Service";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Service />
        <AboutUs />
        <Numbers />
      </div>
    );
  }
}
