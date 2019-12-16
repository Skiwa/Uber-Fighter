import React from 'react';
import './login.css'
import './loginForm.css'
import {
   Link
 } from "react-router-dom";
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

    <h1 className="header lefttext-lighten-2 uberLogo" style={{fontSize: 7+'vw'}}>Uber <br></br>    <span className="logo-main"> Fighter</span></h1>
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
        
        <h4  className="header">Une autre manière de se trouver des poings communs!</h4>

        <div className="row center">
    <div className="col s12 m6 l2"><img src="assets/img/seek.png" style={{width: 8+'vw', marginTop: 2+'vw'}}alt=""></img></div>
    <div className="col s12 m6 l1"><img src="assets/img/tuto/arrow.png" style={{width: 3+'vw', marginTop: 6+'vw'}}alt=""></img></div>
    <div className="col s12 m6 l3"><img src="assets/img/listOfThreeChar.png" style={{width: 15+'vw', marginTop: 4+'vw'}}alt=""></img></div>
    <div className="col s12 m6 l1"><img src="assets/img/tuto/arrow.png" style={{width: 3+'vw', marginTop: 6+'vw'}}alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/video/fighting.gif" style={{width: 8+'vw', marginTop: 2+'vw'}}alt=""></img></div>
    <div className="col s12 m6 l1"><img src="assets/img/tuto/arrow.png" style={{width: 3+'vw', marginTop: 6+'vw'}}alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/img/pnjRate.png" style={{width: 8+'vw'}}alt=""></img></div>
  </div>
  <div className="row center">
    <div className="col s12 m6 l2"><span className='tutoFontSize'><b>Cherchez</b></span></div>
    <div className="col s12 m6 l1"></div>
    <div className="col s12 m6 l3"><span className='tutoFontSize'><b>Choisissez</b></span></div>
    <div className="col s12 m6 l1"></div>
    <div className="col s12 m6 l2"><p className='tutoFontSize'><b>Combattez</b></p></div>
    <div className="col s12 m6 l1"></div>
    <div className="col s12 m6 l2"><p className='tutoFontSize'><b>Notez</b></p></div>
  </div>
        <br></br>
        <h3 className="header">Uber Fighter c'est quoi?</h3>
        <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>Uber Fighter une plateforme de rencontre permettant aux utilisateurs de se défier entre eux.
        <br></br><br></br>
         Simple et efficace, Uber Fighter vous apporte l'assurance 
        de trouver un adversaire à votre hauteur grâce au système de grade.<br></br><br></br>
        Décompressant, stimulant et surtout gratuit, c'est la solution pour vivre des experiences unique tout en améliorant sa condition physique ! </p></h5>
       
      </div>
</div>
<div className="parallax-container">
<div  className="overlay">
      <div id="combat" className="parallax"><img src="assets/img/rank6.jpg"alt=""></img></div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p className="logo-main center" style={{fontSize: 7+'vw'}}> Combats</p>
      </div>
      
    </div> 
    <div className="section white">
      <div className="row container center">
      <br/>
      <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>Uber Fighter vous apporte la possibilité de provoquer des adversaires de manière simple et rapide.
        <br></br><br></br>
        A la manière d'applications de rencontre, deux combattants s'affrontent après un accord mutuel.<br></br><br></br>
         </p></h5>

           <div className="row center valign-wrapper">
    <div className="col s12 m6 l4"><img src="assets/img/tuto/card.png" className="responsive-img" alt=""></img></div>
    <div className="col s12 m6 l1"><img src="assets/img/tuto/arrow.png" className="responsive-img" alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/img/tuto/mesCombats.png" className="responsive-img" alt=""></img></div>
    <div className="col s12 m6 l1"><img src="assets/img/tuto/arrow.png" className="responsive-img" alt=""></img></div>
    <div className="col s12 m6 l4"><img src="assets/img/tuto/lieu.png" className="responsive-img" alt=""></img></div>
  </div>
  <div className="row center">
    <div className="col s12 m6 l4"><span className='tutoFontSize'><b>Provoquez un adversaire</b></span></div>
    <div className="col s12 m6 l4"><span className='tutoFontSize'><b>Gérez vos combats</b></span></div>
    <div className="col s12 m6 l4"><span className='tutoFontSize'><b>Préparez votre rencontre</b></span></div>
  </div>
  
 
       
      </div>
</div>
<div className="parallax-container">
<div  className="overlay">
      <div id="grade" className="parallax"><img src="assets/img/rank4.jpg"alt=""></img></div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p className="logo-main center" style={{fontSize: 7+'vw', lineHeight: 1.5}}> Grades</p>
      </div>
      
    </div>
    <div className="section white">
      <div className="row container center">
        
       <br/>
        <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial', lineHeight: 1.5}}>Le système de grade vous permez de trouver des adversaires à votre niveau.
        <br></br><br></br>
        Après 3 combats de placement, votre grade de départ sera défini.<br></br><br></br>
        Plus votre nombre de combats augmente plus il se précise. De ce fait, vous affrontrez des adversaires de votre niveau.
         </p></h5>
         <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial', lineHeight: 1.5}}>On dénombre 9 grades:</p></h5>

         <div className="row">
    <div className="col s12 m6 l2"><p className="tutoFontSize">Iron</p></div>
    <div className="col s12 m6 l2"><p className="tutoFontSize">Bronze</p></div>
    <div className="col s12 m6 l2"><p className="tutoFontSize">Silver</p></div>
    <div className="col s12 m6 l2"><p className="tutoFontSize">Gold</p></div>
    <div className="col s12 m6 l2"><p className="tutoFontSize">Platinium</p></div>
  </div>
  <div className="row">
    <div className="col s12 m6 l2"><img src="assets/img/rank/iron.png" className='rankSize' data-tooltip="Iron"alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/img/rank/bronze.png" className='rankSize' data-tooltip="Bronze"alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/img/rank/silver.png" className='rankSize' data-tooltip="Silver"alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/img/rank/gold.png" className='rankSize' data-tooltip="Gold"alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/img/rank/platinium.png" className='rankSize' data-tooltip="Platinium"alt=""></img></div>
  </div>

  <div className="row">
    <div className="col s12 m6 l2"><img src="assets/img/rank/diamond.png" className='rankSize' data-tooltip="Diamond"alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/img/rank/master.png" className='rankSize' data-tooltip="Master"alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/img/rank/grandmaster.png" className='rankSize' data-tooltip="Grandmaster"alt=""></img></div>
    <div className="col s12 m6 l2"><img src="assets/img/rank/challenger.png" className='rankSize' data-tooltip="Challenger"alt=""></img></div>
  </div>

  <div className="row">
    <div className="col s12 m6 l2"><p className="tutoFontSize"> Diamond</p></div>
    <div className="col s12 m6 l2"><p className="tutoFontSize">Master</p></div>
    <div className="col s12 m6 l2"><p className="tutoFontSize">Grandmaster</p></div>
    <div className="col s12 m6 l2"><p className="tutoFontSize">Challenger </p></div>
  </div>
               
        <br></br><br></br>
        <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial', lineHeight: 1.5}}>Vous pouvez consulter votre niveau à tout moment grâce à la barre de progression.</p></h5>
        <br></br>
<div style={{width:300+'px', margin:'auto'}}>
        



<div className="brand-logo ">
   <table className='borderTable'>
      <tbody>
  <tr>
<th><img src="assets/img/silver.png" className="silverImg" alt=""/>
<b className="alignRank" data-tooltip="Silver">Silver</b></th>
<th><div className="progress-bar" data-tooltip="Barre de progression" style={{display: 'inline-block'}}>              </div></th>
<th><img src="assets/img/gold.png" className="silverImg" alt=""/>
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
      <a href="#inscription" className="pass-forgot inscription">S'inscrire?</a>
      <a className="pass-forgot" href="{null}">Mot de passe oublié?</a>

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
                  <p className="grey-text text-lighten-4"><i className="material-icons">mail</i>   <a className="grey-text text-lighten-3" href="mailto:contact@uberfighter.com">contact@uberfighter.com</a></p>
                  
               </div>
               <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Menu</h5>
                  <ul>
                  <h5><li><a className="grey-text text-lighten-3" href="#index-banner" style={{lineHeight: 1.5}}>Connexion</a></li>
                  <li><a className="grey-text text-lighten-3" href="#presentation" style={{lineHeight: 1.5}}>Présentation</a></li>
                     <li><a className="grey-text text-lighten-3" href="#combat" style={{lineHeight: 1.5}}>Les combats</a></li>
                     <li><a className="grey-text text-lighten-3" href="#grade" style={{lineHeight: 1.5}}>Les grades</a></li>
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
