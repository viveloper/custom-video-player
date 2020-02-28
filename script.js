const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

// play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// update progress/timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  let min = Math.floor(video.currentTime / 60);
  let second = Math.floor(video.currentTime % 60);
  min = min < 10 ? `0${min}` : `${min}`;
  second = second < 10 ? `0${second}` : `${second}`;
  timestamp.innerText = `${min}:${second}`;
}

// set video time to progress
function setVideoProgress() {
  video.currentTime = (progress.value / 100) * video.duration;
}

// stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
