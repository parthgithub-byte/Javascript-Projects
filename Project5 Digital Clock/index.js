const timediv = document.querySelector('#time');
const datediv = document.querySelector('#date');

setInterval(()=>{
    let time = new Date();
    timediv.textContent = time.toLocaleTimeString();
    datediv.textContent = time.toLocaleDateString();
}, 1000)

// the setInterval function takes 2 parameters, a call back funtion that is executed and a time interval in milliseconds