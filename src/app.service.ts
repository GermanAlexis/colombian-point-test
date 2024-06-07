import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMatrixInExpiral(size: number): number[][] {
    if (size < 3 || size > 15)
      throw new BadRequestException(
        'El valor debe ser  mayor que 3 y menor que 15',
      );
    const matrix = new Array(size).fill(0).map(() => new Array(size).fill(0));

    let counter = 1;
    let startRow = 0;
    let endRow = size - 1;
    let startCol = 0;
    let endCol = size - 1;

    while (startRow <= endRow && startCol <= endCol) {
      // Top row
      for (let i = startCol; i <= endCol; i++) {
        matrix[startRow][i] = counter++;
      }
      startRow++;

      // Right column
      for (let i = startRow; i <= endRow; i++) {
        matrix[i][endCol] = counter++;
      }
      endCol--;

      // Bottom row
      for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = counter++;
      }
      endRow--;

      // Left column
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = counter++;
      }
      startCol++;
    }

    return matrix;
  }
}
