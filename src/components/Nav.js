import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
const Nav = () => {


  return (

    <nav className="main-nav">
      <ul>
        <li><Link to='/cats'>Cats</Link></li>
        <li><Link to='/dogs'>Dogs</Link></li>
        <li><Link to='/computers'>Computers</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
