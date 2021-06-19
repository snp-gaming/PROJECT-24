class Stone{
	constructor(x,y,w,h)
	{
	var options={
     "restitution":0.3,
	  "friction":5, 
	  "density":1,



	}
	
	
	
		// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=w;
        this.height=h;
		this.body=Bodies.rectangle(this.x, this.y,this.w,this.h, options)
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
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
           rect(0,0,this.width,this.height)
			pop()
	}

}