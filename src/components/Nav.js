import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


class Nav extends React.Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats' activeClassName="is-active">Cats</NavLink></li>
          <li><NavLink to='/dogs' activeClassName="is-active">Dogs</NavLink></li>
          <li><NavLink to='/computers' activeClassName="is-active">Computers</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
