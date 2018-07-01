import React, { Component } from 'react';
import NavBar from './NavBar';
import Card from './Card';

import './App.css';

class App extends Component {
  static defaultProps = {
    cards_num: 16,
    colors: ['#e6194b', '#3cb44b', '#ffe119', '#0082c8', '#f58231', '#911eb4', '#46f0f0', '#808000']
  }

  constructor(props) {
    super(props);
    this.state = {
      matchedID: []
    };

    this.cards = Array(props.cards_num).fill();
    this.colors = this.shuffleAndPairColors(props.colors);

    this.revealCard = this.revealCard.bind(this);
  }

  revealCard(newCardId) {
    const matches = this.state.matchedID.slice();
    
    if(matches.length % 2 === 0 && matches.length) {
      const prevCardId = matches[matches.length-2],
            currCardId = matches[matches.length-1]

      this.colors[currCardId] === this.colors[prevCardId] ? matches.push(currCardId, prevCardId) : matches.splice(-2,2);
    }

    matches.push(newCardId);

    this.setState({matchedID: matches});
  }

  shuffleAndPairColors(arr) {
    let shuffledArr = arr.concat(arr),
        length = shuffledArr.length;

    while(length) {
      let i = Math.floor(Math.random() * length--);
      [shuffledArr[length], shuffledArr[i]] = [shuffledArr[i], shuffledArr[length]];
    }
    
    return shuffledArr;
  }

  render() {
    const {matchedID} = this.state,
          cards = this.cards.map((card, i) => {
      return <Card
              id={i}
              match={matchedID.some(id => id === i) ? true : false} 
              revealCard={this.revealCard} 
              bgColor={this.colors[i]} key={i} 
              />
    });
    return (
      <div className="App">
        <NavBar newGame={() => this.setState({matchedID: []})} />
        <div className="cards-list">
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
