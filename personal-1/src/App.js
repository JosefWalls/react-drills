import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      drivers: ["Leclerc ", "Hamiltion ", "Bottas ", "Vettel ", "Sainz ", "Hulkenberg ", "Norris ", "Grosjean ", 
      "Verstappen ", "Ricciardo ", "Perez ", "Giovinazzi ", "Magnussen ", "Stroll ", "Raikkonen ", "Gasly ", "Russel ", 
      "Kubica ", "Kvyat ", "Albon "],
      outOnTrack: ["Leclerc ", "Hamiltion ", "Bottas ", "Vettel ", "Sainz ", "Hulkenberg ", "Norris ", "Grosjean ", 
      "Verstappen ", "Ricciardo ", "Perez ", "Giovinazzi ", "Magnussen ", "Stroll ", "Raikkonen ", "Gasly ", "Russel ", 
      "Kubica ", "Kvyat ", "Albon "],
      pitLane: [],
      lap: 0,
      winner: "",
      outOfRace: []
    }

       this.PitLane = this.PitLane.bind(this)
       this.OutOfRace = this.OutOfRace.bind(this)
}

  // PitLane(driver, i){
  //   let onTrack = this.state.outOnTrack;
  //   let inPitlane = this.state.pitLane;

  //   inPitlane.push(onTrack.splice(i, 1));

  //   setTimeout(() => {
  //     onTrack.push(inPitlane.splice(i, 1))
  //   }, 1500);
  // }
    
  PitLane(driver, i){
    let onTrack = this.state.outOnTrack;
    let inPitlane = this.state.pitLane;
    let randomNumber = (Math.floor(Math.random() * this.state.outOnTrack.length))

    inPitlane.push(onTrack.splice(randomNumber, 1))

    setTimeout(() => {
          onTrack.push(inPitlane.splice(i, 1))
        }, 3000);
      }
  

    OutOfRace(driver, i){
      
    }
   render (){

    setTimeout(() => {
      this.setState({lap: this.state.lap + 1})
    }, 3000);
 
     return (
       <div className="App">
         <h1>Lap: {this.state.lap}</h1>
         <h1>Out on track:</h1>
         <list onClick={this.PitLane}>{this.state.outOnTrack}</list>
         <p><b><i>Click any driver to put them in the pit lane.</i></b></p>
         <h1>In Pit Lane:</h1>
         <list>{this.state.pitLane}</list>
         <h1>Out of race</h1>
         <list>{this.state.outOfRace}</list>
         have a function where it adds a random name to this list
         <p>THE WINNER IS: {this.state.winner}</p>
       </div>
     )
   }
}

export default App;
