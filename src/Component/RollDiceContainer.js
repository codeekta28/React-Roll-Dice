import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDiceContainer.css";

export class RollDiceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 0,
      dice2: 0,
      isShaking: false,
      
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const diceNum1 = Math.floor(Math.random() * 6);
    const diceNum2 = Math.floor(Math.random() * 6);
    this.setState({
      isShaking: true,
      btnText:"Rolling...",
      
    });
    // shaking stops after 2sec
    setTimeout(() => {
      this.setState({
        isShaking: false,
        dice1: diceNum1,
        dice2: diceNum2,
        btnText:"Roll Dice"
      });
    }, 2000);
  }
  render() {
    const { dice1, dice2, isShaking } = this.state;
    const btnText=isShaking?"Rolling...":"Roll Dice"
    const btnStyle=isShaking && "btnStyle"

    return (
      <div className="RollDiceContainer">
        <Dice diceFace={dice1} isShaking={isShaking} />
        <Dice diceFace={dice2} isShaking={isShaking} />
        <div className="diceRollButton">
          <button className={btnStyle} disabled={isShaking} onClick={this.handleClick}>{btnText}</button>
        </div>
      </div>
    );
  }
}

export default RollDiceContainer;
// things i searched
// <button disabled="true">It will disable the buttom</button>
// <button disabled="false">It will enable the button</button>
