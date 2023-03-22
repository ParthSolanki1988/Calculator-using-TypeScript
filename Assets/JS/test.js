"use strict";
// Variable Declaration
let memory = 0;
let display = document.getElementById('display');
let btton = document.querySelectorAll('.btn');
btton.forEach(btn => {
    btn.addEventListener('click', e => {
        let btnVal = e.target.value;
        display.value += btnVal;
    });
});
function calculate() {
    let x = display.value;
    display.value = eval(x);
}
//radians to degree using degree funcation (DEG button)
function degree() {
    display.value = (display.value * (180 / Math.PI)).toFixed(2);
}
//F-E means Fixed to Exponent (ex. 60000000 -> 6e+7) (F-E button)
function fixedExpo() {
    let value = Number(display.value).toExponential();
    display.value = value;
}
//memory clear using MC  (MC button)
function memoryClear() {
    let x = localStorage.clear();
    let result = document.getElementById('result');
    document.getElementById('result').innerHTML = memory.toString();
    display.value = "";
}
//Memory Recall using MR (MR button)
function memoryRecall() {
    var x = localStorage.getItem(memory.toString());
    document.getElementById('result').innerHTML = x;
    display.value = x;
}
//memory plus using M+ (M+ button)
function memoryPlus() {
    var result = (Number(localStorage.getItem(memory.toString())) + Number(display.value)).toString();
    localStorage.setItem(memory.toString(), result);
    document.getElementById('result').innerHTML = result;
}
//memory Minus using M- (M- button)
function memoryMinus() {
    var result = (Number(localStorage.getItem(memory.toString())) - Number(display.value)).toString();
    localStorage.setItem(memory.toString(), result);
    document.getElementById('result').innerHTML = result;
}
//memory store using MS (MS button)
function memoryStore() {
    localStorage.setItem(memory.toString(), display.value);
    var memry = localStorage.getItem(memory.toString());
    let result = document.getElementById('result');
    result = memry;
    document.getElementById('result').innerHTML = result;
}
//clear display (C button)
function clearDisplay() {
    display.value = "";
    document.getElementById("trig").selected = true;
    document.getElementById("fun").selected = true;
}
//Trigonometry function
function trignometry() {
    let x = document.getElementById('trigno');
    let val = x.value;
    if (val == 'sin') {
        sin();
    }
    else if (val == 'cos') {
        cos();
    }
    else if (val == 'tan') {
        tan();
    }
}
function sin() {
    display.value = Math.sin(Number(display.value) * Math.PI / 180).toFixed(2);
}
function cos() {
    display.value = Math.cos(Number(display.value) * Math.PI / 180).toFixed(2);
}
function tan() {
    display.value = Math.tan(Number(display.value) * Math.PI / 180).toFixed(2);
}
//Functions function
function func() {
    let x = document.getElementById('func');
    let val = x.value;
    if (val == 'abs') {
        myAbs();
    }
    else if (val == 'floor') {
        myFloor();
    }
    else if (val == 'ceil') {
        myCeil();
    }
}
function myAbs() {
    display.value = (Math.abs(Number(display.value))).toFixed(2);
}
function myFloor() {
    display.value = (Math.floor(Number(display.value))).toFixed(2);
}
function myCeil() {
    display.value = (Math.ceil(Number(display.value))).toFixed(2);
}
//pi function
function pi() {
    if (display.value == "") {
        display.value = "3.14";
    }
    else {
        display.value = (Number(display.value) * 3.14).toFixed(3);
    }
}
//Euler's Number funcation
function e() {
    if (display.value == "") {
        display.value = "2.7182818284";
    }
    else {
        display.value = (Number(display.value) * 2.7182818284).toFixed(3);
    }
}
//clear one by one (<- button)
function oneClear() {
    display.value = display.value.substr(0, display.value.length - 1);
}
//x^2 funcation
function xpower() {
    display.value = (Math.pow(Number(display.value), 2)).toFixed(2);
}
//one by any number funcation
function oneByNumber() {
    display.value = (1 / Number(display.value)).toFixed(2);
}
//absulate value funcation
function absulatevalue() {
    display.value = (Math.abs(Number(display.value))).toFixed(2);
}
//exponantial value funcation
function exponential() {
    display.value = Math.exp(Number(display.value)).toFixed(2);
}
function sqroot() {
    display.value = Math.sqrt(Number(display.value)).toFixed(2);
}
function powX() {
    display.value = Math.pow(10, Number(display.value)).toFixed(2);
}
function log() {
    display.value = Math.log10(Number(display.value)).toFixed(3);
}
function ln() {
    display.value = Math.log(Number(display.value)).toFixed(3);
}
function factorial() {
    var i, num, fact;
    fact = 1;
    num = Number(display.value);
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }
    i = i - 1;
    display.value = fact.toFixed(2);
}
function plusMinus() {
    display.value = (Number(display.value) * -1).toString();
}
