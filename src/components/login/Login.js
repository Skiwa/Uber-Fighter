import React from 'react';
import './login.css'
import './loginForm.css'
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
<div className="section white">
      <div className="row container center">
        
        <h4 className="header">Un autre manière de se trouver des poings communs!</h4>
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
        <br></br>
        <h3 className="header">Uber Fighter c'est quoi?</h3>
        <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>Uber Fighter une plateforme de rencontre permettant aux utilisateurs de se défié entre eux.
        <br></br><br></br>
         Simple et efficace, Uber Fighter vous apporte l'assurance 
        de trouver un adversaire à votre hauteur, grâce au système de grade.<br></br><br></br>
        Décompressant, stimulant et surtout gratuit, Uber Fighter est la solution pour vivre des experiences unique tout en améliorant sa condition physique ! </p></h5>
       
      </div>
</div>
<div class="parallax-container">
<div  className="overlay">
      <div class="parallax"><img src="assets/img/rank4.jpg"></img></div>
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
        <img src="assets/img/rank1.png" className='center'></img>
        <h5><p className="grey-text text-darken-3 lighten-3" style={{textAlign: 'initial'}}>On dénombre 9 grades:
        <br></br>-Iron
        <br></br>-Bronze
        <br></br>-Gold
        <br></br>-Platinium
        <br></br>-Diamond
        <br></br>-Master
        <br></br>-Grandmaster
        <br></br>-Challenger 
        <br></br><br></br>
        Une barre d'expérience en haut au millieu du menu vous indique le cours de votre progression.
        <br></br>
<div style={{width:300+'px'}}>
        



<div className="brand-logo">
  <tr>
<th><img src="assets/img/silver.png" className="silverImg" alt=""/>
<b className="alignRank">Silver</b></th>
<th><div className="progress-bar" style={{display: 'inline-block'}}>              </div></th>
<th><img src="assets/img/gold.png" className="silverImg" alt=""/>
<b className="alignRank">Gold</b></th>
</tr>
</div>



</div>
        </p></h5>
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
         <button><span>GO</span> <i className="fa fa-check"></i></button>
      </div>

      <a href="" className="pass-forgot">Mot de passe oublié?</a>

   </div>

   <div className="overbox">
      <div className="material-button alt-2"><span className="shape"></span></div>

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
</React.Fragment>

        );
      }
}

export default Login;
