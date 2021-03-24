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
  // color: ${(props) => props.theme.color.grey[400]};
  color: #fff;
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    // color: ${(props) => props.theme.color.grey[500]};
    color: #93ff97;
  }
  &.active {
    // color: ${(props) => props.theme.color.primary.main};
    color: #6affd6;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  &:first-child {
    @media (max-width: 533px) {
      padding-left: 5px;
      padding-right: 0;
    }
  }

  @media (max-width: 533px) {
    font-size: 14px;
    
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  color: #fff;
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    // color: ${(props) => props.theme.color.grey[500]};
    color: #93ff97;
  }
  // &.active {
  //   color: ${(props) => props.theme.color.primary.main};
  // }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  @media (max-width: 533px) {
    font-size: 14px;
  }
  @media (max-width: 533px) {
    padding-left: 5px;
    padding-right: 0;
  }
`

const StyledImg = styled.img`
  position: relative;
  top: 8px;
  margin-right: 10px
`

export default Nav
