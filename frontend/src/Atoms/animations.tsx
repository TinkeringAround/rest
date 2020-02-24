import styled from 'styled-components'
import posed from 'react-pose'

// Styles
import { colors } from '../Styles'

// Utility
import { hexToRGBA } from '../Utility'

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

  background: ${hexToRGBA(colors['white'], '1')};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

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
