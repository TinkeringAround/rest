import React, { Fragment, useState, FC, useContext } from 'react'
import { Box, Heading } from 'grommet'

// Types
import { TRefreshInterval } from '../../Types'

// Styles
import { colors } from '../../Styles'

// Contexts
import { AppContext } from '../../Contexts'

// Atoms
import IconButton from '../../Atoms/iconButton'
import Dropdown from '../../Atoms/dropdown'

// Components
import Overlay from '../Overlay'

// Consts
const OPTIONS: Array<TRefreshInterval> = [
  'Every Minute',
  'Every 5 Minutes',
  'Every 10 Minutes',
  'Every 15 Minutes'
]
const TIMES: Array<number> = [60000, 300000, 600000, 900000]

// ===============================================
const Navigation: FC = () => {
  const { reload, setRefreshInterval } = useContext(AppContext)
  const [open, setOpen] = useState<boolean>(false)
  const [refreshInterval, setInterval] = useState<TRefreshInterval>('Every Minute')

  // ===============================================
  return (
    <Fragment>
      <Box direction="row" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <IconButton iconType="reload" onClick={() => reload(false)} tooltip="Refresh" />
        <IconButton iconType="settings" onClick={() => setOpen(true)} tooltip="Settings" />
      </Box>

      {/* Overlay */}
      <Overlay open={open} closeDialog={() => setOpen(false)}>
        {/* Heading */}
        <Box width="100%" margin={{ bottom: '2rem' }}>
          <Heading
            level="3"
            size="4rem"
            color="medium"
            margin="0 .75rem 0 0"
            style={{ fontWeight: 'bold' }}
          >
            Settings
          </Heading>
        </Box>

        {/* Content */}
        <Box
          width="100%"
          background={colors['light']}
          pad="2.5rem 2rem"
          justify="center"
          style={{ borderRadius: '10px' }}
        >
          <Dropdown
            label="Refresh Interval"
            options={OPTIONS}
            value={refreshInterval}
            select={(selection: string) => {
              setInterval(selection as TRefreshInterval)
              const index = OPTIONS.indexOf(selection as TRefreshInterval)
              setRefreshInterval(TIMES[index])
            }}
          />
        </Box>
      </Overlay>
    </Fragment>
  )
}

export default Navigation
