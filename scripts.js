var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
var doublePi = Math.PI*2;

canvas.width = width;
canvas.height = height;

ctx.fillStyle = '#222';
ctx.fillRect(0, 0, width, height);

function getRandom(number) {
  return Math.random() * number;
}

var flakes = [];

function create() {
  if (flakes.length < 100) {
    flakes.push({
      x: getRandom(width),
      y: getRandom(height),
      radius: 2 + getRandom(2),
      speedY: 0.5 + getRandom(0.5),
      speedX: -0.2 + getRandom(0.4),
      opacity: getRandom(1).toFixed(2),
      colour: '#fff',
    })
  }
}

function drawFlake(flake) {
  ctx.beginPath();
  ctx.arc(flake.x, flake.y, flake.radius, 0, doublePi);
  ctx.closePath();
  ctx.fillStyle = flake.colour;
  ctx.fill();
}

function draw() {
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, width, height);
  flakes.forEach(drawFlake);
}

function updateFlake(flake) {
  flake.y += flake.speedY;
  flake.x +=flake.speedX;
  if (flake.y > height) {
    flake.y = 0;
  }
}

function update() {
  flakes.forEach(updateFlake);
  draw();
}

function repeat() {
  create();
  update();
  init();
}

function init() {
  window.requestAnimationFrame(repeat);
}

init();
