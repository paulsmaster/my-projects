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

cellElements.forEach(cell => {
  cell.addEventListener("click", handleClick, { once:true })
});

function handleClick(e) {
  const cell = e.target;
  const currrentClass = circleTurn ? "O" : "X";
  // input the value in the cell 
  placeMark(cell, currrentClass);
  // Check for win
  // Check for Draw
  // Switch turns
  swapTurns();
}

function placeMark(cell, currrentClass) {
  cell.value = currrentClass;
  if(cell.value === "X") {
    document.querySelector(".info").innerHTML = `Player 2, it's your turn 🙂`;
  } else {
    document.querySelector(".info").innerHTML = `Player 1, it's your turn 🙂`;
  }
}

function swapTurns() {
  circleTurn = !circleTurn;
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
});











