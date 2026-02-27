const input = document.querySelector('#inputSeconds');
const startBtn = document.querySelector('#startBtn');
const display = document.querySelector('#display');

let timer = null;

startBtn.addEventListener('click', ()=>{
    if (timer)  clearInterval(timer);

    let seconds = parseInt(input.value);

    if (isNaN(seconds) || seconds<=0) return;
    display.textContent = seconds;

    timer = setInterval(()=>{
        seconds--;
        display.textContent = seconds;

        if (seconds<=0){
            clearInterval(timer);
            display.textContent = 'done'
        }
    }, 1000);
})