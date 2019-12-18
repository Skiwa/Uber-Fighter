import React from 'react';
import './MesCombats.scss';
import update from 'immutability-helper';
import {DatePicker, TimePicker} from 'react-materialize';

class MesCombats extends React.Component {

  user={
    avatar: "benicio.jpg",
    name: "Benicio"
  };

  STATUS_BEGIN = 0;
  STATUS_PROPOSITION_SENT = 1;
  STATUS_PROPOSITION_RECEIVED = 2;
  STATUS_FIGHT_PENDING = 3;
  STATUS_WINNER_PENDING = 4;
  STATUS_FINISHED = 5;
  
  today = new Date();
  tomorrow = new Date();


  constructor(props){
    
    super(props);

    
    this.tomorrow.setDate(this.today.getDate()+1);

    this.state={
      currentConversation: 0,
      filters:['Tous'],
      conversations: [
        {
          messages: [
            {
              type: "received",
              content: "Benicio?! Je suis un grand fan de toi! Mais dsl le jeu c le jeu jv te pt tes morts",
              time: new Date('October 21, 2019 15:40:01')
            },
            {
              type: "sent",
              content: "Kestu fait dans cette division Mamutov?????? T eclater en fait",
              time: new Date('October 21, 2019 02:02:02')
            },
            {
              type:"info",
              content: "Mamoutov propose un combat à Saint Bruno, le "+(this.tomorrow.toLocaleDateString())+" à 23h00",
              time: new Date('October 21, 2019 02:02:02')
            }
          ],
          unread: true,
          status: this.STATUS_PROPOSITION_RECEIVED,
          adversary:{
            avatar: "mamoutov.jpg",
            name: "Mamoutov",
            lastOnline: "3h",
            age:'28',
            weight:'100',
            height:'1m80',
            rank:'Silver',
            description: 'jv teclater',
            sports : ['MMA', 'Krav Maga', 'Karaté']
          }
        },
        {
          messages: [
            {
              type: "received",
              content: "Je n'ai jamais été ni policier ni garde du corps du président de la République.",
              time: new Date('October 21, 2019 13:58:01')
            }
          ],
          unread: true,
          status: this.STATUS_BEGIN,
          adversary:{
            avatar: "alexandre.jpg",
            name: "Alexandre",
            lastOnline: "2h",
            age:'28',
            weight:'90',
            height:'1m80',
            rank:'Platine',
            description: 'Quand je rentrais chez moi, je rentrais avec mon arme sur moi, un Glock 43, jusqu\'à mon domicile.',
            sports : ['MMA', 'Krav Maga', 'Karaté']
          }
        },
        {
          messages: [
            {
              type: "received",
              content: "team kaaris?",
              time: new Date('August 1, 2020 04:29:01')
            },
            {
              type: "sent",
              content: "team b2o",
              time: new Date('August 1, 2020 02:02:02')
            },
            {
              type:"info",
              content: "Kaaris propose un combat à Orly, le 01/08/2018 à 15h00",
              time: new Date('August 1, 2020 02:02:02')
            },
            {
              type:"info",
              content: "Vous avez accepté la proposition.",
              time: new Date('August 1, 2020 02:02:02')
            },
            {
              type: "info",
              content: "Combat terminé.",
              time: new Date('August 1, 2018,02:02:02')
            },
            {
              type: "info",
              content: "Vainqueur : Kaaris",
              time: new Date('August 3, 2018 02:02:02')
            }
          ],
          unread: false,
          status: this.STATUS_FINISHED,
          adversary:{
            avatar: "kaaris.jpg",
            name: "Kaaris",
            lastOnline: "15 min",
            age:'28',
            weight:'90',
            rank:'Silver',
            height:'1m80',
            description: 'Les flics fachos rôtissent, même les manchots m’applaudissent.',
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
          <div className="" style={{'overflowY':'hidden'}}>
              <div className="row" style={{marginBottom: 0}}>
                  {/* Panneau de messages */}
                  <div className="col z-depth-3 fullHeight side-panel conversations">

                    <div className="row conversations--header valign-wrapper">
                      <div className="col s6 ">
                        <span className="">Combats</span>
                      </div>
                      <div className="col s6">
                        <select multiple onChange={(e)=>{e.persist();this.handleFilterChange(e)}} value={["Tous"]}>
                            <option defaultValue>
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
                          if((conversation.status !== this.STATUS_FINISHED && this.state.filters.includes('En cours')) || (conversation.status === this.STATUS_FINISHED && this.state.filters.includes('Terminés')) || (this.state.filters.includes('Tous'))){
                            return (
                              <div className={"col s12 conversations-summary " + (this.state.currentConversation === index ? 'conversations-summary__current ' : '') + (conversation.unread ? 'conversations-summary__unread' : '')} key={index} onClick={()=>this.changeCurrentConversation(index)}>
                                <div className="row valign-wrapper">
                                  <div className="col s3">
                                    <img src={"assets/img/"+conversation.adversary.avatar+""} alt="" className="circle responsive-img"/>
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
                          }else{return null;}
                        }
                      )}
                    </div>
                  </div>

                  {/* Panneau de discussion */}
                  <div className="col fullHeight main">
                    <div className="chat">
                      <div className="row" style={{"paddingTop" : "20px"}}>
                        <img className="col s2 offset-s5 circle" src={"assets/img/"+this.state.conversations[this.state.currentConversation].adversary.avatar} alt=""/>
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
                                  <img src={"assets/img/"+(message.type=== 'received' ? this.state.conversations[this.state.currentConversation].adversary.avatar : '') + (message.type=== 'sent' ? this.user.avatar : '')} className="responsive-img circle chat-message--avatar" alt=""/>
                                  <div className="chat-message--content">
                                    <span>{message.content}</span> <br/>
                                  </div>
                                </div>
                              }
                            </React.Fragment>
                          )
                        })
                      }

                      </div>
                      {/* Outils de chat */}
                      <div className="row chat-tools">
                        <div className="col s2 right-align chat-tools-feature" style={{margin:'22.5px 0',marginBottom:'0'}}>
                          <i className="material-icons chat-tools-feature--item pinkCustom-text tooltipped" data-tooltip="GIF" data-position="top">movie_filter</i>
                          <i className="material-icons chat-tools-feature--item pinkCustom-text tooltipped" data-tooltip="Image" data-position="top">photo</i>
                          <i className="material-icons chat-tools-feature--item pinkCustom-text tooltipped" data-tooltip="Message vocal" data-position="top">keyboard_voice</i>
                        </div>
                        <div className="input-field col s10 valign-wrapper chat-tools-chat">
                          <i className="postfix material-icons pinkCustom-text tooltipped" data-tooltip="Envoyer" data-position="top"  onClick={(e)=>{e.persist();this.sendMessage(e.target.parentElement.children[1].value)}}>send</i>
                          <input id="message" type="text" onKeyUp={(e)=>{e.persist();this.handleKeyUpSendMessage(e)}}/>
                          <label htmlFor="message">Envoyer un message à {this.state.conversations[this.state.currentConversation].adversary.name}</label>
                        </div>
                      </div>
                  </div>

                  {/* Panneau d'options */}
                  <div className="col fullHeight side-panel z-depth-1 info-panel">
                      <div className="adversary-info">
                        {/* Adversary portrait */}
                        <div className="row">
                          <div className="col s12 center-align">
                            <span className="adversary-info--title">
                              <strong>{this.state.conversations[this.state.currentConversation].adversary.name}</strong>, {this.state.conversations[this.state.currentConversation].adversary.age}
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s5">
                            <strong>Poids :</strong> {this.state.conversations[this.state.currentConversation].adversary.weight}kg <br/>
                            <strong>Rang : </strong> {this.state.conversations[this.state.currentConversation].adversary.rank}
                          </div>
                          <div className="col s5">
                            <strong>Taille :</strong>  {this.state.conversations[this.state.currentConversation].adversary.height}
                          </div>
                        </div>

                        <blockquote>
                          <em>{this.state.conversations[this.state.currentConversation].adversary.description}</em>
                        </blockquote>
                        <br />
                        <div className="row center-align">
                        <strong>Sports pratiqués :</strong> <br/><br/>
                          <div className="col s12 reveal-sports ">
                            {this.state.conversations[this.state.currentConversation].adversary.sports.map((sport, index) => {
                              return <div className="chip" key={index}>{sport}</div>
                            })}
                          </div>
                        </div>

                      </div>
                      
                      
                      <div className="fight-info">

                        {/* STATUS_BEGIN */}
                        {this.state.conversations[this.state.currentConversation].status === this.STATUS_BEGIN && 
                          <React.Fragment>
                            
                            <div className="row" style={{'marginBottom': '5px'}}>
                              <span className="col s12 center-align fight-info--title">Proposer une rencontre</span>
                            </div>

                            <div className="row" style={{'marginBottom': '5px'}}>
                              <div className="input-field col s6">
                                <DatePicker options={{'minDate':new Date()}} id="propositon_date"/>
                                <label htmlFor="propositon_time">Date</label>
                              </div>
                              <div className="input-field col s6">
                                <TimePicker options={{'fromNow':1}} id="propositon_time"/>
                                <label htmlFor="propositon_time">Heure</label>
                              </div>
                              <div className="input-field col s12">
                                <textarea id="propositon_location" className="materialize-textarea"></textarea>
                                <label htmlFor="propositon_location">Lieu</label>
                              </div>

                            </div>
                            <div className="row">
                              <div className="col s12 center-align">
                                <a className="waves-effect waves-light btn btn-large pinkCustom" onClick={()=>{this.changeConversationStatus(this.STATUS_PROPOSITION_SENT)}}><i className="material-icons right">send</i>Envoyer</a>
                              </div>
                            </div>
                          </React.Fragment>
                        }

                        {/* STATUS_PROPOSITION_RECEIVED */}
                        {this.state.conversations[this.state.currentConversation].status === this.STATUS_PROPOSITION_RECEIVED && 
                          <React.Fragment>
                            <div className="row" style={{'marginBottom': '5px'}}>
                              <span className="col s12 center-align fight-info--title">Lieu de rencontre</span>
                            </div>
                            <div className="row" style={{'marginBottom':'10px'}}>
                              <div className="col s12 center-align">
                                <img src="assets/img/saint-bruno.jpg" alt="" className="fight-info--location"/><br/>
                                <span className="center-align">St-Bruno <br/>82 Cours Berriat, 38000 Grenoble <br/>Le <strong>{this.tomorrow.toLocaleDateString()}</strong> à <strong>23h00</strong></span>
                              </div>
                            </div>
                            <div className="row"  style={{'marginBottom':'0'}}>
                              <div className="col s12 center-align" >
                                <div className="row" style={{'marginBottom':'0'}}>
                                  <div className="col s3 offset-s3" >
                                    <img src="assets/img/deny.svg" onClick={()=>this.refuseFightProposition()} alt="" className="responsive-img fight-info--action-icon" data-position="top" data-tooltip="Refuser" title="Refuser cette proposition" />
                                  </div>
                                  <div className="col s3">
                                    <img src="assets/img/accept.svg"  onClick={()=>this.acceptFightProposition()} alt="" className="responsive-img fight-info--action-icon" data-position="top" data-tooltip="Accepter" title="Accepter cette proposition"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        }

                        {/* STATUS_PROPOSITION_SENT */}
                        {this.state.conversations[this.state.currentConversation].status === this.STATUS_PROPOSITION_SENT && 
                          <React.Fragment>
                            <div className="row" style={{'marginBottom': '5px'}}>
                              <span className="col s12 center-align fight-info--title">Lieu de rencontre</span>
                              <span className="col s12 pinkCustom-text center-align" style={{'fontWeight':'500'}}>(En attente)</span>
                            </div>
                            <div className="row">
                              <div className="col s12 center-align">
                                <img src="assets/img/saint-bruno.jpg" alt="" className="fight-info--location"/><br/>
                                <span className="center-align">St-Bruno <br/>82 Cours Berriat, 38000 Grenoble <br/>Le <strong>{this.tomorrow.toLocaleDateString()}</strong> à <strong>23h00</strong></span>
                              </div>
                            </div>
                            <div className="row">
                              <br/>
                              <div className="col s12 center-align" >
                                <div className="row">
                                  <i>En attente d'acception de {this.state.conversations[this.state.currentConversation].adversary.name}</i>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        }
                        
                        {/* STATUS_FIGHT_PENDING */}
                        {this.state.conversations[this.state.currentConversation].status === this.STATUS_FIGHT_PENDING && 
                          <React.Fragment>
                            <div className="row" style={{'marginBottom': '5px'}}>
                              <span className="col s12 center-align fight-info--title">Lieu de rencontre</span>
                            </div>
                            <div className="row">
                              <div className="col s12 center-align">
                                <img src="assets/img/saint-bruno.jpg" alt="" className="fight-info--location"/><br/>
                                <span className="center-align">82 Cours Berriat, 38000 Grenoble <br/>Le <strong>{this.tomorrow.toLocaleDateString()}</strong> à <strong>23h00</strong></span>
                              </div>
                            </div>
                            <div className="row" style={{'marginTop':'-20px'}}>
                              <br/>
                              <div className="col s12 center-align" >
                                <div className="row">
                                  <div className="col s12 center-align">
                                    <a className="waves-effect waves-light btn btn-large pinkCustom" onClick={()=>{this.changeConversationStatus(this.STATUS_WINNER_PENDING)}}>Combat terminé</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        }

                        {/* STATUS_WINNER_PENDING */}
                        {this.state.conversations[this.state.currentConversation].status === this.STATUS_WINNER_PENDING && 
                          <React.Fragment>
                            <div className="row" style={{'marginBottom': '5px'}}>
                              <span className="col s12 center-align fight-info--title">Fin du combat</span>
                            </div>
                            <div className="row">
                              <br/><br/><br/>
                              <div className="col s12 center-align" >
                                <div className="row">
                                  <span className="pinkCustom-text" style={{fontWeight:'500',fontSize:'1.5em'}}>Vainqueur :</span>
                                  <br/> <br/>
                                  <div className="col s12 center-align">
                                    <div className="row">
                                      <div className="col s6 winner-portrait-pending">
                                        <img className="responsive-img circle tooltipped" data-position="top" data-tooltip='toast' src={"assets/img/"+this.user.avatar} alt="" onClick={()=>{this.changeConversationStatus(this.STATUS_FINISHED, {winner: this.user.name})}}></img>
                                        <strong className="bold">{this.user.name}</strong>
                                      </div>
                                      <div className="col s6 winner-portrait-pending">
                                        <img className="responsive-img circle tooltipped" data-position="top" data-tooltip="{this.state.conversations[this.state.currentConversation].adversary.name}" src={"assets/img/"+this.state.conversations[this.state.currentConversation].adversary.avatar} alt="" onClick={()=>{this.changeConversationStatus(this.STATUS_FINISHED, {winner: this.state.conversations[this.state.currentConversation].adversary.name})}}></img>
                                        <strong>{this.state.conversations[this.state.currentConversation].adversary.name}</strong>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        }

                        {/* STATUS_FINISHED */}
                        {this.state.conversations[this.state.currentConversation].status === this.STATUS_FINISHED && 
                          <React.Fragment>
                            <div className="row" style={{'marginBottom': '5px'}}>
                              <span className="col s12 center-align fight-info--title">Notez {this.state.conversations[this.state.currentConversation].adversary.name}</span>
                            </div>
                            <div className="row">
                              {/* <br/> */}
                              <div className="col s12 center-align" >
                                <div className="row">
                                  <div className="col s12 center-align">
                                    <div className="row">
                                      <div className="col s12 notation-portrait center-align">
                                        <img className="circle tooltipped" data-position="top" data-tooltip="{this.state.conversations[this.state.currentConversation].adversary.name}" src={"assets/img/"+this.state.conversations[this.state.currentConversation].adversary.avatar} alt=""></img>
                                        <strong style={{'marginBottom':'5px'}}>{this.state.conversations[this.state.currentConversation].adversary.name}</strong>
                                        <div className="notation-portrait--stars valign-wrapper">
                                          <strong>Fair-play</strong>
                                          <div>
                                            <span>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="notation-portrait--stars valign-wrapper">
                                          <strong>Respect</strong>
                                          <div>
                                            <span>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="notation-portrait--stars valign-wrapper">
                                          <strong>Technique</strong>
                                          <div>
                                            <span>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                            </span>
                                          </div>
                                        </div>
                                          {/* <strong>Fair-play</strong>
                                            </strong>
                                          <strong>Technique
                                            <span>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              </span>
                                          </strong>
                                          <strong>Respect 
                                            <span>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              <i className="material-icons">star</i>
                                              </span>
                                          </strong> */}
                                        {/* </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        }
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
    }


    /**
     * Propose un combat
     */
    sendFightProposition(){
      //Maj de la conversation
      this.setState(
        {
          conversations: update(this.state.conversations, {[this.state.currentConversation]: {messages: {$push: [{type:'info',content:'Vous avez proposé un combat à Saint Bruno le '+this.tomorrow.toLocaleDateString()+' à 23h00', time: new Date()}] }}})
        }
      )
    }

    /**
     * Déclare la fin de combat
     */
    declareFightEnd(){
      //Maj de la conversation
      this.setState(
        {
          conversations: update(this.state.conversations, {[this.state.currentConversation]: {messages: {$push: [{type:'info',content:'Combat terminé.', time: new Date()}] }}})
        }
      )
    }

    /**
     * Déclare le vainqueur
     */
    declareWinner(winner){
      //Maj de la conversation
      this.setState(
        {
          conversations: update(this.state.conversations, {[this.state.currentConversation]: {messages: {$push: [{type:'info',content:['Vainqueur : '+winner], time: new Date()}] }}})
        }
      )
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
      setTimeout(()=>{this.changeConversationStatus(this.STATUS_FIGHT_PENDING);}, 0);  //TODO : à remplacer par async/await        
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
      setTimeout(()=>{this.changeConversationStatus(this.STATUS_BEGIN);}, 0);  //TODO : à remplacer par async/await
    }

    /**
     * Envoie un message
     * @param Message message 
     */
    sendMessage(message){
      if(message){
        this.setState(
          {
            conversations: update(this.state.conversations, {[this.state.currentConversation]: {messages: {$push: [{type:'sent',content:[message], time: new Date()}] }}})
          }
        )
        document.querySelector('#message').value="";
      }
    }


    /**
     * Envoie un message avec la touche entrée
     * @param {*} e 
     */
    handleKeyUpSendMessage(e){
      if(e.nativeEvent.code === 'Enter'){
        console.log("ici",e);
        this.sendMessage(e.target.value);
      }
    }


    changeConversationStatus(status, options){
      
      if(status === this.STATUS_PROPOSITION_SENT){
        setTimeout(()=>{ this.sendFightProposition(); }, 0);  //TODO : à remplacer par async/await        
      }
      if(status === this.STATUS_WINNER_PENDING){
        setTimeout(()=>{ this.declareFightEnd(); }, 0);  //TODO : à remplacer par async/await        
      }
      if(status === this.STATUS_FINISHED){
        setTimeout(()=>{ this.declareWinner(options.winner); }, 0);  //TODO : à remplacer par async/await        
      }


      this.setState(
        {
          conversations: update(this.state.conversations, {[this.state.currentConversation]: {status:{$set:status}}})
        }
      );


      console.log("new status", status);
    }



}

export default MesCombats;
