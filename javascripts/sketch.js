var dots = []; // array of Dot objects

function setup() {
  var container = ''
  if($('#resume_container').length){
    container = '#resume_container'
  }else if($('#banner').length){
    container = '#banner'
  }
  var canvas_width = $(container)[0].clientWidth
  var canvas_height = $(container)[0].clientHeight
  resizeCanvas(canvas_width,canvas_height);
  stroke('rgba(192,192,192,0.6)');
  frameRate(35);
  loop();
  // Create objects
  for (var i=0; i<50; i++) {
    dots.push(new Dot());
  }
}

function draw() {
  var mouse_inscreen = false  
  var mx = 0
  var my = 0
  var l = 0
  if(mouseX < width && mouseY < height){
    mouse_inscreen = true
  };
  background(50, 89, 100);
  for (var i=0; i<dots.length; i++) {
    dots[i].move();
    if(mouse_inscreen){
      dots[i].mouse_lines()
    };
    dots[i].lines();
    dots[i].display();
  }
}

// Dot class
function Dot() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(2,6);
  this.Xspeed = random(-1,1);
  this.Yspeed = random(-1,1);
  
  this.distance_to = function(xi,yi){
    return sqrt(pow(xi-this.x,2) + pow(yi-this.y,2))
  }
  
  this.move = function() {
    if(mouseIsPressed && this.distance_to(mouseX,mouseY < 50)){
      this.x -= 2 * ((this.x - mouseX) / abs(this.x-mouseX))
      this.y -= 2 * ((this.y - mouseY) / abs(this.y-mouseY))
    }

    if(this.x > width || this.x < 0){
      this.Xspeed *= -0.5;
    }
    if(this.y > height || this.y < 0){
      this.Yspeed *= -0.5;
    }
    this.x += this.Xspeed;
    this.y += this.Yspeed;
  };

  this.mouse_lines = function(){
    //lines to mouse
    var dist = this.distance_to(mouseX,mouseY)
    if(dist < 120){
      var new_str = 'rgba(192,192,192,' + String(map(dist, 0, 120, 1, 0.0)) + ')'
      stroke(new_str)
      line(this.x, this.y, mouseX, mouseY)
    }
  };

  this.lines = function(){
    //lines to other dots
    for (var i =0; i<dots.length; i++){
      var dist = this.distance_to(dots[i].x,dots[i].y)
      if(dist < 120){
        //var str_w = 3 - floor(dist/(120/3))
        //strokeWeight(str_w)
        // TOO SLOW????????????????????????????????????????????????????????????
        var new_str = 'rgba(192,192,192,' + String(map(dist, 0, 120, 1, 0.0)) + ')'
        stroke(new_str)
        line(this.x, this.y, dots[i].x,dots[i].y)
      }
    }
  }

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}