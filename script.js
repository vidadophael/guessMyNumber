"use strict";

const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20; //= Number(document.querySelector('.score').textContent = 20);
//console.log(score, typeof score)

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Escolha um número! 👉🏽";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Adivinhou 🏆";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Grande demais... 🤏🏽";
      score--;
      Number((document.querySelector(".score").textContent = score));
    } else {
      document.querySelector(".message").textContent = "Você perdeu o jogo 🩻";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Passou longe... 🥶";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Você perdeu o jogo 😒";
      document.querySelector(".score").textContent = 0;
    }
  }

  //console.log(score);
});

//🏆 🥶
