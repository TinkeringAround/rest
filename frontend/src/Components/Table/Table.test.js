import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// Contexts
import { AppContext } from '../../Contexts'

// Components
import Table from '.'

afterEach(cleanup)

// ===================================================================
test('Table renders Error Message on empty Servers Array', () => {
  // Arrange
  const { getByText } = render(
    <AppContext.Provider
      value={{
        servers: []
      }}
    >
      <Table />
    </AppContext.Provider>
  )

  // Assert
  expect(getByText('No Servers', { exact: false })).toBeInTheDocument()
})

test('Table renders Servers and Header', () => {
  // Arrange
  const { getByText } = render(
    <AppContext.Provider
      value={{
        servers: [{ id: '1', url: 'tinkeringaround.de', status: true, lastUpdated: 123456789 }]
      }}
    >
      <Table />
    </AppContext.Provider>
  )

  // Assert
  expect(getByText('Actions')).toBeInTheDocument()
  expect(getByText('tinkeringaround.de')).toBeInTheDocument()
})

test('Call deleteServer on Click on Delete Button of one Server Row', () => {
  // Arrange
  const mock = jest.fn()
  const { getByTitle } = render(
    <AppContext.Provider
      value={{
        deleteServer: mock,
        servers: [{ id: '1', url: 'tinkeringaround.de', status: true, lastUpdated: 123456789 }]
      }}
    >
      <Table />
    </AppContext.Provider>
  )

  // Act
  fireEvent.click(getByTitle('Trash'))

  // Assert
  expect(mock).toHaveBeenCalledTimes(1)
})
