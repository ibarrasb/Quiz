var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");
//intialize variables
var shuffledQuestion, currentQuestionI
var totalSeconds = 0;
var secondsElapsed = 0;

//Click button to start
startButton.addEventListener("click", startGame);
//Once started, cycles through question
//Randomizes all questions
nextButton.addEventListener("click", ()=> {
    currentQuestionI++;
    selectNextQ();
})
//Starts Game
function startGame(){
    //hides start button to make room for questions
startButton.classList.add('hide');
//to randomize question order
shuffledQuestion = questions.sort(() => Math.random() - .5);
currentQuestionI = 0;
questionContainer.classList.remove('hide');
selectNextQ();
}
//gets random next question
function selectNextQ(){
    resetState();
    showQuestion(shuffledQuestion[currentQuestionI]);
}

//gets question information for container
function showQuestion(question){
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendChild(button)
        
    });
}
//removes answered question from array, so it doesnt repeat the same question
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide");
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}
//recieves user input for answer and gets response if its correct or incorrect
function selectAnswer(e){
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestion.length > currentQuestionI + 1){
        nextButton.classList.remove("hide")
    } else {
        startButton.innerHTML = "restart"
        startButton.classList.remove("hide")
    }
}
//sets attributes to page for correct or incorrect answer
function setStatusClass(element, correct){
    clearStatusClass (element)
    if(correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}
//removes set attribute for next question
function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

// Timer Functions for when start
function startTimer() {
    setTime();
    if (totalSeconds > 0) {
       setInterval(function() {
          secondsElapsed++;
          renderTime();
        }, 1000);
    } 
  }
  function setTime() {
    var minutes = 2;
    totalSeconds = minutes * 60;
  }
  function renderTime() {
    
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
    
    }

    //to retrieve time formatted
    function getFormattedMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed;
    var minutesLeft = Math.floor(secondsLeft / 60);
    var formattedMinutes;     
        if (minutesLeft < 10) {
          formattedMinutes = "0" + minutesLeft;
        } else {
          formattedMinutes = minutesLeft;
        }
        return formattedMinutes;
      }
      function getFormattedSeconds() {
        var secondsLeft = (totalSeconds - secondsElapsed) % 60;
        var formattedSeconds;
        if (secondsLeft < 10) {
          formattedSeconds = "0" + secondsLeft;
        } else {
          formattedSeconds = secondsLeft;
        }
        return formattedSeconds;
      }
    
startButton.addEventListener("click", startTimer);

//Array of questions set by Eddie
var questions = [
    {
        question: "What is 2 + 2?", answer: [
            { text:"4", correct:true},
            { text:"2", correct:false},
            { text:"2", correct:false},
            { text:"2", correct:false}
        ]
    },
    {
        question: "What is red", answer: [
            { text:"red", correct:true},
            { text:"blue", correct:false},
            { text:"green", correct:false},
            { text:"purple", correct:false}
        ]
    },
    {
        question: "Is programming fun?", answer: [
            { text:"no", correct:false},
            { text:"its boring", correct:false},
            { text:"YES!!!", correct:true},
            { text:"maybe", correct:false}
        ]
    },
    {
        question: "What is the capital of Texas?", answer: [
            { text:"Portland", correct:false},
            { text:"Miami", correct:false},
            { text:"Los Angeles", correct:false},
            { text:"Austin", correct:true}
        ]
    },
    {
        question: "What year did World War II end? ", answer: [
            { text:"1963", correct:false},
            { text:"2000", correct:false},
            { text:"1945", correct:true},
            { text:"1775", correct:false}
        ]
    }
]