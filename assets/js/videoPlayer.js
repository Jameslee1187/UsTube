const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");

function handlePlayClick() {
  console.log("a");

  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function init() {
  console.log("f");

  playBtn.addEventListener("click", handlePlayClick);
  console.log("g");
}

if (videoContainer) {
  console.log("h");

  init();
  console.log("ik");
}
