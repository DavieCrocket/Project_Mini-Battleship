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

let arr = [];
let grid = 3;
let rows = grid;
let columns = grid;
let gameRunning = false;
const alphabetList = 'ABCDEFGHIJ';
const numberOfShips = 2;
let shipLocations = [];


// start or stop the game
 const runStart = () => {
  rs.question('Press any key to start the game. ');
  return true;
};


// create the grid
function createGrid(rows = grid, columns = grid) {
  let playGrid = [];
  for (let i = 0; i < rows; i++) {
  playGrid[i] = [];
    for (let j = 0; j < columns; j++) {
      playGrid[i][j] = alphabetList[i] + (j+1);
    }
  }
  return playGrid;
};

// create play grid
let playGrid = createGrid(grid);

// create ship coordinates
function shipCoords() {
  let a = Math.floor(Math.random() * grid);
  let b = Math.floor(Math.random() * grid);
  return [a,b];
}

// place ships in the grid
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const randomGridSquare = () => playGrid[getRandomInt(grid)][getRandomInt(grid)];

const getShipLocations = (shipLocations) => {
  // let ship1 = randomGridSquare();   
  // let ship2 = randomGridSquare();
  
  for (let i = 0; i <= numberOfShips; i++) {
    eval("ship"+ i +" = "+i);
  }

  if (ship1 === ship2) {
    return getShipLocations();
  } else {
    shipLocations = [[{[ship1= randomGridSquare()]: 'Ship'}], 
                     [{[ship2= randomGridSquare()]: 'Ship'}]];
  }
  return shipLocations;
}

// attack grid square
// hit or miss
// is game over
// want to play again



// gameRunning = runStart(); 
let myGrid = createGrid(grid);
console.log(myGrid);
console.log(getShipLocations());
