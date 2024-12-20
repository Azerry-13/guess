"use strict";
let buttons = document.getElementsByTagName("button");
let newNumber;
let score = [];
let initialScore = 0;
let highest_score = 0;
let my_number;
let nextStatus;
let gameCount = [];
let highestCache = localStorage.getItem("highestScoreStorage")
    ? localStorage.getItem("highestScoreStorage")
    : 0;
let highest;
window.addEventListener("load", (event) => {
    highest = document.getElementsByClassName("highest-score")[0];
    if (highest) {
        highest.textContent = `${highestCache}`;
    }
});
function start() {
    newNumber = Math.floor(Math.random() * 64) + 1;
    gameCount = [];
    initialScore = 0;
    buttons[1].style.display = "block";
}
function check() {
    let inputElement = document.getElementsByTagName("input")[0];
    let inputUserVal = Number(document.getElementsByTagName("input")[0].value);
    setTimeout(() => {
        inputElement.value = "";
    }, 1);
    if (inputUserVal === 0) {
        let error = document.getElementsByClassName("error")[0];
        let errorMsg = document.createElement("p");
        errorMsg.textContent = "Заполни поле";
        error.appendChild(errorMsg);
        setTimeout(() => {
            error.innerHTML = "";
        }, 2500);
    }
    else if (inputUserVal < 0) {
        let error = document.getElementsByClassName("error")[0];
        let errorMsg = document.createElement("p");
        errorMsg.textContent = "Число должно быть больше 0";
        error.appendChild(errorMsg);
        setTimeout(() => {
            error.innerHTML = "";
        }, 2500);
    }
    else {
        if (inputUserVal < newNumber && inputUserVal > 0) {
            let hint = document.getElementsByClassName("hint")[0];
            let hintMsg = document.createElement("p");
            hintMsg.textContent = "Твое число меньше загаданного";
            hint.appendChild(hintMsg);
            score.push(0);
            setTimeout(() => {
                hint.innerHTML = "";
            }, 2500);
        }
        else if (inputUserVal > newNumber) {
            let hint = document.getElementsByClassName("hint")[0];
            let hintMsg = document.createElement("p");
            hintMsg.textContent = "Твое число выше загаданного";
            hint.appendChild(hintMsg);
            score.push(0);
            setTimeout(() => {
                hint.innerHTML = "";
            }, 2500);
        }
        else {
            let hint = document.getElementsByClassName("hint")[0];
            let hintMsg = document.createElement("p");
            hintMsg.textContent = "Угадал!";
            hint.appendChild(hintMsg);
            setTimeout(() => {
                hint.innerHTML = "";
            }, 2500);
            score.push(1);
            if (initialScore < 0) {
                initialScore = 10;
            }
            else {
                initialScore += 70 - score.length * 10;
            }
            my_number = document
                .getElementsByClassName("my-number")[0]
                .getElementsByTagName("p")[0];
            my_number.textContent = `${newNumber}`;
            buttons[2].style.display = "block";
        }
    }
}
function next() {
    gameCount.push("game");
    score = [];
    buttons[2].style.display = "none";
    if (gameCount.length == 3) {
        let game_score = document.getElementsByClassName("game-score")[0];
        highest = document.getElementsByClassName("highest-score")[0];
        game_score.textContent = `${initialScore}`;
        if (highest_score < initialScore) {
            highest_score = initialScore;
            localStorage.setItem("highestScoreStorage", highest_score.toString());
            highestCache = localStorage.getItem("highestScoreStorage");
            highest.textContent = `${highestCache}`;
        }
        buttons[1].style.display = "none";
        buttons[2].textContent = "Следующее";
    }
    if (gameCount.length == 2) {
        buttons[2].textContent = "Завершить";
    }
    newNumber = Math.floor(Math.random() * 64) + 1;
    my_number = document
        .getElementsByClassName("my-number")[0]
        .getElementsByTagName("p")[0];
    my_number.textContent = "?";
}
