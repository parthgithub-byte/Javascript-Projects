const form = document.querySelector("form");
// For any form's submission event using the submit type button in it, we listen to the event 'submit'
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const boy = document.getElementById("Boy");
    const girl = document.getElementById("Girl");

    const l1 = boy.value.length;
    const l2 = girl.value.length;

    const result = Math.pow(l1*l2,4)%101;
    document.querySelector("h2").textContent = `Result : ${result}% 💝`;
})
/*
Here, note that, the values submitted in a form's submission is stored in the object "value" of that element.
Also, we are doing modulus operation on the calculation with 101 since the output reminder on dividing with 101 is always in the range 0-100.

Here, we also used preventDefault() method which is used to prevent default behavior of submitting and clearing the form. We want the o/p to remain stably appeared in the form itself.
Actually, submitting the form and clearing is like the default event handling by the browser.
*/
