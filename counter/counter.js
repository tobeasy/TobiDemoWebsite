const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseButton.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}