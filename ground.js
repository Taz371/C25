class Ground
{
    constructor(x,y,w,h)
    {
        var ground_options = {
            isStatic: true
         };

        this.body = Bodies.rectangle(x, y, w, h, ground_options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);

    }

    display()
    {
        var pos = this.body.position;
        //var angle = angle;
        Matter.Body.rotate(this.body, angle);
        push();

        fill("green");
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0, 0, this.w, this.h);
        pop();
        angle = angle + 0.1;
    }
}