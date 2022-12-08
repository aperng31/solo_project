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
    
    function onlyNumber(e) {
      if(!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
        e.preventDefault();
      }
    }

    return (
      <div id='sidepanel'>
        <div>
          <label htmlFor='width'>Width: </label>
          <input type="range" min="10" max="500" className="slider" id="width" onMouseUp={(e) => this.props.updateWidth(e.target.value)}></input>
        </div>
        { gifArray }
      </div>
    )
  }
}

export default Sidepanel
