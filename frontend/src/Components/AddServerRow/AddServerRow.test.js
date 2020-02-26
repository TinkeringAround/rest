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
test('AddServerRow is renderer with input and button', () => {
  // Arrange
  const { container, getByRole, getByTitle } = render(
    <AppContext.Provider value={appContext}>
      <AddServerRow addServer={addServerMock} />
    </AppContext.Provider>
  )

  // Assert
  expect(container).toBeVisible()
  expect(getByRole('textbox')).toBeInTheDocument()
  expect(getByTitle('Plus')).toBeInTheDocument()
})

test('Typing in Input, Pressing Button', () => {
  // Arrange
  const { getByRole, getByTitle } = render(
    <AppContext.Provider value={appContext}>
      <AddServerRow addServer={addServerMock} />
    </AppContext.Provider>
  )

  const url = 'tinkeringaround.de'
  const emptyURL = ''

  const input = getByRole('textbox')

  // Act & Assert
  fireEvent.input(input, { target: { value: emptyURL } })
  expect(input).toHaveAttribute('value', emptyURL)
  expect(addServerMock).not.toHaveBeenCalled()

  fireEvent.input(input, { target: { value: url } })
  expect(input).toHaveAttribute('value', url)
  fireEvent.click(getByTitle('Plus'))
  expect(addServerMock).toHaveBeenCalledTimes(1)
})
