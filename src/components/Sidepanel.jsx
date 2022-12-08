import React from 'react';
import Gifbox from './Gifbox.jsx';

class Sidepanel extends React.Component {

  render() {
    function importAll(r) {
      return r.keys().map(r);
    }
    const urlList = importAll(require.context('../gifs', false, /\.(png|jpe?g|svg|gif)$/));

    const gifArray = [];
    for(let i = 0; i < urlList.length; i++) {
      const newGif = <Gifbox url={ urlList[i] } copyGif={ this.props.copyGif }/>
      gifArray.push(newGif);
    }
    
    return (
      <div id='sidepanel'>
        <div id='width-panel'>
          <label htmlFor='width'>Width: </label>
          <input type="range" min="10" max="500" defaultValue="150" className="slider" id="width" onMouseUp={(e) => this.props.updateWidth(e.target.value)}></input>
        </div>
        <div id='sidepanel'>
          { gifArray }          
        </div>
      </div>
    )
  }
}

export default Sidepanel
