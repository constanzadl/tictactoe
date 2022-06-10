import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

const Square = (props) => {

  return (
    <button className="square" onClick={
      () => { props.onClick() }
    }>
      {props.value}
    </button>
  )
}


const Board = () => {
  const [clicked, defineClicked] = useState(Array(9).fill(null));
  const [xIsNext, defineNext] = useState(true);
  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  
  const handleClick = (i) => {
    defineClicked(clicked.slice());
    /*clicked[i] = 'X';
    defineClicked(clicked);*/
    defineNext(!xIsNext);
  }

  const renderSquare = (i) => {
    return (
      <Square value={clicked[i]} onClick={
      () => {handleClick(i)}
      }/>
    )
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

const Game = () => {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
      )
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
