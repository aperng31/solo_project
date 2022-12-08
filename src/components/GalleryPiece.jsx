import React from 'react';


class GalleryPiece extends React.Component {

  render() {
    const gifArray = this.props.piece;
    const gifLocs = [];
    for(let i = 0; i < gifArray.length; i++) {
      const newGif = <img src={ gifArray[i].url } className='gif-list my-gif' style={{left:gifArray[i].xCoor, top:gifArray[i].yCoor}}></img>
      gifLocs.push(newGif);
    }
    return (
      <div className='gallery-board'>
        { gifLocs }
      </div>
    )
  }
}

export default GalleryPiece;