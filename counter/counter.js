let count = 0;
let text = document.querySelector('.text');

let btn = document.querySelectorAll('button');
btn.forEach(item => {
    item.addEventListener('click', e => {
       if(e.target.classList.contains("decrease"))
           count--;
       else if(e.target.classList.contains("increase"))
           count++;
       else 
           count = 0;
        if(count > 0)
            text.style.color = "green";
        if(count < 0)
            text.style.color = "red";
        if(count == 0)
            text.style.color = "black";
        text.textContent = count;
    })
})