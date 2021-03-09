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
let questions = document.querySelector("p");

let arrayOfQuestions = ["q1","q2","q3","q4","q5"];
let arrayOfChoices1 = ["c1","c2","c3","c4","c5"];
let arrayOfChoices2 = ["c1","c2","c3","c4","c5"];
let arrayOfChoices3 = ["c1","c2","c3","c4","c5"];
let arrayOfChoices4 = ["c1","c2","c3","c4","c5"];

let uList = document.querySelector("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("button");
li5.textContent = "submit";

function questionFunction(){
    
    // this will display question after question 

    //for each question:
    //      create 4 answers, each as an element on the html file (maybe a list)
    //      each answer is highlughted when clicked
    //      a submit button must also be created 
    //
    //      <p> input the question into this tag
    //      create and then append an <ol> with 4 <li> for each question (hover and click effect)
    //      the submit button could be the startbutton 
    //
    //
    //
    //
    //

    // return "question1";
}

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
        }
    },1000);
}

startButton.addEventListener("click", function(){
    timerElement.style.visibility="visible";
    startButton.style.display= "none";
    countdown(); 
    //questionFunction();
    
    uList.appendChild(li1);
    uList.appendChild(li2);
    uList.appendChild(li3);
    uList.appendChild(li4);
    uList.appendChild(li5);
    li5.disabled = true; // this keeps the submit button disabled until an answer is chosen
    function change(a){ // this function executes when one of the answers is selected
        a.style.borderStyle= "solid", borderColor= "black";
        li5.disabled = false;
    }
    
    
    for(i = 0; i < arrayOfQuestions.length; i++){
    
    questions.textContent = arrayOfQuestions[i];

    li1.textContent = arrayOfChoices1[i];
    li1.addEventListener("click",function(){change(li1)});
    li2.textContent = arrayOfChoices2[i];
    li2.addEventListener("click",function(){change(li2)});        
    li3.textContent = arrayOfChoices3[i];
    li3.addEventListener("click",function(){change(li3)}); 
    li4.textContent = arrayOfChoices4[i];
    li4.addEventListener("click",function(){change(li4)}); 

        


    }

    
    
});