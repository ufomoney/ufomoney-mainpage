import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import city from '../../assets/img/city.png'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
    <FooterContainer/>
      <StyledFooterLine/>
      <Footer />
    
  </StyledPage>
)

const FooterContainer = styled.div`
  background: url(${city});
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 215px;
`

const StyledPage = styled.div``

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
`

const StyledFooterLine = styled.div`
  width: 30%;
  margin: 25px auto 0 auto;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1.74%,
   #FFFFFF 51.03%, rgba(255, 255, 255, 0.02) 98.7%);
`

export default Page
