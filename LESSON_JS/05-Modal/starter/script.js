'use strict';

const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const allShowBtns = document.querySelectorAll('.show-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showInfo = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < allShowBtns.length; i++) {
  allShowBtns[i].addEventListener('click', showInfo);
}
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});
