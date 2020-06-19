let input = document.querySelector('#lbsInput');
let output = document.querySelector('#output');
output.style.display = "none";
input.addEventListener('input', e => {
    output.style.display = "block";
    let lbs = e.target.value;
    document.querySelector('#gramsOutput').innerHTML = 
    lbs/0.5;
    document.querySelector('#kgOutput').innerHTML = 
    lbs*1.6;
    document.querySelector('#ozOutput').innerHTML = 
    lbs*0.00243;

    // color
    document.querySelector('.green').style.background = 
    "green";
    document.querySelector('.blue').style.background = 
    "blue";
    document.querySelector('.red').style.background = 
    "red";
})