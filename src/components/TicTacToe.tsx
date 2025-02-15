import React, { useCallback, useState} from 'react';
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
  const startNewGame = useCallback(() => {

    if (config.boardSize < 3 || config.boardSize > 10) {
      alert('Board size must in range between 3 and 10!');
      return;
    }
  

    if (config.winCondition < 3) {
      alert('The number of points to win must be 3 or more!');
      return;
    }
  
    if (config.winCondition > config.boardSize) {
      alert('Winning Points can not be bigger than Board size!');
      return;
    }
    
    setBoard(Array(config.boardSize).fill(null)
      .map(() => Array(config.boardSize).fill(null)));
    setCurrentPlayer('X');
    setWinner(null);
    setGameStarted(true);
    setWinningCells([]);
  },[config.boardSize,config.winCondition]);


  const handleMove = useCallback((row: number, col: number) => {
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
  },[board, winner, currentPlayer, config.winCondition]);
  

  const handleConfigChange = useCallback(() => {
    setGameStarted(false);
    setGameHistory({
      xWins: 0,
      oWins: 0,
      draws: 0
    });
  },[]);

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