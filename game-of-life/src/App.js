import { Fragment, useState } from 'react';

import classes from './App.module.css';

const N = 50; // match match value in repeat of grid-template-columns: repeat(50, 20px);
const RATIO = 0.15;
const INTERVAL = 200;

const createGrid = () => {
  return Array(N)
    .fill(0)
    .map(() =>
      Array(N)
        .fill(0)
        .map(() => (Math.random() <= RATIO ? 1 : 0))
    );
};

const copyGrid = (grid) => {
  const res = [];

  for (let i = 0; i < grid.length; i++) {
    res.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      res[i][j] = grid[i][j];
    }
  }

  return res;
};

const countNeighBour = (grid, x, y) => {
  let res = 0;

  const offsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  offsets.forEach(([offsetX, offSetY]) => {
    if (
      x + offsetX >= 0 &&
      x + offsetX <= grid.length - 1 &&
      grid[x + offsetX][y + offSetY] === 1
    ) {
      res++;
    }
  });

  return res;
};

const initialGrid = createGrid();
let timer = 0;

function App() {
  const [grid, setGrid] = useState(initialGrid);

  const startHandler = () => {
    if (timer) {
      // already start
      return;
    }

    timer = setInterval(() => {
      // voi moi o dem co bao nhieu neighBour
      // if song == 2 | 3 neight thi song
      // neu chet == 3 => song

      setGrid((prevGrid) => {
        const copy = copyGrid(prevGrid);

        for (let i = 0; i < prevGrid.length; i++) {
          for (let j = 0; j < prevGrid[i].length; j++) {
            const nbNeighbour = countNeighBour(prevGrid, i, j);

            if (nbNeighbour === 3) {
              copy[i][j] = 1;
            } else if (nbNeighbour === 2 && prevGrid[i][j] === 1) {
              copy[i][j] = 1;
            } else {
              copy[i][j] = 0;
            }
          }
        }

        return copy;
      });
    }, INTERVAL);
  };

  const stopHandler = () => {
    clearInterval(timer);
    timer = 0;
  };

  const resetHandler = () => {
    stopHandler();

    const newGrid = createGrid();

    setGrid(newGrid);
  };

  return (
    <Fragment>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
      <div className={classes.grid}>
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}${j}`}
              className={cell === 1 ? classes.black : ''}
            ></div>
          ))
        )}
      </div>
    </Fragment>
  );
}

export default App;
