
import React from 'react';
import Container from './Container';

const Search = (props) => {
return (
<div className="image-container">
  <h3>{props.term}</h3>
  <Container term={props.term} />
</div>
);
};

export default Search;
