import React from "react";
import deleteIcon from '../icons/delete.png';
import saveIcon from '../icons/save.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id='header'>
        <div id='header-title'>
          <h1>GifStory</h1>
          <hr></hr>
          <span><h3>&nbsp;If a picture is worth 1000 words, what does a GIF go for?</h3></span>
        </div>
        <div id='controls'>
          <h4 id='banner'></h4>
          <img src={ saveIcon } onClick={ this.props.savePiece }></img>            
          <img src={ deleteIcon } onClick={ (e) => { this.props.toggleDelete(e) }}></img>        
          <Link to='/gallery'>
            <button className="switch-page">To Gallery &raquo;</button>
          </Link>             
        </div>
      </div>
    )
  }
}

export default Header;
