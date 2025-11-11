import { DefaultDict } from "../lib";
import { Board, BoardValue } from "../types";

interface SudokuProps {
  board: Board;
}

export class Sudoku {
  board!: Board;

  constructor(props: SudokuProps) {
    Object.assign(this, props);
  }

  get isBoardValid() {
    const rowItems = DefaultDict<Set<number>, number>(() => new Set());
    const columnItems = DefaultDict<Set<number>, number>(() => new Set());
    const boxItems = DefaultDict<Set<number>, number>(() => new Set());
    const areThereRepeated = this.board.reduce(
      (acc, row, rowIndex) =>
        row.reduce((acc, item, columnIndex) => {
          return (
            this.isNumberRepeated(acc, rowItems[rowIndex], item) ||
            this.isNumberRepeated(acc, columnItems[columnIndex], item) ||
            this.isNumberRepeated(
              acc,
              boxItems[
                this.twoDimentionalToOneDimentional(
                  Math.floor(rowIndex / 3),
                  Math.floor(columnIndex / 3),
                  3
                )
              ],
              item
            )
          );
        }, false) || acc,
      false
    );
    return !areThereRepeated
  }

  private isNumberRepeated(
    acc: boolean,
    set: Set<number>,
    item: BoardValue
  ): boolean {
    if (item === ".") return acc;
    if (set.has(item)) return true;
    set.add(item);
    return acc;
  }

  private twoDimentionalToOneDimentional(
    row: number,
    col: number,
    cols: number
  ): number {
    return row * cols + col;
  }
}
