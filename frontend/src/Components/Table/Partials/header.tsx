import React, { FC } from 'react'
import { Text, Box } from 'grommet'

// Styles
import { colors } from '../../../Styles'

// Consts
const columns = ['Server', 'Last Update', 'Status', 'Actions']
const sizes = ['40%', '25%', '20%', '15%']

// ==========================================================
const ReportsTableHeader: FC = () => (
  <Box direction="row" width="100%" pad={{ left: '6px' }} margin={{ bottom: '1rem' }}>
    {columns.map((columnName: string, index: number) => (
      <Box key={'Table-Header-' + index} width={sizes[index]} height="1.5rem" justify="center">
        <Text
          size="0.9rem"
          weight="bold"
          color={colors['medium']}
          textAlign={index >= 2 ? 'center' : 'start'}
          style={{
            paddingLeft: index === 0 ? 'calc(.5rem + 6px)' : 0
          }}
        >
          {columnName}
        </Text>
      </Box>
    ))}
  </Box>
)

export default ReportsTableHeader
