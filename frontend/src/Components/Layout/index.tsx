import React, { FC, useContext } from 'react'
import { Box, Heading } from 'grommet'

// Contexts
import { AppContext } from '../../Contexts'

// Components
import Navigation from '../Navigation'

// ===============================================
const Layout: FC = ({ children }) => {
  const { isLoading, error, servers } = useContext(AppContext)

  return (
    <Box
      background="white"
      width={window.innerWidth + 'px'}
      height={window.innerHeight + 'px'}
      margin="0"
      style={{ position: 'relative', cursor: 'default' }}
      direction="column"
    >
      {/* Header + Navigation */}
      <Box
        height="5rem"
        width="100%"
        background={isLoading ? 'yellow' : error ? 'red' : servers.length === 0 ? 'blue' : 'green'}
        justify="center"
        style={{ position: 'relative' }}
      >
        <Heading size="2rem" color="white" margin={{ left: '1rem' }} style={{ fontWeight: 'bold' }}>
          Monitoring-App
        </Heading>
        <Navigation />
      </Box>

      {/* Content */}
      <Box
        width="100%"
        height="calc(100% - 5rem)"
        align="center"
        style={{ overflowY: 'auto', overflowX: 'hidden' }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
