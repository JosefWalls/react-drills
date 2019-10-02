import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
        super()

    this.state = {
       userInput: ""
    }
  
  }
  handleChange (value){
    this.setState({userInput: value})
  }
    
  
  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange (e.target.value)}></input>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
