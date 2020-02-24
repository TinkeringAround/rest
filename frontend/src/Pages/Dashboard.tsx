import React, { FC, useState, useCallback, useEffect } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { CircleSpinner } from 'react-spinners-kit'
import axios from 'axios'

// Types
import { TServer } from '../Types/'

// Styles
import { colors } from '../Styles'

// Context
import { AppContext } from '../Contexts'

// Components
import Navigation from '../Components/Navigation'

// ===============================================
const api = axios.create({
  baseURL: 'http://localhost:8080/servers',
  timeout: 10000
})

// ===============================================
const Dashboard: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [servers, setServers] = useState<Array<TServer>>([])
  const [refreshInterval, setRefreshInterval] = useState<number>(60000)
  const [interval, setIvl] = useState<number | null>(null)

  // ===============================================
  const reload = useCallback((silent: boolean = true) => {
    if (!silent) setLoading(true)

    api
      .get('')
      .then(response => setServers(response.data))
      .catch(error => console.log(error))
      .finally(() => {
        if (!silent) setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (servers.length === 0) reload(false)
  }, [])

  useEffect(() => {
    if (interval) clearInterval(interval)
    setIvl(setInterval(() => reload(true), refreshInterval))
  }, [refreshInterval])

  // ===============================================
  return (
    <ResponsiveContext.Consumer>
      {size => {
        const isMobile = size.includes('small')

        return (
          <AppContext.Provider
            value={{
              setRefreshInterval: setRefreshInterval,
              reload: reload
            }}
          >
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
          </AppContext.Provider>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Dashboard
