import React from 'react';

class Gifbox extends React.Component {
  render() {

    return (
      <img className='gif-list' src={ this.props.url } onClick={ () => this.props.copyGif(this.props.url) }></img>
    )
  }
}

export default Gifbox