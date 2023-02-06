const userButton = document.querySelectorAll('button.chosen')
const aiButton = document.getElementById('ai')
const resultDisplay = document.getElementById('result');
const aiScore = document.getElementById('ai-score');
const userScore = document.getElementById('user-score')
const ai = document.querySelector('.game-container .ai')
const endGame = document.getElementById('end-game-container')
const HeadText = document.getElementById('head-text')
const paragraghText = document.getElementById('paragragh-text')
let userscore = 0
let aiscore = 0
let aiChoice
let userChoice
let result
    // Increase Abdulrahman's Score
function incremntAiScore() {
    aiscore++
    aiScore.innerHTML = aiscore
}
// Increase user score
function incremntUserScore() {
    userscore++
    userScore.innerHTML = userscore
}
var current_mode = screen.orientation;
// Change view to landscape
// type
console.log(current_mode)

// angle
console.log(current_mode.angle)
if (window.onload)
    document.querySelector("body").requestFullscreen();
else if (window.onload)
    document.querySelector("body").webkitRequestFullScreen();
screen.orientation.lock("landscape")

// Event Listener on click
userButton.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    generateRandomChoice();
    button.classList.add('play')
    setTimeout(() => {
        button.classList.remove('play')
    }, 500);
    getResult();
}));

// Generate random choice
function generateRandomChoice() {
    setTimeout(() => {
        aiButton.innerHTML = '⏳'
    }, 1500);
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        aiChoice = 'rock'
        aiButton.innerText = "👊🏻"
    }
    if (randomNumber === 2) {
        aiChoice = 'paper'
        aiButton.innerText = '🖐🏻'
    }
    if (randomNumber === 3) {
        aiChoice = 'scissors'
        aiButton.innerText = '✌🏻'
    }

}

function getResult() {
    if (aiChoice === userChoice) {
        result = 'its a draw!'
    }
    if (aiChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
        incremntUserScore();
    }
    if (aiChoice === 'rock' && userChoice === "scissors") {
        result = 'you lose!'
        incremntAiScore();
    }
    if (aiChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
        incremntUserScore();
    }
    if (aiChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
        incremntAiScore();
    }
    if (aiChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
        incremntUserScore();
    }
    if (aiChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
        incremntAiScore();
    }
    if (userscore === 10) {
        endGame.style.display = 'flex'
    } else if (aiscore === 10) {
        endGame.style.display = 'flex'
        HeadText.innerText = 'Oh Uh! You Lose'
        paragraghText.innerHTML = 'Game over'
    }
    resultDisplay.innerHTML = result
}
