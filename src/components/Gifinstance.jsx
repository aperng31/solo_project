import React from 'react';
import Draggable from 'react-draggable';
import { toCSS, toJSON } from 'cssjson';

class Gifinstance extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getXYcoords = this.getXYcoords.bind(this);

    this.myRef = React.createRef();
  }
  handleClick(e) {
    if(this.props.deleteMode) {
      this.props.deleteGif(this.props.data.id)      
    }
    else {
      const coords = this.getXYcoords(e);
      this.props.updateLoc(coords, this.props.data.id);      
    }
  }

  getXYcoords(e) {
    let transformStr = toJSON(e.target.style.cssText).attributes.transform;
    let newStr = transformStr.slice(10, -1);
    let xcoo = '';
    let ycoo = '';
    let xToY = false;
    for(let i = 0; i < newStr.length; i++) {
      if(newStr[i] === ',') {
        i++;
        xToY = true;
      }
      else {
        xToY ? ycoo += newStr[i] : xcoo += newStr[i];
      }
    }
    return [xcoo, ycoo];
  }

  componentDidUpdate() {
    const myImg = this.myRef.current; //deal with delete bug that gif go to previous gif's spot
    myImg.style.transform = `translate(${this.props.data.xCoor}, ${this.props.data.yCoor})`
  }
  render() {
    return (
      <Draggable bounds='parent'>
        <img className='gif-list my-gif' onClick={ (e) => {this.handleClick(e)} } 
        src={ this.props.data.url } style={{ 'width':this.props.data.width }} 
        draggable={ false } ref={ this.myRef }
        ></img>
      </Draggable>
    )
  }
}

export default Gifinstance