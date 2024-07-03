import React from 'react';

interface ColumnProps {
  column: string | undefined;
  boardColor: string;
  handleClick: () => void;
}

const BoardColumn: React.FC<ColumnProps> = React.memo(({ column, boardColor, handleClick }) => {
  return (
    <div
      style={{ borderColor: boardColor }}
      className='border-2 w-10 h-10 cursor-pointer items-center justify-center text-2xl font-bold flex'
      onClick={handleClick}
    >
      {column}
    </div>
  );
});

export default BoardColumn;
