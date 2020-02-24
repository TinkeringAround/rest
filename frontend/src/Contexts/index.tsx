import React from 'react'

interface TAppContext {
  setRefreshInterval: (interval: number) => void

  reload: (silent?: boolean) => void
}

export const AppContext = React.createContext<TAppContext>({
  setRefreshInterval: (interval: number) => {},

  reload: (silent: boolean = true) => {}
})
