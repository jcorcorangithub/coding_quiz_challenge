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

let arrayOfQuestions = ["question1","q2","q3","q4","q5","q6","q7","q8"];

let uList = document.querySelector("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");



function questionFunction(){
    for(i = 0; i < arrayOfQuestions.length; i++){
        questions.textContent = arrayOfQuestions[i];
        console.log(i);

        uList.appendChild(li1);
        uList.appendChild(li2);
        uList.appendChild(li3);
        uList.appendChild(li4);
        
        // these would also iterate 
        li1.textContent = arrayOfQuestions[i]; 
        li2.textContent = arrayOfQuestions[i];
        li3.textContent = arrayOfQuestions[i];
        li4.textContent = arrayOfQuestions[i];

    }
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
    questionFunction();
    
    
});