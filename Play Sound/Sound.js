function getAudio(audioSrc) {
  return new Audio(audioSrc);
}

const audioTracks = [
  {
    name: 'UAT Space Program',
    src: 'resource/us-lab-background.mp3'
  },
  {
    name: 'Alien',
    src: 'resource/mixkit-alien-jungle-world-2417.wav'
  },
  {
    name: 'Space Junk',
    src: 'resource/mixkit-coarse-tone-mic-distortion-2130.wav'
  }
];

let currentTrackIndex = 0;
let audio = getAudio(audioTracks[currentTrackIndex].src);

const playButton = document.getElementById('play-button');
const playButton2 = document.getElementById('play-button-2');
const playButton3 = document.getElementById('play-button-3');
const stopButton = document.getElementById('stop-button');
const trackName = document.getElementById('audio-name');

playButton.addEventListener('click', () => {
  currentTrackIndex = 0;
  audio = getAudio(audioTracks[currentTrackIndex].src);
  audio.currentTime = 0;
  audio.play();
  trackName.innerText = audioTracks[currentTrackIndex].name;
});

playButton2.addEventListener('click', () => {
  currentTrackIndex = 1;
  audio = getAudio(audioTracks[currentTrackIndex].src);
  audio.currentTime = 0;
  audio.play();
  trackName.innerText = audioTracks[currentTrackIndex].name;
});

playButton3.addEventListener('click', () => {
  currentTrackIndex = 2;
  audio = getAudio(audioTracks[currentTrackIndex].src);
  audio.currentTime = 0;
  audio.play();
  trackName.innerText = audioTracks[currentTrackIndex].name;
});

stopButton.addEventListener('click', () => {
  audio.pause();
});

const stopAllSoundsButton = document.getElementById('stop-all-sounds-button');
stopAllSoundsButton.addEventListener('click', () => {
  audio.pause();
  currentTrackIndex = 0;
  audio = getAudio(audioTracks[currentTrackIndex].src);
  trackName.innerText = "";
});

buttonArray = [playButton, playButton2, playButton3, stopButton];

for (let i = 0; i < buttonArray.length; i++) {
  buttonArray[i].classList.add('button');
}
