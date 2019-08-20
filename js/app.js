//Variables
const startBtn = document.querySelector('#start');
const input = document.querySelector('#input');
const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
const userInput = document.getElementsByClassName('.input-number');
const okBtn = document.querySelector('#span-two');
const resetBtn = document.querySelector('#reset');
const resultDiv = document.querySelector('#results');
const hiddenBox = document.querySelector('#hidden');
const answerBox = document.querySelector('#answer-box');


//Event Listeners
eventListeners();

function eventListeners () {

    startBtn.addEventListener('click', showGame);
    input.addEventListener('click', getNumber);
    okBtn.addEventListener('click', letsGo, checkAnswer);
    resetBtn.addEventListener('click', resetForm);
}

//Functions

function showGame (event) {
    const instructionsDiv = document.querySelector('#instructions');
    const gameDiv = document.querySelector('#game');
    instructionsDiv.style.display ='none';
    gameDiv.style.display = 'block';
}

function getNumber(event) {
    let userNumber;
    if(event.target.classList.contains('number') ) {
        userNumber = event.target.textContent;
    }
    showNumber(userNumber);
}

function showNumber(userNumber) {
    if( firstNumber.value.length <= 1 && event.target.classList.contains('number') ) {

    firstNumber.value += userNumber;
    } else {
        if( secondNumber.value.length <= 1 && event.target.classList.contains('number') ) {
            secondNumber.value += userNumber;
        } else if (answerBox.value.length <= 1 && event.target.classList.contains('number') ) {
            answerBox.value += userNumber;
        }
        
    }
    
}

function validateRange(firstNumber, secondNumber) {
    if(firstNumber.value >= secondNumber.value) {
        alert('cmon buddy, you know thats not possible');
    } else if (firstNumber === secondNumber.value) {
        alert('thats not possible');
    } else if (firstNumber.value == null && secondNumber.value == null) {
        console.log('na na');
    }
    
}

function letsGo() {
    let readyToPlay = confirm('Are you ready?');

    if(readyToPlay === true) {
    validateRange(firstNumber, secondNumber);
    getRndInteger(firstNumber, secondNumber);
    } else if(readyToPlay === false) {
        resetForm();
    }
    
    guessesRemaining();
    removeEventListener();
    
}

function getRndInteger(firstNumber, secondNumber) {
    let result;
    result = +Math.floor(Math.random() * (+secondNumber.value - +firstNumber.value + 1) ) + +firstNumber.value;
    showAnswer(result);
  }

function resetForm() {
    firstNumber.value = '';
    secondNumber.value = '';
    answerBox.value = '';
    hiddenBox.value = '';

    guessesRemaining();
    resetEventListener();
}

function showAnswer(result) {
    hiddenBox.value = result;
}

function removeEventListener() {
    okBtn.removeEventListener('click', letsGo);

    okBtn.addEventListener('click', checkAnswer);

}

function resetEventListener() {
    okBtn.addEventListener('click', letsGo);

    okBtn.removeEventListener('click', checkAnswer);
}

function checkAnswer() {

    if (hiddenBox.value == answerBox.value) {
        alert('well done!!!');
        
    } else if(hiddenBox.value !== answerBox.value) {
        alert('try again!!');
        answerBox.value = '';
    }
}

function guessesRemaining() {
    let guessRemaining = document.querySelector('#guess-box');
    guessRemaining.value = 3;
}