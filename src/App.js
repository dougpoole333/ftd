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
      clickable: [{i: 144, clicked: false, target: false}, {i: 481, clicked: false, target: false}, {i: 795, clicked: false, target: true}, {i: 435, clicked: false, target: false}, {i: 98, clicked: false, target: false}],
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
        <div className="title">CLICK THE RIGHT DOT</div>
        <ImageFrame x={30} y={30} boxDim={20} handleClick={this.handleClick} clickable={this.state.clickable}/>
        <div className="feedback">
          <div>{this.state.tryAgain ? "TRY AGAIN" : ""}</div>
          <div>{this.state.levelOver ? "NICE!" : ""}</div>
          {this.state.levelOver ? <button onClick={this.resetState}>NEW GAME</button> : ""}
        </div>
      </div>
    );
  }
}

export default App;
