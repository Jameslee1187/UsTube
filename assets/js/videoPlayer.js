const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");

function handlePlayClick() {
  console.log("a");

  if (videoPlayer.paused) {
    console.log("b");

    videoPlayer.play();
    console.log("c");
  } else {
    console.log("d");

    videoPlayer.pause();
    console.log("e");
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
