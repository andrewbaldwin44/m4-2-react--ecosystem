import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';

const Homepage = () => {
  return (<span>Homepage</span>)
}

const About = () => {
  return (<span>About</span>)
}

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'><Homepage /></Route>
        <Route exact path='/about'><About /></Route>
      </Switch>
    </Router>
  );
};

export default App;
