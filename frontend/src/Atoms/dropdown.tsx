import React, { FC, CSSProperties } from 'react'
import { Box, Text } from 'grommet'

// Styles
import { colors } from '../Styles'

// Atoms
import { SSelect } from './styled'

// ==========================================================
interface Props {
  options: Array<string>
  value: string
  select: (selection: string) => void
  label?: string

  width?: string
  margin?: string
  style?: CSSProperties
}

// ==========================================================
const Dropdown: FC<Props> = ({
  options,
  value,
  select,
  label = null,
  width = '25%',
  margin = '0',
  style = undefined
}) => (
  <Box margin={margin} width={width} style={style}>
    {label && (
      <Text size="1.5rem" weight="bold" color={colors['medium']} margin={{ bottom: '0.75rem' }}>
        {label}
      </Text>
    )}
    <SSelect
      id={'Selection-' + value}
      value={value}
      onChange={(event: any) => select(event.target.value)}
    >
      {options.map((option: string, index: number) => (
        <option key={'Option-' + index} value={option}>
          {option}
        </option>
      ))}
    </SSelect>
  </Box>
)

export default Dropdown
