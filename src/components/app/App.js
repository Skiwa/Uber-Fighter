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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/liste">Liste</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>

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
