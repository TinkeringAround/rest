export type TIconType = 'settings' | 'reload' | 'plus' | 'trash'
export type TIconColor = 'blue' | 'medium'

// ===============================================
export type TServer = {
  id: string
  url: string
  status: boolean
  lastUpdated: number
}

// ===============================================
export type TRefreshInterval =
  | 'Every Minute'
  | 'Every 5 Minutes'
  | 'Every 10 Minutes'
  | 'Every 15 Minutes'
