import React, { FC } from 'react'

// Styles
import { colors, TColors } from '../Styles'

// ==========================================================
interface Props {
  width?: string
  height?: string
  padding?: string
  margin?: string

  background?: TColors
  color?: TColors
  fontSize?: string

  justify?: 'center' | 'start'

  onClick?: () => void
}

// ==========================================================
const Button: FC<Props> = ({
  children,
  width = 'auto',
  height = 'auto',
  padding = '.5rem',
  margin = '0',

  background = 'blue',
  color = 'white',
  fontSize = '.75rem',

  justify = 'center',

  onClick = null
}) => (
  <button
    style={{
      width: width,
      height: height,
      margin: margin,
      padding: padding,

      fontSize: fontSize,
      fontWeight: 'bold',
      color: colors[color],

      background: colors[background],
      borderRadius: 5,
      border: 'none',

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: justify,

      outline: 'none',
      transition: 'all 0.25s ease',
      cursor: 'pointer'
    }}
    onClick={() => {
      if (onClick) onClick()
    }}
  >
    {children}
  </button>
)

export default Button
