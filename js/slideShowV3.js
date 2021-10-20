let count = 1;
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
let images = document.images;
let nowPlaying = false;
let timer;
const MIN = 1;
const MAX = 19;

function left(){
  thumbnailsElement.children[(count < MIN) ? 0 : count-1].classList.remove("selected");
  count--;
  if(count < MIN){
    count = MAX;
  }
  const URL = images[count].src;
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[(count-1 == MIN) ? MIN : count-1].classList.add("selected");
}

function right(){
  thumbnailsElement.children[(count-1 == MAX) ? MAX-1 : count-1].classList.remove("selected");
  count++;
  if(count > MAX){
    count = MIN;
  }
  const URL = images[count].src;
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[(count-1 == MAX) ? 0 : count-1].classList.add("selected");

}

function play(){
  if(!nowPlaying){
    nowPlaying = true;
    setTimeout(autoPlay, 1000);
  }
}

function autoPlay(){
  right();
  timer = setTimeout(autoPlay, 1000);
}

function stop(){
  nowPlaying = false;
  clearTimeout(timer);
}

function reset(){
  nowPlaying = false;
  stop();
  thumbnailsElement.children[count-1].classList.remove("selected");
  count = 1;
  const URL = images[1].src;
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[0].classList.add("selected");
}

function Log(){
  console.log(count);
}
