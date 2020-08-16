import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedRoute from '../src/components/ProtectedRoute'

import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
