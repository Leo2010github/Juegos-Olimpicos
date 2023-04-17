canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 6;
ctx.arc(250, 210, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.arc(350, 210, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.arc(450, 210, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 6;
ctx.arc(305, 290, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 6;
ctx.arc(400, 290, 60, 0, 2 * Math.PI);
ctx.stroke()