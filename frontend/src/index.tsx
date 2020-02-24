import React, { FC, useState, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Grommet, Box } from 'grommet'
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

// Components
import Layout from './Components/Layout'
import AddServerRow from './Components/AddServerRow'
import Table from './Components/Table'
import ErrorDialog from './Components/ErrorDialog'

// ===============================================
const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [servers, setServers] = useState<Array<TServer>>([])
  const [refreshInterval, setRefreshInterval] = useState<number>(60000)
  const [interval, setIvl] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

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
          {!loading && <AddServerRow addServer={addServer} />}

          {/* Table */}
          {!loading && <Table />}

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
