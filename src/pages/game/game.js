import React from 'react';
import { useState } from 'react';
import { Board } from './components/board';
import { calculateWinner } from './components/winner';

export const Game = () => {

  const [next, setNext] = useState(true);
  const [clickedSquares, setClickedSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const winner = calculateWinner(clickedSquares);
  
  const jumpTo = (step) => {
    setNext((step % 2) === 0);
    setHistory(history.slice(0, step + 1));
    setClickedSquares(history[step + 1].squares.slice())
  }

  const moves = history.map((step, move) => {
    const desc = move ?
    `Go to move #${move}`:
    `Restart Game`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${next ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    setClickedSquares(history[history.length - 1]);
    const newGameState = clickedSquares.slice();

    if (calculateWinner(clickedSquares) || clickedSquares[i]) {
      return;
    }

    clickedSquares[i] = next ? 'X' : 'O';
    setClickedSquares(clickedSquares.slice());
    setHistory(history.concat([{
      squares: newGameState,
    }]));
    setNext(!next);
  }

console.log(clickedSquares);
    return (
      <div className="p-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="m-auto">
          <Board 
          clicked={clickedSquares}
          onClick={(i) => handleClick(i)}
          />
        </div>
        <div className="mt-20 text-blue-300">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
      )
}

// ========================================