var s = document.getElementById("select");
var m = document.getElementById("move");
var c = document.getElementById("change");
var car1 = document.getElementById("car");
var car2 = document.getElementById("car2");
var car3 = document.getElementById("car3");
var car4 = document.getElementById("car4");
var car = 0;

//  top

var style1 = getComputedStyle(car1);
var top1 = style1.top;
top1 = top1.slice(0, 3);

var style2 = getComputedStyle(car2);
var top2 = style2.top;
top2 = top2.slice(0, 3);


var style3 = getComputedStyle(car3);
var top3 = style3.top;
top3 = top3.slice(0, 3);


var style4 = getComputedStyle(car4);
var top4 = style4.top;
top4 = top4.slice(0, 3);

// left

var style1 = getComputedStyle(car1);
var left1 = style1.left;
left1 = left1.slice(0, 2);

var style2 = getComputedStyle(car2);
var left2 = style2.left;
left2 = left2.slice(0, 3);


var style3 = getComputedStyle(car3);
var left3 = style3.left;
left3 = left3.slice(0, 3);


var style4 = getComputedStyle(car4);
var left4 = style4.left;
left4 = left4.slice(0, 3);

function check1() {
    car = 1;
    s.style.display = "none";
    m.style.display = "block";
}
function check2() {
    car = 2;
    s.style.display = "none";
    m.style.display = "block";
}
function check3() {
    car = 3;
    s.style.display = "none";
    m.style.display = "block";
}
function check4() {
    car = 4;
    s.style.display = "none";
    m.style.display = "block";
}

function up() {
    if (car == 1) {
        if (top1 != 150) {
            top1 -= 5;
            car1.style.top = top1 + "px";
        }
    }
    else if (car == 2) {    
        if (top2 != 150) {
            top2 -= 5;
            car2.style.top = top2 + "px";
        }
    }
    else if (car == 3) {
        if (top3 != 150) {
            top3 -= 5;
            car3.style.top = top3 + "px";
        }
    }
    else if (car == 4) {
        if (top4 != 150) {
            top4 -= 5;
            car4.style.top = top4 + "px";
        }
    }
}
function down() {
    if (car == 1) {
        if (top1 != 310) {
            top1 = Number(top1) + 5;
            car1.style.top = top1 + "px";
        }
    }
    else if (car == 2) {
        if (top2 != 310) {
            top2 = Number(top2) + 5;
            car2.style.top = top2 + "px";
        }
    }
    else if (car == 3) {
        if (top3 != 310) {
            top3 = Number(top3) + 5;
            car3.style.top = top3 + "px";
        }
    }
    else if (car == 4) {
        if (top4 != 310) {
            top4 = Number(top4) + 5;
            car4.style.top = top4 + "px";
        }
    }
}
function left() {

    if (car == 1) {
        if (left1 != 0) {
            left1 = Number(left1) - 5;
            car1.style.left = left1 + "px";
        }
    }
    else if (car == 2) {
        if(left2 != 0){
            left2 = Number(left2) - 5;
            car2.style.left = left2 + "px";
        }
    }
    else if (car == 3) {
        if (left3 !=0 ) {
            left3 = Number(left3) - 5;
            car3.style.left = left3 + "px";
        }
    }
    else if (car == 4) {
        if (left4 != 0) {
            left4 = Number(left4) - 5;
            car4.style.left = left4 + "px";
        }
    }
}
function right() {
    if (car == 1) {
        if (left1 != 0) {
            left1 = Number(left1) + 5;
            car1.style.left = left1 + "px";
        }
    }
    else if (car == 2) {
        if(left2 != 0){
            left2 = Number(left2) + 5;
            car2.style.left = left2 + "px";
        }
    }
    else if (car == 3) {
        if (left3 !=0 ) {
            left3 = Number(left3) + 5;
            car3.style.left = left3 + "px";
        }
    }
    else if (car == 4) {
        if (left4 != 0) {
            left4 = Number(left4) + 5;
            car4.style.left = left4 + "px";
        }
    }
}

function change() {
    m.style.display = "none";
    s.style.display = "block";
}

function nitro(){
    if(car==1)
    {
        car1.classList.add('nitro');
    }
    else if(car==2)
    {
        car2.classList.add('nitro');
    }
    else if(car==3)
    {
        car3.classList.add('nitro');
    }
    else if(car==4)
    {
        car4.classList.add('nitro');
    }
}
