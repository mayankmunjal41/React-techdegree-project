import React from 'react';

import Form from './Form';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';


class Computers extends React.Component {

  constructor() {
    super();
    this.state = {
      flickr: [],
      loading: true
    };
  }



  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'computers') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67dd83351f760a177330660deab22e08&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({flickr: responseData.photos.photo, loading: false })})
  }

  render() {

    return (<div className="container">
              <Form onSearch = {this.performSearch}/>
              <Nav />
              {
                (this.state.loading) ? <p>Loading...</p> : <PhotoContainer data = {this.state.flickr}/>
              }

            </div>);
  }

}

export default Computers;
