
let fingers;
let playing = false;
let rot =0;
let cv01,cv02,cv03;
let canv2;
function preload(){
    cv01 = loadImage('assets/cv01.png');
  //cv02 = loadImage('assets/cv02.png');
  //cv03 = loadImage('assets/cv03.png');
    fingers = createVideo(['assets/stableFlower_1.mp4']);
  canv2 = createGraphics(windowWidth,windowHeight);
}
function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);

  fingers.hide();
}

function draw(){
  background(0);
  canv2.image(fingers,0,0);
  blendMode(SCREEN);
  noStroke();
  texture(cv01);
  push();
  translate(-175, -150,100);
  rotateY(rot-1);
  rotateX(rot);
  box(100);
  pop();
  rot = rot +0.005;
  
  blendMode(SCREEN);
  tint(255,150);
  texture(fingers);
  push();
  translate(-95, -75,100);
  rotateY(rot-10);
  rotateX(rot-10);
  box(150);
  pop();
   if(mouseIsPressed){
      toggleVid();
      }
  blendMode(SCREEN);
  tint(255,255);
  image(canv2,-275,-300);
}

function toggleVid() {
  if (playing) {
    fingers.pause();

  } else {
    fingers.loop();

  }
  playing = !playing;
  console.log(playing);
}

