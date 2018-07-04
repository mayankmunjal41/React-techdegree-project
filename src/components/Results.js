import React from 'react';

// Takes props and displays images

class Results extends React.Component {
  render() {

      return (
            <li>
              <img src={this.props.url} alt=""/>
            </li>
      );

  }
}

export default Results;
