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
        <h3>GifStory</h3>
        <img src={ deleteIcon } onClick={ (e) => { this.props.toggleDelete(e) }}></img>    
        <img src={ saveIcon } onClick={ this.props.savePiece }></img>         
        <Link to='/gallery'>
          <button>To Gallery &raquo;</button>
        </Link>   
      </div>
    )
  }
}

export default Header;
