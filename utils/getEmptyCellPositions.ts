export const getEmptyCellPositions = (data: string[][]) => {
  const positions: [number, number][] = [];

  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      if (data[row][col] === ' ') {
        positions.push([row, col]);
      }
    }
  }

  return positions;
};
