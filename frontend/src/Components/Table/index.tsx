import React, { FC, useContext } from 'react'
import { Box } from 'grommet'

// Types
import { TServer } from '../../Types'

// Context
import { AppContext } from '../../Contexts'

// Partials
import TableHeader from './Partials/header'
import TableRow from './Partials/row'

// ==========================================================
const ReportsTable: FC = () => {
  const { servers, deleteServer } = useContext(AppContext)

  return (
    <Box width="90%" margin="2rem 0 0" pad="0 2rem">
      {/* Header */}
      <TableHeader />

      {/* Rows */}
      {servers.length > 0 &&
        servers.map((server: TServer, index: number) => (
          <TableRow
            key={'Server-Table-Row-' + index}
            server={server}
            deleteServer={(server: TServer) => deleteServer(server.id)}
          />
        ))}
    </Box>
  )
}

export default ReportsTable
