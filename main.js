// Global Variables
let ctx;
let cnv;
let player = { w: 50, h: 50, y: 50, x: 50 };
let enemy = { w: 50, h: 50, y: 400, x: 400 };
let playerImg = document.getElementById("player-Img");
let enemyImg = document.getElementById("enemy-Img");
let ElongadedMario = document.getElementById("dead-player");
let mamaMia = document.createElement("audio");
let level1Timer = 200;
let tries = 1;
let trys = "trys";
let goombaSpeed = 0.5;

mamaMia.src = "sound/Super Mario 64 Mamma mia.mp3";

// Event Listner
window.addEventListener("load", canvasMaker);

function canvasMaker() {
  document.getElementById(
    "Canvas-in"
  ).innerHTML = `<canvas id="canvas"></canvas>`;

  cnv = document.getElementById("canvas");
  ctx = cnv.getContext("2d");
  cnv.width = 900;
  cnv.height = 800;

  // Draw Canvas
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  draw();
}

let state = "start";
function draw() {
  if (state === "start") {
    gameStart();
  } else if (state === "gameOn") {
    gameOn();
  } else if (state === "gameOver") {
    gameOver();
  } else if (state === "WINNER") {
    youWon();
  }

  requestAnimationFrame(draw);
}
// Movement Event Listner
document.addEventListener("mousedown", mouseDownListner);

function mouseDownListner() {
  if (state === "start") {
    state = "gameOn";
    countdown();
  }
}
document.addEventListener("keydown", movement);
