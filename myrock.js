// // //ROCK PAPER SCISSORS

// const readline = require('readline');

// const readlinePackage = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout

// });

// const message = 'Type 0 for Rock. 1 for Paper. 2 for Scissors?'

const updateScore = () => {
  const playerScore = document.querySelector('.player-score span');
  const computerScore = document.querySelector('.computer-score span');
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
}

let pScore = 0
let cScore = 0

function theGame() {



const choices = ['rock', 'paper', 'scissors']

const computerChoice = choices[randomNumber()]

const myRock = checksWinner('rock', computerChoice) 
const myPaper = checksWinner('paper,', computerChoice)
const myScissor = checksWinner('scissors', computerChoice) 

// Button Selection

const rockBtn = document.getElementById('rockbutton')
const paperBtn = document.getElementById('paperbutton')
const scissorBtn = document.getElementById('scissorbutton')
const resetBtn = document.getElementById('resetbutton')




// // Score Functions





rockBtn.onclick = function() {
if(computerChoice === 'rock') {
  document.getElementById("winner").innerHTML = "You choose Rock... <br>Computer chose Rock. <br><strong>This Was a Rocky Relationship.</strong><br><br>";
  theGame()
} else if (computerChoice === 'scissors') {
  document.getElementById("winner").innerHTML = "You choose Rock... <br>Computer chose Scissors.<br><strong>You Rock Bottomed His Ass!</strong><br><br>",
  pScore++;
  updateScore();
  theGame();
} else if (computerChoice === 'paper') {
  document.getElementById("winner").innerHTML = "You choose Rock... <br>Computer chose Paper.<br><strong>Paper Covers Rock. Try Again!</strong><br><br>";
  cScore++;
  updateScore();
  theGame()
} 
}



paperBtn.onclick = function() {
if(computerChoice === 'rock') {
  document.getElementById("winner").innerHTML = "You choose Paper... <br>Computer chose Rock. <br><strong>You Covered Him for the 1, 2, 3!</strong><br><br>";
  pScore++;
  updateScore();
  theGame()
} else if (computerChoice === 'scissors') {
  document.getElementById("winner").innerHTML = "You choose Paper... <br>Computer chose Scissors... <br><strong>You Got Cut Up B.</strong><br><br>";
  cScore++
  updateScore();
  theGame()
} else if (computerChoice === 'paper') {
  document.getElementById("winner").innerHTML = "You choose Paper<br>Computer chose Paper... <br><strong>This Was Boring.</strong><br><br>"
  updateScore();
  theGame()
} 
}


scissorBtn.onclick = function() {
if(computerChoice === 'rock') {
  document.getElementById("winner").innerHTML = "You choose Scissors... <br>Computer chose Rock. <br><strong>You Got Banged Hard.</strong><br><br>";
  cScore++;
  updateScore();
  theGame()
} else if (computerChoice === 'scissors') {
  document.getElementById("winner").innerHTML = "You choose Scissors... <br>Computer chose Scissors<br><strong>Monkey Knife Fight To a Draw.</strong><br><br>";
  theGame()
} else if (computerChoice === 'paper') {
  document.getElementById("winner").innerHTML = "You choose Scissors... <br>Computer chose Paper <br><strong>Slicin' and Dicin' at 3 Low Payments of $29.99.</strong><br><br>"
  cScore++
  updateScore();
  theGame()

}}



//Reset Button
resetBtn.onclick = function() {location.reload()}


// Get random Number
function randomNumber() {
return Math.floor(Math.random() * Math.floor(choices.length))}

// function ourFunction(input){
//     readlinePackage.question(message, (input) => {
//     let playerChoice = choices[input]
//         if (input > 2){checkRange(input) 
//     } else {
//       console.log(checksWinner(playerChoice, computerChoice))
//       ourFunction()
//       }
//     });

function checkRange(x){
  if(x > 2 || x < 0 || x === ""){
    console.log("Value out of range!! Try again\n")
    ourFunction()
  }  
} 

}








function checksWinner(playerInput, computerInput) {

  if (playerInput === 'rock' && computerInput === 'paper') {
  return "Player = Rock. \nComputer = Paper. \nYou Got Covered!!\n"

  } if (playerInput === 'rock' && computerInput === 'scissors') {
  return "Player = Rock. \nComputer = Scissors. \nYou Rock Bottomed His Ass!\n"


  } if (playerInput === 'rock' && computerInput === 'rock') {
  return "Player = Rock. \nComputer = Rock. \nCats Game. Try Again!\n"
  

  } if (playerInput === 'paper' && computerInput === 'rock') {
  return "Player = Paper. \nComputer = Rock. \nYou Covered Him for the 1, 2, 3!\n"
  

  } if (playerInput === 'paper' && computerInput === 'scissors') {
  return "Player = Paper. \nComputer = Scissors. \nYou Got Cut Up!\n"
  

  } if (playerInput === 'paper' && computerInput === 'paper') {
  return "Player = Paper. \nComputer = Paper. \nPaper...paper...boring!\n"
  

  } if (playerInput === 'scissors' && computerInput === 'rock') {
  return "Player = Scissors. \nComputer = Rock. \nYou got banged!\n"
  

  } if (playerInput === 'scissors' && computerInput === 'paper') {
  return "Player = Scissors. \nComputer = Paper. \nYou Win, Edward Scissor Hands!\n"
  

  } if (playerInput === 'scissors' && computerInput === 'scissors') {
  return "Player = Scissors. \nComputer = Scissors. \nScissor me timbers, it\'s a tie\n"
  

  } if (playerInput === computerInput) {
  return "Same result!! Try Again, Jonathan Againigains!\n"
  
  

  } else {
  return "Error! Try Again!\n"
  }
}

theGame()

// }

// const playAgainQuest = ("Play Again? Y/N?" + playAgain())

// console.log("Play Again? Y/N?" + playAgain('y'))

// function playAgain(xPlayAgain) {
//     if (xPlayAgain === 'y') {
//     console.log('y')
//     } if (xPlayAgain === 'n') {
//     return "Thanks for Playing!"
// } }





// ourFunction()

// do {
//   ourFunction()
// }
// while (myNewFunction(true))

// // looping through an array
// // for (let index = 0; index < choices.length; index ++){
// //    console.log(choices[index])
// // }