document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
  cells: [
  { row: 0, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 0, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 1, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 1, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 2, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 2, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 }
  ]
};



function startGame () {
  // Don't remove this function call: it makes the game work!
//random 20% set as isMine 
for (var i = 0;i < board.cells.length; i++) {
    if (Math.random() < .30) {
    board.cells[i].isMine = true;
    }
  }

  for(var i=0; i<board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);


  }
  lib.initBoard()
}
document.addEventListener("contextmenu", checkForWin); //Right-click detect.
document.addEventListener("click", checkForWin); // Left-click mouse triggers checkForWin.
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


  var countTotalHidden =0;
  var countTotalMines =0;
  var countTotalMarkedMines =0;

  for (var k=0; k<board.cells.length; k++){
    //call for checking for win routine, everytime left or right mouse was clicked.

      if (board.cells[k].hidden === true && board.cells[k].isMine === false) {
         //console.log(`Cell ${k} is a hidden non-mine:`, board.cells[k])
         //countTotalHidden++;
         return;
      } 

      if (board.cells[k].isMine === true) {
          //onsole.log(`Cell ${k} is a mine:`, board.cells[k])
          countTotalMines++;
      }

      if (board.cells[k].isMine === true && board.cells[k].isMarked === true) {
          //console.log(`Cell ${k} is a marked mine:`, board.cells[k])
          countTotalMarkedMines++;
      }
  }    
  if (countTotalMines === countTotalMarkedMines){

      lib.displayMessage('You win!');
       var audio = new Audio("applause3.mp3");
       audio.play();
  } else {
    return;
  }
 
}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var count =0;
  for (let j=0; j<surroundingCells.length; j++){
    if (surroundingCells[j].isMine===true){
        count++;
    }
  }
  return count;
}



