import { Sudoku } from "./valid-sudoku";
import { Board } from "../types";

describe("Sudoku Validator", () => {
  test("should detect repeated numbers in the same row", () => {
    const invalidBoard: Board = [
      [1, 2, 3, 4, 5, 6, 7, 8, 1], // Number 1 repeated in the same row
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ];

    const sudoku = new Sudoku({ board: invalidBoard });
    const isValid = sudoku.isBoardValid;

    expect(isValid).toBe(false);
  });

  test("should detect repeated numbers in the same column", () => {
    const invalidBoard: Board = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, ".", ".", ".", ".", ".", ".", ".", "."],
      [7, ".", ".", ".", ".", ".", ".", ".", "."],
      [2, ".", ".", ".", ".", ".", ".", ".", "."],
      [5, ".", ".", ".", ".", ".", ".", ".", "."],
      [8, ".", ".", ".", ".", ".", ".", ".", "."],
      [3, ".", ".", ".", ".", ".", ".", ".", "."],
      [6, ".", ".", ".", ".", ".", ".", ".", "."],
      [1, ".", ".", ".", ".", ".", ".", ".", "."], // Number 1 repeated in the first column
    ];

    const sudoku = new Sudoku({ board: invalidBoard });
    const isValid = sudoku.isBoardValid;

    expect(isValid).toBe(false);
  });

  test("should detect repeated numbers in the same 3x3 subgrid", () => {
    const invalidBoard: Board = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [7, 8, 1, 1, 2, 3, 4, 5, 6], // Number 1 repeated in the first 3x3 subgrid
      [2, 3, 4, ".", ".", ".", ".", ".", "."],
      [5, 6, 7, ".", ".", ".", ".", ".", "."],
      [8, 9, ".", ".", ".", ".", ".", ".", "."],
      [3, 4, 5, ".", ".", ".", ".", ".", "."],
      [6, 7, 8, ".", ".", ".", ".", ".", "."],
      [9, 1, 2, ".", ".", ".", ".", ".", "."],
    ];

    const sudoku = new Sudoku({ board: invalidBoard });
    const isValid = sudoku.isBoardValid;

    expect(isValid).toBe(false);
  });

  test("should validate a correct board without repeated numbers", () => {
    const validBoard: Board = [
      [5, 3, ".", ".", 7, ".", ".", ".", "."],
      [6, ".", ".", 1, 9, 5, ".", ".", "."],
      [".", 9, 8, ".", ".", ".", ".", 6, "."],
      [8, ".", ".", ".", 6, ".", ".", ".", 3],
      [4, ".", ".", 8, ".", 3, ".", ".", 1],
      [7, ".", ".", ".", 2, ".", ".", ".", 6],
      [".", 6, ".", ".", ".", ".", 2, 8, "."],
      [".", ".", ".", 4, 1, 9, ".", ".", 5],
      [".", ".", ".", ".", 8, ".", ".", 7, 9],
    ];

    const sudoku = new Sudoku({ board: validBoard });
    const isValid = sudoku.isBoardValid;

    expect(isValid).toBe(true);
  });
});

