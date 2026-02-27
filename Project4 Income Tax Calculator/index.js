const form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
    e.preventDefault(); // avoids direct submit behaviour of the form on a browser
    const income = document.querySelector("#income");   // selected with id
    const amount = parseInt(income.value);  // default input is always received in the string form

    const result = document.querySelector("h2");
    let totalTax = 0;
    if (amount <= 1200000){
        totalTax = 0;
    }
    else if(amount<=1600000){
        totalTax = (amount-1200000)*0.15;   // 15% tax above 12l income
    }
    else if(amount<=2000000){
        totalTax = (amount-1600000)*0.20 + 60000;   // additionally, 15% of (1600000-1200000) i.e. 60000
    }
    else if(amount<=2400000){
        totalTax = (amount-2000000)*0.25 + 80000 + 60000; // 80000 = 20% of (2000000-1600000)
    }
    else{
        totalTax = (amount-2400000)*0.30 + 100000 + 80000 + 60000;
    }

    result.textContent = `Total Tax : ${totalTax}`;
    e.reset();  
    // on showing the result, the default behaviour returns, i.e. submitting the form, thus, form is blanked, but reult is still there
})