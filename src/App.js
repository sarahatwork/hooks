import React, { Component } from 'react';

import './App.css';

import Accordion from './accordion';
import Gallery from './gallery';
import BreedForm from './breedForm';

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
        <a href="http://www.google.com" target="_blank">External link</a>
        <BreedContext.Provider value={this.state}>
          <BreedForm />
          <Accordion>
            <Gallery />
          </Accordion>
        </BreedContext.Provider>
      </div>
    );
  }
}

export default App;
