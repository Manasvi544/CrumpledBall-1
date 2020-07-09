class Bin{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=190;
        this.height=80;
        this.wallThickness=20;
    
           
        this.bin1=Bodies.rectangle(this.x, this.y, this.width,
             this.wallThickness, options);
        this.bin2=Bodies.rectangle(this.x-this.width/2,
             this.y-this.height/2, this.wallThickness, this.height, options)
        this.bin3=Bodies.rectangle(this.x+this.width/2,
             this.y-this.height/2, this.wallThickness, this.height, options);

        World.add(world, this.bin1)
        World.add(world, this.bin2)
        World.add(world, this.bin3);
    
        }
        display() {
          var posBin1=this.bin1.position;//bottom
          var posBin2=this.bin2.position;//left
          var posBin3=this.bin3.position;//right
    
          push()
          translate(posBin2.x, posBin2.y);
          rectMode(CENTER)
          fill("green");
          rect(0,0,this.wallThickness, this.height);
          pop();
    
          push();
          translate(posBin3.x, posBin3.y);
          rectMode(CENTER);
          fill("green")
          rect(0,0,this.wallThickness, this.height);
          pop();
    
          push();
          translate(posBin1.x, posBin1.y+10);
          rectMode(CENTER)
          fill("green")
          rect(0,0,this.width, this.wallThickness);
          pop();
    
        }       
}