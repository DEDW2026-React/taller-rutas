import { createContext, useContext, useState } from 'react'

export const titulo = 'Tema oscuro'
export const enunciado =
  'El botón está tres componentes más abajo que App, y la tarjeta en otra rama. Comparte el tema y la función que lo cambia con un contexto.'

// 🎃 1. Crea el contexto fuera de los componentes: const TemaContext = createContext(null)

export default function Tema() {
  const [tema, setTema] = useState('claro')

  function cambiarTema() {
    setTema(tema === 'claro' ? 'oscuro' : 'claro')
  }

  return (
    // 🎃 2. Envuelve todo con <TemaContext.Provider value={{ tema, cambiarTema }}> ... </TemaContext.Provider>
    <div>
      <Encabezado />
      <Tarjeta />
    </div>
  )
}

function Encabezado() {
  return (
    <div className="row">
      <h3>Discografíapp</h3>
      <Barra />
    </div>
  )
}

function Barra() {
  return (
    <nav className="row">
      <BotonTema />
    </nav>
  )
}

function BotonTema() {
  // 🎃 3. Saca cambiarTema del contexto y úsala en el onClick:
  //       const { cambiarTema } = useContext(TemaContext)
  return <button onClick={() => {}}>Cambiar tema</button>
}

function Tarjeta() {
  const tema = 'claro' // 🎃 4. Saca el tema del contexto: const { tema } = useContext(TemaContext)
  return <article className={'card tema-' + tema}>Queen · Tema: {tema}</article>
}
