import React from 'react';
import ImageFrame from './image-frame'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.default = {

    }
    this.state = this.initialState
  }

  get initialState() {
    return {
      clickable: [{i: 20, clicked: false, target: false}, {i: 42, clicked: false, target: false}, {i: 77, clicked: false, target: true}, {i: 13, clicked: false, target: false}, {i: 98, clicked: false, target: false}],
      levelOver: false,
      tryAgain: false
    };
  }

  handleClick = (e) => {
    let arr = this.state.clickable
    let id = e.target.id
    if(arr.find(obj => {return(obj.i == id)}) && !this.state.levelOver){
      if (arr[arr.indexOf(arr.find(obj => {return(obj.i == id)}))].target == true){
        arr[arr.indexOf(arr.find(obj => {return(obj.i == id)}))].clicked = true
        this.setState({...{clickable: arr, levelOver: true}})
      } else if (arr[arr.indexOf(arr.find(obj => {return(obj.i == id)}))].target == false){
        arr[arr.indexOf(arr.find(obj => {return(obj.i == id)}))].clicked = true
        this.setState({clickable: arr, tryAgain: true})
        setTimeout(() => {
          arr[arr.indexOf(arr.find(obj => {return(obj.i == id)}))].clicked = false
          this.setState({clickable: arr, tryAgain: false})
        }, 500)
      }
    }
  }

  resetState = () => {
    this.setState(this.initialState)
  }

  render(){
    return (
      <div className="App">
        <ImageFrame x={16} y={8} boxDim={33} handleClick={this.handleClick} clickable={this.state.clickable} tryAgain={this.state.tryAgain} levelOver={this.state.levelOver} resetState={this.resetState}/>
        <div className="feedback" style={this.state.levelOver ? {pointerEvents: "auto"} : {pointerEvents: "none"}}>
          <div>{this.state.tryAgain ? "TRY AGAIN" : ""}</div>
          <div>{this.state.levelOver ? "NICE!" : ""}</div>
          {this.state.levelOver ? <button onClick={this.resetState}>NEW GAME</button> : ""}
        </div>
      </div>
    );
  }
}

export default App;
