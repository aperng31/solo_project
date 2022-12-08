import React from 'react';
import { Link } from 'react-router-dom';

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
    return (
      <div>
        <h1>HELLO GALLERY</h1>
        <Link to='/'>
          <button>Draw</button>
        </Link>
      </div>
    )
  }
}

export default Gallery;