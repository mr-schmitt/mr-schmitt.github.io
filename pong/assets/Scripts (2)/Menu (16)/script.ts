var ray : Sup.Math.Ray;

class Button extends Sup.Behavior {
  
  // flag to tell when the mouse is hovering over button
  isHover : boolean = false;
  awake(){
    //initialize raycast?
    ray = new Sup.Math.Ray(this.actor.getPosition(), new Sup.Math.Vector3(0,0,-1));
  }
  
  // check to see what action the mouse has performed
  mouse(action){
    
    // if it's a click -> load the game
    if(action == "click"){
      Sup.loadScene("Game");
      Sup.Audio.playSound("Sounds/Toc");
    }
    
    // if hover - set start button on
    else if (action == "hover"){
      Sup.getActor("Button").spriteRenderer.setSprite("Sprites/MenuSprites/StartOn");
    }
    
    // if unhover - set start button off
    else if (action = "unhover"){
      Sup.getActor("Button").spriteRenderer.setSprite("Sprites/MenuSprites/StartOff");
    }
    
  } // end mouse action

  update(){
    
    // Refresh position of mouse in the camera
    ray.setFromCamera(Sup.getActor("Camera").camera, Sup.Input.getMousePosition());
    
    // check for interaction with button actor
    if (ray.intersectActor(this.actor,false).length > 0){
      
      // if not currently hovering, then make hovering start
      if(!this.isHover){
        this.mouse("hover");
        this.isHover = true;
      }
      
      // if mouse button is pressed, then trigger click action
      if(Sup.Input.wasMouseButtonJustPressed(0)){
        this.mouse("click");
      }
    }
    
    // if not interacting, but isHover is true, then set the hover to false, trigger unhover action
    else if (this.isHover){
      this.isHover = false;
      this.mouse("unhover");
    }
    
  } // end of update

} // end Button class

Sup.registerBehavior(Button);