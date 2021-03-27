import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink target="_blank" href="https://t.me/ufomoneydefi">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/ufomoney">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/ufo_money">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  // color: ${(props) => props.theme.color.grey[400]};
  color: #fff;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  font-family: 'Helvetica';
  font-weight: bold;
  &:hover {
    // color: ${(props) => props.theme.color.grey[500]};
    color: #6affd6;
  }
`

export default Nav
