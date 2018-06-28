import React from 'react';
import ReactDOM from 'react-dom';
import Dog from './Components/Dog.js'
import Cats from './Components/Cats.js'
import Computers from './Components/Computers.js'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Container from './Components/Container.js'
import '../css/index.css';


const NotFoundPage = () => (
  <div>
    404!
  </div>
);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" render={() => <Container/>} exact = {true}/>
            <Route path="/dogs" component = {Dog} />
            <Route path="/cats" component = {Cats} />
            <Route path="/computers" component = {Computers} />
            <Route component = {NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
