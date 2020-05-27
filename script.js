const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
let mapCoords = []
let x = 350;
let y = 350;
let num = 700;
const fov = 360/num * Math.PI / 180;
function random(){
  return Math.floor(Math.random() * 700);
}
function drawMap(){

  let i = 0;
  while (i < 7){
    mapCoords.push([random(),random(),random(),random()]);
    // creates map(7 lines)
    ctx.beginPath();
    ctx.moveTo(mapCoords[i][0],mapCoords[i][1]);
    ctx.lineTo(mapCoords[i][2],mapCoords[i][3]);
    ctx.stroke();
    i++;
  }
  //creates player(circle)
  ctx.beginPath();
  ctx.arc(x,y,5,0,2*Math.PI);
  ctx.fill();

  return mapCoords;
}
function updateMap(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let i = 0;
  while (i < 7){
    // updates map(7 lines)
    ctx.beginPath();
    ctx.moveTo(mapCoords[i][0],mapCoords[i][1]);
    ctx.lineTo(mapCoords[i][2],mapCoords[i][3]);
    ctx.stroke();
    i++;
  }
  //creates player(circle)
  ctx.beginPath();
  ctx.arc(x,y,5,0,2*Math.PI);
  ctx.fill();
}

function createRays(){
  i = 0;
  //sets length of lines
  let newx = 350;
  let newy = 350;
  
  let tempfov = fov;
   while (i < num){
    let bruhx = newx * Math.cos(tempfov) - newy * Math.sin(tempfov);
    let bruhy = newy * Math.sin(tempfov) + newx * Math.cos(tempfov);
    tempfov += fov;
    //console.log(bruhx +","+ bruhy);
    bruhx += x;
    bruhy += y;
    ctx.moveTo(x, y);
    ctx.lineTo(bruhx, bruhy);
    i += 1;
   }
    ctx.stroke();
}
//drawMap();
createRays();
// setInterval(updateMap, 1000);
