const playBtn = document.querySelector(".play-btn");
const modalPlayer = document.querySelector(".modal-container-player");
const modalWinner = document.querySelector(".modal-container-winner");
const playerForm = document.querySelector(".modal-form-player");
const winnerForm = document.querySelector(".modal-form-winner");
const closeBtn = document.querySelector(".close-btn")
const playAgainBtn = document.querySelector(".play-again-btn");
const playerOne = document.querySelector(".player1-name");
const playerTwo = document.querySelector(".player2-name");
const cellElements = document.querySelectorAll(".board-box");
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let circleTurn

function addNamestoBoard() {
  const player1Name = document.querySelector("#player1").value;
  const player2Name = document.querySelector("#player2").value;
  playerOne.textContent = `${player1Name}`;
  playerTwo.textContent = `${player2Name}`;
  playerForm.reset();
  document.querySelector(".players").classList.add("show");
  document.querySelector(".board-game").classList.add("show");
  document.querySelector(".board-info").classList.remove("show");
  playBtn.classList.remove("show");
  document.querySelector(".info").classList.add("show");
  modalPlayer.classList.remove("show");
}

function startGame() {
  cellElements.forEach(cell => {
    cell.value = "";
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true })
  });
}

function handleClick(e) {
  const cell = e.target;
  const currrentClass = circleTurn ? "O" : "X";
  // input the value in the cell 
  placeMark(cell, currrentClass);
  // Check for win
  if (checkWinX()) {
    document.querySelector(".winner").innerHTML = `PLAYER 1 is the WINNER!`;
    modalWinner.classList.add("show");
  }
  if (checkWinO()) {
    document.querySelector(".winner").innerHTML = `PLAYER 2 is the WINNER!`;
    modalWinner.classList.add("show");
  }
  if (checkTie()) {
    document.querySelector(".winner").innerHTML = `This is a TIE!`;
    modalWinner.classList.add("show");
  }
  // Check for Draw
  // Switch turns
  swapTurns();
}


function placeMark(cell, currrentClass) {
  cell.value = currrentClass;
  if (cell.value === "X") {
    document.querySelector(".info").innerHTML = `PLAYER 2, it's your turn 🙂.<br>Click on the box to place "O"`;
  } else {
    document.querySelector(".info").innerHTML = `PLAYER 1, it's your turn 🙂.<br>Click on the box to place "X"`;
  }
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function checkWinX() {
  return winningConditions.some(combination => {
    return combination.every((i) => {
      return cellElements[i].value === "X";
    });
  });
}
function checkWinO() {
  return winningConditions.some(combination => {
    return combination.every((i) => {
      return cellElements[i].value === "O";
    });
  });
}
function checkTie() {
  return [...cellElements].every((cell) => {
    return cell.value === "X" || cell.value === "O";
  });
}



// Event listeners
playBtn.addEventListener("click", () => {
  modalPlayer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modalPlayer.classList.remove("show");
});

playerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNamestoBoard();
  startGame();
});

playAgainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  startGame();
  modalWinner.classList.remove("show");
});











