import { createContext, useContext, useState } from 'react'
import { Link, MemoryRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router'

export const titulo = 'Perfil con sesión'
export const enunciado =
  'La app tiene Inicio, Login y Perfil. Guarda la sesión en un contexto para que el perfil solo se vea después de entrar.'

const SesionContext = createContext(null)

function SesionProvider({ children }) {
  // 🎃 1. Guarda el nombre de quien entró en un estado que parta en null
  // 🎃 2. Crea dos funciones:
  //       entrar(nuevoNombre) guarda el nombre
  //       salir() vuelve a null
  // 🎃 3. Comparte las tres cosas: value={{ nombre, entrar, salir }}
  return <SesionContext.Provider value={null}>{children}</SesionContext.Provider>
}

function useSesion() {
  // 🎃 4. Cambia esta línea por: return useContext(SesionContext)
  return { nombre: null, entrar: () => {}, salir: () => {} }
}

export default function Sesion() {
  return (
    <MemoryRouter>
      <BarraDireccion />
      {/* 🎃 5. Envuelve el menú y las rutas con <SesionProvider> */}
      <nav className="menu-rutas">
        <Link to="/">Inicio</Link>
        <Link to="/perfil">Mi perfil</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h3>Inicio</h3>} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </MemoryRouter>
  )
}

function Login() {
  const { entrar } = useSesion()
  // 🎃 6. Obtén la función para navegar: const navigate = useNavigate()
  const [nombre, setNombre] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    entrar(nombre)
    // 🎃 7. Después de entrar, vuelve al perfil: navigate('/perfil')
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

  // 🎃 8. Sin sesión, redirige al login: if (!nombre) return <Navigate to="/login" />

  return (
    <div className="row">
      <p>Hola, {nombre}</p>
      <button onClick={salir}>Salir</button>
    </div>
  )
}

// 🎁 Muestra la URL actual, como la barra del navegador
function BarraDireccion() {
  const { pathname } = useLocation()
  return <div className="barra-direccion" aria-label="Barra de direcciones">localhost:5173{pathname}</div>
}

// 💯 Extra: en Inicio, muestra "Hola, {nombre}" si hay sesión, o un link a /login si no hay.
