import React from 'react';
import BoardColumn from './BoardColumn';
import { XorO } from '../types';

interface RowProps {
  row: (XorO | undefined)[];
  rowIndex: number;
  boardColor: string;
  handleClick: (row: number, col: number) => void;
}

const BoardRow: React.FC<RowProps> = React.memo(({ row, rowIndex, boardColor, handleClick }) => {
  return (
    <div className='flex gap-1'>
      {row.map((column, colIndex) => (
        <BoardColumn
          key={`${rowIndex}-${colIndex}`}
          column={column}
          boardColor={boardColor}
          handleClick={() => handleClick(rowIndex, colIndex)}
        />
      ))}
    </div>
  );
});

export default BoardRow;
