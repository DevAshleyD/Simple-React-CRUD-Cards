import React, { Component } from 'react';
import ReactCards from './reactCard/reactCards';
import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards:[
        {name:'Peter', description:'He is 23 years old and he works as designer', id:'aaaa'},
        {name:'Susan', description:'She is 25 years old and she works as nurse', id:'bbbb'},
        {name:'John', description:'He is 27 years old and he works as writter', id:'cccc'}
      ],
      default:{name:'Undefined name', description:'Undefined description', id:''},
    }
  }

  addCardHandler = () => {
    let defaultCard = {...this.state.default};
    let cards = [...this.state.cards];
    let randomId = String(Math.random(1,1000000));

    console.log(randomId);

    defaultCard.id = randomId;

    cards.unshift(defaultCard);

    this.setState({
      cards: cards
    });
  }

  changeNameHandler = (event,id) => {
    let cardIndex = this.state.cards.findIndex(card => card.id === id);
    let card = {...this.state.cards[cardIndex]};

    card.name = event.target.value;

    let cards = [...this.state.cards];
    cards[cardIndex] = card;

    this.setState({
      cards: cards
    });
  }

  changeDescriptionHandler = (event,id) => {
    let cardIndex = this.state.cards.findIndex(card => card.id === id);
    let card = {...this.state.cards[cardIndex]};

    card.description = event.target.value;

    let cards = [...this.state.cards];
    cards[cardIndex] = card;

    this.setState({
      cards: cards
    });
  }

  removeCardHandler = (event,index) => {
    let cards = [...this.state.cards];

    cards.splice(index,1);

    this.setState({
      cards: cards
    });
  }

  render() {
    return (
      <div className="App">
        <div className="row">      
          <div className="col s8 offset-2 m4 offset-m4 l2 offset-l5 xl2 offset-xl5 btn-container">
            <button onClick={() => this.addCardHandler()} className="waves-effect waves-light btn">ADD CARD</button>
          </div>
        </div>
        <div className="row">      
          <div className="col s12 m6 offset-m3">
            {
              <ReactCards
                cards={this.state.cards}
                removeCardHandler={this.removeCardHandler} 
                changeNameHandler={this.changeNameHandler}
                changeDescriptionHandler={this.changeDescriptionHandler}
              />
            }
           </div>
        </div>
      </div>
    );
  }
}

export default App;
