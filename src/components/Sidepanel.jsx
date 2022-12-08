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
        { gifArray }
      </div>
    )
  }
}

export default Sidepanel
