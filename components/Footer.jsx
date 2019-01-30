import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import logo from '../assets/washabelle-icon.png'
import config from '../config'
import EmailCapture from './EmailCapture'

const FooterComponent = styled.footer`
  background-color: ${config.colors.gray};
`
const FooterEnd = styled.footer`
  background-color: ${config.colors.purple};
  color: white;
  text-align: center;
  padding: 2rem 0;
`
const FooterLinksListHeader = styled.h3`
  margin-bottom: 1.5rem;
`

const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
`

const FooterLinksListItems = styled.li`
  flex: 1 1;
  margin-bottom: 1.25rem;
  > p > a {
    color: ${config.colors.black};
    text-decoration: none;
  }
`

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 3rem auto 2rem;
  max-width: 14.375rem;

  @media (min-width: 1100px) {
    margin: 0;
  }
`

const SocialListItem = styled.li`
  flex: 1 1;
`

const SocialLinks = styled.a`
  color: ${config.colors.purple};
`

const FooterTitle = styled.h3`
  margin-bottom: 0.75rem;
  margin-top: 1.75rem;
`
const FooterCopy = styled.p`
  font-size: 1.125rem;
  line-height: 1.5rem;
`

const FooterComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: center;
  
  @media (min-width: 1100px) {
    align-items: flex-end;
    padding: 4rem 1rem;
    flex-direction: row;
    text-align: left;
  }
`
const FooterComponentColumn = styled.div`
  flex: 1 1;

  @media (min-width: 1100px) {
    flex: 1 1;
    margin-bottom: 1.95rem;

    &:first-child {
      flex: 1 1 15%;
      margin-bottom: 0;
    }
  }
`

const FooterIcon = styled.img`
  width: 3rem;
`

const Footer = () => (
  <FooterComponent>
    <div className='section-container'>
      <FooterComponentContainer>
        <FooterComponentColumn>
          <FooterIcon src={logo} />
          <FooterTitle>Let’s keep in touch</FooterTitle>
          <FooterCopy>
            Sign up for our newsletter for
            <br />
            product launches and news
          </FooterCopy>

          <EmailCapture />

          { /* SOCIAL ICONS */ }
          <SocialList>
            <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faFacebookF} size='1x' /></SocialLinks></SocialListItem>
            <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faInstagram} size='lg' /></SocialLinks></SocialListItem>
            <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faTwitter} size='lg' /></SocialLinks></SocialListItem>
            <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faPinterestP} size='lg' /></SocialLinks></SocialListItem>
            <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faEnvelope} size='lg' /></SocialLinks></SocialListItem>
          </SocialList>
        </FooterComponentColumn>
        <FooterComponentColumn>
          <FooterLinksListHeader>Shop Mattresses</FooterLinksListHeader>
          <FooterLinksList>
            <FooterLinksListItems><p><a href='https://www.washeabelle.com'>Shop Kids</a></p></FooterLinksListItems>
            <FooterLinksListItems><p><a href='https://www.washeabelle.com'>Shop Adults</a></p></FooterLinksListItems>
            <FooterLinksListItems><p><a href='https://www.washeabelle.com'>Shop Pets</a></p></FooterLinksListItems>
          </FooterLinksList>
        </FooterComponentColumn>
        <FooterComponentColumn>
          <FooterLinksListHeader>Learn More</FooterLinksListHeader>
          <FooterLinksList>
            <FooterLinksListItems><p><a href='https://www.washeabelle.com'>About Us</a></p></FooterLinksListItems>
            <FooterLinksListItems><p><a href='https://www.washeabelle.com'>Reviews</a></p></FooterLinksListItems>
            <FooterLinksListItems><p><a href='https://www.washeabelle.com'>Frequently Asked Questions</a></p></FooterLinksListItems>
          </FooterLinksList>
        </FooterComponentColumn>
        <FooterComponentColumn>
          <FooterLinksListHeader>Warranties</FooterLinksListHeader>
          <FooterLinksList>
            <FooterLinksListItems><p><a href='https://www.washeabelle.com'>101 night sleep guarantee</a></p></FooterLinksListItems>
            <FooterLinksListItems><p><a href='https://www.washeabelle.com'>Our 10 year warranty</a></p></FooterLinksListItems>
            <FooterLinksListItems><p><a href='https://www.washeabelle.com'>Shipping and returns</a></p></FooterLinksListItems>
          </FooterLinksList>
        </FooterComponentColumn>
      </FooterComponentContainer>
    </div>
    <FooterEnd>
        2018 Washabelle All Rights Reserved
    </FooterEnd>
  </FooterComponent>
)

export default Footer