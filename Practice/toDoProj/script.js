'use strict';

let random = Math.floor(Math.random() * 20) + 1
console.log(random)
let score = 20
let finalScore = 0;

function setMessage(message) {
    document.querySelector(".message").textContent = message;
}
function wonGame() {
    setMessage("Congratulations you won the game")
    document.querySelector("body").style.backgroundColor = "#60b347"
    document.querySelector(".number").style.width = "30rem"
    document.querySelector(".number").textContent = random
    if (score > finalScore) finalScore = score
    document.querySelector(".highscore").textContent = finalScore
    score = 20;
}
function toDefault() {
    score = 20;
    document.querySelector(".score").textContent = score
    random = Math.floor(Math.random() * 20) + 1
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""
    setMessage("Start guessing...")
}
function checkNumber(guess) {
    guess = Number(document.querySelector(".guess").value)
    if (guess < 1 || guess > 20 || typeof guess !== "number") alert("Please give a number between 1-20")
    else if (guess === random) {
        wonGame()

    }
    else if (guess !== random) {
        if (score > 1) {
            setMessage(guess > random ? "You aimed too high" : "You aimed too low")
            document.querySelector(".score").textContent = --score


        }
        else {
            setMessage("You fucking loser")
            document.querySelector(".score").textContent = "0"

        }
    }

}

document.querySelector(".check").addEventListener("click", () => {
    let guess = Number(document.querySelector(".guess").value)
    checkNumber(guess);


})
document.querySelector(".guess").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let guess = Number(document.querySelector(".guess").value)
        checkNumber(guess);
    }
})
document.querySelector(".again").addEventListener("click", () => {
    toDefault()
})


document.querySelector(".toDo").addEventListener("click",()=>{
    location.href="\ttodo.html"
})


