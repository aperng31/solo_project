import React from 'react';
import Gifinstance from './Gifinstance.jsx';

class Board extends React.Component {

  componentDidUpdate() {
    console.log('board update');
    console.log(this.props.pieceList[0].xCoor)
  }
  render() {
    const gifArray = [];
    const pieceList = this.props.pieceList;
    console.log(pieceList[0]);
    for(let i = 0; i < pieceList.length; i++) {
      const newGif = <Gifinstance url={ pieceList[i].url } id={ pieceList[i].id } width={ pieceList[i].width } deleteMode={ this.props.deleteMode } deleteGif={ this.props.deleteGif } updateLoc={ this.props.updateLoc }/>
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
