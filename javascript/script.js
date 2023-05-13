var topTimer = document.querySelector('#top-timer');
var header = document.querySelector('#header');
var mainHeader = document.querySelector('#main-header');
var startBtn = document.querySelector('#start-button');
var quizMain = document.querySelector('#quiz-main');
var quizQ = document.querySelector('#quiz-question')
var question;
var seconds = 90;
var timeLeft;
var currentQ = 0

startBtn.addEventListener('click', function() {
    header.classList.add('hidden');
    runClock();
    showQuestions();
});

function runClock() {
    topTimer.classList.remove('hidden');
    timeLeft = setInterval(function () {
        seconds--;
        topTimer.innerText = 'Time: '+ seconds;
        if (timeLeft === 0) {
            endQuiz();
        }
    }, 1000);
}

function showQuestions() {
    quizMain.classList.remove('hidden');
    var thisQ = questions[currentQ];
    if (currentQ === questions.length) {
        endQuiz();
    }
    quizQ.innerText = thisQ;

}

