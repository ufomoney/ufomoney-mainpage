import React from 'react'
import aboutUs from '../../../assets/img/aboutUs.png'
import exchange from '../../../assets/img/exchange.png'
import stake from '../../../assets/img/stake.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        <StyledImg src={aboutUs}/>
        About Us
      </StyledLink>
      <StyledAbsoluteLink href="https://swap.ufo.money">
      <StyledImg src={exchange} />
        Exchange
      </StyledAbsoluteLink>
      <StyledLink exact activeClassName="active" to="/farms">
      <StyledImg src={stake} />
        Stake
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  color: #fff;
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  // &.active {
  //   color: ${(props) => props.theme.color.primary.main};
  // }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  color: #fff;
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledImg = styled.img`
  position: relative;
  top: 5px;
  margin-right: 10px
`

export default Nav
