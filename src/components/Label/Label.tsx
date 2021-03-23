import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  text?: string
}

const Label: React.FC<LabelProps> = ({ text }) => (
  <StyledLabel>{text}</StyledLabel>
)

const StyledLabel = styled.div`
  // color: ${(props) => props.theme.color.grey[400]};
  color: #243e60;
  font-size: 20px;
  font-weight: bolder;
  font-family: 'Arial Rounded MT';
`

export default Label
