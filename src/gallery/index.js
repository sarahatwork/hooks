import React, { useContext, useEffect, useReducer } from 'react';

import './index.css'
import { BreedContext } from '../App';

const initialState = {
  isLoading: true,
  images: []
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'SUCCESS':
      return {
        isLoading: false,
        images: action.payload,
      }
    default:
      return state;
  }
}

const Gallery = () => {
  const [{
    isLoading,
    images
  }, dispatch] = useReducer(reducer, initialState)
  const {
    breed,
    setBreed
  } = useContext(BreedContext);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'RESET' });
      const res =  await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
      const json = await res.json();
      dispatch({
        type: 'SUCCESS',
        payload: json.message
      })
    }
    fetchData()
    setTimeout(() => {
      setBreed('poodle')
    }, 3000)
  }, [breed, setBreed])

  if (isLoading) return <h1>LOADING</h1>;

  return (
    <div className="gallery">
      {images.map(src =>
        <div key={src}><img alt="" src={src} /></div>
      )}
    </div>
  );
};

export default Gallery;
