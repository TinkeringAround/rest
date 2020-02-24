import React, { FC, useContext } from 'react'
import { Box } from 'grommet'

// Contexts
import { AppContext } from '../../Contexts'

// ===============================================
const Layout: FC = ({ children }) => {
  const { isLoading, servers } = useContext(AppContext)

  return (
    <Box
      background="white"
      width={window.innerWidth + 'px'}
      height={window.innerHeight + 'px'}
      margin="0"
      style={{ position: 'relative' }}
    >
      <Box
        height="5rem"
        width="100%"
        background={isLoading ? 'yellow' : servers.length === 0 ? 'red' : 'green'}
        style={{ position: 'fixed', zIndex: 0, top: 0 }}
      />

      {children}
    </Box>
  )
}

export default Layout
