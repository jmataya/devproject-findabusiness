import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import DetailsPage from './pages/Details';
import ResultsPage from './pages/Results';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/details" component={DetailsPage} />
        </div>
      </Router>
    )
  }
}

export default App;
