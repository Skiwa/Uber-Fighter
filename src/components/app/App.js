import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListeAdversaires from "../listeAdversaires/ListeAdversaires";
import Login from "../login/Login";

export default function App() {
  return (
    <Router>
      <header>
      <nav>
        <div className="nav-wrapper ">
          <a href="#!" className="brand-logo">Uber <span className="logo-main"> Fighter</span></a>
          <div className="brand-logo center">
            <div className="progress-bar">              </div>
          </div>
          <ul className="right hide-on-med-and-down ">
            <li><Link to="/liste" className="badge-notification">Mes combats</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="login">Components</Link></li>
            {/* <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li> */}
          </ul>
        </div>
      </nav>
    </header>

    {/* <div class="container">
      <h2 class="center-align">Titre titre titre</h2>
      <p class="center-align">Sous titre sous titre sous titre</p>
      <div class="divider"></div>
      <br>
    </div> */}


      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/liste">
            <ListeAdversaires/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}
