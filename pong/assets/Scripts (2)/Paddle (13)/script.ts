class Paddle1Behavior extends Sup.Behavior {
 
  // connect the paddle body to a variable
  pad = this.actor.arcadeBody2D;
  
  // set the speed of the paddle
  speed : number = 0.1;
  
  update() {  
    
    //get the y position of the paddle and set it to a var
    let y : number = this.actor.getY();
    
    // if the key W is pressed and y < max, the voleocity of body is set in motion using speed var
    if(Sup.Input.isKeyDown("W")&& y < 2.35){
      this.pad.setVelocityY(this.speed);  
    } 
    
    // if S is pressed and y is greater than min, set Y velocity to negative speed
    else if (Sup.Input.isKeyDown("S")&& y > -2.35){
      this.pad.setVelocityY(-this.speed);
    } 
    
    // if neither is pressed, set Y velocity to 0
    else{  
      this.pad.setVelocityY(0);
    }
    
  } // End of update
  
}

class Paddle2Behavior extends Sup.Behavior {
 
  // connect the paddle body to a variable
  pad = this.actor.arcadeBody2D;
  
  // set the speed of the paddle
  speed : number = 0.1;
  
  update() {
    
    //get the y position of the paddle and set it to a var
    let y : number = this.actor.getY();
    
    // if the key up is pressed and y < max, the voleocity of body is set in motion using speed var
    if(Sup.Input.isKeyDown("UP")&& y < 2.35){
      this.pad.setVelocityY(this.speed);  
    } 
    
    // if down is pressed and y is greater than min, set Y velocity to negative speed
    else if (Sup.Input.isKeyDown("DOWN")&& y > -2.35){
      this.pad.setVelocityY(-this.speed);
    } 
    
    // if neither is pressed, set Y velocity to 0
    else{  
      this.pad.setVelocityY(0);
    }
    
  }
  
}

Sup.registerBehavior(Paddle1Behavior);
Sup.registerBehavior(Paddle2Behavior);
