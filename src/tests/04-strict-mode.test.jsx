import { act, render, screen } from '@testing-library/react'
import ConStrictMode from '@taller/04-strict-mode'

describe('04 El cronómetro va al doble', () => {
  beforeEach(() => { vi.useFakeTimers() })
  afterEach(() => { vi.useRealTimers() })

  test('con StrictMode, en 3 segundos marca 3', () => {
    render(<ConStrictMode />)
    act(() => { vi.advanceTimersByTime(3000) })
    expect(screen.getByText(/⏱️/), 'Marca más de 3: quedaron dos intervalos. Falta la limpieza del efecto').toHaveTextContent('3 s')
  })

  test('al desaparecer, no deja intervalos activos', () => {
    const { unmount } = render(<ConStrictMode />)
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
