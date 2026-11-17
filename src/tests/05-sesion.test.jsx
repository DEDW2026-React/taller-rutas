import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Sesion from '@taller/05-sesion'

const barra = () => screen.getByLabelText('Barra de direcciones')

async function entrar(nombre) {
  await userEvent.click(screen.getByRole('link', { name: 'Mi perfil' }))
  await userEvent.type(screen.getByRole('textbox'), nombre)
  await userEvent.click(screen.getByRole('button', { name: 'Entrar' }))
}

describe('05 Desafío: perfil con sesión', () => {
  test('2. parte en Inicio', () => {
    render(<Sesion />)
    expect(screen.getByRole('heading', { name: 'Inicio' })).toBeInTheDocument()
  })

  test('3. sin sesión, "Mi perfil" lleva a /login', async () => {
    render(<Sesion />)
    await userEvent.click(screen.getByRole('link', { name: 'Mi perfil' }))
    expect(barra()).toHaveTextContent('/login')
    expect(screen.getByRole('heading', { name: 'Iniciar sesión' })).toBeInTheDocument()
  })

  test('4 y 5. al entrar, vuelve a /perfil y saluda', async () => {
    render(<Sesion />)
    await entrar('Ana')
    expect(barra()).toHaveTextContent('/perfil')
    expect(screen.getByText('Hola, Ana')).toBeInTheDocument()
  })

  test('5. "Salir" vuelve a pedir sesión', async () => {
    render(<Sesion />)
    await entrar('Ana')
    await userEvent.click(screen.getByRole('button', { name: 'Salir' }))
    expect(screen.getByRole('heading', { name: 'Iniciar sesión' })).toBeInTheDocument()
    expect(screen.queryByText('Hola, Ana')).not.toBeInTheDocument()
  })

  test('6. la sesión sobrevive al cambiar de página', async () => {
    render(<Sesion />)
    await entrar('Ana')
    await userEvent.click(screen.getByRole('link', { name: 'Inicio' }))
    await userEvent.click(screen.getByRole('link', { name: 'Mi perfil' }))
    expect(screen.getByText('Hola, Ana')).toBeInTheDocument()
  })
})
