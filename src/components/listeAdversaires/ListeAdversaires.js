import React from 'react';
import PortraitAdversaire from '../portraitAdversaire/PortraitAdversaire';
import PrettoSlider from './CustomizedSlider'
import './ListAdversaire.scss';

class AdversaireEntité {
  constructor(id,photo, prenom, age, poids, taille, description, sports, note) {
    this.id = id;
    this.photo = photo;
    this.prenom = prenom;
    this.age = age;
    this.poids = poids;
    this.taille = taille;
    this.description = description;
    this.sports = sports;
    this.note = note;
  }
}

class ListeAdversaires extends React.Component {
  adversaires = [];
  nbAdversairesAffiches = 0;

  constructor(props) {
    super(props);

    this.adversaires.push(new AdversaireEntité(1, 'assets/img/alexandre.jpg','Alexandre',28,90,'1m80', 'Ma mission, quand vous êtes dans le cabinet du président de la République, elle est permanente. Quand je rentrais chez moi, je rentrais avec mon arme sur moi, un Glock 43, jusqu\'à mon domicile', ['MMA', 'Krav Maga', 'Karaté'],3.1));
    this.adversaires.push(new AdversaireEntité(2, 'assets/img/kaaris.jpg', 'Kaaris', 39, 100, '1m80', 'Les flics fachos rôtissent, même les manchots m’applaudissent.', ['MMA','Boxe'],4.3));
    this.adversaires.push(new AdversaireEntité(3, 'assets/img/jean-pierre.jpg', 'Jean Pierre', 69, 76, '1m80', 'Coucou TF1.', ['Pétanque'],4.9));
    this.adversaires.push(new AdversaireEntité(4, 'assets/img/persona/luka.png', 'Lucas', 22, 60, '1m70', '', ['Crochetage'],4.8));
    this.adversaires.push(new AdversaireEntité(5, 'assets/img/persona/moh.png', 'Mohamed', 24, 90, '1m83', 'J\'aime le sexes.', ['Musculation'],3.8));
    this.adversaires.push(new AdversaireEntité(6, 'assets/img/persona/merwan.jpg', 'Merwan', 23, 100, '1m85', 'Ok tu fais le chaud mais si la vie te frappe tu vas ramener qui ?', ['Jujitsu brésilien'],3.6));
    this.adversaires.push(new AdversaireEntité(7, 'assets/img/persona/sadok.jpg', 'Sadok', 23, 72, '1m75', 'Faire de l\'argent pour plus avoir besoin d\'argent', ['Coach teamspeak'], 4.5));
    this.adversaires.push(new AdversaireEntité(8, 'assets/img/persona/didux.png', 'Dylan', 24, 110, '1m84', 'je vend une mini Cooper r56 110cv 200 000klm full option', ['Escrime'], 4.92));
  
    this.state = ({filtreProximite:20,filtreTaille:190, filtrePoids: 110, filtreAge:50, nbAdversairesAffiches:7});
  }

  slidersCallback = (data) => {
    this.nbAdversairesAffiches = 0;
    switch(data.type){
      case 'localisation':this.setState({filtreProximite : data.newValue});break;
      case 'taille':this.setState({filtreTaille : data.newValue});break;
      case 'poids':this.setState({filtrePoids : data.newValue});break;
      case 'age':this.setState({filtreAge : data.newValue});break;
      default:
      break;
    }
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
    
  <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} slidersCallback = {this.slidersCallback} />

  </div>
</div>

<div className="col fullHeight mainList">
        
      <h2 className="center-align">Choisir un adversaire</h2>
        <p className="center-align">Cliquez sur <span className=" btn-floating btn-large btn-large-redCircle btn-miniProvoc">
       
            <img src="assets/img/provoc.svg" className="miniProvocImg" alt="" />
          </span> pour <b>provoquer</b> un adversaire</p>
        <div className="divider"></div>
        <p><b><span id="adversairesCount">{this.nbAdversairesAffiches}</span> adversaires disponibles</b></p>
        <br/>

        <div className="row">
          {this.adversaires.map((adversaire,index)=>{
            if(this.adversaireDoitEtreAffiche(adversaire)){
              return <PortraitAdversaire adversaire={adversaire} key={index}/>
            }else{
              return null;
            }
          })
          }
         </div>
      </div>   
      </div>
      </React.Fragment>     
    );
  }

  /**
   * Check si l'adversaire a affiche respecte les critères de filtre
   * @param {*} adversaire 
   */
  adversaireDoitEtreAffiche(adversaire){
    let adversaireTaille = parseInt(adversaire.taille.split("m")[0]+adversaire.taille.split("m")[1]);
    if((adversaireTaille < this.state.filtreTaille || this.state.filtreTaille ===230) && (adversaire.poids < this.state.filtrePoids || this.state.filtrePoids===200) && (adversaire.age < this.state.filtreAge || this.state.filtreAge === 50)){
      this.nbAdversairesAffiches++;
      return true;
    }
  }

  componentDidUpdate(){
    document.getElementById("adversairesCount").innerHTML = this.nbAdversairesAffiches;
  }
}

export default ListeAdversaires;
