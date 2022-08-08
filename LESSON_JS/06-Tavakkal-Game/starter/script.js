'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentScores,
  activeUser,
  totalScores = [];

const init = () => {
  score0.textContent = 0;
  score1.textContent = 0;
  currentScores = 0;
  activeUser = 0;
  totalScores = [0, 0];
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  rollBtn.removeAttribute('disabled');
  holdBtn.removeAttribute('disabled');
  rollBtn.style.cursor = 'pointer';
  holdBtn.style.cursor = 'pointer';
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

const playerActive = () => {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const currentActive = activeId => {
  document.getElementById('current--' + activeId).textContent = currentScores;
};

rollBtn.addEventListener('click', function () {
  let randam = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = 'dice-' + randam + '.png';

  if (randam !== 1) {
    currentScores += randam;
    currentActive(activeUser);
  } else {
    currentScores = 0;
    currentActive(activeUser);
    activeUser = activeUser === 0 ? 1 : 0;
    playerActive();
  }
});

holdBtn.addEventListener('click', function () {
  dice.classList.add('hidden');
  totalScores[activeUser] += currentScores;
  currentScores = 0;
  currentActive(activeUser);
  document.getElementById('score--' + activeUser).textContent =
    totalScores[activeUser];

  if (totalScores[activeUser] >= 10) {
    document
      .querySelector('.player--' + activeUser)
      .classList.add('player--winner');
    rollBtn.setAttribute('disabled', true);
    holdBtn.setAttribute('disabled', true);
    rollBtn.style.cursor = 'not-allowed';
    holdBtn.style.cursor = 'not-allowed';
  }
  activeUser = activeUser === 0 ? 1 : 0;
  playerActive();
});

newBtn.addEventListener('click', init);
