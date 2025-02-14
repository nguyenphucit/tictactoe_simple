import React, { useState} from 'react';
import GameConfigScreen from './GameConfig/GameConfig.tsx';
import GameBoard from './GameBoard/GameBoard.tsx';
import GameStatus from './GameStatus/GameStatus.tsx';
import GameHistory from './GameHistory/GameHistory.tsx';
import { checkWin } from '../utils/GameLogic.ts';
import { Player, CellValue, GameConfig as ConfigType, GameHistory as HistoryType} from '../types/index.ts';
import './tictactoe.css';

const TicTacToe: React.FC = () => {
  const [config, setConfig] = useState<ConfigType>({
    boardSize: 3,
    winCondition: 3
  });
  
  const [gameStarted, setGameStarted] = useState(false);
  const [board, setBoard] = useState<CellValue[][]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
  const [gameHistory, setGameHistory] = useState<HistoryType>({
    xWins: 0,
    oWins: 0,
    draws: 0
  });
  const [winningCells, setWinningCells] = useState<[number, number][]>([]);
  const startNewGame = () => {
    // Kiểm tra board size
    if (config.boardSize < 3 || config.boardSize > 10) {
      alert('Kích thước bàn cờ phải từ 3x3 đến 10x10!');
      return;
    }
  
    // Kiểm tra winning condition
    if (config.winCondition < 3) {
      alert('Số quân để thắng phải từ 3 trở lên!');
      return;
    }
  
    if (config.winCondition > config.boardSize) {
      alert('Số quân để thắng không thể lớn hơn kích thước bàn cờ!');
      return;
    }
    
    setBoard(Array(config.boardSize).fill(null)
      .map(() => Array(config.boardSize).fill(null)));
    setCurrentPlayer('X');
    setWinner(null);
    setGameStarted(true);
    setWinningCells([]);
  };


  const handleMove = (row: number, col: number) => {
    if (board[row][col] || winner) return;
  
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);
  
    const { isWin, winningCells } = checkWin(newBoard, row, col, currentPlayer, config.winCondition);
    
    if (isWin) {
      setWinningCells(winningCells);
      setWinner(currentPlayer);

      setGameHistory(prev => ({
        ...prev,
        [currentPlayer === 'X' ? 'xWins' : 'oWins']: prev[currentPlayer === 'X' ? 'xWins' : 'oWins'] + 1
      }));
      return;
    }
  
    if (newBoard.every(row => row.every(cell => cell !== null))) {
      setWinner('Draw');

      setGameHistory(prev => ({
        ...prev,
        draws: prev.draws + 1
      }));
      return;
    }
  
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };
  

  const handleConfigChange = () => {
    setGameStarted(false);
    setGameHistory({
      xWins: 0,
      oWins: 0,
      draws: 0
    });
  };

  if (!gameStarted) {
    return (
      <GameConfigScreen 
        config={config}
        onConfigChange={setConfig}
        onStartGame={startNewGame}
      />
    );
  }

  return (
    <div className="game-screen">
      <div className="game-container">
        <GameStatus 
          currentPlayer={currentPlayer}
          winner={winner}
          onRestart={startNewGame}
          onConfigChange={handleConfigChange}
        />

        <GameBoard 
          board={board}
          boardSize={config.boardSize}
          onCellClick={handleMove}
          disabled={!!winner}
          winningCells={winningCells} 
        />

        <GameHistory 
          xWins={gameHistory.xWins}
          oWins={gameHistory.oWins}
          draws={gameHistory.draws}
        />
      </div>
    </div>
  );
};

export default TicTacToe;