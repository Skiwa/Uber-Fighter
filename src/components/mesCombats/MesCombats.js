import React from 'react';
import './MesCombats.scss';
import update from 'immutability-helper';

class MesCombats extends React.Component {

  user={
    avatar: "benicio.jpg",
    name: "Benicio"
  };

  constructor(props){
    super(props);

    this.state={
      currentConversation: 0,
      filters:['Tous'],
      conversations: [
        {
          messages: [
            {
              type: "received",
              content: "Benicio?! Je suis un grand fan de toi! Mais dsl le jeu c le jeu jv te pt tes morts",
              time: new Date('January 25, 2020 01:01:01')
            },
            {
              type: "sent",
              content: "Kestu fait dans cette division Mamutov?????? T eclater en fait",
              time: new Date('January 25, 2020 02:02:02')
            },
            {
              type:"info",
              content: "Mamoutov propose un combat à Saint Bruno, le 22/10/2019 à 23h00",
              time: new Date('January 25, 2020 02:02:02')
            }
          ],
          unread: true,
          finished: false,
          adversary:{
            avatar: "mamoutov.jpg",
            name: "Mamoutov",
            lastOnline: "3h",
            age:'28',
            weight:'90',
            height:'1m80',
            description: 'Description',
            sports : ['MMA', 'Krav Maga', 'Karaté']
          }
        },
        {
          messages: [
            {
              type: "received",
              content: "Benicio?! Je suis un grand fan de toi! Mais dsl le jeu c le jeu jv te pt tes morts",
              time: new Date('January 25, 2020 01:01:01')
            },
            {
              type: "sent",
              content: "Kestu fait dans cette division Mamutov?????? T eclater en faitddddddddddddddddddd",
              time: new Date('January 25, 2020 02:02:02')
            }
          ],
          unread: true,
          finished: false,
          adversary:{
            avatar: "alexandre.jpg",
            name: "Alexandre",
            lastOnline: "2h",
            age:'28',
            weight:'90',
            height:'1m80',
            description: 'Description',
            sports : ['MMA', 'Krav Maga', 'Karaté']
          }
        },
        {
          messages: [
            {
              type: "received",
              content: "Benicio?! Je suis un grand fan de toi! Mais dsl le jeu c le jeu jv te pt tes morts",
              time: new Date('January 25, 2020 01:01:01')
            },
            {
              type: "sent",
              content: "Kestu fait dans cette division Mamutov?????? T eclater en faitdsdsdsqsd",
              time: new Date('January 25, 2020 02:02:02')
            },
            {
              type: "info",
              content: "Combat terminé. Victoire : Kaaris",
              time: new Date('January 25, 2020 02:02:02')
            }
          ],
          unread: false,
          finished: true,
          adversary:{
            avatar: "kaaris.jpg",
            name: "Kaaris",
            lastOnline: "15 min",
            age:'28',
            weight:'90',
            height:'1m80',
            description: 'Description',
            sports : ['MMA', 'Krav Maga', 'Karaté']
          }
        }
      ]
    };
  }

  /**
   * Lancé quand la page a chargé
   */
  componentDidMount(){
    //Fixe la première conversation comme étant celle en cours
    this.changeCurrentConversation(0);
  }


  render() {

        return (
          <div className="">
              <div className="row" style={{marginBottom: 0}}>
                  {/* Panneau de messages */}
                  <div className="col z-depth-3 fullHeight side-panel conversations">

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


                    <div className="row" style={{margin: 0}}>
                      {this.state.conversations.map((conversation,index)=>{
                          if((!conversation.finished && this.state.filters.includes('En cours')) || (conversation.finished && this.state.filters.includes('Terminés')) || (this.state.filters.includes('Tous'))){
                            return (
                              <div className={"col s12 conversations-summary " + (this.state.currentConversation === index ? 'conversations-summary__current ' : '') + (conversation.unread ? 'conversations-summary__unread' : '')} key={index} onClick={()=>this.changeCurrentConversation(index)}>
                                <div className="row valign-wrapper">
                                  <div className="col s3">
                                    <img src={"/assets/img/"+conversation.adversary.avatar+""} alt="" className="circle responsive-img"/>
                                  </div>
                                  <div className="col s9">
                                    <span className="black-text conversations-summary--name">{conversation.adversary.name}</span>
                                    <p className="black-text text-lighten-3 conversations-summary--message">
                                      {conversation.messages[conversation.messages.length-1].content}
                                    </p>
                                    <time dateTime="2020-1-25" className="conversations-summary--date">
                                      {conversation.messages[conversation.messages.length-1].time.toLocaleDateString()}</time>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          
                        }
                      )}
                    </div>
                  </div>

                  {/* Panneau de discussion */}
                  <div className="col fullHeight main">
                      <div className="row" style={{"paddingTop" : "20px"}}>
                        <img className="col s2 offset-s5 circle" src={"/assets/img/"+this.state.conversations[this.state.currentConversation].adversary.avatar} alt=""/>
                        <span className="col s12 center-align" style={{"fontSize": "2em"}}>{this.state.conversations[this.state.currentConversation].adversary.name}</span>
                        <span className="col s12 center-align" style={{"fontSize": "1em"}}>En ligne il y a {this.state.conversations[this.state.currentConversation].adversary.lastOnline}</span>
                      </div>
                      {
                        this.state.conversations[this.state.currentConversation].messages.map((message,index)=>{
                          return (
                            <React.Fragment key={index}>
                              {/* Heure de début de la conversation */}
                              {index===0 && <React.Fragment><span className="center-align grey-text chat-message__time">{message.time.toLocaleTimeString().substring(0, message.time.toLocaleTimeString().length-3)}</span></React.Fragment>}
                              
                              {/* Message d'information */}
                              {message.type==='info' && <React.Fragment><span className="center-align grey-text text-darken-2 chat-message__info">{message.content}</span></React.Fragment>}

                              {/* Message classique */}
                              {message.type!=='info' &&
                                <div className={"chat-message " + (message.type === 'received' ? 'chat-message__received ' : '') + (message.type === 'sent' ? 'chat-message__sent ' : '')}>
                                  <img src={"/assets/img/"+(message.type=== 'received' ? this.state.conversations[this.state.currentConversation].adversary.avatar : '') + (message.type=== 'sent' ? this.user.avatar : '')} className="responsive-img circle chat-message--avatar" alt=""/>
                                  <div className="chat-message--content">
                                    <span><strong>{message.type} ({message.time.toLocaleString()})</strong> : {message.content}</span> <br/>
                                  </div>
                                </div>
                              }
                            </React.Fragment>
                          )
                        })
                      }

                      {/* Outils de chat */}
                      <div className="row chat-tools">
                        <div className="col s2 right-align chat-tools-feature" style={{'margin':'22.5px 0'}}>
                          <i className="material-icons chat-tools-feature--item blue-text tooltipped" data-tooltip="?" data-position="top">add_circle</i>
                          <i className="material-icons chat-tools-feature--item blue-text tooltipped" data-tooltip="GIF" data-position="top">movie_filter</i>
                          <i className="material-icons chat-tools-feature--item blue-text tooltipped" data-tooltip="Image" data-position="top">photo</i>
                        </div>
                        <div className="input-field col s10 valign-wrapper">
                          <i class="postfix material-icons blue-text tooltipped" data-tooltip="Envoyer" data-position="top" onClick={(e)=>{e.persist();this.sendMessage(e.target.parentElement.children[1].value)}}>send</i>
                          <input id="message" type="text"/>
                          <label for="message">Envoyer un message à {this.state.conversations[this.state.currentConversation].adversary.name}</label>
                        </div>
                      </div>
                  </div>

                  {/* Panneau d'options */}
                  <div className="col fullHeight side-panel z-depth-1 info-panel">
                      <div className="adversary-info">

                        {/* Adversary portrait */}
                        {/* <div className="col s12">
                          <div className="card medium">
                            <div className="card-image">
                              <img src={"/assets/img/"+this.state.conversations[this.state.currentConversation].adversary.avatar} alt="" className="responsive-img"/>
                              <div className="card-title col s12 rm-padding-bottom">
                                <div className="row">
                                  <div className="col s6">
                                    <span>
                                      1 <strong>2</strong> 3
                                    </span>
                                  </div>
                                  <div className="col s6 right-align">
                                    <div>
                                      <span className="right">
                                        <i className="material-icons yellow-text star-valign">
                                          star
                                        </i>
                                        4.92
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-content activator mouse-pointer">
                              <span className="card-title activator">
                                <strong>{this.state.conversations[this.state.currentConversation].adversary.name}</strong>, {this.state.conversations[this.state.currentConversation].adversary.age}
                              </span>
                              <div>
                                <p className="activator">
                                  <i className="fas fa-weight-hanging"></i> {this.state.conversations[this.state.currentConversation].adversary.weight} kg   
                                  <i className="fas fa-arrows-alt-v"></i> {this.state.conversations[this.state.currentConversation].adversary.height}
                                </p>
                              </div>
                              <br />
                              {this.state.conversations[this.state.currentConversation].adversary.sports.map((sport, index) => {
                                return <div className="chip" key={index}>{sport}</div>
                              })}
                            </div>
                  
                            <div className="card-reveal">
                              <span className="card-title grey-text text-darken-4">
                                <strong>{this.state.conversations[this.state.currentConversation].adversary.name}</strong>, {this.state.conversations[this.state.currentConversation].adversary.age}
                                <i className="material-icons right">keyboard_arrow_down</i>
                              </span>
                              <br />
                              <div className="row">
                                <div className="col s5">
                                  <strong>Poids :</strong> {this.state.conversations[this.state.currentConversation].adversary.weight}kg
                                </div>
                                <div className="col s5">
                                  <strong>Taille :</strong>  {this.state.conversations[this.state.currentConversation].adversary.height}
                                </div>
                              </div>
                              <div className="divider"></div>
                              <blockquote>
                                <em>{this.state.conversations[this.state.currentConversation].adversary.description}</em>
                              </blockquote>
                              <br />
                              <br />
                              <br />
                              <strong>Sports pratiqués :</strong>
                              <div className="row">
                                <div className="col s12 reveal-sports">
                                  {this.state.conversations[this.state.currentConversation].adversary.sports.map((sport, index) => {
                                    return <div className="chip" key={index}>{sport}</div>
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}



                      </div>
                      <div className="fight-info">
                        <div className="row" style={{'marginBottom': '5px'}}>
                          <span className="col s12 center-align fight-info--title">Lieu de rencontre</span>
                        </div>
                        <div className="row">
                          <div className="col s12 center-align">
                            <img src="/assets/img/saint-bruno.jpg" alt="" className="fight-info--location"/><br/>
                            <span className="center-align">St-Bruno <br/>82 Cours Berriat, 38000 Grenoble <br/>A <strong>23h00</strong> le <strong>22/10/2019</strong></span>
                          </div>
                          </div>
                          <div className="row"  style={{'marginBottom':'0'}}>
                            <div className="col s12 center-align" >
                              <div className="row">
                                <div className="col s3 offset-s3" >
                                  <img src="/assets/img/deny.svg" onClick={()=>this.refuseFightProposition()} alt="" className="responsive-img fight-info--action-icon" title="Refuser cette proposition" />
                                </div>
                                <div className="col s3">
                                  <img src="/assets/img/accept.svg"  onClick={()=>this.acceptFightProposition()} alt="" className="responsive-img fight-info--action-icon" title="Accepter cette proposition"/>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        );
      }


    /**
     * Change la conversation actuelle
     * @param number index 
     */
    changeCurrentConversation(index){
      //Change la conversation actuelle
      this.setState({currentConversation:index});
      //Marque la conversation comme lue
      if(this.state.conversations[index].unread){
        this.setState(
          {
            conversations: update(this.state.conversations, {[index]: {unread:{$set:false}}})
          }
        );
      }
    }

    /**
     * Met à jour la liste des filtres en fonction du select
     * @param event e 
     */
    handleFilterChange(e){
      var select = e.target;
      var selected = [];
      for (var i = 0; i < select.length; i++) {
          if (select.options[i].selected) selected.push(select.options[i].value);
      }
      this.setState({filters: selected});
      console.log(this.filters);
    }

    /**
     * Accepte une proposition
     */
    acceptFightProposition(){
      //Maj de la conversation
      this.setState(
        {
          conversations: update(this.state.conversations, {[this.state.currentConversation]: {messages: {$push: [{type:'info',content:'Vous avez accepté la proposition.', time: new Date()}] }}})
        }
      )
    }

    /**
     * Refuse une proposition
     */
    refuseFightProposition(){
      //maj de la conversation
      this.setState(
        {
          conversations: update(this.state.conversations, {[this.state.currentConversation]: {messages: {$push: [{type:'info',content:'Vous avez refusé la proposition.', time: new Date()}] }}})
        }
      )
    }

    /**
     * Envoie un message
     * @param Message message 
     */
    sendMessage(message){
      this.setState(
        {
          conversations: update(this.state.conversations, {[this.state.currentConversation]: {messages: {$push: [{type:'sent',content:[message], time: new Date()}] }}})
        }
      )
      document.querySelector('#message').value="";
    }
}

export default MesCombats;
