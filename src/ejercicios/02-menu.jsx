import { MemoryRouter, NavLink, Route, Routes, useLocation } from 'react-router'

export const titulo = 'Menú con rutas'
export const enunciado =
  'Haz que cada link del menú muestre su página, que el link de la página actual se marque, y que una URL que no existe muestre "Página no encontrada".'

export default function Menu() {
  return (
    // 🎁 MemoryRouter guarda la URL en memoria para no chocar con el menú del taller.
    //    En tu app usarías <BrowserRouter> en main.jsx.
    <MemoryRouter>
      <BarraDireccion />
      <nav className="menu-rutas">
        {/* 🎃 1. Cambia cada <span> por un <NavLink>, por ejemplo:
                  <NavLink to="/artistas">Artistas</NavLink>
                  Para Inicio usa to="/". NavLink le agrega la clase "active" al link de la página actual. */}
        <span>Inicio</span>
        <span>Artistas</span>
        <span>Contacto</span>
        <span>Discos</span>
      </nav>

      {/* 🎃 2. Arma las rutas:
              <Routes>
                <Route path="/" element={<Inicio />} />
                ... Artistas en "/artistas", Contacto en "/contacto"
                <Route path="*" element={<NoEncontrada />} />
              </Routes>
              "Discos" no tiene página a propósito: debe mostrar NoEncontrada. */}
      <p className="muted">Aquí van las páginas</p>
    </MemoryRouter>
  )
}

function Inicio() {
  return <h3>Inicio</h3>
}

function Artistas() {
  return <h3>Artistas</h3>
}

function Contacto() {
  return <h3>Contacto</h3>
}

function NoEncontrada() {
  return <h3>Página no encontrada</h3>
}

// 🎁 Muestra la URL actual, como la barra del navegador
function BarraDireccion() {
  const { pathname } = useLocation()
  return <div className="barra-direccion" aria-label="Barra de direcciones">localhost:5173{pathname}</div>
}
