import React, { memo } from 'react';
import { Player } from '../../types';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import './GameStatus.css'
const XIcon = require('../../assets/X_icon.png');
const OIcon = require('../../assets/O_icon.png');

interface GameStatusProps {
  currentPlayer: Player;
  winner: Player | 'Draw' | null;
  onRestart: () => void;
  onConfigChange: () => void;
}

const GameStatus: React.FC<GameStatusProps> = memo(({
  currentPlayer,
  winner,
  onRestart,
  onConfigChange
}) => {
  return (
    <>
      <div className="game-header">
        <div className="header-logo"><img src={XIcon} alt=""/> <img src={OIcon} alt=""/></div>
        <div className="current-player">
          <div className={`current-play-box ${winner ? 'win':''}`}>
          {winner!=="Draw"?<img 
            src={currentPlayer === 'X' ? XIcon : OIcon} 
            alt={currentPlayer}
            className="player-icon"
          />:null}
          {winner ? (winner === "Draw" ? "DRAW" : "WON")  : "TURN"}
          </div>
        </div>
        <div className="button-group">
        <button className="btn primary" onClick={onRestart}>
          <RestartAltIcon/>
        </button>
        <button className="btn secondary" onClick={onConfigChange}>
          <SettingsIcon/>
        </button>
      </div>
      </div>

    </>
  );
});

export default GameStatus;