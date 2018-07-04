import React from 'react';

// Displayed when no results

class NoResults extends React.Component {
  render() {
    return (
      <div>
        <ul>
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
        </ul>
      </div>
    );
  }
}

export default NoResults
