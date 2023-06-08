document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.querySelector('.audio-player');
  if (!audioPlayer) return;
  let isMoving = false;

  audioPlayer.addEventListener('pointerdown', (e) => {
    const startX = e.clientX - audioPlayer.offsetLeft;
    const startY = e.clientY - audioPlayer.offsetTop;
    isMoving = true;

    function move (e) {
      if (isMoving) {
        audioPlayer.style.left = (e.clientX - startX) + 'px';
        audioPlayer.style.top = (e.clientY - startY) + 'px';
      }
    }

    function stopMove () {
      if (isMoving) {
        isMoving = false;
        document.removeEventListener('pointermove', move);
        document.removeEventListener('pointerup', stopMove);
      }
    }

    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', stopMove);
  });
});
