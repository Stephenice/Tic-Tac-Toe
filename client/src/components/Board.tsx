import React from 'react';
import BoardRow from './BoardRow';
import { XorO } from '../types';

interface BoardProps {
  board: (XorO | undefined)[][];
  boardColor: string;
  handleClick: (row: number, col: number) => void;
}

const Board: React.FC<BoardProps> = React.memo(({ board, boardColor, handleClick }) => {
  return (
    <div className='flex flex-col gap-1'>
      {board.map((row, rowIndex) => (
        <BoardRow
          key={`${rowIndex}-rows`}
          row={row}
          rowIndex={rowIndex}
          boardColor={boardColor}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
});

export default Board;
