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
    },
    title: ''
  }

  componentDidMount() {
    document.addEventListener('securitypolicyviolation', (e) => {
      this.setState({
        title: `${e.blockedURI} - ${e.violatedDirective}`,
      });
    });
  }

  render() {
    const { title } = this.state;

    return (
      <div className="App">
        <BreedContext.Provider value={this.state}>
          <BreedForm />
          <Accordion>
            <Gallery />
          </Accordion>
        </BreedContext.Provider>
        <a href="http://www.google.com" target="_blank">External link</a>
        <h1>{title || 'No error'}</h1>
      </div>
    );
  }
}

export default App;
