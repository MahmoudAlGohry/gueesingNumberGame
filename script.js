'use strict';

// document.querySelector(`.message`);
// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `🏆 Well Done !!`;
// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.number`).textContent = 12;
// console.log(document.querySelector(`.guess`).textContent);
// console.log(document.querySelector(`.guess`).value);

// document.querySelector(`.guess`).value = 20;
// console.log(document.querySelector(`.guess`).value);

let secrtNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secrtNumber;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = `⛔ Wrong Number `;
    displayMessage(`⛔ Wrong Number `);
  } else if (guess === secrtNumber) {
    document.querySelector('.message').textContent = `🏆 Correct Answer !!`;
    document.querySelector('.number').textContent = secrtNumber;
    document.querySelector('body').style.backgroundColor = `green`;
    document.querySelector('.number').style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // } else if (!guess == secrtNumber) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent =
    //     guess > secrtNumber ? `📈 Too High` : `📉 Too Low`;
    //     // displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = `😑 You Lost The Game`;
    //   }
  } else if (guess > secrtNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = `📈 Too High`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `😑 You Lost The Game`;
    }
  } else if (guess < secrtNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = `📉 Too Low`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `😑 You Lost The Game`;
    }
  }
});

// Reset btn
document.querySelector('.again').addEventListener(`click`, function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = `Start guessing....`;
  document.querySelector('.guess').value = ` `;
  secrtNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = `15rem`;
});
