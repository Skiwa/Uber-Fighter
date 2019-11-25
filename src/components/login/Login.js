import React from 'react';
import './login.css'
import './loginForm.css'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
import ListeAdversaires from "../listeAdversaires/ListeAdversaires";
import MesCombats from "../mesCombats/MesCombats";
class Login extends React.Component {
    render() {
        return (
       <React.Fragment> 

  <div id="index-banner" className="parallax-container indexHeight">
    <div  className="overlay">
  <video autoPlay muted loop id="videoBG">
  <source src="assets/video/test1.mp4" type="video/mp4"/>
  Your browser does not support HTML5 video.
</video>
<div className="section no-pad-bot">
<br></br>
    
  <div className="container">

    <h1 className="header lefttext-lighten-2 uberLogo" style={{fontSize: 9.2+'rem'}}>Uber <br></br>    <span className="logo-main"> Fighter</span></h1>
    <div className="row left">

    </div>
{/*     <div className="row left">
      <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
    </div> */}
    <br></br>
 
  </div>
</div>
</div>
</div>
<div  id="presentation" className="section white">
      <div className="row container center">
        
        <h4  className="header">Un autre manière de se trouver des poings communs!</h4>
        <table className='borderTable'>
           <tbody>
        <tr>
        <th className='thUnset'><i className='material-icons icon' style={{fontSize:80+'px'}}><img src="assets/img/seek.png" className='fightingGif'></img>arrow_forward</i>
        </th>
        <th className='thUnset'><i className='material-icons icon' style={{fontSize:80+'px'}}><img src="assets/img/listOfThreeChar.png" style={{width: 30+'%'}}></img>arrow_forward</i>
        </th>
        <th className='thUnset'><i className='material-icons icon' style={{fontSize:80+'px'}}><img src="assets/video/fighting.gif" className='fightingGif'></img>arrow_forward</i>
        </th>
        <th className='thUnset'><img src="assets/img/pnjRate.png" style={{width: 10+'%'}}></img>
        </th>
        </tr>
        <tr>
          <th className='thUnset' style={{paddingRight: 12+'vw', paddingLeft: 0.5+'vw'}}><span className='tutoFontSize'><b>Cherchez</b></span></th>
          <th className='thUnset' style={{paddingRight: 11+'vw'}}><span className='tutoFontSize'><b>Choisissez</b></span></th>
          <th className='thUnset' style={{paddingRight: 6+'vw'}}><span className='tutoFontSize'><b>Combattez</b></span></th>
          <th className='thUnset'><span className='tutoFontSize'><b>Notez</b></span></th>
          
        </tr>
        </tbody>
        </table>
        <br></br>
        <h3 className="header">Uber Fighter c'est quoi?</h3>
        <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>Uber Fighter une plateforme de rencontre permettant aux utilisateurs de se défié entre eux.
        <br></br><br></br>
         Simple et efficace, Uber Fighter vous apporte l'assurance 
        de trouver un adversaire à votre hauteur, grâce au système de grade.<br></br><br></br>
        Décompressant, stimulant et surtout gratuit, Uber Fighter est la solution pour vivre des experiences unique tout en améliorant sa condition physique ! </p></h5>
       
      </div>
</div>
<div className="parallax-container">
<div  className="overlay">
      <div id="combat" className="parallax"><img src="assets/img/rank6.jpg"></img></div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p className="logo-main center" style={{fontSize: 9.2+'rem'}}> Combats</p>
      </div>
      
    </div> 
    <div className="section white">
      <div className="row container">
      <h3 className="header">Les combats?</h3>
      <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>Uber Fighter vous apporte la possibilité de provoquer des adversaires de manière simple et rapide.
        <br></br><br></br>
        A la manière de Tinder pour que deux individus puissent se battre, il faudra que ces derniers se soit mutuellement provoquer.<br></br><br></br>
        Dans le cas ou seulement 1 personne à provoquer l'autre, alors le provocateur sera contraint de patienter. Jusqu'à que la personne provoquée, provoque son adversaire.
         </p></h5>
         <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>Le principe:</p></h5>       
         <table className='borderTable'>
            <tbody>
         <tr>
        <th className='thUnset'><img src="assets/img/tuto/card.png" style={{width: 30+'%'}} ></img>
        </th>
        <th className='thUnset'>
        <i className='material-icons icon' style={{fontSize:80+'px'}}>arrow_forward</i>
           <i className='material-icons icon' style={{fontSize:80+'px'}}><img src="assets/img/tuto/mesCombats.png" style={{width: 20+'%',  marginLeft: 1+'vw', marginRight: 1+'vw'}}></img>arrow_forward</i>
        </th>
        <th className='thUnset'><img src="assets/img/tuto/lieu.png" style={{marginLeft: 2+'vw'}}></img>
        </th>
        </tr>
        
         
        <tr>
          <th className='thUnset' style={{paddingRight: 5+'vw', paddingLeft: 0.5+'vw'}}><span className='tutoFontSize'><b>Provoquez un adversaire</b></span></th>
         
          <th className='thUnset' style={{paddingRight: 0+'vw'}}><span className='tutoFontSize'><b>Consultez vos combats en cours</b></span></th>
          <th className='thUnset' style={{paddingLeft: 3+'vw'}}><span className='tutoFontSize'><b>Selectionnez un lieu de rencontre</b></span></th>
          
        </tr>
        <tr>
          <th className='thUnset' style={{paddingRight: 5+'vw', paddingLeft: 0.5+'vw'}}><span className='tutoFontSize'><b>en cliquant sur le poing</b></span></th>
         
          <th className='thUnset' style={{paddingRight: 25+'vw'}}><span className='tutoFontSize'><b></b></span></th>
          <th className='thUnset' style={{paddingLeft: 3+'vw'}}><span className='tutoFontSize'><b>avec votre adversaire</b></span></th>
          
        </tr>
        </tbody>
        </table>
       
      </div>
</div>
<div className="parallax-container">
<div  className="overlay">
      <div id="grade" className="parallax"><img src="assets/img/rank4.jpg"></img></div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p className="logo-main center" style={{fontSize: 9.2+'rem'}}> Grades</p>
      </div>
      
    </div>
    <div className="section white">
      <div className="row container center">
        
       
        <h3 className="header">Les grades?</h3>
        <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>Le système de grade vous permez de trouver des adversaires à votre niveau.
        <br></br><br></br>
        En effet il faudra effectuer 3 combats de placement afin d'avoir un grade.<br></br><br></br>
        Plus votre nombre de combats augmente plus votre grade se précise, ainsi le grade auxquelle vous appartenez contiendra d'autre adversaire sensisblement proche de votre niveau
         </p></h5>
         <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>On dénombre 9 grades:</p></h5>
        <table className='borderTable'>
           <tbody>
        <tr>
           <th>
           <img src="assets/img/rank/iron.png" className='rankSize tooltipped' data-tooltip="Iron"></img>
           </th>
           <th>
           <img src="assets/img/rank/bronze.png" className='rankSize tooltipped' data-tooltip="Bronze"></img>
           </th>
           <th>
           <img src="assets/img/rank/silver.png" className='rankSize tooltipped' data-tooltip="Silver"></img>
           </th>
           <th>
           <img src="assets/img/rank/gold.png" className='rankSize tooltipped' data-tooltip="Gold"></img>
           </th>
           <th>
           <img src="assets/img/rank/platinium.png" className='rankSize tooltipped' data-tooltip="Platinium"></img>
           </th>
           <th>
           <img src="assets/img/rank/diamond.png" className='rankSize tooltipped' data-tooltip="Diamond"></img>
           </th>
           <th>
           <img src="assets/img/rank/master.png" className='rankSize tooltipped' data-tooltip="Master"></img>
           </th>
           <th>
           <img src="assets/img/rank/grandmaster.png" className='rankSize tooltipped' data-tooltip="Grandmaster"></img>
           </th>
           <th>
           <img src="assets/img/rank/Challenger.png" className='rankSize tooltipped' data-tooltip="Challenger"></img>
           </th>

        </tr>
        <tr>
           <th style={{ paddingLeft: 3+'vw'}}>
           <p className="tutoFontSize">Iron</p>
           </th>
           <th style={{paddingLeft: 2+'vw'}}>
           <p className="tutoFontSize">Bronze</p>
           </th>
           <th style={{paddingLeft: 2.5+'vw'}}>
           <p className="tutoFontSize">Silver</p>
           </th>
           <th style={{paddingLeft: 2.5+'vw'}}>
           <p className="tutoFontSize">Gold</p>
           </th>
           <th style={{paddingLeft: 1+'vw'}}>
           <p className="tutoFontSize">Platinium</p>
           </th>
           <th style={{paddingLeft: 1.5+'vw'}}>
           <p className="tutoFontSize"> Diamond</p>
           </th>
           <th style={{paddingLeft: 2+'vw'}}>
           <p className="tutoFontSize">Master</p>
           </th>
           <th >
           <p className="tutoFontSize">Grandmaster</p>
           </th>
           <th style={{paddingLeft: 1+'vw'}} >
           <p className="tutoFontSize">Challenger </p>
           </th>
        </tr>
        </tbody>
        </table>
        
        <br></br><br></br>
        <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>Une barre d'expérience en haut au millieu du menu vous indique le cours de votre progression.</p></h5>
        <br></br>
<div style={{width:300+'px'}}>
        



<div className="brand-logo ">
   <table className='borderTable'>
      <tbody>
  <tr>
<th><img src="assets/img/silver.png" className="silverImg" alt=""/>
<b className="alignRank tooltipped" data-tooltip="Silver">Silver</b></th>
<th><div className="progress-bar tooltipped" data-tooltip="Barre de progression" style={{display: 'inline-block'}}>              </div></th>
<th><img src="assets/img/gold.png" className="silverImg tooltipped" data-tooltip="Gold" alt=""/>
<b className="alignRank">Gold</b></th>
</tr>
</tbody>
</table>
</div>
</div>
        
      </div>
</div>  



<div className="materialContainer">


   <div className="box">

      <div className="title">Connexion</div>

      <div className="input">
         <label htmlFor="name">Nom d'utilisateur</label>
         <input type="text" name="name" id="name"/>
         <span className="spin"></span>
      </div>

      <div className="input">
         <label htmlFor="pass">Mot de passe</label>
         <input type="password" name="pass" id="pass"/>
         <span className="spin"></span>
      </div>

      <div className="button login">
      <Link to="/liste">
      <button ><span>GO
          </span> <i className="fa fa-check"></i></button>
 </Link>
         
      </div>

      <a href="" className="pass-forgot">Mot de passe oublié?</a>

   </div>

   <div className="overbox">
      <div className="material-button alt-2 tooltipped" data-tooltip="S'inscire"><span className="shape"></span></div>

      <div className="title">S'inscrire</div>

      <div className="input">
         <label htmlFor="regname">Nom d'utilisateur</label>
         <input type="text" name="regname" id="regname"/>
         <span className="spin"></span>
      </div>

      <div className="input">
         <label htmlFor="regpass">Mot de passe</label>
         <input type="password" name="regpass" id="regpass"/>
         <span className="spin"></span>
      </div>

      <div className="input">
         <label htmlFor="reregpass">Confirmer</label>
         <input type="password" name="reregpass" id="reregpass"/>
         <span className="spin"></span>
      </div>

      <div className="button">
         <button><span>Suite</span></button>
      </div>


   </div>

</div>
   <footer className="page-footer" style={{backgroundColor: '#000000'}}>
            <div className="container">
               <div className="row">
               <div className="col l6 s12">
               <h5 className="header lefttext-lighten-2 uberLogo" style={{fontSize: 2.2+'rem'}}>Uber <br></br>    <span className="logo-main"> Fighter</span></h5>
                  <h5 className="white-text">Contactez nous</h5>
                  <p className="grey-text text-lighten-4"><i className="material-icons">phone</i>   09 80 84 29 49</p>
                  <p className="grey-text text-lighten-4"><i className="material-icons">mail</i>   <a className="grey-text text-lighten-3" href="mailto:uberFighter@contact.com">uberFighter@contact.com</a></p>
                  
               </div>
               <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Menu</h5>
                  <ul>
                  <h5><li><a className="grey-text text-lighten-3" href="#index-banner">Connexion</a></li>
                  <li><a className="grey-text text-lighten-3" href="#presentation">Présentation</a></li>
                     <li><a className="grey-text text-lighten-3" href="#combat">Les combats</a></li>
                     <li><a className="grey-text text-lighten-3" href="#grade">Les grades</a></li>
                     </h5>
                  </ul>
               </div>
               </div>
            </div>
            <div className="footer-copyright">
               <div className="container">
               © 2019 Copyright Uber Fighter
               <a className="grey-text text-lighten-3 right" href="#index-banner"><i className="material-icons"  style={{fontSize: 4+'rem'}}>arrow_upward</i></a>
               
               </div>
            </div>
   </footer>
</React.Fragment>

        );
      }
}

export default Login;
