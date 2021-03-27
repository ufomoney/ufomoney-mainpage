import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  // background: ${(props) => props.theme.color.grey[200]};
  background: #fff;
  // border: 1px solid ${(props) => props.theme.color.grey[300]}ff;
  border: none;
  border-radius: 35px;
  // box-shadow: inset 1px 1px 0px ${(props) => props.theme.color.grey[100]};
  display: flex;
  width: 358px;
  height: 122px;
  flex-direction: column;

  &:first-child {

    @media (max-width: 770px) {
      margin-right: 0;
      margin-bottom: 29px;
    }
  }

  @media (max-width: 400px) {
    width: 300px;
  }
  
`

export default Card
