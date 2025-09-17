
println("Hello world");

let stars = new WebImage("resources/stars.png");
stars.setPosition(0,0);
add(stars);

let rectLength = readInt("Enter the rectangle length:");
let rectWidth  = readInt("Enter the rectangle width:");


let rect = new Rectangle(rectWidth, rectLength);
rect.setPosition((getWidth() - rectWidth) / 2, (getHeight() - rectLength) / 2);
rect.setColor("White");
add(rect);

let c = new Circle(45);
c.setPosition(0, getHeight() / 2);
c.setColor("White");
add(c);

setTimer(moveCircle, 40);
function moveCircle() {
    if (c.getX() < getWidth() + 45) {
        c.move(5, 0);
    }
}

let circ = new Circle(34);

println("Goodbye world");
let name = readLine("Enter your name");
let hadBreakfast = readBoolean("Did you have breakfast?");


keyDownMethod(playAudio);
function playAudio(e) {
    if (e.keyCode == Keyboard.letter("K")) {
        let bird = new Audio("bird.mp3");
        bird.play();
    } else if (e.keyCode == Keyboard.letter("J")) {
        let mySound = new Sound("C4", "square");
        mySound.playFor(5);
    }
}