const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
let x = 350;
let y = 350;
let num = 700;
let angle = 360;
let fov = 360/num * Math.PI / 180;
update();
function update(){
  let fov = angle/num * Math.PI / 180;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  i = 0;
  let newx = 200;
  let newy = 200;
  let tempfov = fov;
   while (i < num){
    let bruhx = newx * Math.cos(tempfov) - newy * Math.sin(tempfov);
    let bruhy = newy * Math.sin(tempfov) + newx * Math.cos(tempfov);
    tempfov += fov;
    //console.log(bruhx +","+ bruhy);
    bruhx += 350;
    bruhy += 350;
    ctx.moveTo(x, y);
    ctx.lineTo(bruhx, bruhy);
    i += 1;
   }
    ctx.stroke();
}


var slider = document.getElementById("num");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
   num = this.value;
   update();
}

var joe = document.getElementById("angle");
// Update the current slider value (each time you drag the slider handle)
joe.oninput = function() {
   angle = this.value;
   update();
}
