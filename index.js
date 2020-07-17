

for(var i=1;i<=7;i++){
document.querySelector(".drum"+i).addEventListener("click",function(){
  detectkey(this.innerHTML);      //here the detectkey function is taking the letter written on the button and playing the audio related to that button.  
  addstyle(this.innerHTML);       
});
}

function detectkey(value){   
  //This function takes a parameter value and checks it with various letters (letters on the button), and plays the audio related to the button on which the letter is written
  switch (value) {
    case "w":
      var audio=(new Audio('sounds/crash.mp3'));
      audio.play();
      break;
    case "a":
      var audio=(new Audio('sounds/kick-bass.mp3'));
      audio.play();
      break;
    case "s":
      var audio=(new Audio('sounds/snare.mp3'));
      audio.play();
      break;
    case "d":
      var audio=(new Audio('sounds/tom-1.mp3'));
      audio.play();
      break;
    case "j":
      var audio=(new Audio('sounds/tom-2.mp3'));
      audio.play();
      break;
    case "k":
      var audio=(new Audio('sounds/tom-3.mp3'));
      audio.play();
      break;
    case "l":
      var audio=(new Audio('sounds/tom-4.mp3'));
      audio.play();
      break;
  }
}

function addstyle(keypress){    //This function implements the press feel animation by adding and removing css in after a fixed timeout
  document.querySelector("."+keypress).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+keypress).classList.remove("pressed");},50);

}

document.addEventListener("keydown",function(pressed){    //here we add a keypress event to the whole DOM and trigger the detectkey and addstyle function by keypresses
  detectkey(pressed.key);
  addstyle(pressed.key);
});
