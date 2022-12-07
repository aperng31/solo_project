import React from 'react';
import Gifinstance from './Gifinstance';

class Board extends React.Component {

  render() {

    return (
      <div id='board'>
        { this.props.state.gifArray }
      </div>
    )
  }
}

export default Board;
