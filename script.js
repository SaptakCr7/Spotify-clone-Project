console.log("Welcome to spotify");

// Initialize The Variables
let songIndex = 0;
let audioElement = new Audio("./Assets/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
  {
    songName: "Let Me love You",
    filaPath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Let Me love You",
    filaPath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Let Me love You",
    filaPath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Let Me love You",
    filaPath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Let Me love You",
    filaPath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

//Handle Play pause Click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen TO Events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});
