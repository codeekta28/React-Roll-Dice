import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import RollDiceContainer from "./Component/RollDiceContainer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is Roll Dice Project</h1>
        <RollDiceContainer/>
      </div>
    );
  }
}

export default App;
