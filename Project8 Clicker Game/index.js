const body = document.querySelector('body')
const greetings = [
    "Hello",      // English
    "Hola",       // Spanish
    "Bonjour",    // French
    "Ciao",       // Italian
    "Hallo",      // German
    "Olá",        // Portuguese
    "Привет",     // Russian
    "مرحبا",      // Arabic
    "नमस्ते",      // Hindi
    "नमस्कार",     // Marathi
    "こんにちは",   // Japanese
    "你好",        // Chinese
    "안녕하세요",   // Korean
    "Merhaba",    // Turkish
    "Sawubona",   // Zulu
    "Salut",      // Romanian
    "Hej",        // Swedish
    "Γεια",       // Greek
    "Shalom",     // Hebrew
    "Jambo",      // Swahili
    "Ahlan"       // Egyptian Arabic
]


body.addEventListener('click', (e)=>{
    console.log(e.clientX, e.clientY);  // just for checking the click co-ordinates in console

    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');  // adds the class circle to the div as well to inherit its property

    const color = ['red', 'blue', 'orange', 'green', 'fuchsia', 'purple', 'cyan', 'skyblue'];
    circleElement.style.backgroundColor = color[Math.floor(Math.random() * color.length)];


    circleElement.style.top = `${e.clientY-25}px`; // setting the co-ordinates according to the click
    circleElement.style.left = `${e.clientX-25}px`;
    circleElement.textContent = greetings[Math.floor(Math.random()*greetings.length)];
    
    body.append(circleElement);
    // after creating an element, we also need to append it to the parent.
    
    // similar to set interval, but runs only once in an event
    setTimeout(()=>{
        circleElement.remove(); //necessary, since the added elements do not get removed automatically since they take up memory
    },5000) // every 5 seconds
})