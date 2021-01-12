class Dustbin
{

constructor(x,y,width,height){
   var options = {
      isStatic:true
   }
   this.x=x;
		this.y=y;
		this.dustbinWidth=100;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=-20;	
		this.angle=-0.3;	
 


	this. bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options)
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
    
    
   
}
display (){

 
			var posLeft=this.leftWallBody.position;
       
         
  //this.bottomBody. translate(posLeft.x, posLeft.y);

  translate(posLeft.x, posLeft.y);
   rectMode(CENTER)
   //strokeWeight(4);
   angleMode(RADIUS)
   fill(255)
   rotate(this.angle)
   rect(0,0,this.wallThickness, this.dustbinHeight);
}



}