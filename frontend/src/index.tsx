import React, { FC, useState, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Grommet, Box, Heading } from 'grommet'
import { CircleSpinner } from 'react-spinners-kit'
import axios from 'axios'

// Driver
import * as serviceWorker from './serviceWorker'

// Types
import { TServer } from './Types'

// Styles
import './Styles/global.css'
import { theme, colors } from './Styles'

// Contexts
import { AppContext } from './Contexts'

// Components
import Layout from './Components/Layout'
import Navigation from './Components/Navigation'
import Table from './Components/Table'

// ===============================================
const api = axios.create({
  baseURL: 'http://localhost:8080/servers',
  timeout: 10000
})

// ===============================================
const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [servers, setServers] = useState<Array<TServer>>([])
  const [refreshInterval, setRefreshInterval] = useState<number>(60000)
  const [interval, setIvl] = useState<number | null>(null)

  // ===============================================
  const reload = useCallback((silent: boolean = true) => {
    if (!silent) setLoading(true)

    api
      .get('')
      .then(response => setServers([])) //setServers(response.data))
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

  return (
    <Grommet theme={theme} full>
      <AppContext.Provider
        value={{
          setRefreshInterval: setRefreshInterval,
          reload: reload,
          isLoading: loading,
          servers: servers
        }}
      >
        <Layout>
          <Box height="100%" width="100%" justify="end">
            {/* Navigation + Header */}
            <Navigation />

            {/* Content */}
            <Box width="100%" height="90%">
              {loading && (
                <Box height="100%" width="100%" justify="center" align="center">
                  <CircleSpinner size={100} color={colors['yellow']} />
                </Box>
              )}
              {!loading && servers.length > 0 && <Table />}
              {!loading && servers.length === 0 && (
                <Box height="100%" width="100%" justify="center" align="center">
                  <Heading color="medium" size="1.75rem" textAlign="center">
                    <small>Could not fetch any Server.</small>
                    <br />
                    Please contact your System Administrator for further Information.
                  </Heading>
                </Box>
              )}
            </Box>
          </Box>
        </Layout>
      </AppContext.Provider>
    </Grommet>
  )
}

// ===============================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
