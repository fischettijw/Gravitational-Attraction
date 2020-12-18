let mover1;
let attractor;


function setup() {
    createCanvas(500, 600); // createCanvas(500, 500);
    mover1 = new Mover(175, 175, 5); // mover1 = new Mover(50, 350, 5);
    attractor = new Attractor(width / 2, height / 2, 20);
    background(220);
}

function draw() {
    // background(220);
    background(220, 5);
    mover1.update();
    mover1.show();

    attractor.attract(mover1);
    attractor.show();
}