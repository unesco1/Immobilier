const rChair = document.querySelector('.chair-r');
const redChair = document.querySelector('.chair-red');
const lChair = document.querySelector('.chair-l');
const table = document.querySelector('.table');
const rVase = document.querySelector('.vase-r');
const lVase = document.querySelector('.vase-l');
const lamp = document.querySelector('.lamp');
const flower = document.querySelector('.flower');
const getAlert = document.querySelector(".get-alert");

const stock = [rChair, redChair, lChair, table, rVase, lVase, lamp, flower];

function show() {

    if (rChair.classList[1] === undefined) {
    
        getAlert.style.display = "block";
        getAlert.innerHTML ="ALREADY DISPLAYED";
        setTimeout(displayNone, 3000);
        
    } else {

        for (let i = 0; i < stock.length; i++) {

            stock[i].classList.remove('hidden');
        }
    }
};

function hide() {

    if (wall.classList[1] === "toggle-wall") {
        
        getAlert.style.display = "block";
        getAlert.innerHTML ="PLEASE TURN OFF";
        setTimeout(displayNone, 3000);
    
    } else if (rChair.classList[1] === "hidden") {

        getAlert.style.display = "block";
        getAlert.innerHTML ="ALREADY HIDDEN";
        setTimeout(displayNone, 3000);
    
    } else {
        
        for (let i = 0; i < stock.length; i++) {
            stock[i].classList.add('hidden');
        }
    }
    
};

const contentLamp = document.querySelector('.content-lamp');
const wall = document.querySelector('.wall');
const earth = document.querySelector('.earth');

function displayNone() {
    getAlert.style.display = "none";
}
function turnOn() {

    if (rChair.classList[1] === "hidden") {
        
        getAlert.style.display = "block";
        getAlert.innerHTML ="PLEASE DISPLAY THE LAMP";
        setTimeout(displayNone, 3000);

    } else if (wall.classList[1] === "toggle-wall") {

        getAlert.style.display = "block";
        getAlert.innerHTML ="ALREADY ON";
        setTimeout(displayNone, 3000);
        
    } else {

        contentLamp.classList.remove('toggle-lamp');
        wall.classList.add('toggle-wall');
        earth.classList.add('toggle-earth');
    }
};

function turnOff() {

    if (contentLamp.classList[1] === 'toggle-lamp') {

        getAlert.style.display = "block";
        getAlert.innerHTML = "ALREADY OFF";
        setTimeout(displayNone, 3000);
        
    } else {
    
        contentLamp.classList.add('toggle-lamp');
        wall.classList.remove('toggle-wall');
        earth.classList.remove('toggle-earth');
    }
}

console.log(wall.classList[1])