import React, { useEffect, useReducer } from 'react';

import './index.css'

const initialState = {
  isLoading: true,
  images: []
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SUCCESS':
      return {
        isLoading: false,
        images: action.payload,
      }
    default:
      return state;
  }
}

const Gallery = ({
  breed
}) => {
  const [{
    isLoading,
    images
  }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      const res =  await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
      const json = await res.json();
      dispatch({
        type: 'SUCCESS',
        payload: json.message
      })
    }
    fetchData()
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
