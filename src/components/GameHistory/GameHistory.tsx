import React, { memo } from 'react';
import './GameHistory.css'
const XIcon = require('../../assets/X_icon.png');
const OIcon = require('../../assets/O_icon.png');

interface GameHistoryProps {
  xWins: number;
  oWins: number;
  draws: number;
}

const GameHistory: React.FC<GameHistoryProps> = memo(({ xWins, oWins, draws }) => {
  return (
    <div className="game-history">
      <div className="history-stats">
        <div className="player-stat">
          <img src={XIcon} alt="X" className="history-icon" />
          <span>{xWins} Game</span>
        </div>
        <div className="draw-stat">
          <div>Draw</div>
          <span> {draws} Game</span>
        </div>
        <div className="player-stat">
          <img src={OIcon} alt="O" className="history-icon" />
          <span>{oWins} Game</span>
        </div>
      </div>
    </div>
  );
});

export default GameHistory;