import React from 'react';
import Container from './Container';


const Birds = (props) => {
  return (
    // Display the birds term and images
    <div className="image-container">
      <h3>{props.term}</h3>
      <Container term={props.term} />
    </div>
  );
};

export default Birds;
