 
// CONSTANTS
const BALLSPEED : number = 0.05;
const SPEEDBOOST: number = 0.01;

// Ball Behavior class
class BallBehavior extends Sup.Behavior {
  
  // speed variable
  speed : number = BALLSPEED;
  
  // connect the actor body to a constant
  ball = this.actor.arcadeBody2D;

  // An array with score[0] for p1 and score[1] for p2
  score = [0,0];

  // set positive or negative direction values for x & y
  dx : number = 1; 
  dy : number = 1;  

  update() {
    
    // get x and y position
    let x : number = this.actor.getX();
    let y : number = this.actor.getY();
    
    // change direction of y if ball reaches top or bottom
    if (y > 2.85 || y < -2.85){
      this.dy = this.dy * -1;
      Sup.Audio.playSound("Sounds/Tac");
    }
    
    // check if there is collision between ball and paddles
    if (Sup.ArcadePhysics2D.collides(this.ball, Sup.ArcadePhysics2D.getAllBodies())){
      
      // play sound
       Sup.Audio.playSound("Sounds/Toc");
      
      //check to see if ball hits the right or left side of the paddle
      if (this.ball.getTouches().right || this.ball.getTouches().left ){
        this.dx = this.dx * -1;
        this.speed += SPEEDBOOST;
      }
      
      // check to see if the ball hits the bottom or top of paddle
      else {
        this.dy = this.dy * -1;
      }
    } 
    
    // check to see if ball scores
    if (x>4 || x <-4){
      this.ball.warpPosition(0,0);
      this.dx = this.dx * -1;
      this.speed = BALLSPEED;
       Sup.Audio.playSound("Sounds/Tada");
    }
      
    
    // score for p1
    if (x>4){
      this.score[0] ++;
      Sup.getActor("Player1").getChild("Score").textRenderer.setText(this.score[0]);
    }
    
    // score for p2
    if (x< -4){
      this.score[1] ++;
      Sup.getActor("Player2").getChild("Score").textRenderer.setText(this.score[1]);
    }
    
    // set ball movement (speed * direction)
    this.ball.setVelocity(this.speed*this.dx, this.speed*this.dy);
      
    if(this.score[0] == 10 || this.score[1] == 10){
      Sup.loadScene("Menu");
    }
    
    
  } // end of update loop

}
  

Sup.registerBehavior(BallBehavior);
