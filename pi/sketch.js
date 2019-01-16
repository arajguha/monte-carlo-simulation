var count = 0;
var in_count = 0;
var circle, p, pi, elem;

var valueset;
var slider;

function myPoint(){
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.r = 1;
  
  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, this.r, this.r, 0.3);
  }
}

function Circle(r){
  this.r = r;
  
  this.show = function(){
    noFill();
    strokeWeight(3)
    stroke(255, 0, 0);
  	ellipse(0, 0,  this.r, this.r);
  }
}


//pi approximation
function setup() {
  createCanvas(400, 400);
  background(0);
  translate(width/2, height/2);
  
  
  circle = new Circle(width);
  circle.show();
  
  elem = document.getElementById("pi");
  
  valueset = true;

}

function mousePressed(){
  if(valueset)
    valueset = false;
  else 
    valueset = true;
}



function draw() {
  if(valueset){
    noFill();
    stroke(255);
		
    //frameRate();
    p = new myPoint();
    count += 1;
    p.show();
    check(p.x, p.y);

    pi = 4 * (in_count / count);
    //console.log(pi);
    elem.innerHTML = pi
  }
}

function check(x, y){
  if(pow(x, 2) + pow(y, 2) <= pow(circle.r, 2)){
    in_count += 1;
  }
}




