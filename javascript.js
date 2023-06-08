const playerContainer = document.querySelector('.audio-container');
const dragArea = document.querySelector('.drag-area');

let isMoving = false;
let startX = 0;
let startY = 0;

dragArea.addEventListener('pointerdown', (e) => {
  startX = e.clientX - playerContainer.offsetLeft;
  startY = e.clientY - playerContainer.offsetTop;
  isMoving = true;
});

window.addEventListener('pointermove', (e) => {
  if (isMoving) {
    e.preventDefault();
    playerContainer.style.left = (e.clientX - startX) + 'px';
    playerContainer.style.top = (e.clientY - startY) + 'px';
  }
});

window.addEventListener('pointerup', () => {
  isMoving = false;
});
