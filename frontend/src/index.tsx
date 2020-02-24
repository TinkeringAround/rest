import React, { FC, useState, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Grommet, Box, Heading, Keyboard } from 'grommet'
import { CircleSpinner } from 'react-spinners-kit'

// Driver
import * as serviceWorker from './serviceWorker'

// Types
import { TServer } from './Types'

// Styles
import './Styles/global.css'
import { theme, colors } from './Styles'

// Contexts
import { AppContext } from './Contexts'

// Libraries
import { getServers, addNewServer, deleteExistingServer } from './Library/api'

// Atoms
import { SInput } from './Atoms/styled'
import IconButton from './Atoms/iconButton'

// Components
import Layout from './Components/Layout'
import Table from './Components/Table'
import ErrorDialog from './Components/ErrorDialog'

// ===============================================
const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [servers, setServers] = useState<Array<TServer>>([])
  const [refreshInterval, setRefreshInterval] = useState<number>(60000)
  const [interval, setIvl] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [newUrl, setNewUrl] = useState<string>('')

  // ===============================================
  const reload = useCallback((silent: boolean = true) => {
    if (!silent) setLoading(true)

    getServers()
      .then(response => setServers(response.data))
      .catch(error => setError(error))
      .finally(() => {
        if (!silent) setLoading(false)
      })
  }, [])

  const addServer = useCallback((url: string) => {
    addNewServer(url)
      .then(() => reload(false))
      .catch(error => setError(error))
  }, [])

  const deleteServer = useCallback((id: string) => {
    deleteExistingServer(id)
      .then(() => reload())
      .catch(error => setError(error))
  }, [])

  const newServerHandler = useCallback(() => {
    if (newUrl !== '') {
      addServer(newUrl)
      setNewUrl('')
    }
  }, [newUrl, setNewUrl, addServer])

  useEffect(() => {
    if (servers.length === 0) reload(false)
  }, [])

  useEffect(() => {
    if (interval) clearInterval(interval)
    setIvl(setInterval(() => reload(true), refreshInterval))
  }, [refreshInterval])

  // ===============================================
  return (
    <Grommet theme={theme} full>
      <AppContext.Provider
        value={{
          setRefreshInterval: setRefreshInterval,
          servers: servers,
          addServer: addServer,
          deleteServer: deleteServer,
          reload: reload,
          isLoading: loading,
          error: error
        }}
      >
        <Layout>
          {/* Loading */}
          {loading && (
            <Box height="100%" width="100%" justify="center" align="center">
              <CircleSpinner size={100} color={colors['yellow']} />
            </Box>
          )}

          {/* Add Server Row */}
          {!loading && (
            <Keyboard onEnter={newServerHandler}>
              <Box
                width="90%"
                background="light"
                direction="row"
                margin="2rem 0 3rem"
                pad="0.5rem 1rem"
                align="center"
                style={{ borderRadius: 5 }}
              >
                <IconButton
                  iconType="plus"
                  wrapper="2.5rem"
                  onClick={newServerHandler}
                  margin="0 1rem 0 0"
                />
                <SInput
                  value={newUrl}
                  onChange={event => setNewUrl(event.target.value)}
                  placeholder="Enter New URL"
                />
              </Box>
            </Keyboard>
          )}

          {/* Table */}
          {!loading && servers.length > 0 && <Table />}

          {/* No Servers after Loading */}
          {!loading && !error && servers.length === 0 && (
            <Box height="100%" width="100%" justify="center" align="center">
              <Heading color="medium" size="1.75rem" textAlign="center">
                No Servers configured. Add a Server.
              </Heading>
            </Box>
          )}

          {/* Error */}
          <ErrorDialog error={error} close={() => setError(null)} />
        </Layout>
      </AppContext.Provider>
    </Grommet>
  )
}

// ===============================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
