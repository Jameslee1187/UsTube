const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");

function init() {}
recordBtn.addEventListener("click", startRecording);
if (recorderContainer) {
  init();
}
