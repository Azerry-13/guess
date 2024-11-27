var buttons = document.getElementsByTagName("button");
var newNumber;
var score = [];
var initialScore = 0;
var highest_score = 0;
var my_number;
var nextStatus;
var gameCount = [];
function start() {
    newNumber = Math.floor(Math.random() * 64) + 1;
    gameCount = [];
    initialScore = 0;
    buttons[1].style.display = "block";
}
function check() {
    var inputElement = document.getElementsByTagName("input")[0];
    var inputUserVal = Number(document.getElementsByTagName("input")[0].value);
    setTimeout(function () {
        inputElement.value = "";
    }, 1);
    if (inputUserVal === 0) {
        var error_1 = document.getElementsByClassName("error")[0];
        var errorMsg = document.createElement("p");
        errorMsg.textContent = "Заполни поле";
        error_1.appendChild(errorMsg);
        setTimeout(function () {
            error_1.innerHTML = "";
        }, 2500);
    }
    else {
        if (inputUserVal < newNumber && inputUserVal > 0) {
            var hint_1 = document.getElementsByClassName("hint")[0];
            var hintMsg = document.createElement("p");
            hintMsg.textContent = "Твое число меньше загаданного";
            hint_1.appendChild(hintMsg);
            score.push(0);
            setTimeout(function () {
                hint_1.innerHTML = "";
            }, 2500);
        }
        else if (inputUserVal > newNumber) {
            var hint_2 = document.getElementsByClassName("hint")[0];
            var hintMsg = document.createElement("p");
            hintMsg.textContent = "Твое число выше загаданного";
            hint_2.appendChild(hintMsg);
            score.push(0);
            setTimeout(function () {
                hint_2.innerHTML = "";
            }, 2500);
        }
        else {
            var hint_3 = document.getElementsByClassName("hint")[0];
            var hintMsg = document.createElement("p");
            hintMsg.textContent = "Угадал!";
            hint_3.appendChild(hintMsg);
            setTimeout(function () {
                hint_3.innerHTML = "";
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
            my_number.textContent = "".concat(newNumber);
            buttons[2].style.display = "block";
        }
    }
}
function next() {
    gameCount.push("game");
    score = [];
    buttons[2].style.display = "none";
    if (gameCount.length == 5) {
        var game_score = document.getElementsByClassName("game-score")[0];
        var highest = document.getElementsByClassName("highest-score")[0];
        game_score.textContent = "".concat(initialScore);
        if (highest_score < initialScore) {
            highest_score = initialScore;
            highest.textContent = "".concat(highest_score);
        }
        buttons[1].style.display = "none";
        buttons[2].textContent = "Next";
    }
    if (gameCount.length == 4) {
        buttons[2].textContent = "End";
    }
    newNumber = Math.floor(Math.random() * 64) + 1;
    my_number = document
        .getElementsByClassName("my-number")[0]
        .getElementsByTagName("p")[0];
    my_number.textContent = "?";
}
