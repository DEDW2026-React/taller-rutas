import { createContext, useContext, useState } from 'react'

const TemaContext = createContext(null)

export default function Tema() {
  const [tema, setTema] = useState('claro')

  function cambiarTema() {
    setTema(tema === 'claro' ? 'oscuro' : 'claro')
  }

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      <div>
        <Encabezado />
        <Tarjeta />
      </div>
    </TemaContext.Provider>
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
  const { cambiarTema } = useContext(TemaContext)
  return <button onClick={cambiarTema}>Cambiar tema</button>
}

function Tarjeta() {
  const { tema } = useContext(TemaContext)
  return <article className={'card tema-' + tema}>Queen · Tema: {tema}</article>
}
