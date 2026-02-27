const parent = document.getElementById("parent")

parent.addEventListener('click', (e)=>{
    if (e.target.tagName === "BUTTON"){
        const child = e.target;
        document.body.style.background = child.style.background;
    }
})