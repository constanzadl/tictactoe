import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

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
  const winner = calculateWinner(clicked);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    if (calculateWinner(clicked) || clicked[i]) {
      return;
    }
    defineClicked(clicked.slice());
    defineClicked(clicked);
    defineNext(!xIsNext);
    clicked[i] = xIsNext ? 'X' : 'O';
    console.log(clicked)
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

const calculateWinner = (clicked) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (clicked[a] && clicked[a] === clicked[b] && clicked[a] === clicked[c]) {
      return clicked[a];
    }
  }
  return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);