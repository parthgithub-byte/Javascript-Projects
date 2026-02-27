const display = document.querySelector('#display')


const olympicTime = new Date(2028, 6, 14);  // 14 July 2028. July is 6th in the 0-based indexing
setInterval(()=>{
    const currentTime = Date.now();
    let timer = olympicTime - currentTime;

    const days = Math.floor(timer/(1000*60*60*24));
    timer%=(1000*60*60*24);
    const hours = Math.floor(timer/(1000*60*60));
    timer%=(1000*60*60);
    const minutes = Math.floor(timer/(1000*60));
    timer%=(1000*60);
    const seconds = Math.floor(timer/(1000));
    timer%=(1000);

    display.textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes and ${seconds} Seconds`;
}, 1000)
