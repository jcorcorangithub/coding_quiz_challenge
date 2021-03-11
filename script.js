// when timer runs out:
//      a message with the score and asking for initials is displayed
//      input box is displayed 
//      high scores are displayed

let startButton = document.querySelector("button");
let timerElement = document.getElementById("timer");
let questions = document.querySelector("p");


let arrayOfQuestions =      ["q1",  "q2",   "q3",   "q4",   "q5"];
let arrayOfFirstChoices =   ["1c1", "1c2",  "1c3",  "1c4",  "1c5"];
let arrayOfSecondChoices =  ["2c1", "2c2",  "2c3",  "2c4",  "2c5"];
let arrayOfThirdChoices =   ["3c1", "3c2",  "3c3",  "3c4",  "3c5"];
let arrayOfFourthChoices =  ["4c1", "4c2",  "4c3",  "4c4",  "4c5"];
let arrayOfCorrectAnswers = ["2c1", "2c2",  "4c3",  "1c4",  "3c5"];

let uList = document.querySelector("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let submitButton = document.createElement("button");
submitButton.textContent = "submit answer";
let li6 = document.createElement("li");
let scoreTracker = 0;



startButton.addEventListener("click", function(){
    timerElement.style.visibility="visible";
    startButton.style.display= "none";
    countdown(); 
    
    uList.appendChild(li1);
    uList.appendChild(li2);
    uList.appendChild(li3);
    uList.appendChild(li4);
    uList.appendChild(submitButton);
    submitButton.disabled = true; // this keeps the submit button disabled until an answer is chosen

    // need a way to iterate to next question after submit button is clicked 
    
        let i = 0;
    
    qAndaChanger(i);

    submitButton.onclick = function() {
        if(chosenAnswer.textContent!==arrayOfCorrectAnswers[i]){
            uList.appendChild(li6).textContent = "wrong answer: minus 3 seconds from timer";
            li6.style.color = "red";
            timeLeft = timeLeft-3;
            submitButton.disabled = true;
            i++;
            chosenAnswer.style.backgroundColor = "white";
            qAndaChanger(i);
            //chosenAnswer = null;
        } else {
            uList.appendChild(li6).textContent = "Correct!";
            li6.style.color = "green";
            scoreTracker++;
            submitButton.disabled = true;
            //chosenAnswer = null;
            i++;
            chosenAnswer.style.backgroundColor = "white";
            qAndaChanger(i);
        }
    }

        // questions.textContent = "Game Over"
        

});

    let timeLeft = 0;
    function countdown() {
        timeLeft = 5;
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
            }
        },1000);
    }

    function qAndaChanger(i){
        questions.textContent = arrayOfQuestions[i];

        li1.textContent = arrayOfFirstChoices[i];
            li1.addEventListener("click",function(){change(li1)});
        li2.textContent = arrayOfSecondChoices[i];
            li2.addEventListener("click",function(){change(li2)});        
        li3.textContent = arrayOfThirdChoices[i];
            li3.addEventListener("click",function(){change(li3)}); 
        li4.textContent = arrayOfFourthChoices[i];
            li4.addEventListener("click",function(){change(li4)});
    } 

    let chosenAnswer;

    function change(a){ // this function executes when one of the answers is selected
        if(chosenAnswer!=null){// if a second option is selected, then that one will be what is counted
            chosenAnswer.style.backgroundColor = "white";
        }
        a.style.backgroundColor= "gray";
        submitButton.disabled = false;
        chosenAnswer = a;
    }
