export type Player = "X" | "O";
export type CellValue = Player | null;

export interface GameConfig {
  boardSize: number;
  winCondition: number;
}

export interface GameHistory {
  xWins: number;
  oWins: number;
  draws: number;
}
