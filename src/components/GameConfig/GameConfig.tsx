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
              type="number"
              min="3"
              max="10"
              value={config.boardSize}
              onChange={(e) => onConfigChange({
                ...config,
                boardSize: Math.max(3, Math.min(10, parseInt(e.target.value) || 3))
              })}
            />
          </label>
        </div>

        <div className="input-group">
          <label>
            Winning point: 
            <input
              type="number"
              min="3"
              max={config.boardSize}
              value={config.winCondition}
              onChange={(e) => onConfigChange({
                ...config,
                winCondition: Math.max(3, Math.min(config.boardSize, parseInt(e.target.value) || 3))
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