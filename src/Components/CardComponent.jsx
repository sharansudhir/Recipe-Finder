import React, { Component } from "react";
import "./CardComponent.css";

class CardComponent extends Component {
  state = {
    title: this.props.title,
    image: this.props.image,
    calories: this.props.calories,
  };
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.state.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h4>{this.state.title}</h4>
          <h4>Calories: {this.state.calories}</h4>
        </div>
      </div>
    );
  }
}

export default CardComponent;
