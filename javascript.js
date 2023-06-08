console.log('Скрипт загружен');

document.addEventListener('DOMContentLoaded', (event) => {
  const audioPlayer = document.querySelector('.audio-player');
  let isMoving = false;
  let startX = 0; let startY = 0;

  audioPlayer.addEventListener('mousedown', (e) => {
    startX = e.clientX - audioPlayer.offsetLeft;
    startY = e.clientY - audioPlayer.offsetTop;
    isMoving = true;
  });

  document.addEventListener('mousemove', (e) => {
    if (isMoving) {
      audioPlayer.style.left = (e.clientX - startX) + 'px';
      audioPlayer.style.top = (e.clientY - startY) + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isMoving = false;
  });
});
