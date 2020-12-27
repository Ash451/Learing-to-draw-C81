var canvas= document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var color="blue"
var radius=50
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(400,400,radius,0,2*Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown",circle)
function circle(e){
mousex=e.clientX-canvas.offsetLeft
mousey=e.clientY-canvas.offsetTop
color=document.getElementById("colorinput").value
radius=document.getElementById("radiusinput").value
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=5
ctx.arc(mousex,mousey,radius,0,2*Math.PI)
ctx.stroke()
}