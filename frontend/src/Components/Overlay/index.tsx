import React, { FC } from 'react'
import { Grommet, Box } from 'grommet'
import { PoseGroup } from 'react-pose'
import { Portal } from 'react-portal'

// Styles
import { theme } from '../../Styles'

// Atoms
import { ASimple, AOverlay } from '../../Atoms/animations'

// ===============================================
interface Props {
  open: boolean
  close: () => void
}

// ===============================================
const Overlay: FC<Props> = ({ open, close, children }) => (
  <Portal>
    <Grommet theme={theme}>
      <PoseGroup preEnterPose="exit">
        {open && (
          <AOverlay key="overlay">
            <Box width="90%" height="90%" margin="0" style={{ position: 'relative' }}>
              {children}
            </Box>
          </AOverlay>
        )}
        {open && (
          <ASimple key="overlay-background" onClick={close} data-testid="overlay-background" />
        )}
      </PoseGroup>
    </Grommet>
  </Portal>
)

export default Overlay
