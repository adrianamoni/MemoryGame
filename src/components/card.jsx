import React, { Component } from "react";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  clicked(card) {
    this.props.click(card);
  }
  render() {
    return (
      <div
        className={
          "card" +
          (!this.props.close ? " opened" : "") +
          (this.props.complete ? " matched" : "")
        }
        onClick={() => this.clicked(this.props.card)}
      >
        <div className="front">Card</div>
        <div className="back">
          <img src={this.props.card.avatar_url} alt="" />
        </div>
      </div>
    );
  }
}

export default Card;
