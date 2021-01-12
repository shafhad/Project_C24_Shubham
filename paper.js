class Paper
{
  constructor(x,y,r){
    var options = {
    isStatic:false,
    restution:0.3,
    density:1.2,
    friction:0.5

    }
   this.x=x
   this.y=y
   this.r=r

   this.body=Bodies.circle(this.x,this.y,this.r/2,options);
   World .add(world,this.body);

    }
  display()
{
  var paperpos = this.body.position;
  push()
  translate(paperpos.x,paperpos.y)
  rectMode(CENTER)
  //strokeWaight(3)
  //FileList(255,0,255)
  strokeWeight(3);
  ellipse(0,0,this.r,this.r)
  pop()
}
}


  




