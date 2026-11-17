import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Menu from '@taller/02-menu'

const link = nombre => screen.getByRole('link', { name: nombre })
const barra = () => screen.getByLabelText('Barra de direcciones')

describe('02 Menú con rutas', () => {
  test('parte en Inicio', () => {
    render(<Menu />)
    expect(screen.getByRole('heading')).toHaveTextContent('Inicio')
  })

  test('cada link muestra su página y cambia la URL', async () => {
    render(<Menu />)
    await userEvent.click(link('Artistas'))
    expect(screen.getByRole('heading')).toHaveTextContent('Artistas')
    expect(barra()).toHaveTextContent('/artistas')

    await userEvent.click(link('Contacto'))
    expect(screen.getByRole('heading')).toHaveTextContent('Contacto')
  })

  test('el link de la página actual tiene la clase active', async () => {
    render(<Menu />)
    await userEvent.click(link('Artistas'))
    expect(link('Artistas'), '¿Usaste NavLink?').toHaveClass('active')
    expect(link('Inicio')).not.toHaveClass('active')
  })

  test('una URL sin página muestra "Página no encontrada"', async () => {
    render(<Menu />)
    await userEvent.click(link('Discos'))
    expect(screen.getByRole('heading'), 'Falta la ruta con path="*"').toHaveTextContent('Página no encontrada')
  })
})
