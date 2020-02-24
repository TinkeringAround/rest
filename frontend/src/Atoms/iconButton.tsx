import React, { FC } from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'

// Types
import { TIconType, TIconColor } from '../Types'

// Atoms
import Icon from './icon'

// ===============================================
const SIcon = styled(Box)`
  border-radius: 10px;
  box-shadow: none;

  transition: 0.2s all;
  cursor: pointer;
`

// ===============================================
interface Props {
  wrapper?: string
  wrapperBackground?: string

  icon?: string
  iconType: TIconType | null
  iconColor?: TIconColor

  margin?: string
  onClick?: any
  tooltip?: string | null
}

// ===============================================
const IconButton: FC<Props> = ({
  wrapper = '3rem',
  wrapperBackground = 'white',

  icon = '50%',
  iconType,
  iconColor = 'medium',

  margin = '0 0 0 .5rem',
  onClick = null,
  tooltip = null
}) => (
  <SIcon
    background={wrapperBackground}
    justify="center"
    align="center"
    width={wrapper}
    height={wrapper}
    onClick={onClick}
    style={{ margin: margin }}
    data-tip={tooltip}
  >
    <Icon type={iconType} size={icon} color={iconColor} />
  </SIcon>
)
export default IconButton
