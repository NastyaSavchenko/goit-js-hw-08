import Player from '@vimeo/player';
import throttle from "lodash.throttle";

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// console.log(player)


const player = new Player('vimeo-player');
const CURRENT_TIME = 'videoplayer-current-time';

function getCurrentTime(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds);
}

const currentTime = Number(JSON.parse(localStorage.getItem(CURRENT_TIME)));

player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(getCurrentTime, 1000));

