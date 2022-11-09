import Player from "@vimeo/player";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

let savedSettings = localStorage.getItem("videoplayer-current-time");
let seconds = savedSettings;

console.log("aaaa", seconds);

player.on("play", function () {
  console.log("played the video!");
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

const onPlay = function (data) {
  console.log(data);
  // data is an object containing properties specific to that event
};

player.on("play", onPlay);

player.on("play", function (data) {
  // data is an object containing properties specific to that event
  localStorage.setItem("videoplayer-current-time", data.seconds);
});

player.setCurrentTime(seconds);
