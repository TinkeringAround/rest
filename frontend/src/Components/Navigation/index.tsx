import React, { Fragment, useState, FC, useContext } from 'react'
import { Box, ResponsiveContext, Heading } from 'grommet'

// Types
import { TRefreshInterval } from '../../Types'

// Contexts
import { AppContext } from '../../Contexts'

// Atoms
import IconButton from '../../Atoms/iconButton'
import Dropdown from '../../Atoms/dropdown'

// Components
import Overlay from '../Overlay'
import { colors } from '../../Styles'

// Consts
const OPTIONS: Array<TRefreshInterval> = ['Every Minute', 'Every 5 Minutes', 'Every 10 Minutes']
const TIMES: Array<number> = [60000, 300000, 600000]

// ===============================================
const Navigation: FC = () => {
  const { reload, setRefreshInterval } = useContext(AppContext)
  const [open, setOpen] = useState<boolean>(false)
  const [refreshInterval, setInterval] = useState<TRefreshInterval>('Every Minute')

  return (
    <ResponsiveContext.Consumer>
      {size => {
        const isMobile = size.includes('small')
        const position = '1rem'

        return (
          <Fragment>
            <Box direction="row" style={{ position: 'absolute', top: position, right: position }}>
              <IconButton
                iconType="reload"
                onClick={() => reload(false)}
                tooltip={!isMobile ? 'Neu Laden' : null}
              />
              <IconButton
                iconType="settings"
                onClick={() => setOpen(true)}
                tooltip={!isMobile ? 'Einstellungen' : null}
              />
            </Box>

            {/* Dialog */}
            <Overlay open={open} closeDialog={() => setOpen(false)}>
              {/* Heading */}
              <Box width="100%" margin={{ bottom: '1rem' }}>
                <Heading
                  level="3"
                  size={isMobile ? '1.5rem' : '4rem'}
                  color="medium"
                  margin="0 .75rem 0 0"
                >
                  Settings
                </Heading>
              </Box>

              {/* Content */}
              <Box
                width="100%"
                height="10rem"
                background={colors['light']}
                pad="2rem"
                justify="center"
                style={{ borderRadius: '10px' }}
              >
                <Dropdown
                  options={OPTIONS}
                  value={refreshInterval}
                  select={(selection: string) => {
                    setInterval(selection as TRefreshInterval)
                    const index = OPTIONS.indexOf(selection as TRefreshInterval)
                    setRefreshInterval(TIMES[index])
                  }}
                  label="Refresh Interval"
                />
              </Box>
            </Overlay>
          </Fragment>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Navigation
