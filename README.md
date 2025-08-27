# 📄 Mario se mueve
![mario](mario.jpg)

# 📄 Product Requirements Document (PRD)

**Proyecto:** Super Mario Esplora Edition
**Componentes usados:** Acelerómetro, Sensor de Luz



## 1. Objetivo del Producto

Desarrollar una versión minimalista de Mario Bros inspirada en el clásico, controlada únicamente con el **acelerómetro** y el **sensor de luz** del Arduino Esplora. El sistema debe recibir y procesar los datos en tiempo real para que el juego pueda ejecutarse dentro de un navegador web.


## 2. Funcionalidades Clave

* **Movimiento con acelerómetro**: inclinar a la izquierda/derecha mueve al personaje.
* **Salto con acelerómetro**: sacudir hacia arriba ejecuta un salto.
* **Poder especial con sensor de luz**: cubrir el sensor activa un modo especial (ejemplo: invencibilidad o ataque).
* **Juego en navegador**: los datos de los sensores deben visualizarse y usarse directamente en un entorno web (HTML5 + p5.js).


## 3. Requisitos Funcionales

* El sistema debe poder recibir datos del **Arduino Esplora conectado en un puerto COM** (ejemplo: `COM12`).
* Es obligatorio utilizar **p5.serialport** junto a un **servidor intermedio en Node.js** para:

  * Escuchar el puerto COM asignado.
  * Procesar los datos recibidos del acelerómetro y del sensor de luz.
  * Exponer los datos al navegador mediante WebSocket o HTTP.
* El navegador debe interpretar los datos en **p5.js**, asignando acciones al personaje en tiempo real (<100ms de latencia).


## 4. Requisitos No Funcionales

* Fluidez del juego en el navegador: mínimo 30 FPS.
* Código modular, comentado y con separación clara entre:

  * Lectura de hardware (Arduino).
  * Servidor intermedio (Node.js).
  * Lógica visual (p5.js en navegador).
* Compatibilidad multiplataforma (Windows, macOS, Linux).



## 5. Alcance y Limitaciones

* Únicamente se usarán los datos del **acelerómetro** y **sensor de luz**.
* No se contempla soporte para joystick, botones ni otros sensores del Esplora.
* Se requiere que el usuario tenga **instalado Node.js** y **p5.serialport** para ejecutar el sistema.
* El alcance es **prototipo demostrativo**, no distribución comercial.
