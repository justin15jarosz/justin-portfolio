import React from 'react';
import { playerColors, winningSquareColors, defaultSquareColors } from '@/lib/colors';

const Square = ({ value, onClick, isWinningSquare }) => {
  const textColorClass = playerColors[value] || '';
  const squareBgClass = isWinningSquare
    ? `${winningSquareColors.light} ${winningSquareColors.dark}`
    : `${defaultSquareColors.light} ${defaultSquareColors.dark}`;

  return (
    <button className={`w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold ${squareBgClass}`} onClick={onClick}>
      <span className={textColorClass}>{value}</span>
    </button>
  );
};

export default Square;