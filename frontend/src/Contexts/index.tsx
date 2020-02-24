import React from 'react'
import { TServer } from '../Types'

// ===============================================
interface TAppContext {
  setRefreshInterval: (interval: number) => void

  servers: Array<TServer>
  addServer: (url: string) => void
  deleteServer: (id: string) => void
  reload: (silent?: boolean) => void
  isLoading: boolean
  error: string | null
}

export const AppContext = React.createContext<TAppContext>({
  setRefreshInterval: (interval: number) => {},

  servers: [],
  addServer: (url: string) => {},
  deleteServer: (id: string) => {},
  reload: (silent: boolean = true) => {},
  isLoading: false,
  error: null
})
