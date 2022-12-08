import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Draw from './components/Draw.jsx';
import Gallery from './components/Gallery.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='router'>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={<Draw />}
            />
            <Route
              exact
              path="/gallery"
              element={<Gallery />}
            />
          </Routes>
        </main>
      </div>
    )
  }
}

export default App;
