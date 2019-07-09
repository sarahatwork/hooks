import React, { useEffect, useContext, useState } from 'react';

import { BreedContext } from '../App';


const BreedForm = () => {
  const {
    breed,
    setBreed
  } = useContext(BreedContext);

  const [breedValue, setBreedValue] = useState('');

  useEffect(() => {
    setBreedValue(breed);
  }, [breed])

  const onFormSubmit = e => {
    e.preventDefault();
    setBreed(breedValue);
  }
  const onInputChange = e => setBreedValue(e.target.value);

  return (
    <form onSubmit={onFormSubmit}>
      <input value={breedValue} onChange={onInputChange} />
      <button>Fetch</button>
    </form>
  )
}

export default BreedForm;
