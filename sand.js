class Sand {
    constructor(x, y){
        var options = {
            'restituion' : 1.3,
            'friction' : 5,
            'density' : 1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 8, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,8,8);
        pop();
    }
}