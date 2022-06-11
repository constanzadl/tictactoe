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


const Board = (props) => {

  const renderSquare = (i) => {
    return (
      <Square value={props.clicked[i]} onClick={
      () => {props.onClick(i)}
      }/>
    )
  }

  return (
    <div>
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

  const [next, setNext] = useState(true);
  const [clicked, setClicked] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [current, setCurrent] = useState(null);

  const winner = calculateWinner(clicked);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${next ? 'X' : 'O'}`;
  }

  console.log(history)
  const handleClick = (i) => {
    setCurrent(history[history.length - 1])
    setClicked(clicked.slice());
    if (calculateWinner(clicked) || clicked[i]) {
      return;
    }

    setClicked(clicked);
    clicked[i] = next ? 'X' : 'O';

    setHistory(history.concat([{
      squares: clicked,
    }]));
    setNext(!next);
    
  }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
          clicked={clicked}
          onClick={(i) => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
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