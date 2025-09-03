// Variables simuladas para datos del acelerómetro y sensor de luz
let accelX = 0;
let accelY = 0;
let accelZ = 0;
let lightLevel = 100;

// Estado del personaje
let mario = {
  x: 300,
  y: 320,
  vy: 0,
  jumping: false,
  power: false
};

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background('#aee1f9');
  drawGround();
  updateMario();
  drawMario();
  drawPowerEffect();
}

function drawGround() {
  fill('#6ab04c');
  rect(0, 350, width, 50);
}

function updateMario() {
  // Movimiento lateral por inclinación (accelX)
  mario.x += map(accelX, -512, 512, -4, 4);
  mario.x = constrain(mario.x, 30, width - 30);

  // Salto por sacudida (accelZ)
  if (!mario.jumping && abs(accelZ) > 400) {
    mario.vy = -12;
    mario.jumping = true;
  }

  // Gravedad y suelo
  mario.y += mario.vy;
  mario.vy += 0.7;
  if (mario.y > 320) {
    mario.y = 320;
    mario.vy = 0;
    mario.jumping = false;
  }

  // Poder especial por luz baja
  mario.power = (lightLevel < 40);
}

function drawMario() {
  // Cuerpo
  fill(mario.power ? '#ffd700' : '#e74c3c');
  ellipse(mario.x, mario.y, 40, 40);
  // Sombrero
  fill('#2980b9');
  rect(mario.x - 20, mario.y - 25, 40, 12, 6);
  // Ojos
  fill('#fff');
  ellipse(mario.x - 8, mario.y - 5, 8, 8);
  ellipse(mario.x + 8, mario.y - 5, 8, 8);
  fill('#222');
  ellipse(mario.x - 8, mario.y - 5, 3, 3);
  ellipse(mario.x + 8, mario.y - 5, 3, 3);
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

// Simulación de recepción de datos del puerto serie
// Reemplaza esta función por la integración real con p5.serialport
function receiveSensorData(ax, ay, az, light) {
  accelX = ax;
  accelY = ay;
  accelZ = az;
  lightLevel = light;
}

// Ejemplo de simulación automática para pruebas
setInterval(() => {
  // Simula inclinación y salto aleatorio
  let ax = int(random(-512, 512));
  let az = (random() < 0.02) ? int(random(450, 600)) : 0; // salto ocasional
  let light = (random() < 0.1) ? int(random(0, 30)) : 100; // poder ocasional
  receiveSensorData(ax, 0, az, light);
}, 100);
