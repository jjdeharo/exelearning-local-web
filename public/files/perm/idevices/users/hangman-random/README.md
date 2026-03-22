# Ahorcado aleatorio

iDevice para eXeLearning que crea un juego del ahorcado con lista de palabras configurable por el autor del recurso.

## Estructura

- `config.xml`
- `hangman-random-icon.svg`
- `edition/`
- `export/`

## Datos que guarda

- `title`
- `instructions`
- `words`
- `maxAttempts`

## Comportamiento

- El autor escribe una palabra o expresion por linea.
- Al guardar, se eliminan lineas vacias y duplicadas.
- En la vista final, cada partida elige una palabra al azar de la lista.
- El juego muestra un contador de aciertos acumulados durante la sesion.
- El alumnado puede pedir otra palabra usando el boton `Otra palabra`.
- El editor y el juego exportado incluyen textos locales para `es`, `ca` y `en`.
- El titulo visible en el selector de iDevices sigue dependiendo de `config.xml` y de los catalogos XLF del core de eXe.

## ZIP para importar

Para generar un ZIP valido con `config.xml` en la raiz del paquete:

```bash
cd hangman-random
zip -r ../hangman-random.zip .
```
