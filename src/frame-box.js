import React from 'react'
import './image-frame.css'

class FrameBox extends React.PureComponent{

    render(){
        let background
        if (this.props.click === false){
            background = "blue"
        } else if (this.props.click === true){
            background = "red"
        } else {
            background = "white"
        }
        return(
        <div id={this.props.i} onClick={this.props.handleClick} className="frame-box" style={{height: this.props.boxDim + "px", width: this.props.boxDim + "px", backgroundColor: background}}>
        </div>
        )
    }
}

export default FrameBox