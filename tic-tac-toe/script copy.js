const playBtn = document.querySelector(".play-btn");
const modalPlayer = document.querySelector(".modal-container-player");
const modalWinner = document.querySelector(".modal-container-winner");
const playerForm = document.querySelector(".modal-form-player");
const winnerForm = document.querySelector(".modal-form-winner");
const closeBtn = document.querySelector(".close-btn")
const playAgainBtn = document.querySelector(".play-again-btn");
const playerOne = document.querySelector(".player1-name");
const playerTwo = document.querySelector(".player2-name");

// Player input
const playerInput1 = document.getElementById("player-input1");
const playerInput2 = document.getElementById("player-input2");
const playerInput3 = document.getElementById("player-input3");
const playerInput4 = document.getElementById("player-input4");
const playerInput5 = document.getElementById("player-input5");
const playerInput6 = document.getElementById("player-input6");
const playerInput7 = document.getElementById("player-input7");
const playerInput8 = document.getElementById("player-input8");
const playerInput9 = document.getElementById("player-input9");


let board = [];


playerInput1.addEventListener("click", () => {
  playerInput1.value = "X";
});


const addNamestoBoard = () => {
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






