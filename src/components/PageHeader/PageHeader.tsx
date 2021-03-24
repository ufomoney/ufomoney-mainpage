import React from 'react'
import styled from 'styled-components'
import nlo from '../../assets/img/nlo.png'
import nlo_an from '../../assets/img/nlo2.png'

import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container size="md">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle} <b>UFO!</b></StyledSubtitle>
      </StyledPageHeader>
      <div style={{position: 'relative'}}>
        <StyledNlo/>
        <StyledAnotherNlo/>
      </div>
      
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  // padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  width: 120px;
`

const StyledTitle = styled.h1`
  font-family: 'Arial Rounded MT';
  color: ${(props) => props.theme.color.grey[600]};
  color: #fff;
  font-size: 35px;
  text-align: center;
  font-weight: 700;
  margin: 10px 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-family: 'Helvetica';
  letter-spacing: 2px;
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

const StyledNlo = styled.div`
  background: url(${nlo});
  width: 257px;
  height: 259px;
  background-size: contain;
  position: absolute;
  z-index: -1;
  right: 39vw;
`
const StyledAnotherNlo = styled.div`
  background: url(${nlo_an});
  width: 257px;
  height: 259px;
  background-size: contain;
  position: absolute;
  z-index: -1;
  left: 39vw;
  bottom: 0;
`

export default PageHeader
