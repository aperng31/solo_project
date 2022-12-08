import React from 'react';
import Gifinstance from './Gifinstance.jsx';
import { ReactSketchCanvas } from 'react-sketch-canvas';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCanvasColor: 'white',
    }
    this.myCanvas = React.createRef();
    this.boardRef = React.createRef();
    this.saveDrawing = this.saveDrawing.bind(this);
    this.toggleBoardCanvas = this.toggleBoardCanvas.bind(this);
  }

  saveDrawing() {
    console.log('saveD')    
    return new Promise(resolve => {
      this.myCanvas.current
      .exportImage("png")
      .then(data => {
        resolve(data);
      })
      .catch(e => {
        console.log(e);
      });      
    })
  }

  toggleBoardCanvas() {
    const myBoard = this.boardRef.current;
    if(this.props.inputMode) { //true = currently gif-mode, switch to draw-mode
      //draw-mode = board&gifs are behind, canvas is transparent
      this.setState({myCanvasColor: 'transparent'})
      myBoard.classList.remove('board-gif-mode')
      myBoard.classList.add('board-draw-mode')
    }
    else {
      //to gif-mode = board&gifs are front and transparent, canvas is white
      this.setState({myCanvasColor: 'white'})
      myBoard.classList.add('board-gif-mode')
      myBoard.classList.remove('board-draw-mode')
    }
    console.log(this.state.myCanvasColor)
  }
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

    const styles = {
      border: '0.0625rem solid #9c9c9c',
      borderRadius: '0.25rem',
    };
    return (
      <div>
        <ReactSketchCanvas
          ref={this.myCanvas}
          strokeWidth={5}
          strokeColor="black"
          canvasColor={ this.state.myCanvasColor }
          width="1100px"
          height="660px"
        />
        <div className="board-gif-mode" id='board' ref={ this.boardRef }>
          { gifArray }
        </div>        
      </div>

    )
  }
}

export default Board;
