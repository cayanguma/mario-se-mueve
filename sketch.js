// Variables simuladas para datos del acelerómetro y sensor de luz
let accelX = 0;
let accelY = 0;
let accelZ = 0;
let lightLevel = 100;

// Estado del personaje
let mario = {
  x: 80,
  y: 320,
  vy: 0,
  jumping: false,
  power: false,
  w: 32,
  h: 40,
  facing: 1 // 1 derecha, -1 izquierda
};

// Mapa simple: plataformas y obstáculos
let groundY = 350;
let obstacles = [
  {x: 200, y: groundY-30, w: 40, h: 30},
  {x: 350, y: groundY-60, w: 40, h: 60},
  {x: 500, y: groundY-30, w: 40, h: 30}
];

function setup() {
  let canvas = createCanvas(640, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background('#aee1f9');
  drawGround();
  drawObstacles();
  updateMario();
  drawMario();
  drawPowerEffect();
  drawSensorValues();
}

function drawGround() {
  // Suelo pixel art: bloques de 16x16
  for (let x = 0; x < width; x += 16) {
    fill('#6ab04c');
    rect(x, groundY, 16, 16);
    fill('#3e944c');
    rect(x, groundY+12, 16, 4);
  }
}

function drawObstacles() {
  // Obstáculos pixel art: bloques tipo ladrillo
  for (let obs of obstacles) {
    for (let y = 0; y < obs.h; y += 16) {
      for (let x = 0; x < obs.w; x += 16) {
        let bx = obs.x + x;
        let by = obs.y + y;
        fill('#b97a56');
        rect(bx, by, 16, 16);
        fill('#d9ad7c');
        rect(bx+2, by+2, 12, 4);
        fill('#8d5524');
        rect(bx+2, by+10, 12, 4);
      }
    }
  }
}

function updateMario() {
  // Movimiento lateral por inclinación (accelX)
  let dx = map(accelX, -512, 512, -4, 4);
  mario.x += dx;
  mario.x = constrain(mario.x, 0, width-mario.w);
  mario.facing = dx >= 0 ? 1 : -1;

  // Salto por sacudida (accelZ)
  if (!mario.jumping && abs(accelZ) > 400) {
    mario.vy = -12;
    mario.jumping = true;
  }

  // Gravedad
  mario.y += mario.vy;
  mario.vy += 0.7;

  // Colisión con suelo
  if (mario.y > groundY - mario.h/2) {
    mario.y = groundY - mario.h/2;
    mario.vy = 0;
    mario.jumping = false;
  }

  // Colisión con obstáculos
  for (let obs of obstacles) {
    if (collides(mario, obs)) {
      // Si cae encima del obstáculo
      if (mario.y < obs.y && mario.y + mario.h/2 > obs.y) {
        mario.y = obs.y - mario.h/2;
        mario.vy = 0;
        mario.jumping = false;
      } else {
        // Bloqueo lateral
        if (mario.x < obs.x) mario.x = obs.x - mario.w;
        else mario.x = obs.x + obs.w;
      }
    }
  }

  // Poder especial por luz baja
  mario.power = (lightLevel < 40);
}

function collides(a, b) {
  return (
    a.x + a.w/2 > b.x &&
    a.x - a.w/2 < b.x + b.w &&
    a.y + a.h/2 > b.y &&
    a.y - a.h/2 < b.y + b.h
  );
}

function drawMario() {
  // Mario pixel art 16x16
  push();
  translate(mario.x, mario.y);
  scale(2,2); // Escala para que se vea más grande
  let skin = color(255, 220, 180);
  let red = color(200, 0, 0);
  let blue = color(40, 80, 200);
  let brown = color(120, 70, 20);
  let white = color(255);
  // Matriz de píxeles (16x16)
  let marioPixels = [
    [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,3,3,1,1,1,1,3,3,1,1,1,0,0],
    [1,1,3,3,3,1,1,1,1,3,3,3,3,1,1,0],
    [1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0],
    [1,3,4,4,3,3,3,3,3,3,4,4,3,3,1,0],
    [0,1,3,3,3,3,3,3,3,3,3,3,3,1,0,0],
    [0,1,2,2,3,3,3,3,3,3,2,2,3,1,0,0],
    [0,1,2,2,2,2,2,2,2,2,2,2,2,1,0,0],
    [0,1,4,4,2,2,2,2,2,2,4,4,2,1,0,0],
    [0,1,4,4,4,4,4,4,4,4,4,4,2,1,0,0],
    [0,1,1,4,4,4,4,4,4,4,4,1,1,1,0,0],
    [0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0]
  ];
  let palette = [null, red, blue, skin, brown, white];
  for (let y=0; y<16; y++) {
    for (let x=0; x<16; x++) {
      let c = marioPixels[y][x];
      if (c !== 0 && palette[c]) {
        fill(palette[c]);
        noStroke();
        rect(x-8, y-20, 1, 1);
      }
    }
  }
  pop();
}

function drawPowerEffect() {
  if (mario.power) {
    noFill();
    stroke('#ffd700');
    strokeWeight(4);
    ellipse(mario.x, mario.y, 60, 60);
    noStroke();
  }
}

function drawSensorValues() {
  fill(0, 120);
  rect(10, 10, 180, 70, 8);
  fill('#fff');
  textSize(16);
  text('Acelerómetro X: ' + accelX, 20, 35);
  text('Acelerómetro Z: ' + accelZ, 20, 55);
  text('Luz: ' + lightLevel, 20, 75);
}

// Simulación de recepción de datos del puerto serie
function receiveSensorData(ax, ay, az, light) {
  accelX = ax;
  accelY = ay;
  accelZ = az;
  lightLevel = light;
}
