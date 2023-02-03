const userButton = document.querySelectorAll('button.chosen')
const aiButton = document.getElementById('ai')
const resultDisplay = document.getElementById('result');
const aiScore = document.getElementById('ai-score');
const userScore = document.getElementById('user-score')
const ai = document.querySelector('.game-container .ai')
let userscore = 0
let aiscore = 0
let aiChoice
let userChoice
let result
userButton.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    generateRandomChoice();
    button.classList.add('play')
    setTimeout(() => {
        button.classList.remove('play')
    }, 500);
    getResult();
}));

function incremntAiScore() {
    aiscore++
    aiScore.innerHTML = aiscore
    console.log(aiscore);
}

function incremntUserScore() {
    userscore++
    userScore.innerHTML = userscore
}

function generateRandomChoice() {
    ai.classList.add('play')
    setTimeout(() => {
        ai.classList.remove('play')
    }, 100);
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
        result = 'you lost!'
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
    resultDisplay.innerHTML = result
}