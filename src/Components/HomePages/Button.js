import React, { Component } from "react";
import "../../assets/css/button.css";

export default class Button extends Component {
  render() {
    return (
      <div className="btnTem">
        <a href="#" className="btn btn-link" id={this.props.id}>
          {this.props.value}
        </a>
      </div>
    );
  }
}
