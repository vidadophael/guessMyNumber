"use strict";

function startGame() {
  // generating a random number
  let secretNumber = ''
  //document.querySelector(".number").textContent = secretNumber;

  let score = 20; //= Number(document.querySelector('.score').textContent = 20);
  //console.log(score, typeof score)
  //console.log(secretNumber);

  let highscore = 0;

  function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
  }

  const messageDisplay = function(message) {
    document.querySelector(".message").textContent = message;
  }
  

  document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    //console.log(guess, typeof guess);

    // when there is no imputation
    if (!guess) {
      messageDisplay("Escolha um número! 👉🏽");

      //when the player wins
    } else if (guess === secretNumber) {
      messageDisplay("Adivinhou 🏆");
      document.querySelector("body").style.backgroundColor = "#5eb15e";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "30rem";

      //update hightscore
      if (highscore < score) {
        highscore = score;
      }
      document.querySelector(".highscore").textContent = score;

      //game roles
    } else if(guess != secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = guess > secretNumber ? "Grande demais... 🤏🏽" : "Passou longe... 🥶";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        messageDisplay("Você perdeu o jogo! 🩻");          ;
        document.querySelector(".score").textContent = 0;
      }
    } 
  });

  //function reset game
  document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#302d31";
    score = 20;
    messageDisplay("Escolha um número! 👉🏽");
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = 20;
    generateSecretNumber();
  });
}

startGame();

//🏆 🥶
