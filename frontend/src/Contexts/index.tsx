import React from 'react'
import { TServer } from '../Types'

// ===============================================
interface TAppContext {
  setRefreshInterval: (interval: number) => void

  reload: (silent?: boolean) => void

  isLoading: boolean

  servers: Array<TServer>
}

export const AppContext = React.createContext<TAppContext>({
  setRefreshInterval: (interval: number) => {},

  reload: (silent: boolean = true) => {},

  isLoading: false,

  servers: []
})
