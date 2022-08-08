'use strict';

/*const pTeg = document.querySelector('.between'); // DOM (Document Object Model) => document
//console.log(pTeg);
pTeg.textContent = 'Salom';

const input = document.querySelector('.guess');
console.log(input);

input.value = '9';

console.log(input.value);*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document
  .querySelector('.check')
  .addEventListener('click', function showSomething() {
    const guessNumber = Number(document.querySelector('.guess').value);

    // urinishlar soni 1 dan katta bo'lganda
    if (score > 1) {
      // raqam topilganida
      if (guessNumber === randomNumber) {
        // yangi rekord o'rnatilganda (eng kam urinish qayd etilganda)
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('.number').textContent = guessNumber;
        document.querySelector('.message').textContent = `🎉 To'g'ri raqam!`;
        document.querySelector('body').style.backgroundColor = '#60b347';
      } else if (!guessNumber) {
        document.querySelector('.message').textContent =
          '🚫 Raqam kiritilmadi.';
      } else if (guessNumber > randomNumber) {
        // raqam tasodifiy raqamdan katta bo'lganda
        document.querySelector('.message').textContent = '📈 Raqam katta.';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // raqam tasodifiy raqamdan kichik bo'lganda
        document.querySelector('.message').textContent = '📉 Raqam kichkina.';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      // urinishlar soni tugasa
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.check').setAttribute('disabled', true);
      document.querySelector('.check').style.cursor = 'not-allowed';
      document.querySelector('.message').textContent =
        '😒 Urinishlar soni tugadi.';
    }
  });

// yangi o'yin boshlash
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Tahmin qilish...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
