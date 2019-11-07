import React from 'react';
import './App.css';
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

class App extends React.Component {
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
        <div className="row">
          {this.adversaires.map((adversaire,index)=>{
            return <PortraitAdversaire adversaire={adversaire}/>
          })
          }
         </div>
      </div>
    );
  }
}

export default App;
