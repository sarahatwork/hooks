import React, { useState } from 'react';

const Accordion = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && children}
    </>
);
  }

export default Accordion;
