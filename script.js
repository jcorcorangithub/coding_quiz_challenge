// startButton.addEventListener("click", function(){
//     document.getElementById("timer").style.visibility="visible";
// })
// when i click start:
//      the timer appears and starts to countdown
//      the <p> section goes away and the first question is displayed
//      
// i need to be able to select an answer 
// then to click submit:
//    after submittiing:
//      if correct add to score 
//      if incorrect subtracr from time
//
// when timer runs out:
//      a message with the score and asing for initials is displayed
//      input box is displayed 
//      high scores are displayed 

let startButton = document.querySelector("button");
let timerElement = document.getElementById("timer");

function countdown() {
    let timeLeft = 30;
    let timeInterval = setInterval(function(){
        if(timeLeft > 1){
            timerElement.textContent = timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerElement.textContent = timeLeft;
            timeLeft--;
        } else {
            timerElement.textContent = "time is up";
            clearInterval(timeInterval);
            // displayQuestion();  
        }
    },1000);
}

startButton.addEventListener("click", function(){
    countdown();
    startButton.style.visibility = "hidden";
});