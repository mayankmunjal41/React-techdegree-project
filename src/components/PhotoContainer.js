import React from 'react';
import Results from './Results';
import NoResults from './NoResults'


const PhotoContainer = (props) => {

  const results = props.data;
  let flickr;
  if (results.length > 0 ) {
    flickr = results.map(photo => <Results key = {photo.id} url ={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}/>)

  } else {
    flickr = <NoResults />
    document.getElementById('result').style.display="none";
  }

  return (
    <div className = "photo-container">
      <h2 id="result">Results</h2>
      <ul>
        {flickr}
      </ul>
  </div>
  );
};

export default PhotoContainer;
