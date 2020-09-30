function preload(){
    
}
function setup(){
    canvas=createCanvas(600,450);
    canvas.position(465,200);
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
   image(video,0,0,600,450);

  stroke('red')
  strokeWeight(4)
  fill('yellow')
  circle(20,20,60)

  stroke('red')
  strokeWeight(4)
  fill('yellow')
  circle(580,20,60)

  stroke('red')
  strokeWeight(4)
  fill('yellow')
  circle(20,430,60)

  stroke('red')
  strokeWeight(4)
  fill('yellow')
  circle(580,430,60)

  stroke('violet')
  strokeWeight(4)
  fill('lightblue')
  rect(52,0,500,55)

  stroke('violet')
  strokeWeight(4)
  fill('lightblue')
  rect(52,395,500,55)

  stroke('violet')
  strokeWeight(4)
  fill('lightblue')
  rect(0,50,55,345)

  stroke('violet')
  strokeWeight(4)
  fill('lightblue')
  rect(543,50,55,345)
}
 function take_snapshot(){
     save('student_name.png')
 }