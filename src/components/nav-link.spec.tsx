import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('About').dataset.current).toEqual('true')
    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
  })
})

// o NavLink só pode ser usado dentro de um Router, porém Router é um componente onde o contexto dele é um Browser, e quando eu tô executando meus testes, eu não estou no contexto de um Browser, então usamos o MemoryRouter, onde a rota ativa é salva nele.
// wrapper é onde colocamos o contexto para que esse componente (NavLink) funcione
// wrapper é perfeito para testar componentes que dependem de provider
