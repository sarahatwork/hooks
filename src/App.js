import React from 'react';

import './App.css';

import Accordion from './accordion';
import Gallery from './gallery';

function App() {
  return (
    <div className="App">
      <Accordion>
        <Gallery breed="chihuahua" />
      </Accordion>
    </div>
  );
}

export default App;
