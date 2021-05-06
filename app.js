'use strict';

window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if(!audio) return; //Stops function if slected key doesnt match
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  
})

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


