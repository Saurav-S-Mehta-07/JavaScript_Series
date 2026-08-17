const form = document.querySelector("form");
const prevGuessEl = document.querySelector("#previous-guess span");
const guessRemainingEl = document.querySelector("#guess-remaining span");
const result = document.querySelector("#result");

let previousGuessArr = [];
let guessCount = 10;
document.querySelector("#guess-remaining span").textContent = guessCount;


let number = randomNum();

form.addEventListener("submit", (e)=>{
    e.stopPropagation()

    const guessNumberEl = document.querySelector("#guessNumber");
    const guessNumber = parseInt(guessNumberEl.value);
    guessNumberEl.value = "";

    if(number === guessNumber){
        result.textContent = `Your guess is correct it's ${number}, points : ${guessCount} `;
        startNewGame();
        return;
    }
    else if(number > guessNumber){
        result.textContent = `Nope! number is greater than ${guessNumber}`;
    }
    else{
        result.textContent = `Nope! number is less than ${guessNumber}`;
    }
    

    guessCount = guessCount - 1;
    previousGuessArr.push(guessNumber);
    
    prevGuessEl.textContent = previousGuessArr;
    guessRemainingEl.textContent = guessCount;

     if(guessCount == 0){
        result.textContent = `10 guesses were wrong! correct number was : ${number} `;
        startNewGame();
        return;
    }
})


function randomNum(){
    return Math.floor((Math.random() * 100) + 1);
}

function startNewGame(){   
    initialize();
    setTimeout(() => {
        result.textContent = "new game started! play"
        setTimeout(()=>{
            result.textContent = "";
        }, 2000);
    }, 4000);
}

function initialize(message){
    guessCount = 10;
    previousGuessArr = [];
    number = randomNum();
    prevGuessEl.textContent = previousGuessArr;
    guessRemainingEl.textContent = guessCount;
}