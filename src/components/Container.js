import React, { Component } from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import Config from './Config';



class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: true
    };
  }



// Load new images when a new page load
  componentDidMount() {
    this.performSearch(this.props.term);
  }


// Load relevant images after searching a term
  componentDidUpdate(prevProps) {
    if (this.props.term !== prevProps.term) {
      this.performSearch(this.props.term);
    }
  }

// Send the term and retrieve images from Flickr
  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
    .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false
        });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render () {
    return (
      <div>
        { (this.state.loading) ? <p>Loading...</p> : <Gallery data={this.state.images}/> }
      </div>

    );
  }
}

export default Container;
