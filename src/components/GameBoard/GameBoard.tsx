import React, { memo } from 'react';
import { CellValue } from '../../types';
import './GameBoard.css'
const XIcon = require('../../assets/X_icon.png');
const OIcon = require('../../assets/O_icon.png');

interface GameBoardProps {
  board: CellValue[][];
  boardSize: number;
  onCellClick: (row: number, col: number) => void;
  disabled: boolean;
  winningCells: [number, number][];
}

const GameBoard: React.FC<GameBoardProps> = memo(({
  board,
  boardSize,
  onCellClick,
  disabled,
  winningCells
}) => {
  const isWinningCell = (row: number, col: number) => {
    return winningCells.some(([r, c]) => r === row && c === col);
  };

  return (
    <div 
      className="game-board"
      style={{
        gridTemplateColumns: `repeat(${boardSize}, 1fr)`
      }}
    >
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            onClick={() => onCellClick(rowIndex, colIndex)}
            disabled={!!cell || disabled}
            className={`cell ${isWinningCell(rowIndex, colIndex) ? 'winning-cell' : ''}`}
          >
            {cell && (
              <img 
                src={cell === 'X' ? XIcon : OIcon} 
                alt={cell} 
                className="cell-icon"
              />
            )}
          </button>
        ))
      ))}
    </div>
  );
});

export default GameBoard