import React from 'react';

interface ColorPickerProps {
  color: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BoardColor: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  return (
    <input
      type="color"
      value={color}
      onChange={onChange}
      className='border-2 border-gray-900 p-1 w-20 text-center mt-2'
    />
  );
};

export default BoardColor;
