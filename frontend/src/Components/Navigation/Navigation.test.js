import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// Components
import Navigation from '.'

afterEach(cleanup)

// ===================================================================
test('Open Settings on Click', () => {
  const { container, getByRole } = render(<Navigation />)

  expect(container).toBeInTheDocument()
  expect(container).toBeVisible()

  const buttons = document.getElementsByTagName('svg')
  fireEvent.click(buttons[1])

  expect(getByRole('combobox')).toBeInTheDocument()
})

test('Close Settings on Click', () => {
  const { getByText } = render(<Navigation />)

  const buttons = document.getElementsByTagName('svg')
  fireEvent.click(buttons[1])

  const overlayBG = document.getElementById('overlay-background')
  expect(overlayBG).toBeInTheDocument()
  fireEvent.click(overlayBG)

  expect(getByText('Refresh Interval')).toBeInTheDocument()
})
