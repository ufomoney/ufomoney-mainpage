import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'

interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <StyledTopBar>
      <StyleHeaderText>
        Do not get scammed. Make sure the URL is <a
        style={{ color:' #00dffc', textDecoration: 'none'}} href=" ufo.money">
          ufo.money</a>
       </StyleHeaderText>
      <Container size="lg">
        <StyledTopBarInner>
          <StyledLogoWrapper>
            <Logo />
          </StyledLogoWrapper>
          <Nav />
          <StyledAccountButtonWrapper>
            <AccountButton/>
          </StyledAccountButtonWrapper>
        </StyledTopBarInner>
      </Container>
    </StyledTopBar>
  )
}

const StyledLogoWrapper = styled.div`
  width: 260px;
  @media (max-width: 770px) {
    display: none;
  }

  @media (max-width: 400px) {
    width: auto;
  }
`

const StyledTopBar = styled.div`
  display: flex;
  flex-direction: column
`

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;

  @media (max-width:450px) {
    flex-direction: column;
  }
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 400px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }

  @media (max-width: 448px) {
    margin-top: 30px;
  }
`

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 400px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`
const StyleHeaderText = styled.div`
  background-color: #036BB2;
  color: #fff;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
  align-self: center;
  width: 52%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  font-weight: bolder;

  @media (max-width: 850px) {
    width: auto;
    padding-left: 25px;
    padding-right: 25px;
  }
`

export default TopBar
