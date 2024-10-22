let a = [];

function ranvalue() {
    for (let i = 0; i <= 40; i++) {
        let num = Math.floor(Math.random() * 8 + 1);
        if (!a.includes(num)) {
            a.push(num);
        }
    }

    for (let i = 0; i < a.length; i++) {
        document.getElementById(`btn${i + 1}`).textContent = a[i];
    }
}

function fun1() {
    let a = document.getElementById("btn1").textContent;
    let b = document.getElementById("btn2").textContent;
    let c = document.getElementById("btn4").textContent;
   
    if (b == "") {
        document.getElementById("btn2").textContent = a;
        document.getElementById("btn1").textContent = b;
    }else{
        document.getElementById("btn4").textContent = a;
        document.getElementById("btn1").textContent = c;
    }
}

function fun2() {
    let a = document.getElementById("btn1").textContent;
    let b = document.getElementById("btn2").textContent;
    let c = document.getElementById("btn5").textContent;
    let d = document.getElementById("btn3").textContent;

    if(c == ""){
        document.getElementById("btn5").textContent = b;
        document.getElementById("btn2").textContent = c;
    }else if(a == ""){
        document.getElementById("btn1").textContent = b;
        document.getElementById("btn2").textContent = a;
    }else{
        document.getElementById("btn3").textContent = b;
        document.getElementById("btn2").textContent = d;
    }
}

function fun3() {
    let a = document.getElementById("btn3").textContent;
    let b = document.getElementById("btn2").textContent;
    let c = document.getElementById("btn6").textContent;
   
    if (b == "") {
        document.getElementById("btn2").textContent = a;
        document.getElementById("btn3").textContent = b;
    }else{
        document.getElementById("btn6").textContent = a;
        document.getElementById("btn3").textContent = c;
    }
}

function fun4() {
    let a = document.getElementById("btn1").textContent;
    let b = document.getElementById("btn4").textContent;
    let c = document.getElementById("btn5").textContent;
    let d = document.getElementById("btn7").textContent;

    if(c == ""){
        document.getElementById("btn5").textContent = b;
        document.getElementById("btn4").textContent = c;
    }else if(a == ""){
        document.getElementById("btn1").textContent = b;
        document.getElementById("btn4").textContent = a;
    }else{
        document.getElementById("btn7").textContent = b;
        document.getElementById("btn4").textContent = d;
    }
}

function fun5() {
    let a = document.getElementById("btn2").textContent;
    let b = document.getElementById("btn5").textContent;
    let c = document.getElementById("btn4").textContent;
    let d = document.getElementById("btn6").textContent;
    let e = document.getElementById("btn8").textContent;

    if(c == ""){
        document.getElementById("btn4").textContent = b;
        document.getElementById("btn5").textContent = c;
    }else if(a == ""){
        document.getElementById("btn2").textContent = b;
        document.getElementById("btn5").textContent = a;
    }else if(d == ""){
        document.getElementById("btn6").textContent = b;
        document.getElementById("btn5").textContent = d;
    }
    else{
        document.getElementById("btn8").textContent = b;
        document.getElementById("btn5").textContent = e;
    }
}

function fun6() {
    let a = document.getElementById("btn9").textContent;
    let b = document.getElementById("btn6").textContent;
    let c = document.getElementById("btn5").textContent;
    let d = document.getElementById("btn3").textContent;

    if(c == ""){
        document.getElementById("btn5").textContent = b;
        document.getElementById("btn6").textContent = c;
    }else if(a == ""){
        document.getElementById("btn9").textContent = b;
        document.getElementById("btn6").textContent = a;
    }else{
        document.getElementById("btn3").textContent = b;
        document.getElementById("btn6").textContent = d;
    }
}
function fun7() {
    let a = document.getElementById("btn7").textContent;
    let b = document.getElementById("btn8").textContent;
    let c = document.getElementById("btn4").textContent;
   
    if (b == "") {
        document.getElementById("btn8").textContent = a;
        document.getElementById("btn7").textContent = b;
    }else{
        document.getElementById("btn4").textContent = a;
        document.getElementById("btn7").textContent = c;
    }
}
function fun8() {
    let a = document.getElementById("btn9").textContent;
    let b = document.getElementById("btn8").textContent;
    let c = document.getElementById("btn5").textContent;
    let d = document.getElementById("btn7").textContent;

    if(c == ""){
        document.getElementById("btn5").textContent = b;
        document.getElementById("btn8").textContent = c;
    }else if(a == ""){
        document.getElementById("btn9").textContent = b;
        document.getElementById("btn8").textContent = a;
    }else{
        document.getElementById("btn7").textContent = b;
        document.getElementById("btn8").textContent = d;
    }
}
function fun9() {
    let a = document.getElementById("btn9").textContent;
    let b = document.getElementById("btn8").textContent;
    let c = document.getElementById("btn6").textContent;
   
    if (b == "") {
        document.getElementById("btn8").textContent = a;
        document.getElementById("btn9").textContent = b;
    }else{
        document.getElementById("btn6").textContent = a;
        document.getElementById("btn9").textContent = c;
    }
}