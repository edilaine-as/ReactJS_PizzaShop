import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge') // precisa do data-testid

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text when order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em entrega')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })

  it('should display the right text when order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
})

// describe categoriza testes
// it usamos quando queremos manter o nome dos nosso testes um pouco mais semantico e se ele for unido com shold, significa "isso deve"

// it('should display the right text based on order status', () => {})

// o método render nos permite criar um componente em tela, exibir um compnente em tela.

// a função debug abaixo é otima para visualizarmos o que não está passando, porque ela mostra exatamente o que está sendo exibido na interface

// const wrapper = render(<OrderStatus status="pending" />)

// wrapper.debug()

// find retorna uma promise, ele é usado quando o elemento demora para aparecer em tela
// o get vai procurar pelo elemento, se não existir, dá erro
// o query procura pelo elemento, se não existir, ele retorna nulo

// o metodo render não apaga o conteudo da dom anterior, ele faz um appending na dom, então se eu chamo o metodo render 2x na mesma função, é como se ele não apagasse o conteúdo da primeira dom e adicionasse mais conteúdo no final, e isso pode ocasionar erros, o que a gente pode fazer é separar em dois testes
