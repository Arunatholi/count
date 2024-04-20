const mybutton = document.getElementById('countbutton');
const increase = document.getElementById('increase');
// const  dec  = document.getElementById('arunpv');


mybutton.addEventListener('click',count)

let number = 0;
function count(){
    number = number + 1;
    increase.innerHTML = number

}

const  dec  = document.getElementById('arunpv');

 dec.addEventListener('click',varshu)

function varshu(){
    number = number - 1;
    increase.innerHTML = number
}


