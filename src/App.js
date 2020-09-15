import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/users/Home';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import About from './components/layout/About';
import NotFound from './components/layout/NotFound';
import GithubState from './context/GithubState';

import './App.css';

const App = (props) => {
  return (
    <GithubState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container pt-3">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/user/:login" exact component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </GithubState>
  );
};

export default App;
