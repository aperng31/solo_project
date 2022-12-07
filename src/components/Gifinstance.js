import React from 'react';
import Draggable from 'react-draggable';

class Gifinstance extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  handleDeleteClick(e) {
    // console.log(this.props.deleteGif)
    this.props.deleteGif(this.props.id)
  }
  render() {
    return (
      <Draggable bounds='parent'>
        <img className='gif-list my-gif' onClick={ this.handleDeleteClick } src={ this.props.url } draggable={ false } ></img>
      </Draggable>
    )
  }
}

export default Gifinstance