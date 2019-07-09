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

// TODO MEMOIZE
const Gallery = () => {
  const [{
    isLoading,
    images
  }, dispatch] = useReducer(reducer, initialState)
  const { breed } = useContext(BreedContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      dispatch({ type: 'RESET' });
      try {
        const res =  await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`, { signal });
        const json = await res.json();
        dispatch({
          type: 'SUCCESS',
          payload: json.message
        })
      } catch(e) {
        // nothing
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [breed])

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
