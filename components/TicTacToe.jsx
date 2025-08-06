import React, { useState } from 'react';
import Board from './Board';
import { playerColors } from '@/lib/colors';

const TicTacToe = ({ onClose }) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const { winner, winningLine } = calculateWinner(history[stepNumber]);
  const current = history[stepNumber];
  const isDraw = !winner && current.every((square) => square !== null);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const currentSquares = [...historyPoint[stepNumber]];
    if (winner || currentSquares[i]) return;

    currentSquares[i] = xIsNext ? "X" : "O";
    setHistory([...historyPoint, currentSquares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);

    const { winner: newWinner } = calculateWinner(currentSquares);
    if (newWinner) {
      setScores((prevScores) => ({
        ...prevScores,
        [newWinner]: prevScores[newWinner] + 1,
      }));
    } else if (currentSquares.every((square) => square !== null)) {
      setScores((prevScores) => ({
        ...prevScores,
        draws: prevScores.draws + 1,
      }));
    }
  };

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 h-full p-4 relative flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-gray-800 dark:text-white"
      >
        &lt; Back
      </button>
      <h1 className="text-2xl text-gray-800 font-bold mb-4 text-center">
        Tic-Tac-Toe
      </h1>
      <Board
        squares={history[stepNumber]}
        onClick={handleClick}
        winningLine={winningLine}
      />
      <div className="text-center mt-4">
        <h3 className={`text-lg font-bold ${winner ? playerColors[winner] : isDraw ? 'text-gray-800' : playerColors[xIsNext ? 'X' : 'O']}`}>
          {winner
            ? "Winner: " + winner
            : isDraw
            ? "Draw!"
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </h3>
        <div className="text-md text-gray-800 mt-2">
          Score:
          <span className={playerColors.X}> X: {scores.X}</span> |
          <span className={playerColors.O}> O: {scores.O}</span> | Draws:{" "}
          {scores.draws}
        </div>
        <button
          className="bg-gray-300 dark:bg-gray-600 px-4 py-2 mt-2 rounded-lg"
          onClick={resetGame}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningLine: lines[i] };
    }
  }
  return { winner: null, winningLine: null };
}

export default TicTacToe;
