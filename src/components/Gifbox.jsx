import React from 'react';

class Gifbox extends React.Component {
  render() {

    return (
      <img className='gif-panel' src={ this.props.url } onClick={ () => this.props.copyGif(this.props.url) }></img>
    )
  }
}

export default Gifbox