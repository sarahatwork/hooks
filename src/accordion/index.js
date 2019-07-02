import React, { useState } from 'react';

import './index.css';

const Accordion = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        className="accordion__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle
      </button>
      {isOpen && children}
    </>
);
  }

export default Accordion;
