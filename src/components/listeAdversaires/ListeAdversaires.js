import React from 'react';
import PortraitAdversaire from '../portraitAdversaire/PortraitAdversaire';
import PrettoSlider from './CustomizedSlider'
import './ListAdversaire.scss';

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

    this.adversaires.push(new AdversaireEntité('assets/img/alexandre.jpg','Alexandre',28,90,'1m80', 'Ma mission, quand vous êtes dans le cabinet du président de la République, elle est permanente. Quand je rentrais chez moi, je rentrais avec mon arme sur moi, un Glock 43, jusqu\'à mon domicile', ['MMA', 'Krav Maga', 'Karaté']));
    this.adversaires.push(new AdversaireEntité('assets/img/kaaris.jpg', 'Kaaris', 39, 100, '1m80', 'Les flics fachos rôtissent, même les manchots m’applaudissent.', ['MMA','Boxe']));
    this.adversaires.push(new AdversaireEntité('assets/img/jean-pierre.jpg', 'Jean Pierre', 69, 76, '1m80', 'Coucou TF1.', ['Pétanque']));
    this.adversaires.push(new AdversaireEntité('assets/img/persona/luka.png', 'Lucas', 22, 60, '1m70', '', ['Crochetage']));
    this.adversaires.push(new AdversaireEntité('assets/img/persona/moh.png', 'Mohamed', 24, 90, '1m83', 'J\'aime le sexes.', ['Musculation']));
    this.adversaires.push(new AdversaireEntité('assets/img/persona/merwan.jpg', 'Merwan', 23, 100, '1m85', 'Ok tu fais le chaud mais si la vie te frappe tu vas ramener qui ?', ['Jujitsu brésilien']));
    this.adversaires.push(new AdversaireEntité('assets/img/persona/sadok.jpg', 'Sadok', 23, 72, '1m75', 'Faire de l\'argent pour plus avoir besoin d\'argent', ['Coach teamspeak']));
    this.adversaires.push(new AdversaireEntité('assets/img/persona/didux.png', 'Dylan', 24, 110, '1m84', 'je vend une mini Cooper r56 110cv 200 000klm full option', ['Escrime']));
  }

  render() {
    return (
      <React.Fragment> 
        <div className="row" style={{margin: 0}}>
       <div className="col z-depth-3 fullHeightList side-panel conversations">

<div className="row conversations--header align-wrapper">
  <div className="col s6 ">
    <span className="">Trier par</span>
  </div>
  <div className="col s6 right">
                        <select>
                            <option defaultValue>
                              Tous
                            </option>
                            <option>
                              Fair-play
                            </option>
                            <option>
                              Respect
                            </option>
                            <option>
                              Technique
                            </option>
                        </select>
                      </div>
  <div className="col s6">
  
  </div>
</div>
<hr/>
  <div>
    
  <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />

  </div>
</div>

<div className="col fullHeight mainList">
        
      <h2 className="center-align">Choisir un adversaire</h2>
        <p className="center-align">Cliquez sur <span className=" btn-floating btn-large btn-large-redCircle btn-miniProvoc">
       
            <img src="assets/img/provoc.svg" className="miniProvocImg" alt="" />
          </span> pour <b>provoquer</b> un adversaire</p>
        <div className="divider"></div>
        <p><b>8 adversaires disponibles</b></p>
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
