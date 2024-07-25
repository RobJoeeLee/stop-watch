const time = document.querySelector(".time");
const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".reset-button");
let secondsElapsed = 0;
let interval = null;

startButton.addEventListener("click", () => {
    startClock();
})

stopButton.addEventListener("click", () => {
    stopClock();
})

resetButton.addEventListener("click", () => {
    resetClock();
})

function startClock(){
    interval = setInterval(timer, 1000);
}

function timer() {
    secondsElapsed++;
    setTime();
}

function stopClock(){
    
}

function resetClock(){
    
}