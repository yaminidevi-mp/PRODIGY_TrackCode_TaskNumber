let timerInterval;
let startTime = 0;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    display.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 100);
    }
}

function pauseStopwatch() {
    if (running) {
        running = false;
        clearInterval(timerInterval);
    }
}

function resetStopwatch() {
    running = false;
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    display.textContent = '00:00:00';
    laps.innerHTML = '';
}

function recordLap() {
    if (running) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        laps.appendChild(lapItem);
    }
}