// IMPORTS
import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { Grommet } from 'grommet'

// Driver
import * as serviceWorker from './serviceWorker'

// Styles
import './Styles/global.css'
import { theme } from './Styles'

// Pages
import Dashboard from './Pages/Dashboard'

// Components
import Layout from './Components/Layout'

// ===============================================
const App: FC = () => (
  <Grommet theme={theme} full>
    <Layout>
      <Dashboard />
    </Layout>
  </Grommet>
)

// ===============================================
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
