import { checkWinner } from './checkWinner';
import { XorO } from '../types';

describe('checkWinner', () => {
  test('should return the winner when there is a row winner', () => {
    const board: (XorO | undefined)[][] = [
      ['X', 'X', 'X'],
      ['O', undefined, 'O'],
      [undefined, 'O', undefined],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  test('should return the winner when there is a column winner', () => {
    const board: (XorO | undefined)[][] = [
      ['X', 'O', undefined],
      ['X', undefined, 'O'],
      ['X', 'O', undefined],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  test('should return the winner when there is a diagonal winner', () => {
    const board: (XorO | undefined)[][] = [
      ['X', 'O', 'O'],
      [undefined, 'X', 'O'],
      ['O', undefined, 'X'],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  test('should return the winner when there is an anti-diagonal winner', () => {
    const board: (XorO | undefined)[][] = [
      ['O', undefined, 'X'],
      [undefined, 'X', 'O'],
      ['X', 'O', undefined],
    ];
    expect(checkWinner(board)).toBe('X');
  });

  test('should return undefined when there is no winner', () => {
    const board: (XorO | undefined)[][] = [
      ['X', 'O', 'X'],
      ['X', 'O', 'O'],
      ['O', 'X', 'X'],
    ];
    expect(checkWinner(board)).toBeUndefined();
  });

  test('should return undefined for an empty board', () => {
    const board: (XorO | undefined)[][] = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ];
    expect(checkWinner(board)).toBeUndefined();
  });
});
