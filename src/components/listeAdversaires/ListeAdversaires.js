import React from 'react';
import PortraitAdversaire from '../portraitAdversaire/PortraitAdversaire';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  }

  render() {
    return (

      <div className="container">
        <h2 className="center-align">Titre titre titre</h2>
        <p className="center-align">Sous titre sous titre sous titre</p>
        <div className="divider"></div>
        <br/>

        <div className="row">
          {this.adversaires.map((adversaire,index)=>{
            return <PortraitAdversaire adversaire={adversaire} key={index}/>
          })
          }
         </div>
      </div>        
    );
  }
}

export default ListeAdversaires;
