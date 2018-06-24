import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Container from './components/Container';
import Form from './components/Form';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Computers from './components/Computers';
import '../css/index.css';

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go home</Link>
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component = {Container} exact = {true}/>
        <Route path="/cats" component = {Cats}/>
        <Route path="/dogs" component = {Dogs}/>
        <Route path="/computers" component = {Computers}/>
        <Route component = {NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));
