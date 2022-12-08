import React from 'react';
import Draggable from 'react-draggable';
import { toCSS, toJSON } from 'cssjson';

class Gifinstance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      xCoord: '',
      yCoord: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.getXYcoords = this.getXYcoords.bind(this);
  }
  handleClick(e) {
    this.props.deleteGif(this.props.id)
    const coords = this.getXYcoords(e);
    this.props.updateLoc(coords, this.props.id);
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
    // console.log(xcoo, ycoo);
    // console.log(transformStr, newStr);
  }

  componentDidUpdate() {
    console.log('gifIn update');
  }
  render() {
    return (
      <Draggable bounds='parent'>
        <img className='gif-list my-gif' onClick={ (e) => {this.handleClick(e)} } src={ this.props.url } draggable={ false } ></img>
      </Draggable>
    )
  }
}

export default Gifinstance