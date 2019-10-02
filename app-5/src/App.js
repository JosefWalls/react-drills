import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'https://i.pinimg.com/originals/ae/a0/90/aea09051f192b1c3516ea2cf4ea70a84.jpg'}/>
      </div>
    );
  }
}

export default App;
