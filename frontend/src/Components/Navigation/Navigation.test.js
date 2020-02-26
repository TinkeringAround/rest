import React from 'react'
import { render, cleanup, fireEvent, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// Contexts
import { AppContext } from '../../Contexts'

// Components
import Navigation from '.'

afterEach(cleanup)

// ===================================================================
test('Open Settings on Click on Settings Button', () => {
  // Arrange
  const { container, getByRole, getByTitle } = render(<Navigation />)

  // Act
  fireEvent.click(getByTitle('Settings'))

  // Assert
  expect(container).toBeInTheDocument()
  expect(container).toBeVisible()
  expect(getByRole('combobox')).toBeInTheDocument()
})

test('Call Reload on Click on Reload Button', () => {
  // Arrange
  const mock = jest.fn()
  const { getByTitle } = render(
    <AppContext.Provider
      value={{
        reload: mock
      }}
    >
      <Navigation />
    </AppContext.Provider>
  )

  // Act
  fireEvent.click(getByTitle('Reload'))

  // Assert
  expect(mock).toHaveBeenCalledTimes(1)
})

test('Close Settings on Click on Overlay Background', async () => {
  // Arrange
  const { getByTitle, getByTestId } = render(<Navigation />)

  // Act & Assert
  fireEvent.click(getByTitle('Settings'))
  await wait(() =>
    expect(getByTestId('overlay-background')).toHaveAttribute('style', 'opacity: 1;')
  )

  // Act & Assert
  fireEvent.click(getByTestId('overlay-background'))
  await wait(() => expect(getByTestId('overlay-background').style['opacity'] < 0.5).toBeTruthy())
})

test('Change Settings and Set new Refresh Interval', async () => {
  // Arrange
  const selection = 'Every 15 Minutes'
  const mock = jest.fn()
  const { getByTitle, getByTestId, getByRole } = render(
    <AppContext.Provider
      value={{
        setRefreshInterval: mock
      }}
    >
      <Navigation />
    </AppContext.Provider>
  )

  // Act & Assert
  fireEvent.click(getByTitle('Settings'))
  await wait(() =>
    expect(getByTestId('overlay-background')).toHaveAttribute('style', 'opacity: 1;')
  )

  // Act & Assert
  fireEvent.change(getByRole('combobox'), { target: { value: selection } })
  expect(getByRole('combobox').value).toBe(selection)
  expect(mock).toHaveBeenCalledTimes(1)
})
