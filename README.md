# 📄 Mario se mueve
![mario](mario.jpg)

# Product Requirements Document (PRD)

**Proyecto:** Super Mario Esplora Edition
**Componentes usados (Fase 1):** Acelerómetro, Sensor de Luz
**Componentes potenciales (Fase 2+):** Joystick, Slider, Temperatura, Micrófono, Botones, etc.

---

## 1. Objetivo del Producto

Desarrollar una versión minimalista de Mario Bros inspirada en el clásico, controlada con el acelerómetro y el sensor de luz del Arduino Esplora.
El sistema debe recibir y procesar los datos en tiempo real para que el juego pueda ejecutarse dentro de un navegador web.

---

## 2. Funcionalidades Clave

* **Movimiento con acelerómetro:** inclinar a la izquierda/derecha mueve al personaje.
* **Salto con acelerómetro:** sacudir hacia arriba ejecuta un salto.
* **Poder especial con sensor de luz:** cubrir el sensor activa un modo especial (ejemplo: invencibilidad o ataque).
* **Juego en navegador:** los datos de los sensores deben visualizarse y usarse directamente en un entorno web (HTML5 + p5.js).

---

## 3. Requisitos Funcionales

* El sistema debe poder recibir datos del Arduino Esplora conectado en un puerto COM (ejemplo: COM12).
* Es obligatorio utilizar **p5.serialport** junto a un **servidor intermedio en Node.js** para:

  * Escuchar el puerto COM asignado.
  * Procesar los datos recibidos de los sensores.
  * Exponer los datos al navegador mediante WebSocket o HTTP.
* El navegador debe interpretar los datos en p5.js, asignando acciones al personaje en tiempo real (<100ms de latencia).

**Condición añadida:**
El código de Arduino debe estar preparado para leer todos los sensores de la placa, incluso si en la Fase 1 solo se utilizan acelerómetro y luz. Ejemplo:

```cpp
// Lectura de sensores en Esplora
int joystickX = Esplora.readJoystickX();
int joystickY = Esplora.readJoystickY();
int light = Esplora.readLightSensor();
int temperature = Esplora.readTemperature(0);
int slider = Esplora.readSlider();
int microphone = Esplora.readMicrophone();
int accelX = Esplora.readAccelerometer(X_AXIS);
int accelY = Esplora.readAccelerometer(Y_AXIS);
int accelZ = Esplora.readAccelerometer(Z_AXIS);
int button1 = Esplora.readButton(SWITCH_1);
int button2 = Esplora.readButton(SWITCH_2);
int button3 = Esplora.readButton(SWITCH_3);
int button4 = Esplora.readButton(SWITCH_4);
```

---

## 4. Requisitos No Funcionales

* Fluidez del juego en el navegador: mínimo 30 FPS.
* Código modular, comentado y con separación clara entre:

  * Lectura de hardware (Arduino).
  * Servidor intermedio (Node.js).
  * Lógica visual (p5.js en navegador).
* Compatibilidad multiplataforma (Windows, macOS, Linux).

---

## 5. Alcance y Limitaciones

* **Fase 1 (Prototipo):** únicamente se usarán acelerómetro y sensor de luz.
* **Fase 2 (Extensiones):** se podrán integrar joystick, botones, slider, micrófono y sensor de temperatura para nuevas mecánicas.
* Se requiere que el usuario tenga instalado Node.js y p5.serialport para ejecutar el sistema.
* El alcance es **prototipo demostrativo**, no distribución comercial.

---

👉 ¿Quieres que te prepare ya el **sketch Arduino completo** que lea todos los sensores y envíe los datos en formato **JSON por Serial**, listo para consumir en Node.js?

