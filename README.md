# Taller de contexto y rutas

Cinco ejercicios cortos de Context, React Router y StrictMode, de menos a más.

## Cómo empezar

```bash
npm install
npm run dev
```

Abre la URL que aparece. A la izquierda está la lista de ejercicios.

## Cómo se trabaja

1. Elige un ejercicio en el menú.
2. Abre su archivo en `src/ejercicios/` (el nombre aparece en la página).
3. Busca los comentarios con 🎃 y complétalos en orden.
4. Guarda y mira el resultado en el navegador.
5. Si te sobra tiempo, haz los 💯 extra.

Los ejercicios de rutas usan `MemoryRouter`, que guarda la URL en memoria para no chocar con el menú del taller. Arriba de cada uno hay una barra que muestra la URL actual. En tu propia app usarías `BrowserRouter`.

## Revisa tu trabajo con los tests

```bash
npm test 01     # revisa solo el ejercicio 1
npm test        # revisa todos
```

Cada ✓ es algo que ya funciona y cada × es algo que falta. Antes de completar un ejercicio es normal que los tests fallen. Algunos pasan desde el comienzo, porque revisan cómo parte la pantalla.

## Las soluciones

El botón **Solución** muestra cómo debería funcionar cada ejercicio. El código de las soluciones está en `src/soluciones/`, pero intenta no mirarlo antes de terminar.

## Ejercicios

| # | Ejercicio | Practicas |
|---|---|---|
| 01 | Tema oscuro | `createContext`, el Provider y `useContext` |
| 02 | Menú con rutas | `Routes`, `Route`, `NavLink` y la página 404 |
| 03 | Página de un artista | Rutas con parámetros y `useParams` |
| 04 | El cronómetro va al doble | Qué hace StrictMode y por qué un efecto necesita limpieza |
| 05 | Desafío: perfil con sesión | Context, `Navigate` y `useNavigate` juntos, sin pasos guiados |
