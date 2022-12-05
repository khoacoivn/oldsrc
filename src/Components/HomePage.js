import React, { Component } from "react";
import AboutUs from "./HomePages/AboutUs";
import MoveToTop from "./HomePages/MoveToTop";
import Banner from "./HomePages/Banner";
import Blog from "./HomePages/Blog";
import ClientComment from "./HomePages/ClientComment";
import ConnectUs from "./HomePages/ConnectUs";
import Footer from "./HomePages/Footer";
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
        <Blog />
        <ConnectUs />
        <Footer />
        <MoveToTop />
      </div>
    );
  }
}
