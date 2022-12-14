import '../css/common.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
console.log(throttle);
player.on('timeupdate', throttle(onPlay, 1000));
const timeContinue = +localStorage.getItem(TIME_KEY) || 0;
function onPlay(data) {
  // console.log(data);
  // const stringifyData = JSON.stringify(data);
  // console.log(TIME_KEY.seconds);
  localStorage.setItem(TIME_KEY, data.seconds);

  // timeContinue = JSON.parse(TIME_KEY);
  // console.log(timeContinue);
}

player.setCurrentTime(timeContinue);
