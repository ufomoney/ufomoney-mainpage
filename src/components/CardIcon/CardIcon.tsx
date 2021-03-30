import React from 'react'
import styled from 'styled-components'

interface CardIconProps {
  children?: React.ReactNode,
}

const CardIcon: React.FC<CardIconProps> = ({ children }) => (
  <StyledCardIcon>
    {children}
  </StyledCardIcon>
)

const StyledCardIcon = styled.div`
  // background-color: ${props => props.theme.color.grey[200]};
  font-size: 36px;
  width: 45px;
  border-radius: 35px;
  display: flex;
  // box-shadow: inset 4px 4px 8px ${props => props.theme.color.grey[300]},
  //   inset -6px -6px 12px ${props => props.theme.color.grey[100]};
  // margin: 0 auto ${props => props.theme.spacing[3]}px;
`

export default CardIcon