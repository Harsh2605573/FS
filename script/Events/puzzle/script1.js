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
    let a = document.getElementById("btn1").textContent ;
    let b = document.getElementById("btn2").textContent ;
    let c = document.getElementById("btn4").textContent ;

    if (b = "") {
        document.getElementById("btn2").textContent = a ;
        document.getElementById("btn1").textContent = b ;
    } else{
        document.getElementById("btn4").textContent = a ;
        document.getElementById("btn1").textContent = c ;
 
    }
}

function fun2() {
    let a = document.getElementById("btn1").textContent ;
    let b = document.getElementById("btn2").textContent;
    let c = document.getElementById("btn5").textContent ;
    let d = document.getElementById("btn3").textContent ;

    if (c == "") {
        document.getElementById("btn5").textContent = b ;
        document.getElementById("btn2").textContent = c ;
    }else if(a == ""){
        

    }
}