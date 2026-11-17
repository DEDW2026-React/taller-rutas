// Este archivo arma el menú del taller. No necesitas modificarlo.
// Los ejercicios están en src/ejercicios.
import { Component, useState } from 'react'

const ejercicios = import.meta.glob('./ejercicios/*.jsx', { eager: true })
const soluciones = import.meta.glob('./soluciones/*.jsx', { eager: true })

const lista = Object.keys(ejercicios).sort().map(path => {
  const archivo = path.replace('./ejercicios/', '')
  return {
    archivo,
    numero: archivo.slice(0, 2),
    titulo: ejercicios[path].titulo,
    enunciado: ejercicios[path].enunciado,
    Ejercicio: ejercicios[path].default,
    Solucion: soluciones['./soluciones/' + archivo]?.default,
  }
})

// Si un ejercicio falla, muestra el error acá en vez de dejar la página en blanco.
// Al guardar el archivo, Vite recarga el ejercicio y se vuelve a intentar.
class AtraparError extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  reintentar = () => this.setState({ error: null })

  // Espera a que React cargue el código nuevo antes de reintentar
  despuesDeGuardar = () => setTimeout(this.reintentar, 200)

  componentDidMount() {
    import.meta.hot?.on('vite:afterUpdate', this.despuesDeGuardar)
  }

  componentWillUnmount() {
    import.meta.hot?.off('vite:afterUpdate', this.despuesDeGuardar)
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="error">
        <strong>💥 El ejercicio falló</strong>
        <pre>{this.state.error.message}</pre>
        <p className="muted">
          Revisa el archivo del ejercicio y la consola del navegador. Al guardar el archivo se vuelve a intentar.
        </p>
        <button onClick={this.reintentar}>Reintentar</button>
      </div>
    )
  }
}

export default function App() {
  const [actual, setActual] = useState(() => {
    const desdeUrl = lista.findIndex(e => e.numero === location.hash.slice(1))
    return desdeUrl >= 0 ? desdeUrl : 0
  })
  const [verSolucion, setVerSolucion] = useState(false)

  const ejercicio = lista[actual]
  const Componente = verSolucion ? ejercicio.Solucion : ejercicio.Ejercicio

  function elegir(index) {
    setActual(index)
    setVerSolucion(false)
    location.hash = lista[index].numero
  }

  return (
    <div className="taller">
      <aside>
        <h1>⚛️ Taller de contexto y rutas</h1>
        <ol>
          {lista.map((e, index) => (
            <li key={e.archivo}>
              <button className={index === actual ? 'active' : ''} onClick={() => elegir(index)}>
                {e.numero}. {e.titulo}
              </button>
            </li>
          ))}
        </ol>
        <p className="leyenda">🎃 lo que tienes que hacer<br />💯 extra, si te sobra tiempo</p>
      </aside>

      <main>
        <header>
          <h2>{ejercicio.numero}. {ejercicio.titulo}</h2>
          <p>{ejercicio.enunciado}</p>
          <p className="muted">
            Edita <code>src/ejercicios/{ejercicio.archivo}</code> y busca los 🎃
          </p>
          {ejercicio.Solucion && (
            <div className="switch">
              <button className={!verSolucion ? 'active' : ''} onClick={() => setVerSolucion(false)}>
                Tu versión
              </button>
              <button className={verSolucion ? 'active' : ''} onClick={() => setVerSolucion(true)}>
                Solución
              </button>
            </div>
          )}
        </header>

        <section className={'resultado' + (verSolucion ? ' es-solucion' : '')}>
          <AtraparError key={ejercicio.archivo + verSolucion}>
            <Componente />
          </AtraparError>
        </section>
      </main>
    </div>
  )
}
