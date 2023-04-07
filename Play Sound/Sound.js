window.AudioContext = window.AudioContext || window.webkitAudioContext;
if (!window.AudioContext) {
  console.error("AudioContext not supported!");
}
// Define an object containing audio track data
// Define an object containing audio track data
const audioTracks = [
  { name: 'UAT Space Program', src: 'resource/us-lab-background.mp3' },
  { name: 'Alien', src: 'resource/mixkit-alien-jungle-world-2417.wav' },
  { name: 'Space Junk', src: 'resource/mixkit-coarse-tone-mic-distortion-2130.wav' },
];

// Define global variables
let audio;
let currentTrackIndex = 0;
let loop = false;

// Get references to DOM elements
const trackName = document.getElementById('audio-name');
const playButton = document.querySelector('[data-track-index="0"]');
const playButton2 = document.querySelector('[data-track-index="1"]');
const playButton3 = document.querySelector('[data-track-index="2"]');
const volumeSlider = document.getElementById('volume-slider');
const muteButton = document.getElementById('mute-button');
const loopButton = document.getElementById('loop-button');

// Define function to play audio
function playAudio(trackIndex) {
  if (audio) {
    audio.pause();
  }

  currentTrackIndex = trackIndex;
  audio = getAudio(audioTracks[currentTrackIndex].src);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
    trackName.innerText = audioTracks[currentTrackIndex].name;
  }
}

// Define function to stop audio
function stopAudio() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    trackName.innerText = '';
  }
}

// Add click event listeners to the play buttons
playButton.addEventListener('click', () => {
  playAudio(0);
});

playButton2.addEventListener('click', () => {
  playAudio(1);
});

playButton3.addEventListener('click', () => {
  playAudio(2);
});

// Add input event listener to the volume slider
volumeSlider.addEventListener('input', () => {
  if (audio) {
    audio.volume = volumeSlider.value / 100;
  }
});

// Get an audio element with a given source
function getAudio(src) {
  const audio = new Audio(src);
  audio.volume = volumeSlider.value / 100;
  audio.loop = loop;
  return audio;
}

// Set the initial volume to 50%
let volume = 0.5;

// Add event listener to volume slider
volumeSlider.addEventListener('input', () => {
  volume = volumeSlider.value / 100;
  setVolume(volume);
});

// Function to set the volume of the audio element
function setVolume(volume) {
  if (audio) {
    audio.volume = volume;
  }
}

// Add click event listener to mute button
muteButton.addEventListener('click', () => {
  if (audio) {
    audio.muted = !audio.muted;
    if (audio.muted) {
      muteButton.innerText = 'Unmute';
    } else {
      muteButton.innerText = 'Mute';
    }
  }
});

// Add click event listener to loop button
loopButton.addEventListener('click', () => {
  if (audio) {
    loop = !loop;
    audio.loop = loop;
    if (loop) {
      loopButton.innerText = 'Unloop';
    } else {
      loopButton.innerText = 'Loop';
    }
  }
});

