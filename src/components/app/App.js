import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListeAdversaires from "../listeAdversaires/ListeAdversaires";
import Login from "../login/Login";
import MesCombats from "../mesCombats/MesCombats";

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
            <li><Link to="/liste">Liste</Link></li>
            <li><Link to="/mesCombats" className="badge-notification">Mes combats</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="login">Components</Link></li>
            {/* <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li> */}
          </ul>
        </div>
      </nav>
    </header>

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
          <Route path="/mesCombats">
            <MesCombats/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}
