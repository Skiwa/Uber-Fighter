import React from 'react';
import './login.css'
class Login extends React.Component {
    render() {
        return (
       <React.Fragment> 

  <div id="index-banner" className="parallax-container">
<div className="section no-pad-bot">
  <div className="container">
    <br></br>
    <h1 className="header left teal-text text-lighten-2">Parallax Template</h1>
    <div className="row left">
      
    </div>
    <div className="row left">
      <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
    </div>
    <br></br>

  </div>
</div>
<div className="parallax"><img src="assets/img/background1.jpg" className='wrap' alt="Unsplashed background img 1"/></div>
</div>
</React.Fragment>

        );
      }
}

export default Login;
