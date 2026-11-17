import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Artista from '@taller/03-artista'

describe('03 Página de un artista', () => {
  test('parte en la lista de artistas', () => {
    render(<Artista />)
    expect(screen.getByRole('link', { name: 'Metallica' })).toBeInTheDocument()
  })

  test('el link de un artista muestra su página', async () => {
    render(<Artista />)
    await userEvent.click(screen.getByRole('link', { name: 'Metallica' }))
    expect(screen.getByLabelText('Barra de direcciones')).toHaveTextContent('/artistas/2')
    expect(
      screen.getByRole('heading'),
      'No apareció Metallica. Si dice que no existe, revisa: el id de la URL es un texto y el de ARTISTAS es un número',
    ).toHaveTextContent('Metallica')
    expect(screen.getByText('Metal')).toBeInTheDocument()
  })

  test('un id que no existe muestra "No existe ese artista"', async () => {
    render(<Artista />)
    await userEvent.click(screen.getByRole('link', { name: 'Un artista que no existe' }))
    expect(screen.getByRole('heading')).toHaveTextContent('No existe ese artista')
  })
})
