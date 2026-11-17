import { Link, MemoryRouter, Route, Routes, useLocation, useParams } from 'react-router'

export const titulo = 'Página de un artista'
export const enunciado =
  'Al hacer clic en un artista, muestra su página en /artistas/:id. Si el id no existe, muestra "No existe ese artista".'

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
        {/* 🎃 1. Agrega la ruta con el parámetro:
                  <Route path="/artistas/:id" element={<Detalle />} /> */}
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
  // 🎃 2. Lee el id de la URL: const { id } = useParams()
  // 🎃 3. Busca el artista en ARTISTAS con find.
  //       Ojo: el id de la URL es un texto ("2") y en ARTISTAS es un número (2).
  // 🎃 4. Si no lo encuentras, devuelve <h3>No existe ese artista</h3>
  //       Si lo encuentras, muestra su nombre en un <h3> y su género en un <p>

  return (
    <>
      <h3>Nombre del artista</h3>
      <Link to="/artistas">← Volver</Link>
    </>
  )
}

// 🎁 Muestra la URL actual, como la barra del navegador
function BarraDireccion() {
  const { pathname } = useLocation()
  return <div className="barra-direccion" aria-label="Barra de direcciones">localhost:5173{pathname}</div>
}
