// start of initial slideshow at top
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshowItem");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "flex";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// end of initial slideshow at top

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


// end of music player