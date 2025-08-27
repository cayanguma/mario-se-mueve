# Ruta de Desarrollo - Mario se Mueve
## Controles con Arduino Esplora

### Configuración Base

#### 1. Programa Arduino
```cpp
// Lectura de sensores
accelX = Esplora.readAccelerometer(X_AXIS);
accelY = Esplora.readAccelerometer(Y_AXIS);
accelZ = Esplora.readAccelerometer(Z_AXIS);
lightLevel = Esplora.readLightSensor();

// Envío por Serial
Serial.print(accelX);
Serial.print(",");
Serial.print(accelY);
Serial.print(",");
Serial.print(accelZ);
Serial.print(",");
Serial.println(lightLevel);
```

#### 2. Servidor Node.js
- p5.serialport para lectura del puerto COM
- WebSocket para envío al navegador

#### 3. Cliente Web (p5.js)
- Canvas para visualización
- Renderizado del personaje
- Aplicación de movimientos básicos

### 2. Desarrollo del Prototipo Utilizando Componentes Esplora

### 2. Pruebas
- [ ] Verificación de movimiento lateral
- [ ] Verificación de detección de salto
- [ ] Verificación de activación del poder especial
- [ ] Comprobación de latencia (<100ms)

### 3. Entregables Mínimos
1. Sketch Arduino:
   ```cpp
   // Lectura de sensores
   accelX = Esplora.readAccelerometer(X_AXIS);
   accelY = Esplora.readAccelerometer(Y_AXIS);
   accelZ = Esplora.readAccelerometer(Z_AXIS);
   lightLevel = Esplora.readLightSensor();
   
   // Envío por Serial
   Serial.print(accelX);
   Serial.print(",");
   Serial.print(accelY);
   Serial.print(",");
   Serial.print(accelZ);
   Serial.print(",");
   Serial.println(lightLevel);
   ```

2. Servidor Node.js:
   - Escucha del puerto COM
   - Transmisión WebSocket

3. Cliente p5.js:
   - Renderizado del personaje
   - Aplicación de movimientos
   - Visualización del poder especial

### Tiempo Estimado
- Configuración inicial: 1 día
- Implementación de controles: 2-3 días
- Pruebas: 1 día

Total: 4-5 días para prototipo funcional básico

#### Fase 2: Sistema de Retroalimentación y Ambiente
1. Sistema de sonido con el buzzer integrado:
   - Tonos para saltos
   - Melodías para power-ups
   - Sonidos de victoria/derrota
2. Uso del sensor de luz:
   - Ajuste de dificultad según la luz ambiental
   - Modos día/noche
3. Sensor de temperatura:
   - Efectos especiales basados en temperatura
   - Modificadores de gameplay

#### Fase 3: Mecánicas de Juego Adaptadas
1. Sistema de power-ups basado en slider:
   - Control de potencia de salto
   - Velocidad de movimiento variable
2. Modos de juego especiales:
   - Modo acelerómetro (control por inclinación)
   - Modo tradicional (joystick/botones)
3. Sistema de niveles adaptativo:
   - Dificultad basada en sensores
   - Patrones de obstáculos dinámicos

#### Fase 4: Integración y Características Avanzadas
1. Modo multijugador usando puerto de expansión:
   - Soporte para joystick adicional
   - Modos cooperativo/competitivo
2. Sistema de records y puntuación:
   - Almacenamiento en EEPROM
   - Tracking de mejores tiempos/scores
3. Modos especiales:
   - Modo nocturno (basado en sensor de luz)
   - Modo temperatura (basado en sensor)

### 3. Pruebas y Calibración
- [ ] Calibración de sensores:
  - Rangos del acelerómetro
  - Sensibilidad del joystick
  - Umbrales del sensor de luz
  - Rangos del slider
- [ ] Pruebas de respuesta del LED RGB
- [ ] Ajuste de tonos del buzzer
- [ ] Pruebas de durabilidad de componentes

### 4. Entregables del Prototipo
1. Código fuente Arduino (.ino):
   - Módulos para cada componente
   - Sistema de control principal
   - Lógica de juego
2. Documentación de calibración:
   - Valores de referencia de sensores
   - Mapeo de controles
   - Configuraciones recomendadas
3. Guía de uso:
   - Instrucciones de juego
   - Descripción de modos
   - Troubleshooting

### 5. Próximos Pasos Post-Prototipo
- Modos de juego adicionales
- Integración con otros sensores externos
- Expansión del sistema de sonido
- Nuevos patrones de LED
- Modos competitivos avanzados

### Componentes Utilizados
- Joystick integrado
- Botones direccionales
- Slider lineal
- LED RGB
- Buzzer
- Sensor de luz
- Sensor de temperatura
- Acelerómetro
- Puerto de expansión

### Tiempo Estimado de Desarrollo
- Fase 1 (Controles): 3-4 días
- Fase 2 (Feedback): 2-3 días
- Fase 3 (Mecánicas): 4-5 días
- Fase 4 (Integración): 3-4 días
- Calibración y pruebas: 2-3 días

Total estimado: 2-3 semanas para el prototipo funcional inicial
