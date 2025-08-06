import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick, winningLine }) => (
  <div className="grid grid-cols-3 gap-1">
    {squares.map((square, i) => (
      <Square
        key={i}
        value={square}
        onClick={() => onClick(i)}
        isWinningSquare={winningLine && winningLine.includes(i)}
      />
    ))}
  </div>
);

export default Board;