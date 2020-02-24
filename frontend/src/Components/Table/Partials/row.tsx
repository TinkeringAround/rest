import React, { FC } from 'react'
import styled from 'styled-components'
import { Text, Box } from 'grommet'

// Types
import { TServer } from '../../../Types'

// Styles
import { colors } from '../../../Styles'

// Utility
import { unixTimeToSting } from '../../../Utility'

// Atoms
import IconButton from '../../../Atoms/iconButton'

// Atoms
const BORDER_RADIUS = 5
const Row = styled(Box)`
  border-radius: ${BORDER_RADIUS}px;

  cursor: default;
  transition: all 0.25s ease;

  :hover {
    transform: translateX(-5px) !important;
  }
`

// Const
const sizes = ['40%', '25%', '20%', '15%']

// ==========================================================
interface Props {
  server: TServer
  deleteServer: (server: TServer) => void
}

// ==========================================================
const ReportsTableRow: FC<Props> = ({ server, deleteServer }) => (
  <Row height="60px" margin="0 0 1rem" background={colors['light']} direction="row" align="center">
    {/* URL */}
    <Box
      width={sizes[0]}
      pad={{ left: '1rem' }}
      style={{ borderTopLeftRadius: BORDER_RADIUS, borderBottomLeftRadius: BORDER_RADIUS }}
    >
      <Text size="0.85rem" weight="bold" color={colors['dark']} truncate>
        {server.url}
      </Text>
    </Box>

    {/* Last Updated */}
    <Box width={sizes[1]}>
      <Text size="0.7rem" weight="bold" color={colors['dark']}>
        {unixTimeToSting(server.lastUpdated)}
      </Text>
    </Box>

    {/* Status */}
    <Box width={sizes[2]} align="center" justify="center">
      <Box
        width="20px"
        height="20px"
        background={server.status ? 'green' : 'red'}
        style={{ borderRadius: '10px' }}
      />
    </Box>

    {/* Actions */}
    <Box
      width={sizes[3]}
      justify="center"
      align="center"
      style={{ borderTopRightRadius: BORDER_RADIUS, borderBottomRightRadius: BORDER_RADIUS }}
    >
      <IconButton
        iconType="trash"
        onClick={() => deleteServer(server)}
        wrapper="2.5rem"
        icon="40%"
      />
    </Box>
  </Row>
)

export default ReportsTableRow
