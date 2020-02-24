import React, { FC, useState, useCallback } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { CircleSpinner } from 'react-spinners-kit'

// Styles
import { colors } from '../Styles'

// Components
import Navigation from '../Components/Navigation'

// ===============================================
const Dashboard: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  // ===============================================
  const reload = useCallback((silent: boolean = true) => {
    if (!silent) setLoading(true)
  }, [])

  // ===============================================
  return (
    <ResponsiveContext.Consumer>
      {size => {
        const isMobile = size.includes('small')

        return (
          <Box height="100%" width="100%" justify="end">
            <Navigation />
            <Box
              width="100%"
              height="90%"
              direction="row"
              wrap={false}
              style={{ overflowX: 'auto' }}
            >
              {loading && (
                <Box height="100%" width="100%" justify="center" align="center">
                  <CircleSpinner size={isMobile ? 75 : 100} color={colors['yellow']} />
                </Box>
              )}
            </Box>
          </Box>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Dashboard
