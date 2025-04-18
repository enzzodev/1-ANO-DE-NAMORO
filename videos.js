document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const muteButton = document.getElementById("muteButton");

  // Define volume inicial
  music.volume = 0.1;

  // Ação do botão mute
  muteButton.addEventListener("click", () => {
    music.muted = !music.muted;
    muteButton.textContent = music.muted ? "🔇": "🔊 " ;
  });
});

