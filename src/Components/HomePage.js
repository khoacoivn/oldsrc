import React, { Component } from "react";
import AboutUs from "./HomePages/AboutUs";
import Banner from "./HomePages/Banner";
import ClientComment from "./HomePages/ClientComment";
import Header from "./HomePages/Header";
import Numbers from "./HomePages/Numbers";
import PopularGame from "./HomePages/PopularGame";
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
        <PopularGame />
        <ClientComment />
      </div>
    );
  }
}
