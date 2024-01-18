let name = prompt("What is your name?");

let spanName = document.getElementById("name");
if (name === null || name === "" || name.length > 20) {
    alert("Enter your real name! 😡😡😡")
    name = "Anonymous";
    if (name == "Anonymous") {
        spanName.style.color = "red";
        spanName.style.fontWeight = "lighter";
    }
}
spanName.innerHTML = `${name}`;


let a = document.getElementById("a");
a.addEventListener("click", function () {
    let audio = new Audio("sounds/boom.wav");
    audio.play();
});

let s = document.getElementById("s");
s.addEventListener('click', function () {
    let audio = new Audio("sounds/clap.wav");
    audio.play();
});

let d = document.getElementById("d");
d.addEventListener("click", function () {
    let audio = new Audio("sounds/hihat.wav");
    audio.play();
});

let f = document.getElementById("f");
f.addEventListener("click", function () {
    let audio = new Audio("sounds/kick.wav");
    audio.play();
});

let g = document.getElementById("g");
g.addEventListener("click", function () {
    let audio = new Audio("sounds/openhat.wav");
    audio.play();
});

let h = document.getElementById("h");
h.addEventListener("click", function () {
    let audio = new Audio("sounds/ride.wav")
    audio.play();
});

let j = document.getElementById("j");
j.addEventListener("click", function () {
    let audio = new Audio("sounds/snare.wav");
    audio.play();
});

let k = document.getElementById("k");
k.addEventListener("click", function () {
    let audio = new Audio("sounds/tink.wav");
    audio.play();
});

let l = document.getElementById("l");
l.addEventListener("click", function () {
    let audio = new Audio("sounds/tom.wav");
    audio.play();
});


const drumButtons = {
    'a': document.getElementById("a"),
    's': document.getElementById("s"),
    'd': document.getElementById("d"),
    'f': document.getElementById("f"),
    'g': document.getElementById("g"),
    'h': document.getElementById("h"),
    'j': document.getElementById("j"),
    'k': document.getElementById("k"),
    'l': document.getElementById("l")
};


document.addEventListener('keydown', function (event) {
    const keyPressed = String.fromCharCode(event.keyCode).toLowerCase();

    if (drumButtons.hasOwnProperty(keyPressed)) {
        
        switch (keyPressed) {
            case 'a':
                audio = new Audio("sounds/boom.wav");
                audio.play();
                break;
            case 's':
                audio = new Audio("sounds/clap.wav");
                audio.play();
                break;
            case 'd':
                audio = new Audio("sounds/hihat.wav");
                audio.play();
                break;
            case 'f':
                audio = new Audio("sounds/kick.wav");
                audio.play();
                break;
            case 'g':
                audio = new Audio("sounds/openhat.wav");
                audio.play();
                break;
            case 'h':
                audio = new Audio("sounds/ride.wav");
                audio.play();
                break;
            case 'j':
                audio = new Audio("sounds/snare.wav");
                audio.play();
                break;
            case 'k':
                audio = new Audio("sounds/tink.wav");
                audio.play();
                break;
            case 'l':
                audio = new Audio("sounds/tom.wav");
                audio.play();
                break;
        }

        drumButtons[keyPressed].style.backgroundColor = "black";
        drumButtons[keyPressed].style.border = "2px solid white";
        drumButtons[keyPressed].style.borderRadius = "50%";
    }
});

document.addEventListener('keyup', function (event) {
    const keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
    if (drumButtons.hasOwnProperty(keyPressed)) {
        drumButtons[keyPressed].style.backgroundColor = "";
        drumButtons[keyPressed].style.border = "";
        drumButtons[keyPressed].style.borderRadius = "";
    }
});

