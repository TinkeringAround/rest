import styled from 'styled-components'
import posed from 'react-pose'

// Styles
import { colors } from '../Styles'
import { Box } from 'grommet'

// ===============================================
const SBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 700;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.85);
`

export const ASimple = posed(SBackground)({
  exit: { opacity: 0 },
  enter: { opacity: 1 }
})

// ===============================================
const SOverlay = styled.div`
  position: absolute;
  z-index: 701;

  width: 100%;
  height: 90%;

  background: ${colors['white']};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const AOverlay = posed(SOverlay)({
  exit: {
    opacity: 0,
    bottom: '-15%'
  },
  enter: {
    opacity: 1,
    bottom: '0%'
  }
})

// ===================================================================
const SErrorDialog = styled(Box)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 701;

  width: 400px;
  height: 200px;
  padding: 1.5rem;

  background: ${colors['white']};
  box-shadow: 0px 0px 20px 1px rgba(200, 214, 216, 0.25);
  border-radius: 5px;

  justify-content: space-between;
`

export const AErrorDialog = posed(SErrorDialog)({
  exit: { opacity: 0, top: '0rem', transition: { duration: 500 } },
  enter: { opacity: 1, top: '2rem', transition: { duration: 500 } }
})
