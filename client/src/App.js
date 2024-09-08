import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Map from './components/Map';
import Routes from './components/Routes';
import Raids from './components/Raids';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Map} />
        <Route path="/routes" component={Routes} />
        <Route path="/raids" component={Raids} />
      </div>
    </Router>
  );
}

export default App;
