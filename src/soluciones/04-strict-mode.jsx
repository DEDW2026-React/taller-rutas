import { StrictMode, useEffect, useState } from 'react'

export default function ConStrictMode() {
  return (
    <StrictMode>
      <Cronometro />
    </StrictMode>
  )
}

function Cronometro() {
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSegundos(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return <p className="big">⏱️ {segundos} s</p>
}

// Quitar StrictMode esconde el problema, pero no lo arregla. Sin limpieza, el intervalo
// también seguiría corriendo cuando el cronómetro desaparezca de la pantalla.
