import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/logo.png'
import bag from '../../assets/img/bag.png'
import mining from '../../assets/img/mining.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import { NavLink } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={logo} height={80} />}
        title="UFO Money Yield Farming"
        subtitle="Stake tokens to claim
        your UFO"
      />

      <Container size='bg'>
        <Balances />
      </Container >
      <StyledInfo>
        <img src={bag} height="39" width="41"/>
        <div>
          <div>UFO-BNB LP</div>
          <div>token pool yields more token rewards per block</div>
        </div>
        
      </StyledInfo>
      <Spacer size="lg" />
      <StyledButton to="/farms">
        <img src={mining} width="24"/> 
        <div>DISCOVER FARMING</div>
      </StyledButton>
        {/* <Button text="👀 See the Pools" to="/farms" variant="secondary" /> */}
    </Page>
  )
}

const StyledInfo = styled.div`
  // color: ${(props) => props.theme.color.grey[500]};
  background: linear-gradient(90deg,#139ada9e 0%, #139ada70 100%);
  border-radius: 50px;
  padding: 27px;
  color: #fff;
  font-family: 'Helvetica';
  margin-top: 48px;
  display: flex;
  align-items: center;
  > div {
    margin-left: 20px;
    font-size: 15px;

    > div {
      &:first-child {
        font-size: 17px;
      }
    }
  }
`

const StyledButton = styled(NavLink)`
  text-decoration: none;
  font-family: 'Helvetica';
  font-size: 14px;
  font-width: bold;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 227px;
  height: 46px;
  background: linear-gradient(90deg, #007ED9 16.36%, 
    rgba(0, 223, 252, 0.94) 106.83%);
  border-radius: 50px;

  &:hover {
    background: linear-gradient(
      90deg
      ,#6bf2d966 16.36%, rgba(0,223,252,0.94) 106.83%);
  }
`

export default Home
