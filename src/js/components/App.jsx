import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import About from './About'
import Home from './Home'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
      <div className="app">
      <div>
      <nav><Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link></nav>
      </div>
     {
        // <Route exact path='/' component={Home}/>
        // <Route path='/about' component={About} />
        // <Route path='/contact' component={Contact} />
      }

      <Route exact path='/' render={(routeProps)=>(<Home routeProps={routeProps}/>)} />
      <Route path='/about' render={(routeProps)=>(<About routeProps={routeProps}/>)} />
      <Route path='/contact' render={(routeProps)=>(<Contact routeProps={routeProps}/>)} />

      </div>
      </Router>
    );
  }
};



App.propTypes = {
  //getVideos: PropTypes.func.isRequired,
}