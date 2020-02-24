import React, { FC, useContext } from 'react'
import { Box, Heading } from 'grommet'

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
      {servers.length > 0 && <TableHeader />}

      {/* Rows */}
      {servers.length > 0 &&
        servers.map((server: TServer, index: number) => (
          <TableRow
            key={'Server-Table-Row-' + index}
            server={server}
            deleteServer={(server: TServer) => deleteServer(server.id)}
          />
        ))}

      {/* No Servers  */}
      {servers.length === 0 && (
        <Box height="100%" width="100%" justify="center" align="center">
          <Heading color="medium" size="1.75rem" textAlign="center">
            No Servers configured. Add a Server.
          </Heading>
        </Box>
      )}
    </Box>
  )
}

export default ReportsTable
