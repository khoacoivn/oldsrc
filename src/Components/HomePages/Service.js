import React, { Component } from "react";
import "../../assets/css/service.css";

export default class Service extends Component {
  render() {
    return (
      <section class="service">
        <div class="container">
          <div class="service__title">
            <p>What We Do Best</p>
            <h2>Our Digital Services</h2>
          </div>

          <div class="service__content">
            <div class="service__item item1">
              <img
                src="https://htmldemo.net/bonx/bonx/assets/img/others/gaming-world2.webp"
                alt="service__image"
              />
              <h3>Live Streaming</h3>
              <p>
                Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
                lacus magna, rhoncus quis magna quis.
              </p>
            </div>

            <div class="service__item item2">
              <img
                src="https://htmldemo.net/bonx/bonx/assets/img/others/gaming-world2.webp"
                alt="service__image"
              />
              <h3>Game news</h3>
              <p>
                Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
                lacus magna, rhoncus quis magna quis.
              </p>
            </div>

            <div class="service__item item3">
              <img
                src="https://htmldemo.net/bonx/bonx/assets/img/others/gaming-world2.webp"
                alt="service__image"
              />
              <h3>Game tournaments</h3>
              <p>
                Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
                lacus magna, rhoncus quis magna quis.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
