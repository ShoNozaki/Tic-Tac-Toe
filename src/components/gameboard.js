import React, { Component } from 'react';
import '../css/gameboard.css'
class Gameboard extends Component {
  render() {
    return (
      <div className="Gameboard">
        <div className="top">
          <div className="boarda1"></div>
          <div className="boarda2"></div>
          <div className="boarda3"></div>
        </div>
        <div className="middle">
          <div className="boarda4"></div>
          <div className="boarda5"></div>
          <div className="boarda6"></div>
        </div>
        <div className="bottom">
          <div className="boarda7"></div>
          <div className="boarda8"></div>
          <div className="boarda9"></div>
        </div>
      </div>
    );
  }
}

export default Gameboard;