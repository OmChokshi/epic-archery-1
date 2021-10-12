class ComputerBase{
    constructor(x,y,w,h){
      var options = {
        isStatic:true
      }
      this.body=Bodies.rectangle(x,y,w,h,options)
      World.add(world,this.body)
      this.image=loadImage("assets/base1.png")
      this.w = w
      this.h = h
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.w,this.h);
    }

}
