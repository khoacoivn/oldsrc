import React, { Component } from "react";
import TestSwiper from "./TestSwiper";
import "../../assets/css/Testimonial.css";

export default class ClientComment extends Component {
  render() {
    return (
      <section className="testimonial">
        <div className="container">
          <div className="testimonial__content">
            <div className="testimonial__title">
              <p>Testimonial</p>
              <h2>What Our Clients Say’s</h2>
            </div>

            <div className="testimonial__detail">
              <TestSwiper />
            </div>
          </div>
        </div>
      </section>
    );
  }
}