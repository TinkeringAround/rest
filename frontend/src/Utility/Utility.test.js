import { unixTimeToString } from '.'

// ===============================================
test('convert timestamp in ms correctly', () => {
  // Arrange
  const timestamp = 1582714239548
  const result = '11:50     26. Feb 2020'

  // Assert
  expect(unixTimeToString(timestamp)).toBe(result)
})

test('return null on timestamp in seconds', () => {
  // Arrange
  const timestamp = 1582714181
  const result = null

  // Assert
  expect(unixTimeToString(timestamp)).toBe(result)
})
