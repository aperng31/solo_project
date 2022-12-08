import React from 'react';
import Gifinstance from './Gifinstance.jsx';

class Board extends React.Component {

  componentDidUpdate() {
    console.log('board update');
  }
  render() {
    const gifArray = [];
    const pieceList = this.props.pieceList;
    for(let i = 0; i < pieceList.length; i++) {
      const newGif = <Gifinstance data={ pieceList[i] } deleteMode={ this.props.deleteMode } 
      deleteGif={ this.props.deleteGif } updateLoc={ this.props.updateLoc }
      />
      gifArray.push(newGif);
    }

    return (
      <div id='board'>
        { gifArray }
      </div>
    )
  }
}

export default Board;
