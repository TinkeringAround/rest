import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// Components
import Layout from '.'

// Contexts
import { AppContext } from '../../Contexts'

afterEach(cleanup)

// ===================================================================
test('Layout is rendered with green Navigation = Positive', () => {
  const { container, getByText } = render(
    <AppContext.Provider
      value={{
        isLoading: false,
        error: null,
        servers: ['1', '2']
      }}
    >
      <Layout />
    </AppContext.Provider>
  )

  expect(container).toBeVisible()

  const appTitle = getByText('Monitoring-App')
  expect(appTitle).toBeInTheDocument()
  expect(appTitle.parentElement).toHaveStyle('background: green')
})

test('Layout is rendered with red Navigation = Error', () => {
  const { container, getByText } = render(
    <AppContext.Provider
      value={{
        isLoading: false,
        error: 'This is an Error',
        servers: []
      }}
    >
      <Layout />
    </AppContext.Provider>
  )

  const appTitle = getByText('Monitoring-App')
  expect(appTitle.parentElement).toHaveStyle('background: red')
})

test('Layout is rendered with yellow Navigation = Loading', () => {
  const { container, getByText } = render(
    <AppContext.Provider
      value={{
        isLoading: true,
        error: null,
        servers: []
      }}
    >
      <Layout />
    </AppContext.Provider>
  )

  const appTitle = getByText('Monitoring-App')
  expect(appTitle.parentElement).toHaveStyle('background: yellow')
})
