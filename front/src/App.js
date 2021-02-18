import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

import './App.css'


import Businesses from './components/businesses'
import Users from "./components/users";
import Login from './components/login'
import Home from './components/home';

import Duplicate from './components/duplicate.product';

import PrivateRoute from './utils/privateRoute';
import PublicRoute from './utils/publicRoute';
import { getToken, removeUserSession, setUserSession } from './utils/common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`${process.env.REACT_APP_SERVER_URL}/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (<Router>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a href="GreenVillage" className="navbar-brand">GreenVillage Trading App</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/"}> Homepage</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/users"}>Products List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/businesses"}>Businesses List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/duplicate"}>Formulaires à remplir</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/users" component={Users} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/businesses" component={Businesses} />
              <PrivateRoute path="/duplicate" component={Duplicate} />
            </Switch>
            <p style={{ display: "flex", flexwrap: "wrap", padding: "10px", margin: '0 10px' }} >
            </p>
          </div>
        </div>
      </div>
    </div>
  </Router >
  );
}

export default App;