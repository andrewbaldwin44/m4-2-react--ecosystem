import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Homepage from './Homepage';
import About from './About';

const App = ({ items }) => {
  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;900&display=swap"
        rel="stylesheet"
      />
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/'><Homepage items={items} /></Route>
        <Route exact path='/about'><About /></Route>
      </Switch>
    </Router>
  );
};

export default App;
