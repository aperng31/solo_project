import React from 'react';


class GalleryPiece extends React.Component {

  render() {
    const gifArray = this.props.piece;
    const gifLocs = [];
    for(let i = 0; i < gifArray.length; i++) {
      const newGif = <img src={ gifArray[i].url } className='gif-board' style={{left:gifArray[i].xCoor, top:gifArray[i].yCoor, width:gifArray[i].width}}></img>
      gifLocs.push(newGif);
    }
    return (
      <div className='gallery-piece'>
        <div className='artist-title'>
          <h3><span>Title:</span> { this.props.pieceTitle } </h3>          
          <h3><span>Artist:</span> { this.props.artist }</h3>
        </div>
        <div className='gallery-board' style={{'backgroundImage': `url(${this.props.data})`}}>
          { gifLocs }
        </div>        
      </div>

    )
  }
}

export default GalleryPiece;