import React from 'react';
import { Link } from 'react-router-dom';
import GalleryPiece from './GalleryPiece.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceList: []
    }
  }

  componentDidMount() {
    console.log('didmount');
    fetch('/api/')
      .then(res => res.json())
      .then((data) => {
        if (!Array.isArray(data)) data = [];
        console.log(data)
        return this.setState({
          pieceList: data,
          // fetchedChars: true
        });
      })
      .catch(err => console.log('ERROR: ', err));
  }

  render() {
    const pieceList = this.state.pieceList;
    const galleryList = [];
    for(let i = 0; i < pieceList.length; i++) {
      const newGalleryPiece = <GalleryPiece piece={ pieceList[i].gifList } />
      galleryList.push(newGalleryPiece);
    }
    return (
      <div id='gallery-container'>
        <div id='gallery-header'>
          <Link to='/'>
            <button>&laquo; To Canvas</button>
          </Link>            
          <h1>HELLO GALLERY</h1>
        
        </div>
        <div id='gallery-body'>
          { galleryList }          
        </div>

      </div>
    )
  }
}

export default Gallery;