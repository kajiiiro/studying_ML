const R = require("ramda");

/**
 * return value that is between 0 and max
 * @param {int} max
 */
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const bom = "💣";

const initializeMatrix = (row, col, numOfMines) => {
  let mineInfos = R.range(0, row).map(_ => R.range(0, col).map(_ => 0));
  R.range(0, numOfMines)
    .map(_ => getRandomInt(row * col))
    .forEach(position => {
      /**
       * left center right
       * 1    2      3 top
       * 4    5      6 center
       * 7    8      9 bottom
       */
      const rowCenter = position % row;
      const rowLeft = rowCenter - 1;
      const rowRight = rowCenter + 1;
      const colCenter = position % col;
      const colTop = colCenter - 1;
      const colBottom = colCenter + 1;
      console.log(rowCenter, colCenter, position);
      if (9 <= mineInfos[rowCenter][colCenter]) {
        console.log("already mine!");
        return;
      }
      if (mineInfos[rowLeft]) {
        ++mineInfos[rowLeft][colTop];
        ++mineInfos[rowLeft][colCenter];
        ++mineInfos[rowLeft][colBottom];
      }
      if (mineInfos[rowRight]) {
        ++mineInfos[rowRight][colTop];
        ++mineInfos[rowRight][colCenter];
        ++mineInfos[rowRight][colBottom];
      }
      ++mineInfos[rowCenter][colTop];
      mineInfos[rowCenter][colCenter] = 9;
      ++mineInfos[rowCenter][colBottom];
    });
  return { row, col, mineInfos };
};

const printMatrix = ({ row, col, mineInfos }) => {
  for (let i = 0; i < row; ++i) {
    let buf = "";
    for (let j = 0; j < col; ++j) {
      const num = mineInfos[i][j];
      buf += `${num < 9 ? num : bom}　`;
    }
    console.log(buf);
  }
};

const matrix = initializeMatrix(5, 7, 35);

printMatrix(matrix);
