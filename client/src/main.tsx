import React, { useState } from "react";
import { XorO } from "./types";
import { checkWinner } from "./utils/checkWinner";
import Board from "./components/Board";
import BoardColor from "./components/BoardColor";

const colorDefault = "#000000";
const boardSizeDefault = 3;

export const Main = () => {
  const [boardSize, setBoardSize] = useState(boardSizeDefault);
  const [board, setBoard] = useState<(XorO | undefined)[][]>( Array(boardSize).fill(Array(boardSize).fill(undefined)));
  const [currentPlayer, setCurrentPlayer] = useState<XorO>("X");
  const [winner, setWinner] = useState<XorO | undefined>(undefined);
  const [gameOver, setGameOver] = useState(false);
  const [boardColor, setBoardColor] = useState(colorDefault);

  const handleClick = (row: number, col: number) => {
    if (board[row][col] !== undefined || gameOver) return;

    const newBoard = board.map((r, i) => r.map((c, j) => (i === row && j === col ? currentPlayer : c)));
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setWinner(winner);
      setGameOver(true);
    } else if (newBoard.every(row => row.every(cell => cell !== undefined))) {
      setGameOver(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const handleBoardSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = Math.max(3, Math.min(15, Number(e.target.value)));
    setBoardSize(size);
    resetGame(size);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardColor(e.target.value);
  };

  const resetGame = (size: number) => {
    setBoard(Array(size).fill(Array(size).fill(undefined)));
    setCurrentPlayer("X");
    setWinner(undefined);
    setGameOver(false);
  };

  return (
    <div className='flex flex-col mt-10 items-center gap-10'>

      <h1 className='font-bold text-2xl'>Tic Tac Toe</h1>

      <section className="flex gap-8 p-2">

      <div className='board'>
    <Board board={board} boardColor={boardColor} handleClick={handleClick} />
         

        </div>

        <aside className="flex flex-col items-center gap-2 pl-2 border-l-2 border-dashed border-l-black">
          <p>Board Size:</p>
          <input
            type="number"
            value={boardSize}
            onChange={handleBoardSizeChange}
            className="border-2 border-gray-900 p-1 w-20 text-center"
            min="3"
            max="15"
          />

          <p>Board Color:</p>
          <BoardColor color={boardColor} onChange={handleColorChange} />

          <div className="font-bold">
            {!gameOver
              ? `Current Player: ${currentPlayer}`
              : winner
              ? `Winner: ${winner}`
              : "It's a draw!"}
          </div>
        </aside>
      </section>

      {gameOver && (
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => resetGame(boardSize)}
            className="border-2 border-gray-900 p-2 bg-gray-200 hover:bg-gray-300"
          >
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};
