import React from 'react'
import styled from 'styled-components'

const CardContent: React.FC = ({ children }) => (
  <StyledCardContent>{children}</StyledCardContent>
)

const StyledCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  // padding: ${(props) => props.theme.spacing[3]}px;
  padding: 8px 10px 0px 16px;
`

export default CardContent
