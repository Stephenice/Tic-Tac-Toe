import { XorO } from "../types";

type Board = (XorO | undefined)[][];

export function updateBoard(
  board: Board,
  row: number,
  col: number,
  currentPlayer: XorO
): Board {
  return board.map((rowArray, rowIndex) =>
    rowArray.map((cell, colIndex) =>
      rowIndex === row && colIndex === col ? currentPlayer : cell
    )
  );
}
