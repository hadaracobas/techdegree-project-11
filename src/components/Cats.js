
import React from 'react';
import Container from './Container';

const Cats = (props) => {
  return (
    // Display the cats term and images
    <div className="image-container">
      <h3>{props.term}</h3>
      <Container term={props.term} />
    </div>
  );
};

export default Cats;
