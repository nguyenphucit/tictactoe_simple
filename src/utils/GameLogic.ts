import { CellValue, Player } from "../types";

export const checkWin = (
  board: CellValue[][],
  x: number,
  y: number,
  player: Player,
  win_condition = 5
): { isWin: boolean; winningCells: [number, number][] } => {
  const directions = [
    [
      [0, 1],
      [0, -1],
    ], // Ngang
    [
      [1, 0],
      [-1, 0],
    ], // Dọc
    [
      [1, 1],
      [-1, -1],
    ], // Chéo chính
    [
      [1, -1],
      [-1, 1],
    ], // Chéo phụ
  ];

  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < directions.length; i++) {
    let count = 1;
    const winningPositions: [number, number][] = [[x, y]]; // Thêm vị trí hiện tại

    for (let j = 0; j < 2; j++) {
      let dx = directions[i][j][0];
      let dy = directions[i][j][1];
      let nx = x + dx;
      let ny = y + dy;

      while (
        nx >= 0 &&
        ny >= 0 &&
        nx < rows &&
        ny < cols &&
        board[nx][ny] === player
      ) {
        count++;
        winningPositions.push([nx, ny]);
        if (count >= win_condition) {
          return { isWin: true, winningCells: winningPositions };
        }
        nx += dx;
        ny += dy;
      }
    }
  }
  return { isWin: false, winningCells: [] };
};
