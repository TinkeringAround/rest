import React, { FC, CSSProperties } from 'react'
import styled from 'styled-components'
import { Box, Text } from 'grommet'

// Styles
import { colors } from '../Styles'

// Atoms
const SSelect = styled.select<{ disabled: boolean }>`
  padding: 0.5rem;

  background: ${({ disabled }) => (disabled ? colors['light'] : colors['yellow'])};
  border: none;
  border-radius: 5px;

  appearance: none;
  outline: none;

  font-family: inherit;
  font-size: 1.25rem;
  font-weight: bold;
  text-align-last: center;
  color: ${({ disabled }) => (disabled ? colors['dark'] : colors['white'])};

  ::-ms-expand {
    display: none;
  }
`

// ==========================================================
interface Props {
  options: Array<string>
  value: string
  select: (selection: string) => void
  label?: string

  width?: string
  margin?: string
  disabled?: boolean
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
  disabled = false,
  style = undefined
}) => (
  <Box margin={margin} width={width} style={style}>
    {label && (
      <Text size="1rem" weight="bold" color={colors['medium']} margin={{ bottom: '0.25rem' }}>
        {label}
      </Text>
    )}
    <SSelect
      id={'Selection-' + value}
      value={value}
      onChange={(event: any) => select(event.target.value)}
      disabled={disabled}
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
