import React from 'react';
import styled from 'styled-components'
import { EmailCapture } from './EmailCapture'
import { config } from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import logo from '../assets/washabelle-icon.png'

const FooterComponent = styled.footer`
  background-color: ${config.colors.gray};
`
const FooterEnd = styled.footer`
  background-color: ${config.colors.purple};
  color: white;
  text-align: center;
  padding: 2rem 0;
`
const FooterLinksListHeader = styled.h5`
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 24px;
`

const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
`

const FooterLinksListItems = styled.li`
  flex: 1 1;
  margin-bottom: 20px;
  > a {
    color: ${config.colors.black};
    line-height: 2.5;
    font-size: 14px;
    line-height: 19px;
    text-decoration: none;
  }
`

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 3rem auto 2rem;
  max-width: 230px;

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
  margin-bottom: 12px;
  margin-top: 28px;
  font-size: 20px;
  line-height: 27px;
`
const FooterCopy = styled.p`
  font-size: 18px;
  line-height: 24px;
`

const FooterComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: center;
  
  @media (min-width: 1100px) {
    padding: 4rem 1rem;
    flex-direction: row;
    text-align: left;
  }
`
const FooterComponentColumn = styled.div`
  flex: 1 1;

  @media (min-width: 1100px) {
    flex: 1 1;

    &:first-child {
      flex: 1 1 15%;
    }
  }
`

const FooterIcon = styled.img`
  width: 48px;
`

export class Footer extends React.Component {
  render() {
    return (
      <FooterComponent>
        <div className='section-container'>
          <FooterComponentContainer>
            <FooterComponentColumn>
              <FooterIcon src={logo} />
              <FooterTitle>Let’s keep in touch</FooterTitle>
              <FooterCopy>Sign up for our newsletter for <br /> product launches and news</FooterCopy>
              <EmailCapture />

              { /* SOCIAL ICONS */ }
              <SocialList>
                <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faFacebookF} size='1x'/></SocialLinks></SocialListItem>
                <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faInstagram} size='lg'/></SocialLinks></SocialListItem>
                <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faTwitter} size='lg'/></SocialLinks></SocialListItem>
                <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faPinterestP} size='lg'/></SocialLinks></SocialListItem>
                <SocialListItem><SocialLinks href='#'><FontAwesomeIcon icon={faEnvelope} size='lg'/></SocialLinks></SocialListItem>
              </SocialList>
            </FooterComponentColumn>
            <FooterComponentColumn>
              <FooterLinksListHeader>Shop Mattresses</FooterLinksListHeader>
              <FooterLinksList>
                <FooterLinksListItems><a href='#'>Shop Kids</a></FooterLinksListItems>
                <FooterLinksListItems><a href='#'>Shop Adults</a></FooterLinksListItems>
                <FooterLinksListItems><a href='#'>Shop Pets</a></FooterLinksListItems>
              </FooterLinksList>
            </FooterComponentColumn>
            <FooterComponentColumn>
              <FooterLinksListHeader>Learn More</FooterLinksListHeader>
              <FooterLinksList>
                <FooterLinksListItems><a href='#'>About Us</a></FooterLinksListItems>
                <FooterLinksListItems><a href='#'>Reviews</a></FooterLinksListItems>
                <FooterLinksListItems><a href='#'>Frequently Asked Questions</a></FooterLinksListItems>
              </FooterLinksList>
            </FooterComponentColumn>
            <FooterComponentColumn>
              <FooterLinksListHeader>Warranties</FooterLinksListHeader>
              <FooterLinksList>
                <FooterLinksListItems><a href='#'>101 night sleep guarantee</a></FooterLinksListItems>
                <FooterLinksListItems><a href='#'>Our 10 year warranty</a></FooterLinksListItems>
                <FooterLinksListItems><a href='#'>Shipping and returns</a></FooterLinksListItems>
              </FooterLinksList>
            </FooterComponentColumn>
          </FooterComponentContainer>
        </div>
        <FooterEnd>
            2018 Washabelle All Rights Reserved
        </FooterEnd>
      </FooterComponent>
      )
  }
}
