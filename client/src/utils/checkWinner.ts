import { XorO } from '../types';

/**
 * Checks if there is a winner on the given tic-tac-toe board.
 *
 * @param {(XorO | undefined)[][]} board - The tic-tac-toe board to check for a winner.
 * @return {XorO | undefined} - The winning player ('X' or 'O') if there is a winner, undefined otherwise.
 */

export const checkWinner = (board: (XorO | undefined)[][]): XorO | undefined => {
    const size = board.length;
    // Check rows and columns
    for (let i = 0; i < size; i++) {
      if (board[i].every(cell => cell === board[i][0] && cell !== undefined)) return board[i][0];
      if (board.every(row => row[i] === board[0][i] && row[i] !== undefined)) return board[0][i];
    }
    // Check diagonals
    if (board.every((row, i) => row[i] === board[0][0] && row[i] !== undefined)) return board[0][0];
    if (board.every((row, i) => row[size - 1 - i] === board[0][size - 1] && row[size - 1 - i] !== undefined)) return board[0][size - 1];
    return undefined;
  };