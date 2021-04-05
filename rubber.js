class Rubber{
    constructor(x, y, r){
        var options = {
            'restitution' : 0.3,
            'friction' : 5,
            'density' : 1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, 20, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("orange");
        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop();
    }
}
