const input = document.querySelector('#inputSeconds');
const startBtn = document.querySelector('#startBtn');
const display = document.querySelector('#display');

let timer = null;

startBtn.addEventListener('click', () => {

    // Always clear previous timer properly
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }

    let seconds = Number(input.value);

    if (!Number.isInteger(seconds) || seconds <= 0) {
        display.textContent = "Enter valid seconds";
        return;
    }

    display.textContent = seconds;

    timer = setInterval(() => {
        seconds--;

        if (seconds <= 0) {
            clearInterval(timer);
            timer = null;
            display.textContent = "Done";
        } else {
            display.textContent = seconds;
        }

    }, 1000);
});