class Iron{
 constructor(x,y,w,h){
  var options={
 "restitution":0.8,
 "friction":3,
 "density":30

  }

this.x=x;
this.y=y;
this.width=w;
this.height=h;

this.body=Bodies.rectangle(x, y,w,h, options)
World.add(world, this.body);





 }

display()
{
var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("maroon");
			//draw the ellipse here to display the rubber ball
           rect(0,0,this.width,this.height)
			pop()
	}

}
