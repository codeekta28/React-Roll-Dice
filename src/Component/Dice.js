import React, { Component } from "react";
import "./Dice.css"

export class Dice extends Component {
  static defaultProps = {
    diceSides: ["one", "two", "three", "four", "five", "six"],
  };
  render() {
    const baseUrl = "fas fa-dice-";
    const { diceFace, diceSides,isShaking } = this.props;
    const animate=isShaking&&"shakingAnimation"
    return (
      <div className="dice">
        <i className={`${baseUrl}${diceSides[diceFace]} ${animate}`}></i>
      </div>
    );
  }
}

export default Dice;
