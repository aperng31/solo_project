import React from 'react';
import Sidepanel from './Sidepanel.jsx';
import Board from './Board.jsx';
import Gifinstance from './Gifinstance.jsx';
import uniqid from 'uniqid';
import Header from './Header.jsx';
import deleteIcon from '../icons/delete.png';
import { Link } from 'react-router-dom';

class Draw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // gifArray: [],
      pieceList: [],
      deleteMode: false,
    }
    this.boardRef = React.createRef();

    this.copyGif = this.copyGif.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.deleteGif = this.deleteGif.bind(this);
    this.savePiece = this.savePiece.bind(this);
    this.updateLoc = this.updateLoc.bind(this);
  }

  copyGif(url) {
    const key = uniqid();
    const newPiece = {url: url, xCoor: '0px', yCoor: '0px', key: key, id: key};
    // console.log(newPiece);
    this.setState({pieceList: this.state.pieceList.concat(newPiece)})
  }

  toggleDelete(e) {
    this.state.deleteMode ? e.target.classList.remove('pressed') : e.target.classList.add('pressed')
    this.setState({ deleteMode: !this.state.deleteMode })
  }

  deleteGif(id) {
    if(this.state.deleteMode) {
      const newPieceList = this.state.pieceList.filter(el => id !== el.id);
      this.setState({pieceList: newPieceList})      
    }
  }

  updateLoc(coords, id) {
    const newPieceList = this.state.pieceList.map(el => {
      if(id === el.id) {
        console.log('in if' + el.id);
        el.xCoor = coords[0];
        el.yCoor = coords[1];
      }
      return el;
    })
    this.setState({ pieceList: newPieceList });
  }

  savePiece() {
    const requestOptions = {method: 'POST', header: { 'Content-Type': 'application/json' }, body: this.state.pieceList};
    console.log(this.state.pieceList);
  }

  render() {
    
    return (
      <div id='app-body'>
        <Sidepanel copyGif={ this.copyGif }/>
        <div id='main-container'>
          <Header toggleDelete={ this.toggleDelete } deleteGif={ this.deleteGif } savePiece={ this.savePiece }/>
          <Board copyGif={ this.copyGif } pieceList={ this.state.pieceList } deleteGif={ this.deleteGif } updateLoc={ this.updateLoc }/>          
        </div>

      </div>
    )
  }
}

export default Draw;
