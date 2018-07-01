import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <h1>Memory Game</h1>
        <h2 onClick={() => this.props.newGame()}>New Game</h2>
      </div>
    )
  }

}

export default NavBar;