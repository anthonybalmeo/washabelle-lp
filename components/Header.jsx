import React from 'react'
import styled from 'styled-components'
import logo from '../assets/header-logo.png'
import config from '../config'

const Logo = styled.img`
  height: 2.25rem;
  cursor: pointer;
  margin: 0 auto;

  @media only screen and (min-width: 1100px) {
    margin: 0;
  }
`

const LinkWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
`

const A = styled.a`
  font-size: 0.75rem;
  color: ${config.colors.purple};
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 1.875rem;

  &, &:active, &:hover {
    text-decoration: none;
  }
`

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: ${config.colors.gray};
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 1.375rem;
  z-index: 999;
`

const Header = () => (
  <HeaderStyles>
    <Logo src={logo} onClick={() => window.location = 'https://washabelle.com/'} />
    {/* <TabletAndDesktop>
      <LinkWrapper>
        <Desktop>
          <A href="#">FAQs</A>
          <A href="#">Manual</A>
          <A href="#">Promo Materials</A>
          <A href="#">Contact Us</A>
          <A href="#">Win Product</A>
          <A href="#">Sign In</A>
        </Desktop>
      </LinkWrapper>

    </TabletAndDesktop> */}
  </HeaderStyles>
)

export default Header