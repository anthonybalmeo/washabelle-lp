import React from 'react';
import styled from 'styled-components'
import { EmailCapture } from './EmailCapture'
import { config } from '../config'


const FooterComponent = styled.footer`
  background-color: ${config.colors.gray};
`
const FooterEnd = styled.footer`
  background-color: ${config.colors.purple};
  color: white;
  text-align: center;
  padding: 2rem 0;
`

export class Footer extends React.Component {
  render() {
    return (
      <FooterComponent>
        <div className='section-container'>
          <h3>Let’s keep in touch</h3>
          <p>Sign up for our newsletter for product launches and news</p>
          <EmailCapture />
          <ul>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>Instagram</a></li>
            <li><a href='#'>Twitter</a></li>
            <li><a href='#'>Pinterest</a></li>
            <li><a href='#'>Email</a></li>
          </ul>

          <h4>Affilliates Programs</h4>
          <ul>
            <li><a href='#'>Frequently asked Questions</a></li>
            <li><a href='#'>Manual</a></li>
            <li><a href='#'>Win a free mattress</a></li>
          </ul>
          <h4>Contact Us</h4>
          <ul>
            <li><a href='#'>support@washabelle</a></li>
            <li><a href='#'>Contact Form</a></li>
          </ul>
        </div>
        <FooterEnd>
            2018 Washabelle All Rights Reserved
          </FooterEnd>
      </FooterComponent>
      )
  }
}
