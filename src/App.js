import React, { Component } from 'react';
import Gameboard from './components/gameboard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tic Tac Toe</h2>
        </div>
        <p className="App-intro">
          Press Start Game to Play
        </p>
        <button>Start</button>
        <Gameboard />
      </div>
    );
  }
}

export default App;
