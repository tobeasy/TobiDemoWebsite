const submitBtn = document.getElementById("submit");
const inputField = document.getElementById("input");
const hint = document.getElementById("hint");
const attemptLabel = document.getElementById("attempt");
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1));

console.log(answer);
let input;
let attempt = 1;

submitBtn.onclick = function() {
    input = Number(inputField.value);
    console.log("Input: " + input);
    if(input == answer) {
        console.log("Richtig")
        hint.textContent = "Richtig";
    }
    else if(input < answer && input > minNum) {
        hint.textContent = "zu wenig";
    }
    else if(input > answer && input < maxNum) {
        hint.textContent = "zu viel";
    }
    else {
        hint.textContent = "Ungültige Eingabe";
    }
    attemptLabel.textContent = "Versuch: " + attempt;
    attempt++;
}

// while(input != answer) {
//     input = inputField.textContent;
//     if(Number(input) < answer) {
//         console.log("Zu wenig");
//     }
//     else if(Number(input) > answer) {
//         console.log("zu viel");
//     }
// }
// console.log("Richtig, die Antwort war: " + answer);