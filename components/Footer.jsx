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
const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
`

const FooterLinksListItems = styled.li`
  flex: 1 1;
  > a {
    color: ${config.colors.black};
    text-decoration: none;
    line-height: 2.5;
  }
`

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 3rem auto 2rem;
  max-width: 230px;

  @media (min-width: 600px) {
    margin: 0;
  }
`

const SocialListItem = styled.li`
  flex: 1 1;
`

const SocialLinks = styled.a`
  color: ${config.colors.purple};
`

const FooterComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: center;
  
  @media (min-width: 600px) {
    padding: 4rem 1rem;
    flex-direction: row;
    text-align: left;
  }

  @media (min-width: 1100px) {
    padding: 4rem 0;
  }
`
const FooterComponentColumn = styled.div`
  flex: 1 1;

  @media (min-width: 600px) {
    flex: 1 1;

    &:first-child {
      flex: 1 1 20%;
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
              <h3>Let’s keep in touch</h3>
              <p>Sign up for our newsletter for <br /> product launches and news</p>
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
              <h4>Affilliates Programs</h4>
              <FooterLinksList>
                <FooterLinksListItems><a href='#'>Frequently asked Questions</a></FooterLinksListItems>
                <FooterLinksListItems><a href='#'>Manual</a></FooterLinksListItems>
                <FooterLinksListItems><a href='#'>Win a free mattress</a></FooterLinksListItems>
              </FooterLinksList>
            </FooterComponentColumn>
            <FooterComponentColumn>
              <h4>Contact Us</h4>
              <FooterLinksList>
                <FooterLinksListItems><a href='#'>support@washabelle</a></FooterLinksListItems>
                <FooterLinksListItems><a href='#'>Contact Form</a></FooterLinksListItems>
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
