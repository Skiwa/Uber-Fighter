import React from 'react';
import PortraitAdversaire from '../portraitAdversaire/PortraitAdversaire';



class AdversaireEntité {
  constructor(photo, prenom, age, poids, taille, description, sports) {
    this.photo = photo;
    this.prenom = prenom;
    this.age = age;
    this.poids = poids;
    this.taille = taille;
    this.description = description;
    this.sports = sports;
  }
}

class ListeAdversaires extends React.Component {
  adversaires = [];

  constructor(props) {
    super(props);

    this.adversaires.push(new AdversaireEntité('assets/img/alexandre.jpg','Alexandre',28,90,'1m80', 'J\'aime me battre', ['MMA', 'Krav Maga', 'Karaté']));
    this.adversaires.push(new AdversaireEntité('assets/img/kaaris.jpg', 'Kaaris', 39, 100, '1m80', 'Je trempe mes cookies dans tes larmes.', ['MMA','Boxe']));
    this.adversaires.push(new AdversaireEntité('assets/img/jean-pierre.jpg', 'Jean Pierre', 69, 76, '1m80', 'Coucou TF1.', ['Pétanque']));
    this.adversaires.push(new AdversaireEntité('assets/img/laurent.jpg', 'Laurent', 56, 73, '1m83', 'Salut c\'est Laurent Ruquier.', ['Marche rapide']));
    this.adversaires.push(new AdversaireEntité('assets/img/laurent.jpg', 'Laurent', 56, 73, '1m83', 'Salut c\'est Laurent Ruquier.', ['Marche rapide']));
  }

  render() {
    return (
      <React.Fragment> 
        <div className="row" style={{margin: 0}}>
       <div className="col z-depth-3 fullHeightList side-panel conversations">

<div className="row conversations--header valign-wrapper">
  <div className="col s6 ">
    <span className="">Combats</span>
  </div>
  <div className="col s6">
    <select multiple onChange={(e)=>{e.persist();this.handleFilterChange(e)}}>
        <option selected>
          Tous
        </option>
        <option>
          En cours
        </option>
        <option>
          Terminés
        </option>
    </select>
  </div>
</div>
<hr/>


</div>

<div className="col fullHeight mainList">
        
      <h2 className="center-align">Choisir un adversaire</h2>
        <p className="center-align">Cliquez sur <p className=" btn-floating red btn-large btn-large-redCircle">
       
            <img src="assets/img/provoc.svg" className="miniProvocImg" alt="" />
          </p> pour <b>provoquer</b> un adversaire</p>
        <div className="divider"></div>
        <p><b>23 adversaires disponibles</b></p>
        <br/>

        <div className="row">
          {this.adversaires.map((adversaire,index)=>{
            return <PortraitAdversaire adversaire={adversaire} key={index}/>
          })
          }
         </div>
      </div>   
      </div>
      </React.Fragment>     
    );
  }
}

export default ListeAdversaires;
