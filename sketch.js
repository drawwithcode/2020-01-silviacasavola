function preload(){
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("black");
  angleMode(DEGREES);
}

function draw() {

//linee iniziali
  if (frameCount <=550) {
          push();
          stroke(112,	128,	144	, 100, 0.6);
          strokeWeight((frameCount)*0.01)
          translate(((frameCount)*3),0,0);
          line((frameCount),(windowHeight),((frameCount)/800),((600*sin(frameCount))+100));
          pop();

          push();
          stroke(20, 2, 600, 100, 0.6);
          translate(((frameCount)*3),0,0);
          line((frameCount),(windowHeight),((frameCount)/800),((600*cos(frameCount))+100));
          pop();

          push();
          stroke(220,	20,	60, 200, 0.6);
          translate(((frameCount)*3),0,0);
          rotate((frameCount)*3);
          line((frameCount),(windowHeight),(((frameCount)/800)-500),(600*cos(frameCount)));
          pop();

          push();
          stroke(20, 2, 600, 200, 0.6);
          strokeWeight((frameCount)*0.01)
          translate(((frameCount)*3),0,0);
          rotate((frameCount)/-4);
          line((frameCount),(windowHeight),(((frameCount)/800)-500),((600*cos(frameCount))+700));
          pop();


          push();
          stroke(220,	20,	60, 200, 0.6);
          translate(((frameCount)*3),0,0);
          rotate(((frameCount)/-4)+180);
          line((frameCount),(windowHeight),(((frameCount)/800)-500),((600*cos(frameCount))+700));
          pop();
          }

//transizione angolo
  if (frameCount >550 && frameCount<=600) {
          push();
          noStroke();
          fill("black");
          arc(((windowWidth)/2), (windowHeight), ((windowWidth)+1000), ((windowWidth)+1000), 0, (frameCount*3));
          pop();
          }

//curve
if (frameCount > 600 && frameCount<=1170) {

translate(width/2+1050, height/2-290);

push();

      push();
      stroke(20, 2, 600, 200, 0.6);
      translate((windowWidth), (((windowHeight)/8)*5));
      noFill();
      rotate(90);
      arc(100*sin(frameCount*3),(frameCount*3),300,300,180,360);
      pop();

      push();
      stroke(color("white"));
      translate((windowWidth), ((windowHeight)-100));
      fill(220,	20,	60, ((frameCount)*0.03));
      rotate(90);
      arc(100*sin(frameCount*3),(frameCount*3),300,300,180,(360+(frameCount*2)));
      pop();
}

//transizione angolo
  if (frameCount >1170) {
          push();
          noStroke();
          fill("black");
          arc(((windowWidth)/2), (windowHeight), ((windowWidth)+1000), ((windowWidth)+1000), 0, (frameCount*3));
          pop();
          }

//raver

if (frameCount >=1270 && frameCount <=1690) {

  noStroke();
  fill(220,	20,	60);

      ellipse(((windowWidth)/2),((windowHeight)/2),(100*sin(frameCount*10)),(100*sin(frameCount*10)));
      }

    if (frameCount >=1340 && frameCount <=1690) {
      ellipse(((windowWidth)/4),((windowHeight)/2),(100*sin(frameCount*10)),(100*sin(frameCount*10)));
      }

    if (frameCount >=1410 && frameCount <=1690) {
      ellipse((((windowWidth)/4)*3),((windowHeight)/2),(100*sin(frameCount*10)),(100*sin(frameCount*10)));
      }

    if (frameCount >=1480 && frameCount <=1690) {
      ellipse(((windowWidth)/4),((windowHeight)/4),(100*sin(frameCount*10)),(100*sin(frameCount*10)));

      ellipse(((windowWidth)/2),((windowHeight)/4),(100*sin(frameCount*10)),(100*sin(frameCount*10)));

      ellipse((((windowWidth)/4)*3),((windowHeight)/4),(100*sin(frameCount*10)),(100*sin(frameCount*10)));

      ellipse(((windowWidth)/4),(((windowHeight)/4)*3),(100*sin(frameCount*10)),(100*sin(frameCount*10)));

      ellipse(((windowWidth)/2),(((windowHeight)/4)*3),(100*sin(frameCount*10)),(100*sin(frameCount*10)));

      ellipse((((windowWidth)/4)*3),(((windowHeight)/4)*3),(100*sin(frameCount*10)),(100*sin(frameCount*10)));
        }
  //fin
  }
