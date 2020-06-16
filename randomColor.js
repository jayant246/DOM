let btn = document.querySelector('button');
let container = document.querySelector('.container');
let rbg = document.querySelector('.rbg');

btn.addEventListener('click', random);
container.addEventListener('mousemove', changeBody)

function random(e){
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    document.body.style.background = "rgb("+x+", "+y+", "+z+")";
    rbg.innerHTML = '<h3>rgb('+x+', '+y+', '+z+')</h3>';
    rbg.style.fontSize = "25px";
    btn.style.borderColor = "#eee";
    btn.style.color = "white";
    btn.style.background = "crimson";
    btn.style.border = "0px"
}

function changeBody(e){
    let x = e.offsetX;
    let y = e.offsetY;
    if(x > 255)
        x = Math.floor(Math.random()*256);
    if(y > 255)
        y = Math.floor(Math.random()*256);

    let z = Math.floor(Math.random()*256);
    document.body.style.background = "rgb("+x+", "+y+", "+z+")";
    rbg.innerHTML = '<h3>rgb('+x+', '+y+', '+z+')</h3>';
    rbg.style.fontSize = "25px";
    btn.style.borderColor = "#eee";
    btn.style.color = "white";
    btn.style.background = "crimson";
    btn.style.border = "0px"
    console.log(x);
}

