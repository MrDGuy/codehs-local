// @ts-nocheck
println("Hello world");

let rectLength = readInt("Enter the rectangle length:");
let rectWidth  = readInt("Enter the rectangle width:");

let rect = new Rectangle(rectWidth, rectLength);
rect.setPosition((getWidth() - rectWidth) / 2, (getHeight() - rectLength) / 2);
add(rect);

let c = new Circle(45);
c.setPosition(0, getHeight() / 2);
add(c);

setTimer(moveCircle, 40);
function moveCircle() {
    if (c.getX() < getWidth() + 45) {
        c.move(5, 0);
    }
}

keyDownMethod(playAudio);
function playAudio(e) {
    if (e.keyCode === Keyboard.letter("K")) {
        let jazz = new Audio("bird.mp3");
        jazz.play();
    } else if (e.keyCode === Keyboard.letter("J")) {
        let mySound = new Sound("C4", "square");
        mySound.playFor(5);
    }
}