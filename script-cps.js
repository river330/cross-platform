/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
// for the play and pause button 
let body = document.body;

let audio = document.getElementById("playMusic");
let button = document.getElementById(".button");
var count = 0;

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
  } else {
    count = 0;
    audio.pause();
  }
}

setTimeout(function(){
            audio.play(); 
        }, 2500);

// pop-up box
let modal = document.querySelector(".modal");

let closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}


function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


document.addEventListener("DOMContentLoaded", toggleModal);

closeButton.addEventListener("click", toggleModal);
