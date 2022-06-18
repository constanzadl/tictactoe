import { Square } from "./square"

export const Board = (props) => {

    const renderSquare = (i) => {
      return (
        <Square value={props.clicked[i]} onClick={
        () => {props.onClick(i)}
        }/>
      )
    }
  
    return (
      <div className="grid grid-cols-3 grid-row-3 aspect-square w-60 pt-6">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
      </div>
    );
  }