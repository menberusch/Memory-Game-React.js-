import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const {match, bgColor, revealCard, id} = this.props;
    return(
      <div 
          className="card" 
          style={{backgroundColor: match ? bgColor : ''}} 
          onClick={() => !this.props.match ? revealCard(id) : ''}>
      </div>
    )
  }
}

export default Card;