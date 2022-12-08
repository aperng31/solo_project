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
      author: '',
      pieceName: '',
      pieceList: [],
      width: '150px',
      deleteMode: false,
      inputMode: true, //true === gif, false === draw
    }
    this.canvasRef = React.createRef();

    this.copyGif = this.copyGif.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.deleteGif = this.deleteGif.bind(this);
    this.savePiece = this.savePiece.bind(this);
    this.updateLoc = this.updateLoc.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.toggleGifDraw = this.toggleGifDraw.bind(this);
  }

  copyGif(url) {
    const key = uniqid();
    const newPiece = {url: url, xCoor: '0px', yCoor: '0px', key: key, id: key, width: this.state.width};
    this.setState({pieceList: this.state.pieceList.concat(newPiece)})
  }

  toggleDelete(e) {
    // const banner = document.getElementById('banner'); dont need to declare var, var references id?!?
    banner.classList.add('show-mode');
    if(this.state.deleteMode) {
      banner.innerHTML = 'Delete Gif Off';
      e.target.classList.remove('pressed')
    } 
    else{ 
      banner.innerHTML = 'Delete Gif Active';
      e.target.classList.add('pressed')
    }
    setTimeout(() => {
      banner.innerHTML = '';
      banner.classList.remove('show-mode');
    }, 3000);
    this.setState({ deleteMode: !this.state.deleteMode })
  }

  toggleGifDraw(e) {
    banner.classList.add('show-mode');
    if(this.state.inputMode) { //true = currently gif-mode, switch to draw-mode
      e.target.classList.remove('gif-mode')
      e.target.classList.add('draw-mode')
      banner.innerHTML = 'Draw-mode'
    }
    else {
      e.target.classList.remove('draw-mode')
      e.target.classList.add('gif-mode')    
      banner.innerHTML = 'Gif-mode'
    }
    this.canvasRef.current.toggleBoardCanvas();
    setTimeout(() => {
      banner.innerHTML = '';
      banner.classList.remove('show-mode');
    }, 3000);
    this.setState({inputMode: !this.state.inputMode})
  }

  deleteGif(id) {
    if(this.state.deleteMode) {
      const newPieceList = this.state.pieceList.filter(el => id !== el.id);
      this.setState({ pieceList: newPieceList })      
    }
  }

  updateLoc(coords, id) {
    const newPieceList = this.state.pieceList.map(el => {
      if(id === el.id) {
        el.xCoor = coords[0];
        el.yCoor = coords[1];
      }
      return el;
    })
    this.setState({ pieceList: newPieceList });
  }

  updateWidth(value) {
    this.setState({width: `${value}px`})
  }

  // saveDrawing() {
  //   this.canvasRef.current.saveDrawing();
  // }

  async savePiece() {
    const data = await this.canvasRef.current.saveDrawing()
      // console.log(data);
      // console.log('after data')
    // const banner = document.getElementById('banner');
    if(this.state.pieceList.length === 0) {
      banner.innerHTML = 'Need atleast one GIF';
      banner.classList.add('needGif');
      setTimeout(() => {
        banner.innerHTML = '';
        banner.classList.remove('needGif');
      }, 4000);
      return
    }
    const body = {gifList: this.state.pieceList, author: 'Alan', pieceName: 'helloworld', backgroundData: data };
    const requestOptions = {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)};
    fetch('/api', requestOptions)
      .then(res => {
        if(res.status === 200) {
          banner.innerHTML = 'Artwork saved!';
          banner.classList.add('saved');
          setTimeout(() => {
            banner.innerHTML = '';
            banner.classList.remove('saved');
          }, 4000);
        }
      })
      .catch(err => console.log('ERROR: ', err));      

  }

  render() {
    
    return (
      <div id='app-body'>
        <Sidepanel copyGif={ this.copyGif } updateWidth={ this.updateWidth }/>
        <div id='main-container'>
          <Header toggleDelete={ this.toggleDelete } deleteGif={ this.deleteGif }
          savePiece={ this.savePiece } toggleGifDraw={ this.toggleGifDraw }/>
          <Board copyGif={ this.copyGif } deleteMode={ this.state.deleteMode } 
          pieceList={ this.state.pieceList } deleteGif={ this.deleteGif } 
          updateLoc={ this.updateLoc } ref={ this.canvasRef } inputMode={ this.state.inputMode}
          />          
        </div>

      </div>
    )
  }
}

export default Draw;
