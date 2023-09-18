// connect opening screen and button to start quiz
var mainScreen = document.querySelector(".main");
var highScores = document.querySelector(".scores");
var optionButtons = document.querySelector(".options");

var answerPosibilities = document.getElementById("answers")
var startButton = document.getElementById("start");
var timerE1 = document.getElementById("countdown");
var questions = document.getElementById("questionOne");

var currentQuestionIndex = 0;
var question;
var timer;
var timerCount;
var score = 0;

// when start is clicked timer is activated

function startGame() {
  currentQuestionIndex = 0;
  timerCount = 25;
  score = 0;

  displayQuestions();
  startTimer();
}

startButton.addEventListener("click", startGame);

function startTimer() {
  timer = setInterval(function () {
    if(timerCount > 0) {
    timerCount--;
    timerE1.textContent = timerCount;}

    if (timerCount === 0) {
      clearInterval(timer);

      if (timerCount >= 0) {
      }

    }
  }, 1000);
}
startButton.addEventListener("click", startGame);


// can keep quesetions and answers in array
var questionPossability = [
  {
    question: "what is the color of the sky?",
    answers: ["red", "blue", "green", "brown"],
    correct: "blue"
  },
  {
    question: "what is the color of the sky again?",
    answers: ["red", "blue", "green", "brown"],
    correct: "blue"
  },
  {
    question: "what is the color of the sky again again?",
    answers: ["red", "blue", "green", "brown"],
    correct: "blue"
  },
  {
    question: "what is the color of the sky again 3?",
    answers: ["red", "blue", "green", "brown"],
    correct: "blue"
  },
]


// as soon as timer is activated first question pops up
function displayQuestions() {

if(currentQuestionIndex < questionPossability.length && timerCount > 0) {

  document.querySelector(".main").style.display = 'none';
  document.querySelector(".quiz").style.display = 'block';

  document.getElementById('questions').innerHTML =
    `
                <div class="questions">
                    <h2 id="questionOne">${questionPossability[currentQuestionIndex].question}</h2>
                    <div id="answers">
                        <button class="options">${questionPossability[currentQuestionIndex].answers[0]}</button>
                        <button class="options">${questionPossability[currentQuestionIndex].answers[1]}</button>
                        <button class="options">${questionPossability[currentQuestionIndex].answers[2]}</button>
                        <button class="options">${questionPossability[currentQuestionIndex].answers[3]}</button>
                    </div>
                </div>
   `
} else{
  clearInterval(timer)
  score = timerCount;
  document.querySelector("#score").textContent = score;
  document.querySelector("#mainDiv").style.display = 'none';
  document.querySelector("#finalPage").style.display = 'block';
  // store score in local storage
  // bring out a input block asking for initials
  // store initials in local storage
  // view high score page / restart the game 

}

}


document.getElementById('questions').onclick = function(e) {
  document.querySelector('.footer').style.display = 'block';
  const answer = e.target.innerText;
  console.log(answer);
  if(answer === questionPossability[currentQuestionIndex].correct) {
    document.querySelector('.footer').innerHTML=`<div id="correct"><h4>CORRECT ANSWER!</h4></div>`;
    
  }else{
    document.querySelector('.footer').innerHTML=`<div id="incorrect"><h4>INCORRECT ANSWER!</h4></div>`;
    timerCount= timerCount - 10;
  }

  currentQuestionIndex++;

  setTimeout(function() {
    document.querySelector('.footer').style.display = 'none';
    displayQuestions()}, 1000) 

}