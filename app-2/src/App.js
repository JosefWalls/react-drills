import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      text: ["Taceys", "Hambuga", "Bureto", "Paysta", "HawtDegs"]
    }
  }
  render() {

    let display = this.state.text.map((element, index) =>{
        return <h1>{element}</h1>
    })
    return (
      <div className="App">
        <p>{display}</p>
      </div>
    );
  }
}

export default App;
