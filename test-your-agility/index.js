//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = !pushed;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerText = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
      for(let i = 0; i < 101; i++){
        if(i === 100){
           i = 0;
           setTargetInt();
        }
          if(pushed){
            stop(i);
            break;
          }else {
            spinningElem.innerText = i;
            await sleep(75)
          }
      }
}

//EDIT THIS FUNCTION
function stop(i){
    //WRITE YOUR CODE HERE
    var result = document.getElementById('result'); // empty html element
    var check = Math.abs(targetInt - (i-1));
    if(check === 0){
      result.innerText = 'Correct!'
    }else {
      result.innerText = `Missed it by ${check}. Try Again.`
    }

    if(pushed){
      setTimeout(()=> {
        window.location.reload()
      }, 2000)
    }
}


//main
setTargetInt();
spin()
