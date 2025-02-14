import React from 'react';
import { GameConfig } from '../../types';
import './GameConfig.css'
const XIcon = require('../../assets/X_icon.png');
const OIcon = require('../../assets/O_icon.png');
interface GameConfigProps {
  config: GameConfig;
  onConfigChange: (config: GameConfig) => void;
  onStartGame: () => void;
}
const GameConfigScreen: React.FC<GameConfigProps> = ({ 
  config, 
  onConfigChange, 
  onStartGame 
}) => {
  return (
    <div className="config-screen">
      <div className="config-container">
        <h1><img src={XIcon} alt=""/> Game config <img src={OIcon}  alt=""/> </h1>
        
        <div className="input-group">
  <label>
    Board size: 
    <input
      type="text"
      value={config.boardSize}
      onChange={(e) => onConfigChange({
        ...config,
        boardSize: parseInt(e.target.value) || 0
      })}
    />
  </label>
</div>

<div className="input-group">
  <label>
    Winning point: 
    <input
      type="text"
      value={config.winCondition}
      onChange={(e) => onConfigChange({
        ...config,
        winCondition: parseInt(e.target.value) || 0
      })}
    />
  </label>
</div>

        <button className="btn_Start" onClick={onStartGame}>
          Game Start
        </button>
      </div>
    </div>
  );
};

export default GameConfigScreen;