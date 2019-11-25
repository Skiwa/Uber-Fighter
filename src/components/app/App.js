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
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>

      <div className="navbar-fixed" >
      <nav className=" row">
        <div className="nav-wrapper">
          <div className="col s3">
          <a href="#!" className="brand-logo">Uber <span className="logo-main"> Fighter</span></a>
        </div>
          <div className="col s5 center offset-s1 colRank">
          <b className="alignRank">Silver</b>

            <img src="assets/img/silver.png" className="silverImg" alt=""/>
            
            <div className="brand-logo">
            
            <div className="progress-bar">              </div>
              
          </div>
         
          <img src="assets/img/gold.png" className="goldImg" alt=""/>
          <b className="alignRank">Gold</b>
          
        </div>
        <div className="col s3 center">
          <ul className="hide-on-med-and-down">
            <li className="active"><Link to="/liste" >Liste d'adversaire</Link></li>
            <li><Link to="/mesCombats" className="badge-notification">Mes combats</Link></li>
            <li><Link to="login">Accueil</Link></li>
{/*             <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
 */}          </ul>
        </div>
        </div>
      </nav>
    </div>

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
