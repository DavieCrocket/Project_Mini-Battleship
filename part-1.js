/* 
🛠 Requirements: Part 1
  1. When the application loads, print the text, "Press any key to start the game."
  2  When the user presses the key, your code will randomly place two different ships in two separate locations on the board. Each ship is only 1 unit long (In the real game ships are 2+ in length).
  3. The prompt will then say, "Enter a location to strike ie 'A2' "
  4. The user will then enter a location. If there is a ship at that location the prompt will read, "Hit. You have sunk a battleship. 1 ship remaining."
  5. If there is not a ship at that location the prompt will read, "You have missed!"
  6. If you enter a location you have already guessed the prompt will read, "You have already picked this location. Miss!"
  7. When both of the battleships have been destroyed the prompt will read, "You have destroyed all battleships. Would you like to play again? Y/N"
  8. If "Y" is selected the game starts over. If "N" then the application ends itself.
*/

const rs = require('readline-sync'); 

// start or stop the game
 const runStart = () => {
  rs.question('Press any key to start the game. ');
  return true;
};

// grid size
function makeGrid(grid) { const matrix = Array(grid).fill(Array(grid));
  return matrix;
};

// null the grid
function placeGrid(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = null;
    }
  return matrix;
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// create ship coordinates
function shipCoords() {
  return board[getRandomInt(gridSize)][getRandomInt(gridSize)];
}

// place ships in the grid



// attack grid square
// hit or miss
// is game over
// want to play again

const gridSize = 3;
let gameRunning = false;
gameRunning = runStart(); 
console.log(gameRunning);
const myGrid = makeGrid(gridSize);
const board = placeGrid(myGrid);
ship1 = shipCoords();

console.log(board);