import React from 'react';
import Image from './Image';
import NotFound from './NotFound';


const Gallery = (props) => {
  const results = props.data;
  let images;
  if(results.length > 0) {
    images = results.map(image =>
      <Image
      // Build the flickr image url
      url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
      key={image.id}
      />
    );
  } else {
    // Display the NotFound component if no results are found
    images = <NotFound />
  }

  return (
    <ul>
      {images}
    </ul>
  );
}



export default Gallery;
