import React from 'react';

class SingleGif extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.style);
    return (
      <img className='gif-list my-gif' onClick={ this.handleDeleteClick } src={ this.props.url } draggable={ false } ></img>
    )
  }
}

export default SingleGif;