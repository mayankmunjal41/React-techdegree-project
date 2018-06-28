import React from 'react';

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
