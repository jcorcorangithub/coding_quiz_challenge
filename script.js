let mainSection = document.querySelector("main");
let startButton = document.querySelector("button");
let timerElement = document.getElementById("timer");
let questions = document.querySelector("p");
let inputForm = document.querySelector("form");
let topScores = document.querySelector("card");

//d  c  c  a  c
let arrayOfQuestions =      
["Inside which HTML element do we put the JavaScript?",  
"What is the correct JavaScript syntax to change the content of the HTML element below?",   
"Where is the correct place to insert a JavaScript?",   
"What is the correct syntax for referring to an external script called 'xxx.js'?",   
"How do you write 'Hello World' in an alert box?"];


let arrayOfFirstChoices =   
["<javascript>", 
"#demo.innerHTML = 'Hello World!'';",  
"The <head> section",  
"<script src='xxx.js'>",  
"alert('Hello World');"];


let arrayOfSecondChoices =  
["<scripting>", 
"document.getElementByName('p').innerHTML = 'Hello World!'';",  
"The <body> section",  
"<script href='xxx.js'>",  
"msg('Hello World');"];


let arrayOfThirdChoices =   
["<js>", 
"document.getElementById('demo').innerHTML = 'Hello World!';",  
"Both the <head> section and the <body> section are correct",  
"<script name='xxx.js'>",  
"alertBox('Hello World');"];


let arrayOfFourthChoices =  
["<script>", 
"document.getElement('p').innerHTML = 'Hello World!';",  
"The <body> section",  
"<script name='xxx.js'>",  
"msgBox('Hello World');"];


let arrayOfCorrectAnswers = 
["<script>", 
"document.getElementById('demo').innerHTML = 'Hello World!';",  
"Both the <head> section and the <body> section are correct",  
"<script src='xxx.js'>",  
"alert('Hello World');"];


let uList = document.querySelector("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let submitButton = document.createElement("button");
submitButton.textContent = "submit answer";
let li6 = document.createElement("li");
let scoreTracker = 0;
let timeLeft;


//when user clicks start the structure for the questions and answers
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
    
    let i = 0;
    
    qAndaChanger(i);

    // the function below appends an li which acts a display message telling the user correct or incorrect
    // that message disappers after 1 second
    // then disables the submit button 
    // prepares the content for the next question

    submitButton.onclick = function() {
        if(chosenAnswer.textContent!==arrayOfCorrectAnswers[i]){
            uList.appendChild(li6).textContent = "wrong answer: minus 3 seconds from timer";
            li6.style.color = "red";
            setTimeout(function(){
                li6.innerHTML="";
            },1500);
            timeLeft = timeLeft-3;
            submitButton.disabled = true;
            i++;
            chosenAnswer.style.backgroundColor = "white";
            qAndaChanger(i);
        } else {
            uList.appendChild(li6).textContent = "Correct!";
            li6.style.color = "green";
            setTimeout(function(){
                li6.innerHTML="";
            },1500);
            scoreTracker++;
            submitButton.disabled = true;
            i++;
            chosenAnswer.style.backgroundColor = "white";
            qAndaChanger(i);
        }
    }
});


    


    // this acts as the timer function and clears some of the page as to only display the input box and the list of high scores 
    function countdown() {
        timeLeft = 30;
        let timeInterval = setInterval(function(){
            if(timeLeft > 1){
                timerElement.textContent = timeLeft;
                timeLeft--;
            } else if (timeLeft === 1) {
                timerElement.textContent = timeLeft;
                timeLeft--;
            } else {
                timerElement.textContent = "Game Over";
                clearInterval(timeInterval);
                
                questions.textContent = "Your score is "+scoreTracker;
                mainSection.removeChild(document.querySelector("ul"));
                
                inputForm.style.visibility = "visible";

                //right now the program automatically takes in the text from the input box and the score without the user having to click the save button
                let userInitials = document.getElementById("initials");
                let userInfo = {
                    userInitials: userInitials.value.trim(),
                    userScore: scoreTracker,
                }

                //i need this to only work when the submit button is clicked
                let saveLastHighScore = localStorage.setItem("userInfo", JSON.stringify(userInfo));

                //this variable is meant to be added onto the list of previous scores
                let LastHighScore = JSON.parse(localStorage.userInfo);
                

               

            }
        },1000);
    }

    function qAndaChanger(i){
        if(i>=arrayOfQuestions.length){
            timeLeft=1;
        }
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
