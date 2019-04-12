const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");

function handlePlayClick() {
  console.log("hey", videoPlayer.paused);
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  init();
}
