import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

// Components
import ErrorDialog from '.'

// ===================================================================
test('Error Dialog is shown in Document on error', async () => {
  const msg = 'This is an error message'
  const { container } = render(<ErrorDialog close={null} error={msg} />)

  expect(container).toBeInTheDocument()
  expect(screen.findByText(msg)).toBeTruthy()
})

test('Error Dialog is not shown on no error', async () => {
  const { container } = render(<ErrorDialog close={null} error={null} />)
  expect(container).toContainHTML('')
})
