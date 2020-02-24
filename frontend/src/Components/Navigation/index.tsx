import React, { Fragment, useState, FC } from 'react'
import { Box, ResponsiveContext } from 'grommet'

// Atoms
import IconButton from '../../Atoms/iconButton'

// Components
import Overlay from '../Overlay'

// ===============================================
const Navigation: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const reload = (status: boolean) => {}

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
              <Box width="100%" direction="row" align="baseline" margin={{ bottom: '1rem' }}>
                {/* {tabs.map((tab: TTab) => (
                  <Heading
                    key={'Tab-' + tab}
                    level="3"
                    size={
                      isMobile ? (tab === mode ? '2.5rem' : '1rem') : tab === mode ? '3rem' : '1rem'
                    }
                    color="medium"
                    margin="0 .75rem 0 0"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setMode(tab)}
                  >
                    {tab}
                  </Heading>
                ))} */}
              </Box>

              {/* Content */}
            </Overlay>
          </Fragment>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Navigation
