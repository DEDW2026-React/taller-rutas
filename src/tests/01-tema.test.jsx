import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tema from '@taller/01-tema'

describe('01 Tema oscuro', () => {
  test('parte en tema claro', () => {
    render(<Tema />)
    expect(screen.getByRole('article')).toHaveTextContent('Tema: claro')
  })

  test('el botón de la barra cambia el tema de la tarjeta, ida y vuelta', async () => {
    render(<Tema />)
    await userEvent.click(screen.getByRole('button', { name: 'Cambiar tema' }))
    expect(screen.getByRole('article'), 'La tarjeta no se enteró. ¿Usan el mismo contexto el botón y la tarjeta?').toHaveTextContent('Tema: oscuro')
    await userEvent.click(screen.getByRole('button', { name: 'Cambiar tema' }))
    expect(screen.getByRole('article')).toHaveTextContent('Tema: claro')
  })
})
