import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Square = ({value, onClick}) => {
    return (
        <button className='square' onClick={onClick}>
            {value}
        </button>
    )
}

const Board = () => {
    const [xIsNext, setxIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    let status;

    const handleClick = (i) => {
        const squaresCpy = squares.slice();

        if (squaresCpy[i] || calculateWinner(squares)) {
            return;
        }

        squaresCpy[i] = (xIsNext) ? 'X' : 'O';

        setxIsNext(!xIsNext);
        setSquares(squaresCpy);
    }

    const updateStatus = () => {        
        const winner = calculateWinner(squares);

        if (winner) {
            status = 'Winner is ' + winner;
        }
        else {
            status = 'Next player: ' + ((xIsNext) ? ('X') : ('O'));
        }
    }
    
    const renderSquare = (i) => (
        <Square value={squares[i]} onClick={() => handleClick(i)}/>
        // <Square value={squares[i]} onClick={handleClick(i)}/> // Too many re-render Error
    )

    updateStatus();

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
    )
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

const calculateWinner = (squares) => {
    const lines = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; ++i) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
            return squares[a];
        }
    }
    return null;
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);