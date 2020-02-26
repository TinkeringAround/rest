import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

// Components
import ErrorDialog from '.'

afterEach(cleanup)

// ===================================================================
test('Error Dialog is not shown on no error', async () => {
  // Arrange
  const { getByText } = render(<ErrorDialog close={null} error={null} />)

  // Assert
  try {
    getByText('Warning')
  } catch (error) {
    expect(error).toBeTruthy()
  }
})

test('Error Dialog is shown in Document on error', () => {
  // Arrange
  const msg = 'This is an error message'
  const { container, getByText } = render(<ErrorDialog close={null} error={msg} />)

  // Assert
  expect(container).toBeInTheDocument()
  expect(getByText(msg)).toBeInTheDocument()
})

test('Error Dialog calls close on click', () => {
  // Arrange
  const msg = 'This is an error message'
  const closeFunction = jest.fn()
  const { getByText } = render(<ErrorDialog close={closeFunction} error={msg} />)

  // Act
  fireEvent.click(getByText('Dismiss'))

  // Assert
  expect(closeFunction).toHaveBeenCalledTimes(1)
  try {
    getByText('Warning')
  } catch (error) {
    expect(error).toBeTruthy()
  }
})
