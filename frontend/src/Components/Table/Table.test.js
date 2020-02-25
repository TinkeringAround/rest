import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// Contexts
import { AppContext } from '../../Contexts'

// Components
import Table from '.'

afterEach(cleanup)

// ===================================================================
test('Table renders Error Message on empty Servers Array', () => {
  const { getByText } = render(
    <AppContext.Provider
      value={{
        servers: []
      }}
    >
      <Table />
    </AppContext.Provider>
  )

  expect(getByText('No Servers', { exact: false })).toBeInTheDocument()
})

test('Table renders Servers and Header', () => {
  const { getByText } = render(
    <AppContext.Provider
      value={{
        servers: [{ id: '1', url: 'tinkeringaround.de', status: true, lastUpdated: 123456789 }]
      }}
    >
      <Table />
    </AppContext.Provider>
  )

  expect(getByText('Actions')).toBeInTheDocument()
  expect(getByText('tinkeringaround.de')).toBeInTheDocument()
})
