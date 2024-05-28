import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:type/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
};



export default App;