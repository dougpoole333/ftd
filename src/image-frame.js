import React from 'react'
import FrameBox from './frame-box'
import './image-frame.css'

class ImageFrame extends React.Component{

    renderGrid = () =>{
        let arr = [...Array(this.props.x * this.props.y)]
        let indexes = this.props.clickable.map(el => el.i)
        let grid = arr.map((el, i) => {
            if(indexes.includes(i)){
                return(<FrameBox i={i} key={i} boxDim={this.props.boxDim} handleClick={this.props.handleClick} click={this.props.clickable.find(obj => {return obj.i === i}).clicked}/>)
            }
            return(<FrameBox i={i} key={i} handleClick={this.props.handleClick} boxDim={this.props.boxDim}/>)
        })
        return(grid)
    }


    render(){
        let height = this.props.y * (this.props.boxDim)
        let width = this.props.x * (this.props.boxDim)
        return(
        <div className="image-frame" style={{height: height + "px", width: width + "px"}}>
            {this.renderGrid()}
        </div>
        )
    }
}

export default ImageFrame