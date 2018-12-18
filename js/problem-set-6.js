/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "48px Arial";
  ctx.strokeText("Hello, World!",10,50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

  let canvas = document.getElementById('canvas2');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  while(true){
    var width=Number(prompt("Enter width greater than or equal to 1"))
    var height=Number(prompt("Enter height greater than or equal to 1"))
    var x=Number(prompt("Enter x coordinate for starting point."))
    var y=Number(prompt("Enter y coordinate for starting point."))
    if(width>=1 && height>=1 && x>=5 && y>=5 && canvas.width-x-width>=0 && canvas.height-y-height>=0){
      break;
    }
  }
  ctx.strokeRect(x, y, width, height);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

let colorChoice= prompt("Please choose color.");
  const canvas = document.getElementById('canvas3');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let rectColor;
   if(colorChoice==="black"){
     rectColor="#000000";
   }
   if(colorChoice==="blue"){
     rectColor="#0000FF";
   }
   if(colorChoice==="green"){
     rectColor="#00FF40";
   }
   if(colorChoice==="orange"){
     rectColor="#FF8000";
   }
   if(colorChoice==="purple"){
     rectColor="#8000FF";
   }
   if(colorChoice==="red"){
     rectColor="#FF0000";
   }
   if(colorChoice==="yellow"){
     rectColor="#FFFF00";
   }



  ctx.fillStyle = rectColor;
  ctx.fillRect(10, 10, 100, 50);

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

const canvas = document.getElementById("canvas4");
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);

let leftSide= Number(prompt("Please enter left side length."));
let bottomSide= Number(prompt("Please enter bottom side length."));
let hypotenuse= Number(prompt("Please enter hypotenuse."));
if(((leftSide**2)+(bottomSide**2)!=(hypotenuse**2)) || leftSide=0 || bottomSide=0 || hypotenuse=0 || canvas.width-10-bottomSide<0 || canvas.height-10-leftSide>=0{
  alert("That is not a valid right triangle");
}
else {
ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(10,(10+leftSide));
    ctx.lineTo((10+bottomSide),(10+leftSide));
    ctx.closePath();
    ctx.stroke();
  }

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

  const canvas=document.getElementById("canvas5");
  const ctx=canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
let radius;

while (true) {
  radius= Number(prompt("Please enter a radius."));
  if(radius>0 && radius<=250 && Number.isInteger(radius)){
    break;
    }
    else{
    alert("The smiley face will not fit on canvas.")
  }
}
let x= canvas.width;
let y= canvas.height;
//head
ctx.beginPath();
ctx.arc(x/2,y/2,radius,0,2*Math.PI);
ctx.stroke();
//eye1
ctx.beginPath();
ctx.arc(x/2-(radius/3),y/2-(radius/4),(radius*0.1),0,2*Math.PI);
ctx.stroke();
//eye2
ctx.beginPath();
ctx.arc(x/2+(radius/3),y/2-(radius/4),(radius*0.1),0,2*Math.PI);
ctx.stroke();
//mouth
ctx.beginPath();
ctx.arc(x/2,y/2,radius*0.7,0.1*Math.PI,0.9*Math.PI);
ctx.stroke();

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

let canvas = document.getElementById('canvas6');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  
let radiusOut= Number(prompt("Enter valid outer radius."));
let radiusIn= Number(prompt("Enter valid inner radius."));
  if (radiusOut>radiusIn && canvas.width>=radiusOut+125 && canvas.height>=radiusOut+125 && radiusIn>0 && radiusOut>0){
      
    let points= 5;
    let xout=[];
    let yout=[];
    let xin=[];
    let yin=[];
        for(let i=0;i<points;i++){
          xout.push(Math.cos((Math.PI*2*i)/points-(Math.PI/2))*radiusOut+125);
          yout.push(Math.sin((Math.PI*2*i)/points-(Math.PI/2))*radiusOut+125);
          xin.push(Math.cos(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*radiusIn+125);
          yin.push(Math.sin(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*radiusIn+125);
     }
        ctx.beginPath();
        ctx.moveTo(xout[0], yout[0]);
        for(let j=0;j<xout.length;j++){
          ctx.lineTo(xin[j], yin[j]);
          ctx.lineTo(xout[j+1], yout[j+1]);
        }
        ctx.lineTo(xout[0], yout[0]);
        ctx.stroke();
        ctx.closePath();
    
  } else {
  alert("Please enter valid inputs.");
  }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
 let canvas = document.getElementById('canvas7');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  let signSide=80;
  let center=[10+(signSide)/2+signSide/Math.sqrt(2), 10+(signSide/2)+(signSide/Math.sqrt(2))]
  let points=8;
  let pointx=[];
  let pointy=[];

  for(let i=0;i<points;i++){
    pointx.push(Math.cos(((Math.PI*2*i)/points)-Math.PI/8)*100+center[0]);
    pointy.push(Math.sin(((Math.PI*2*i)/points)-Math.PI/8)*100+center[1]);
   }
    ctx.beginPath();
   ctx.moveTo([pointx][0], pointy[0]);
   for(let j=0;j<pointx.length;j++){
       ctx.lineTo(pointx[j], pointy[j]);
   }
    ctx.lineTo(pointx[0], pointy[0]);
    ctx.stroke();

  ctx.fillStyle="red";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.textAlign="center";
  ctx.font="56px Arial";
  ctx.fillStyle="white";
  ctx.fillText("STOP", center[0], center[1]+15);
  ctx.closePath()
  
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

   let canvas = document.getElementById('canvas8');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
 let blockSide= Number(prompt("Please choose block length."));
  
 let x=10;
  let y=canvas.height-10;
  let i=0;
  let lineNumber=1;
  while(i<5){
    for(let j=0+lineNumber;j<=5;j++){
      ctx.strokeRect(x,y-blockSide,blockSide,blockSide);
      x+=blockSide;
    }
    x=10+(blockSide/2)*lineNumber;
    y-=blockSide;
    lineNumber++;
    i++;
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let houseChoice= prompt("Please choose a house color.");
  let doorChoice= prompt("Please choose a door color.");
    const canvas = document.getElementById('canvas9');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
//roof
ctx.beginPath();
    ctx.moveTo(100,350);
    ctx.lineTo(800,350);
    ctx.lineTo(450,100);
    ctx.closePath();
    ctx.fillStyle ="#808080";
    ctx.fill();
  ctx.stroke();
//house
    let houseColor;
     if(houseChoice==="brown"){
       houseColor="#654500";
     }
     if(houseChoice==="blue"){
       houseColor="#0000FF";
     }
     if(houseChoice==="green"){
       houseColor="#00FF40";
     }
     if(houseChoice==="orange"){
       houseColor="#FF8000";
     }
     if(houseChoice==="purple"){
       houseColor="#8000FF";
     }
     if(houseChoice==="red"){
       houseColor="#FF0000";
     }
     if(houseChoice==="yellow"){
       houseColor="#FFFF00";
     }
     ctx.fillStyle = houseColor;
     ctx.fillRect(150, 350, 600, 500);
  ctx.stroke();
//door
     let doorColor;
      if(doorChoice==="brown"){
        doorColor="#654500";
      }
      if(doorChoice==="blue"){
        doorColor="#0000FF";
      }
      if(doorChoice==="green"){
        doorColor="#00FF40";
      }
      if(doorChoice==="orange"){
        doorColor="#FF8000";
      }
      if(doorChoice==="purple"){
        doorColor="#8000FF";
      }
      if(doorChoice==="red"){
        doorColor="#FF0000";
      }
      if(doorChoice==="yellow"){
        doorColor="#FFFF00";
      }
      ctx.fillStyle = doorColor;
      ctx.fillRect(400, 620, 100, 150);
  ctx.stroke();
//window1
let windowColor="#00F7FF"
ctx.fillStyle =windowColor;
ctx.fillRect(250, 400, 75, 75);
  ctx.stroke();
//window2
let window2Color="#00F7FF"
ctx.fillStyle =window2Color;
ctx.fillRect(575, 400, 75, 75);
  ctx.stroke();
//window3
let window3Color="#00F7FF"
ctx.fillStyle =window3Color;
ctx.fillRect(250, 620, 75, 75);
  ctx.stroke();
//window4
let window4Color="#00F7FF"
ctx.fillStyle =window4Color;
ctx.fillRect(575, 620, 75, 75);
  ctx.stroke();
//doorknob
  let doorknobColor= "#FFFF00" 
  ctx.beginPath();
ctx.arc(480,695,5,0,2*Math.PI);
ctx.stroke();
  ctx.fillStyle=doorknobColor;
  ctx.fill();
}
