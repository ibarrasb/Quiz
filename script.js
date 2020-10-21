var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");

var shuffledQuestion, currentQuestionI



startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", ()=> {
    currentQuestionI++;
    selectNextQ();
})

function startGame(){
startButton.classList.add('hide');
shuffledQuestion = questions.sort(() => Math.random() - .5);
currentQuestionI = 0;
questionContainer.classList.remove('hide');
selectNextQ();

}

function selectNextQ(){
    resetState();
    showQuestion(shuffledQuestion[currentQuestionI]);


}
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

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide");
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

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

function setStatusClass(element, correct){
    clearStatusClass (element)
    if(correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}
function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}


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