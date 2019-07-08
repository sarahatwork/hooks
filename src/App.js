import React, { Component } from 'react';

import './App.css';

import Accordion from './accordion';
import Gallery from './gallery';

export const BreedContext = React.createContext();

class App extends Component {
  state = {
    breed: 'chihuahua',
    setBreed: (breed) => {
      this.setState({ breed })
    }
  }

  render() {
    return (
      <div className="App">
        <BreedContext.Provider value={this.state}>
          <Accordion>
            <Gallery />
          </Accordion>
        </BreedContext.Provider>
      </div>
    );
  }
}

export default App;
