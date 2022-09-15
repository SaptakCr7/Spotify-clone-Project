console.log("Welcome to songify");

// Initialize The Variables
let songIndex = 0;
let audioElement = new Audio("./Assets/Songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Animals- Martin Garrix",
    filePath: "./Assets/Songs/1.mp3",
    coverPath: "./Assets/covers/1.jpg",
  },
  {
    songName: "Make belive-Post Malone ft-juice world",
    filePath: "./Assets/Songs/2.mp3",
    coverPath: "./Assets/covers/2.jpg",
  },
  {
    songName: "Praise the lord- A$SAP Rocky",
    filePath: "./Assets/Songs/3.mp3",
    coverPath: "./Assets/covers/3.jpeg",
  },
  {
    songName: "Psyco - Post Malone",
    filePath: "./Assets/Songs/4.mp3",
    coverPath: "././Assets/covers/4.jpg",
  },
  {
    songName: "The Less I know The Better - TameImpala",
    filePath: "./Assets/Songs/5.mp3",
    coverPath: "./Assets/covers/2.jpg",
  },
  {
    songName: "I am Changing - TameImpala",
    filePath: "./Assets/Songs/6.mp3",
    coverPath: "./Assets/covers/1.jpg",
  },
  {
    songName: "Let me Love you - justin bieber",
    filePath: "./Assets/Songs/7.mp3",
    coverPath: "./Assets/covers/3.jpeg",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

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
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songitemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      gif.style.opacity = 1;

      masterSongName.innerText = songs[songIndex].songName;
      audioElement.src = `./Assets/Songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./Assets/Songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;

  masterSongName.innerText = songs[songIndex].songName;
  gif.style.opacity = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `./Assets/Songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  gif.style.opacity = 0;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
