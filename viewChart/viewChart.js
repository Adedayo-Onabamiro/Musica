//start of responsive nav menu
const menuIcon = document.querySelector('.menu-icon');
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');

menuIcon.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('active');
});


// start of music player
// select elements
const playBtn = document.querySelector(".play-button");
const pauseBtn = document.querySelector(".pause-button");
const stopBtn = document.querySelector(".stop-button");
const prevBtn = document.querySelector(".previous-button");
const nextBtn = document.querySelector(".next-button");
const shuffleBtn = document.querySelector(".shuffle-button");
const repeatBtn = document.querySelector(".repeat-button");
const timerEl = document.querySelector(".music-timer");
const durationEl = document.querySelector(".music-duration");
const sliderEl = document.querySelector(".music-slider");

// initialize audio
const audio = new Audio();
audio.src = "your-audio-file.mp3";

// play audio
playBtn.addEventListener("click", () => {
  audio.play();
});

// pause audio
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

//