var canvas=document.getElementById("myCanvas");
var color1="blue";
var color2="black";
var color3="red";
var color4="yellow";
var color5="green";
var color6="brown";

ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=5;
ctx.arc(500, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=5;
ctx.arc(410, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=5;
ctx.arc(320, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=5;
ctx.arc(360, 240, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color5;
ctx.lineWidth=5;
ctx.arc(450, 240, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color6;
ctx.lineWidth=5;
ctx.rect(170, 120, 460, 230);
ctx.stroke();
 