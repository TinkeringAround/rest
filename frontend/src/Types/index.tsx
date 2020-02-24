export type TIconType = 'settings' | 'reload' | 'plus' | 'minus'

// ===============================================
export type TStyled = {
  margin?: string
  active?: boolean
  fontSize?: string
}

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
