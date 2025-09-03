# Ruta de Desarrollo - Mario se Mueve

## Objetivo
Desarrollar una versión minimalista de Mario Bros controlada únicamente con el acelerómetro y el sensor de luz del Arduino Esplora. El juego se ejecuta en el navegador y recibe datos en tiempo real desde el hardware.

---

## Configuración Base

### 1. Programa Arduino
```cpp
// Lectura de sensores
int accelX = Esplora.readAccelerometer(X_AXIS);
int accelY = Esplora.readAccelerometer(Y_AXIS);
int accelZ = Esplora.readAccelerometer(Z_AXIS);
int lightLevel = Esplora.readLightSensor();

// Envío por Serial
Serial.print(accelX);
Serial.print(",");
Serial.print(accelY);
Serial.print(",");
Serial.print(accelZ);
Serial.print(",");
Serial.println(lightLevel);
```

### 2. Servidor Node.js
- p5.serialport para lectura del puerto COM
- WebSocket para envío al navegador

### 3. Cliente Web (p5.js)
- Canvas para visualización
- Renderizado del personaje
- Aplicación de movimientos y poderes básicos

---

## Desarrollo del Prototipo
- Movimiento lateral y salto con acelerómetro
- Poder especial cubriendo el sensor de luz

---

## Pruebas
- [ ] Verificación de movimiento lateral
- [ ] Verificación de salto
- [ ] Verificación de activación del poder especial
- [ ] Comprobación de latencia (<100ms)

---

## Entregables
1. Sketch Arduino (.ino) para acelerómetro y sensor de luz
2. Servidor Node.js para transmisión de datos
3. Cliente p5.js para visualización y control del personaje
4. Documentación y guía de uso

---

## Tiempo Estimado de Desarrollo
- Configuración inicial: 1 día
- Implementación de controles: 2-3 días
- Pruebas: 1 día

**Total estimado:** 4-5 días para el prototipo funcional básico
