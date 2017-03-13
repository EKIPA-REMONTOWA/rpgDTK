var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(800,600);
ctx.stroke();
ctx.beginPath();
ctx.arc(400,300,60,0,2*Math.PI);
ctx.stroke();

function newGame(){
	document.getElementById('controlls').style.display="none";
	document.getElementById('newGame').style.display="block";
	
	
}
function playerCard(){
	document.getElementById('newGame').style.display="none";
	document.getElementById('playerCard').style.display="block";
}