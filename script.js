"use strict";

function startGame() {
  // generating a random number
  const secretNumber = Math.floor(Math.random() * 20) + 1;
  //document.querySelector(".number").textContent = secretNumber;

  let score = 20; //= Number(document.querySelector('.score').textContent = 20);
  //console.log(score, typeof score)
  console.log(secretNumber);

  let highscore = 0;

  document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    //console.log(guess, typeof guess);

    // when there is no imputation
    if (!guess) {
      document.querySelector(".message").textContent = "Escolha um número! 👉🏽";

      //when the player wins
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Adivinhou 🏆";
      document.querySelector("body").style.backgroundColor = "#5eb15e";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "30rem";

      //update hightscore
      if (highscore < score) {
        highscore = score;
      }
      document.querySelector(".highscore").textContent = score;

      // check score and guess is too hight
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "Grande demais... 🤏🏽";
        score--;
        Number((document.querySelector(".score").textContent = score));
      } else {
        document.querySelector(".message").textContent =
          "Você perdeu o jogo! 🩻";
        document.querySelector(".score").textContent = 0;
      }

      // check score and guess is too low
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "Passou longe... 🥶";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "Você perdeu o jogo! 😒";
        document.querySelector(".score").textContent = 0;
      }
    }
  });

  //function reset game
  document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#302d31";
    score = 20;
    document.querySelector(".message").textContent = "Escolha um número! 👉🏽";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = 20;
  });
}

startGame();

//🏆 🥶
