import React from 'react';
import Container from './Container';

const Dogs = (props) => {
  return (
    // Display the dogs term and images
    <div className="image-container">
      <h3>{props.term}</h3>
      <Container term={props.term} />
    </div>
  );
};

export default Dogs;
