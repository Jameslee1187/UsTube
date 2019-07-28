const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = event => {
  console.log(event);
};

const startRecording = async () => {
  const videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavialable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
  recordBtn.innerHTML = "Start Recording";
};

const stopRecording = () => {
  videoRecorder.stop();
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerHTML = "Stop Recording";
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: 1280,
        height: 720
      }
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordBtn.innerHTML = "Stop recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "😫 Sorry You Can't Record";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}