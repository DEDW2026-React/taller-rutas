import { StrictMode, useEffect, useState } from 'react'

export const titulo = 'El cronómetro va al doble'
export const enunciado =
  'Este cronómetro está dentro de StrictMode y suma 2 segundos por segundo. Encuentra por qué y arréglalo.'

export default function ConStrictMode() {
  return (
    // 🎁 Lo mismo que hace main.jsx en un proyecto de Vite
    <StrictMode>
      <Cronometro />
    </StrictMode>
  )
}

function Cronometro() {
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    setInterval(() => setSegundos(s => s + 1), 1000)

    // 🎃 1. StrictMode monta el efecto, lo limpia y lo vuelve a montar.
    //       Como este efecto no tiene limpieza, quedan dos intervalos sumando.
    //       Guarda el id del intervalo: const id = setInterval(...)
    // 🎃 2. Retorna la limpieza: return () => clearInterval(id)
  }, [])

  return <p className="big">⏱️ {segundos} s</p>
}

// 💯 Extra: escribe en un comentario por qué quitar <StrictMode> no es la solución.
