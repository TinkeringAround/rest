import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// Components
import AddServerRow from '.'

// Contexts
import { AppContext } from '../../Contexts'

// Const
const addServerMock = jest.fn()
const appContext = {
  addServer: addServerMock
}

afterEach(cleanup)

// ===================================================================
test('AddServerRow is renderer with input and button present', () => {
  const { container, getByRole } = render(
    <AppContext.Provider value={appContext}>
      <AddServerRow />
    </AppContext.Provider>
  )

  expect(container).toBeVisible()

  const input = getByRole('textbox')
  expect(input).toBeInTheDocument()

  const buttons = Array.from(document.getElementsByTagName('svg'))
  expect(buttons.length).toBe(1)
})

test('Typing in Input, Pressing Button', () => {
  const { getByRole } = render(
    <AppContext.Provider value={appContext}>
      <AddServerRow />
    </AppContext.Provider>
  )

  const url = 'tinkeringaround.de'

  const input = getByRole('textbox')
  input.setAttribute('value', url)
  expect(input).toHaveAttribute('value', url)

  const buttons = Array.from(document.getElementsByTagName('svg'))
  fireEvent.click(buttons[0].parentElement)
})
