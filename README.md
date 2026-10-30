# Резонанс · Ruso para principiantes

Sitio para estudiar ruso con el manual **«Резонанс»** de Роберт Фадер, en **español, inglés o portugués**.

- **La ruta**: 10 estaciones (las 10 lecciones del manual), cada una con 4 billetes:
  *Palabras I*, *Palabras II*, *Frases y casos* y *La tabla* (declinación).
- **Ejercicios**: palabras nuevas con audio, elegir el significado, decirlo en ruso, escuchar y elegir,
  unir parejas, ordenar frases, completar huecos, elegir el caso correcto, género y escribir con teclado cirílico.
- **Guía de la unidad**: lo esencial de la gramática, frases útiles, vocabulario y la tabla de declinación.
- **Progreso**: billetes sellados, km recorridos y días seguidos (se guardan en el navegador).
- Las ilustraciones y los personajes vienen del manual en Figma.

Es un sitio estático (HTML + CSS + JS, sin dependencias). Para verlo en local:

```bash
python3 -m http.server
```

## Estructura

```
index.html
css/style.css
js/data.js     ← contenido del manual (vocabulario, frases, casos, notas)
js/app.js      ← interfaz y ejercicios (textos en ES / EN / PT)
img/           ← portada, ilustraciones de cada lección y personajes
```

Para añadir o corregir contenido, edita `js/data.js`.
