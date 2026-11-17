import { MemoryRouter, NavLink, Route, Routes, useLocation } from 'react-router'

export default function Menu() {
  return (
    <MemoryRouter>
      <BarraDireccion />
      <nav className="menu-rutas">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/artistas">Artistas</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink to="/discos">Discos</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
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

function BarraDireccion() {
  const { pathname } = useLocation()
  return <div className="barra-direccion" aria-label="Barra de direcciones">localhost:5173{pathname}</div>
}
