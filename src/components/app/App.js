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
import Avatar from '@material-ui/core/Avatar';


export default function App() {
  return (
    <Router>
      <header>

      <div className="navbar-fixed" >
      
      <ul id="dropdown1" className="dropdown-content">
      <li><a href="#!" className="dropdown1--link">Mon profil</a></li>
      <li className="divider"></li>
      <li><a href="#!" className="dropdown1--link__deconnexion"><i className="material-icons right">lock_open</i>Déconnexion</a></li>
</ul>
      <nav className=" row">
        <div className="nav-wrapper">
          <div className="col s12 m6 l4 left">
          <Link to="/" className="brand-logo">Uber <span className="logo-main"> Fighter</span></Link>
        </div>

        {window.location.pathname !== "/" && 
        
        
        <React.Fragment>
          <div className="col s12 m6 l4 center">
          <b className="alignRank" style={{fontSize: 1+'vw'}}>Silver</b>

            <img src="assets/img/silver.png" className="silverImg" alt=""/>
            
            <div className="brand-logo">
            
            <div className="progress-bar tooltipped" data-tooltip="Progression: 73/100" style={{fontSize: 2.3+'vw'}} >              </div>
              
          </div>
         
          <img src="assets/img/gold.png" className="goldImg" alt=""/>
          <b className="alignRank" style={{fontSize: 1+'vw'}}>Gold</b>
        </div>
        <div className="col s12 m6 l4 right right-align">
          <ul className="hide-on-med-and-down right">
            <li className="active"><Link to="/liste" style={{fontSize: 0.8+'vw'}} >Liste d'adversaire</Link></li>
            <li><Link to="/mesCombats" className="badge-notification" style={{fontSize: 0.8+'vw'}}>Mes combats</Link></li>
            <li style={{marginTop: 0.5+'vw'}}><Avatar alt="Benicio Del Toro" src="assets/img/benicio.jpg" /></li>
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Benicio<i className="material-icons right">arrow_drop_down</i></a></li>
        </ul>
        </div>

        </React.Fragment>
          }
        </div>
      </nav>
    </div>

    </header>
    
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mesCombats">
            <MesCombats key={1}/>
          </Route>
          <Route path="/liste">
            <ListeAdversaires key={2}/>
          </Route>
          <Route path="/">
            <Login key={3}/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}
