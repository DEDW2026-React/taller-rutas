import { Link, MemoryRouter, Route, Routes, useLocation, useParams } from 'react-router'

const ARTISTAS = [
  { id: 1, name: 'Queen', genre: 'Rock' },
  { id: 2, name: 'Metallica', genre: 'Metal' },
  { id: 3, name: 'Adele', genre: 'Pop' },
]

export default function Artista() {
  return (
    <MemoryRouter initialEntries={['/artistas']}>
      <BarraDireccion />
      <Routes>
        <Route path="/artistas" element={<Lista />} />
        <Route path="/artistas/:id" element={<Detalle />} />
      </Routes>
    </MemoryRouter>
  )
}

function Lista() {
  return (
    <ul>
      {ARTISTAS.map(artist => (
        <li key={artist.id}>
          <Link to={`/artistas/${artist.id}`}>{artist.name}</Link>
        </li>
      ))}
      <li>
        <Link to="/artistas/99">Un artista que no existe</Link>
      </li>
    </ul>
  )
}

function Detalle() {
  const { id } = useParams()
  const artist = ARTISTAS.find(a => a.id === Number(id))

  if (!artist) return <h3>No existe ese artista</h3>

  return (
    <>
      <h3>{artist.name}</h3>
      <p>{artist.genre}</p>
      <Link to="/artistas">← Volver</Link>
    </>
  )
}

function BarraDireccion() {
  const { pathname } = useLocation()
  return <div className="barra-direccion" aria-label="Barra de direcciones">localhost:5173{pathname}</div>
}
