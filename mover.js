class Mover {
    constructor(x, y, m) {
        this.x = x;
        this.y = y;
        this.m = m;
        this.position = createVector(this.x, this.y);
        // this.pos = createVector(this.x, this.y);
        this.vel = createVector(.1, 0);
        // this.vel = createVector(1, 0);
        this.acc = createVector(0, 0);
        this.radius = this.m * 4;
    }

    update() {
        this.vel.add(this.acc);
        this.position.add(this.vel);
        // this.pos.add(this.vel);
        // this.acc.mult(0);
        this.acc.setMag(0);
    }

    show(clr, size) {
        if (size == null) { size = 1; }
        ellipseMode(CENTER);
        stroke(clr);
        strokeWeight(1);
        fill(clr);
        circle(this.position.x, this.position.y, this.radius * size);
        // circle(this.pos.x, this.pos.y, this.radius);
    }

    applyForce(force) {
        let a = p5.Vector.div(force, this.m);
        this.acc.add(a);
    }
}