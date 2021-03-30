import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import axios from 'axios';
import { Menu } from 'antd';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

import './App.css'


// import Businesses from './components/businesses'
import Users from "./components/users";
import Login from './components/login'
import Home from './components/home';
import PrixminRungis from "./components/prixMinRungis";

import Duplicate from './components/duplicate.product';
import CreateRungis from './components/create.rungis';
import CreateMatching from './components/create.matching';

import MarketList from './markets/MarketList'

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
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="mail" >
          <Link className="nav-link" to={"/"}> Homepage</Link>
        </Menu.Item>
        <Menu.Item key="app"  >
          <Link className="nav-link" to={"/prices"}>Prices List</Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link className="nav-link" to={"/duplicate"}>Formulaires à remplir</Link>
        </Menu.Item>
        <Menu.Item key="prixRungis">
          <Link className="nav-link" to={"/prixRungis"}>Prix du Rungis</Link>
        </Menu.Item>
        <Menu.Item key="createRungis">
          <Link className="nav-link" to={"/createRungis"}>Formulaires Rungis</Link>
        </Menu.Item>
        <Menu.Item key="createMatching">
          <Link className="nav-link" to={"/createMatching"}>Formulaires Matching</Link>
        </Menu.Item>
        <Menu.Item key="MarketList">
          <Link className="nav-link" to={"/marketList"}>Liste des Marchés</Link>
        </Menu.Item>
      </Menu>
      <div className="container" style={{ marginRight: '0px', marginLeft: '0px' }}>
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/prices" component={Users} />
              <PublicRoute path="/login" component={Login} />
              {/* <PrivateRoute path="/businesses" component={Businesses} /> */}
              <PrivateRoute path="/duplicate" component={Duplicate} />
              <PrivateRoute path="/prixRungis" component={PrixminRungis} />
              <PrivateRoute path="/createRungis" component={CreateRungis} />
              <PrivateRoute path="/createMatching" component={CreateMatching} />
              <PrivateRoute path="/marketList" component={MarketList} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    <NotificationContainer />
  </Router >
  );
}

export default App;