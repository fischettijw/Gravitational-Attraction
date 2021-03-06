class Attractor {
    constructor(x, y, m) {
        this.position = createVector(x, y);
        this.m = m;
        this.radius = this.m * 4;
        this.G = 1; // this.G = 100;
    }

    attract(mover) {
        let force = p5.Vector.sub(this.position, mover.position);
        let distance = force.mag();
        distance = constrain(distance, 5, 50);
        let gForce = (this.G * this.m * mover.m) / (distance * distance);
        // let gForce = (this.G * this.m * mover.m / (distance * distance));
        force.setMag(gForce);
        mover.applyForce(force);
    }

    show() {
        ellipseMode(CENTER);
        stroke(0);
        strokeWeight(4);
        fill('red');
        circle(this.position.x, this.position.y, this.radius);
    }
}