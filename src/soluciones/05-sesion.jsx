import { createContext, useContext, useState } from 'react'
import { Link, MemoryRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router'

const SesionContext = createContext(null)

function SesionProvider({ children }) {
  const [nombre, setNombre] = useState(null)

  function entrar(nuevoNombre) {
    setNombre(nuevoNombre)
  }

  function salir() {
    setNombre(null)
  }

  return <SesionContext.Provider value={{ nombre, entrar, salir }}>{children}</SesionContext.Provider>
}

function useSesion() {
  return useContext(SesionContext)
}

export default function Sesion() {
  return (
    <MemoryRouter>
      <BarraDireccion />
      <SesionProvider>
        <nav className="menu-rutas">
          <Link to="/">Inicio</Link>
          <Link to="/perfil">Mi perfil</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h3>Inicio</h3>} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </SesionProvider>
    </MemoryRouter>
  )
}

function Login() {
  const { entrar } = useSesion()
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    entrar(nombre)
    navigate('/perfil')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Iniciar sesión</h3>
      <div className="row">
        <input placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        <button>Entrar</button>
      </div>
    </form>
  )
}

function Perfil() {
  const { nombre, salir } = useSesion()

  if (!nombre) return <Navigate to="/login" />

  return (
    <div className="row">
      <p>Hola, {nombre}</p>
      <button onClick={salir}>Salir</button>
    </div>
  )
}

function BarraDireccion() {
  const { pathname } = useLocation()
  return <div className="barra-direccion" aria-label="Barra de direcciones">localhost:5173{pathname}</div>
}
