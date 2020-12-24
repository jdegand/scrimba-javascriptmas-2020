const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const gallery = document.querySelector('.gallery');
const images = 5;
let startingPosition = 0;
let endingPositionRight = -880

next.addEventListener('click', function(){
    previous.style.opacity = 1;

  if(startingPosition > endingPositionRight){
    startingPosition += -220;
    console.log(startingPosition)
  }
  if(startingPosition === endingPositionRight){
    next.style.opacity = .3;
  }
   gallery.style.transform = `translateX(${startingPosition}px)`
})
/*
previous.addEventListener('click', function(){
    if(startingPosition < 0){
    startingPosition += 220;
    console.log(startingPosition)
}

   gallery.style.transform = `translateX(${startingPosition}px)`
})
*/
previous.addEventListener('click', function(){

  if(startingPosition < 0){
    startingPosition += 220;
    previous.style.opacity = 1;
    console.log(startingPosition)
  }
  if(startingPosition === 0){
    previous.style.opacity = .3;
  }
   gallery.style.transform = `translateX(${startingPosition}px)`
})


// doesn't change immediately to opacity 0.3
