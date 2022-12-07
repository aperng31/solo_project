import React from 'react';
import Sidepanel from './Sidepanel';
import Board from './Board';
import Gifinstance from './Gifinstance';
import uniqid from 'uniqid';
import deleteIcon from '../icons/delete.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifArray: [],
      deleteMode: false,
    }
    this.copyGif = this.copyGif.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.deleteGif = this.deleteGif.bind(this);
  }

  copyGif(url) {
    const key = uniqid();
    const newGif = <Gifinstance url={ url } key={ key } id={ key } state={ this.state } deleteGif={ this.deleteGif }/>
    this.setState({gifArray: this.state.gifArray.concat(newGif) })
  }

  toggleDelete(e) {
    this.setState({ deleteMode: !this.state.deleteMode })
    console.log(this.state.deleteMode);
  }

  deleteGif(id) {
    if(this.state.deleteMode) {
      this.setState({gifArray: this.state.gifArray.filter(el => {
        if(id === el.id) {
          return false;
        }
      })
    })      
    }
  }
  render() {
    
    return (
      <div id='app-body'>
        <Sidepanel copyGif={ this.copyGif }/>
        <div id='main-container'>
          <div id='header'>
            <h3>GifStory</h3>
            <img src={deleteIcon} onClick={ (e) => { this.toggleDelete(e) }}></img>       
          </div>
          <Board copyGif={ this.copyGif } state={ this.state } delete={ this.state.deleteGif }/>          
        </div>

      </div>
    )
  }
}

export default App;