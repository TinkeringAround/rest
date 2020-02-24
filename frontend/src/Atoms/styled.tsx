import styled from 'styled-components'

// Styles
import { colors } from '../Styles'

// ===============================================
export const SInput = styled.input`
  width: 90%;
  height: 3rem;
  margin: 0;
  padding: 0;

  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  text-overflow: ellipsis;

  border: none;
  color: ${colors['dark']};
  background-color: transparent;

  ::placeholder {
    color: ${colors['medium']};
    font-size: 1rem;
  }

  :focus {
    outline: none;
  }
`

// ===============================================
export const SSelect = styled.select`
  padding: 0.75rem;

  background: ${colors['white']};
  border: none;
  border-radius: 5px;

  appearance: none;
  outline: none;

  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  text-align-last: center;
  color: ${colors['medium']};

  ::-ms-expand {
    display: none;
  }
`
