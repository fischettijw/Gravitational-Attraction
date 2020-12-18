let mover1;
let mover2;
let attractor;


function setup() {
    createCanvas(500, 500);
    mover1 = new Mover(175, 50, 5); // mover1 = new Mover(50, 350, 5);
    // mover2 = new Mover(175, 375, 5); // mover1 = new Mover(50, 350, 5);
    attractor = new Attractor(width / 2, height / 2, 20);
    background(220);
}

function draw() {
    // background(220);
    background(220, 5);
    mover1.update();
    mover1.show('tan', .1);
    // mover2.update();
    // mover2.show('black', 0.5);

    attractor.attract(mover1);
    // attractor.attract(mover2);
    attractor.show('orange', .1);
}