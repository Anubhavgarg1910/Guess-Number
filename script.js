'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
// console.log(document.querySelector(".guess").textContent = 5);
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = "No number."
    }
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct number!🎉";
        document.querySelector("body").style.backgroundColor = "rgb(26, 158, 26)";
        document.querySelector(".number").textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
            
        }
        
    }

    else if (guess !== secretNumber && guess >= 1 && guess <= 20) {
            if (score > 1) {
                document.querySelector(".message").textContent = guess> secretNumber ?"Number is too high.📈": "Number is too low.📉" ;
                score--;
                document.querySelector(".score").textContent = score;
            }
            else {
                document.querySelector(".score").textContent = 0;
                document.querySelector(".message").textContent = "You loose the game🚩";
                
            }
        }

    // else if (guess > secretNumber && guess >= 1 && guess <= 20) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Number is too high.📈";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".score").textContent = 0;
    //         document.querySelector(".message").textContent = "You loose the game🚩";
            
    //     }
    // }
    // else if (guess < secretNumber && guess >= 1 && guess <= 20) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Number is too low.📉";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".score").textContent = 0;
    //         document.querySelector(".message").textContent = "You loose the game🚩";
    //     }
    // }
    else {
        document.querySelector(".message").textContent = "Wrong choice.";
        
    }
})

// Implementing the again functionality

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
})