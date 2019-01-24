import styled from 'styled-components'
import logo from '../assets/header-logo.png'
import { TabletAndDesktop, Mobile, Desktop } from './MediaQueries'
import { config } from '../config'

const Logo = styled.img`
  height: 36px;
  cursor: pointer;
`

const LinkWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
`

const A = styled.a`
  font-size: 12px;
  color: ${config.colors.purple};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 30px;

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
  padding: 22px;
  z-index: 999;
`

export const Header = () =>
  <HeaderStyles>
    <Logo src={logo} onClick={() => window.location = 'https://washabelle.com/'} />

    <TabletAndDesktop>
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

    </TabletAndDesktop>

    <Mobile>
    </Mobile>
  </HeaderStyles>
